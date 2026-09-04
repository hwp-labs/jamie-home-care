interface Props {
  title: string;
  subtitle?: string;
}

export const Banner = ({ title, subtitle }: Props) => {
  return (
    <section
      className="relative min-h-[320px] flex-cc bg-contain bg-center"
      style={{ backgroundImage: `url(/images/banner.jpg)` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
        <h1 className="text-3xl font-bold _uppercase tracking-wide text-primary-foreground sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm uppercase font-semibold text-white/90">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};
