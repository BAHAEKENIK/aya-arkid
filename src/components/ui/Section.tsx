import { forwardRef, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type SectionVariant = "default" | "dark" | "tight";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: SectionVariant;
  container?: "default" | "narrow" | "wide" | "full";
  children: ReactNode;
}

const variantClass: Record<SectionVariant, string> = {
  default: "section",
  dark: "section section--dark",
  tight: "section section--tight",
};

const containerClass = {
  default: "container",
  narrow: "container container--narrow",
  wide: "container container--wide",
  full: "",
} as const;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    id,
    variant = "default",
    container = "default",
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn(variantClass[variant], className)}
      {...rest}
    >
      {container === "full" ? (
        children
      ) : (
        <div className={containerClass[container]}>{children}</div>
      )}
    </section>
  );
});