import { APP, COPY } from "@/constants/APP";
import { MENU_FOOTER } from "@/constants/MENU";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-sm text-white/70">
      <div className="grid-3 app-container mx-auto gap-10 px-6 py-16 md:px-16">
        <div>
          <div className="font-heading mb-3 text-xl text-white">{APP.name}</div>
          <p className="max-w-xs leading-relaxed">{COPY.weProvide}.
          <a className="underline underline-offset-2 ml-1">Learn more</a>
          </p>
          <p className="mt-4 text-muted">{APP.address}</p>
          <p className="mt-4 text-accent">{APP.email}</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Helpful links</h4>
          <ul className="space-y-3.5">
            {MENU_FOOTER.map((item, i) => (
              <li key={i}>{item.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
          <p className="mb-4">Stay up to date with our latest news.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg bg-secondary px-4 py-2.5 text-foreground focus:outline-none"
            />
            <button className="rounded-r-lg bg-accent px-5 font-semibold text-white">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center">
        © 2026 {APP.name}. All rights reserved.
      </div>
    </footer>
  );
};
