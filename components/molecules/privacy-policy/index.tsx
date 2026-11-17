import { data } from "./data";

export const TableOfContents = () => {
  return (
    <aside className="lg:col-span-1">
      <nav aria-label="On this page" className="bg-brand-soft rounded-2xl p-6 lg:sticky lg:top-32">
        <h2 className="text-brand-dark text-lg font-semibold">On this page</h2>
        <ol className="mt-4 space-y-2 text-base">
          {data.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-brand hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export const Content = () => {
  return (
    <article className="lg:col-span-3">
      <div className="space-y-12">
        {data.map((item, i) => (
          <section key={item.id} id={item.id} className="scroll-mt-32">
            <h2 className="text-brand-dark text-2xl font-bold sm:text-3xl">{item.title}</h2>
            <div
              className="text-muted [&_a]:text-brand [&_a:hover]:text-brand-dark [&_li]:marker:text-brand [&_strong]:text-ink mt-4 max-w-3xl space-y-4 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: item.bodyRichText }}
            />
          </section>
        ))}
      </div>
    </article>
  );
};
