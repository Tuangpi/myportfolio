type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
  accent?: "teal" | "coral" | "sand";
  dark?: boolean;
};

const accentClasses = {
  teal: "text-teal",
  coral: "text-coral",
  sand: "text-sand"
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "teal",
  dark = false
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "split"
          ? "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          : "max-w-3xl"
      }
    >
      <div>
        <p
          className={`text-sm font-semibold uppercase tracking-[0.3em] ${accentClasses[accent]}`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 font-display text-4xl font-bold sm:text-5xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={`max-w-xl text-base leading-7 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
