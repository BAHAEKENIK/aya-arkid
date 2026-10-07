import { cn } from "../../utils/cn";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  radius?: string;
  style?: React.CSSProperties;
}

export function Skeleton({
  className,
  width,
  height,
  radius,
  style,
}: SkeletonProps) {
  return (
    <span
      className={cn("skeleton", className)}
      aria-hidden="true"
      style={{
        display: "block",
        width,
        height,
        borderRadius: radius,
        ...style,
      }}
    />
  );
}