import { useState } from "react";
import { cn } from "../../utils/cn";

type Loading = "lazy" | "eager";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperClassName?: string;
  loading?: Loading;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  aspectRatio?: string;
  objectPosition?: string;
  decoding?: "sync" | "async" | "auto";
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  loading = "lazy",
  fetchPriority = "auto",
  sizes,
  aspectRatio,
  objectPosition,
  decoding = "async",
}: OptimizedImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <span
      className={cn("opt-img", wrapperClassName)}
      data-status={status}
      style={{
        display: "block",
        position: "relative",
        aspectRatio,
      }}
    >
      {status !== "loaded" ? (
        <span className="opt-img-skeleton" aria-hidden="true" />
      ) : null}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        sizes={sizes}
        className={cn("opt-img-el", className)}
        style={{
          opacity: status === "loaded" ? 1 : 0,
          objectPosition,
        }}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />

      {status === "error" ? (
        <span className="opt-img-error" role="img" aria-label={alt}>
          <span>Image indisponible</span>
        </span>
      ) : null}
    </span>
  );
}