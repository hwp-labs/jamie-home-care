import { APP } from "@/constants/APP";

export const Logo = () => {
  return (
    <figure className="flex-cx gap-3">
      <a href="/" title="Home">
        <img src="/android-chrome-192x192.png" alt="" className="size-[70px]" />
      </a>
      <figcaption>
        <h1 className="font-heading text-2xl font-bold text-primary">
          {APP.name}
        </h1>
        <p className="text-sm_ -mt-1 font-medium text-accent">{APP.title}</p>
      </figcaption>
    </figure>
  );
};
