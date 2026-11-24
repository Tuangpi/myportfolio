type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
};

function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const isSplit = align === "split";

  return (
    <div
      className={
        isSplit
          ? "grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-12"
          : "max-w-3xl"
      }
    >
      <div>
        <div className="flex items-center gap-3 font-mono text-eyebrow uppercase text-muted">
          <span className="text-accent">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span>{eyebrow}</span>
        </div>

        <h2 className="mt-6 font-display text-display-2 text-ink">{title}</h2>
      </div>

      {description ? (
        <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
