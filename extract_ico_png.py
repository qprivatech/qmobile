import struct
import sys
import zlib

ico_path = sys.argv[1]
out_path = sys.argv[2]

with open(ico_path, 'rb') as f:
    data = f.read()

reserved, ico_type, count = struct.unpack('<HHH', data[:6])
off = 6
# Take first image
w, h, pal, res, planes, bpp, size, offset = struct.unpack('<BBBBHHII', data[off:off+16])
width = w or 256
height = h or 256
img_data = data[offset:offset+size]

if img_data[:8] == b'\x89PNG\r\n\x1a\n':
    with open(out_path, 'wb') as f:
        f.write(img_data)
    print(f'Wrote PNG {width}x{height} to {out_path}')
else:
    # BMP DIB header is at start of img_data
    # BITMAPINFOHEADER: 40 bytes
    hdr_size = struct.unpack('<I', img_data[:4])[0]
    bw = struct.unpack('<i', img_data[4:8])[0]
    bh = struct.unpack('<i', img_data[8:12])[0]
    planes_b = struct.unpack('<H', img_data[12:14])[0]
    bbp = struct.unpack('<H', img_data[14:16])[0]
    print(f'BMP DIB: hdr={hdr_size} w={bw} h={bh} planes={planes_b} bpp={bbp}')
    # For ICO BMP, height is 2x (XOR + AND masks). Pixel data follows header (+ palette if bpp<=8)
    pixel_offset = hdr_size
    if bbp <= 8:
        palette_size = (1 << bbp) * 4
        pixel_offset = hdr_size + palette_size
    # Build a PNG. For 32bpp BGRA, bottom-up rows (but ICO BMP height is doubled; real height = bh//2)
    real_h = bh // 2
    row_size = ((bw * bbp + 31) // 32) * 4
    pixels = img_data[pixel_offset:pixel_offset + row_size * real_h]

    # Build PNG manually
    def png_chunk(typ, payload):
        chunk = struct.pack('>I', len(payload)) + typ + payload
        crc = zlib.crc32(typ + payload) & 0xffffffff
        return chunk + struct.pack('>I', crc)

    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = struct.pack('>IIBBBBB', bw, real_h, 8, 6, 0, 0, 0)  # 8-bit RGBA
    raw = b''
    # ICO BMP is bottom-up; PNG is top-down -> reverse rows
    rows = []
    for y in range(real_h):
        row = pixels[y * row_size:(y + 1) * row_size]
        out_row = bytearray()
        for x in range(bw):
            if bbp == 32:
                b, g, r, a = row[x*4:x*4+4]
                out_row += bytes([r, g, b, a])
            else:
                out_row += bytes([0, 0, 0, 255])
        rows.append(bytes(out_row))
    rows.reverse()
    for r in rows:
        raw += b'\x00' + r
    compressed = zlib.compress(raw)
    png = sig + png_chunk(b'IHDR', ihdr) + png_chunk(b'IDAT', compressed) + png_chunk(b'IEND', b'')
    with open(out_path, 'wb') as f:
        f.write(png)
    print(f'Wrote PNG {bw}x{real_h} to {out_path}')
