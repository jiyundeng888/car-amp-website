export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}
