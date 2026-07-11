import { useEffect, useRef, useState } from "react";

/**
 * A single responsive image source descriptor.
 * - `src`: the URL of this variant (e.g. "/assets/generated/pixel8.dim_800x800.webp")
 * - `width`: the intrinsic pixel width of this variant, used for the `Nw` descriptor
 */
export interface ResponsiveSource {
  src: string;
  width: number;
}

/**
 * A modern-format source set for the <picture> element.
 * Each entry produces a <source type="image/webp"> or <source type="image/avif">.
 * The PNG fallback is rendered as the <img> src.
 */
export interface PictureSource {
  type: "image/avif" | "image/webp";
  sources: ResponsiveSource[];
}

interface LazyImageProps {
  /** PNG fallback src (also used when no srcset is provided — backward compatible). */
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  blur?: boolean;
  width?: number;
  height?: number;
  fetchpriority?: "high" | "low" | "auto";
  /**
   * Optional `sizes` attribute. Required when `pictureSources` is provided so the
   * browser knows which srcset entry to pick per viewport.
   */
  sizes?: string;
  /**
   * Optional responsive <picture> sources in modern formats (AVIF / WebP).
   * When provided, the component wraps the <img> in a <picture> element and
   * emits one <source> per entry. The `src` prop remains the PNG fallback.
   */
  pictureSources?: PictureSource[];
}

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholderColor = "bg-muted/30",
  blur = false,
  width,
  height,
  fetchpriority = "auto",
  sizes,
  pictureSources,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Check if native lazy loading is supported
    const supportsNativeLazy = "loading" in HTMLImageElement.prototype;

    if (supportsNativeLazy) {
      // Browser supports native lazy loading, image will load when near viewport
      setIsInView(true);
      return;
    }

    // Fallback: use Intersection Observer for browsers without native support
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fallback: ensure the image becomes visible even if onLoad never fires
  // (e.g. cached SVGs or browsers that don't reliably fire load for SVG).
  useEffect(() => {
    if (!isInView) return;

    // If the image is already complete (cached), mark it loaded immediately.
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      return;
    }

    fallbackTimerRef.current = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [isInView]);

  const handleLoad = () => {
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    setIsLoaded(true);
  };

  const hasPictureSources =
    pictureSources && pictureSources.length > 0 && sizes;

  const imgElement = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      fetchPriority={fetchpriority}
      sizes={hasPictureSources ? sizes : undefined}
      onLoad={handleLoad}
      className={`
        ${className}
        transition-opacity duration-300 ease-in-out
        ${isLoaded ? "opacity-100" : "opacity-0"}
        ${blur && !isLoaded ? "blur-sm" : "blur-0"}
      `}
    />
  );

  return (
    <div className={`relative overflow-hidden ${placeholderColor}`}>
      {isInView &&
        (hasPictureSources ? (
          <picture>
            {pictureSources.map((source) => (
              <source
                key={source.type}
                type={source.type}
                srcSet={source.sources
                  .map((s) => `${s.src} ${s.width}w`)
                  .join(", ")}
                sizes={sizes}
              />
            ))}
            {imgElement}
          </picture>
        ) : (
          imgElement
        ))}
    </div>
  );
}
