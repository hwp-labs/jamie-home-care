interface Props {
  title: string;
  subtitle?: string;
}

export const Banner = ({ title, subtitle }: Props) => {
  return (
    <section
      className="flex-cc relative min-h-[320px] bg-contain bg-center"
      style={{ backgroundImage: `url(/images/banner.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 flex flex-col items-center gap-3 px-4 text-center">
        <h1 className="_uppercase text-3xl font-bold tracking-wide text-primary-foreground sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-sm font-semibold text-white/90 uppercase">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};
