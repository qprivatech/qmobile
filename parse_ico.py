import struct
import sys

path = sys.argv[1]
with open(path, 'rb') as f:
    data = f.read()

reserved, ico_type, count = struct.unpack('<HHH', data[:6])
print('type:', ico_type, 'count:', count)
off = 6
for i in range(count):
    w, h, pal, res, planes, bpp, size, offset = struct.unpack('<BBBBHHII', data[off:off+16])
    width = w or 256
    height = h or 256
    print(f'image {i}: w={width} h={height} bpp={bpp} size={size} offset={offset}')
    img_data = data[offset:offset+size]
    if img_data[:8] == b'\x89PNG\r\n\x1a\n':
        print(f'  -> embedded PNG format')
    else:
        print(f'  -> embedded BMP format')
    off += 16
