import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds, used to stagger sibling reveals. */
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
      className={[
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default Reveal;
