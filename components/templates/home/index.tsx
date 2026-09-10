import { colors } from "../utils";

export default function HomePageTemplate() {
  return (
    <div
      className="antialiased"
      style={{
        // fontFamily: "'Work Sans', sans-serif",
        background: colors.cream,
        color: colors.ink,
      }}
    >
      <style>{`
        .font-display{ font-family:'Fraunces', serif; }
        .underline-swoop{ position:relative; display:inline-block; }
        .underline-swoop svg{ position:absolute; left:0; bottom:-10px; width:100%; height:10px; }
        .card-hover{ transition: transform .35s ease, box-shadow .35s ease; }
        .card-hover:hover{ transform: translateY(-6px); }
      `}</style>

      {/* Topbar */}
      <div
        className="hidden items-center justify-between px-8 py-2 text-xs md:flex"
        style={{ background: colors.tealDeep, color: colors.creamDim }}
      >
        <div className="flex gap-6">
          <span>+880 1912 345 678</span>
          <span>Mon – Sunday, 9:00 – 18:00</span>
        </div>
        <div className="flex gap-4">
          <span>18 Willow Lane, Sylhet</span>
        </div>
      </div>

      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-5 md:px-16"
        style={{ background: colors.cream }}
      >
        <div
          className="font-display text-2xl"
          style={{ color: colors.tealDeep }}
        >
          Willow <span style={{ color: colors.coral }}>Home Care</span>
        </div>
        <nav
          className="hidden gap-8 text-sm font-medium md:flex"
          style={{ color: colors.ink }}
        >
          <a
            href="#"
            className="border-b-2"
            style={{ borderColor: colors.coral }}
          >
            Home
          </a>
          <a href="#services">Services</a>
          <a href="#team">Our Team</a>
          <a href="#events">Events</a>
          <a href="#contact">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white md:inline-block"
          style={{ background: colors.coral }}
        >
          Book a visit
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: colors.tealDeep }}
      >
        <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
          <div className="relative z-10 px-6 py-20 md:px-16 md:py-28">
            <p
              className="mb-4 text-sm tracking-wide"
              style={{ color: colors.coralSoft }}
            >
              A home away from home
            </p>
            <h1 className="font-display mb-6 text-4xl leading-tight text-white md:text-5xl">
              We look after your parents
              <br /> the way you would.
            </h1>
            <p className="mb-8 max-w-md leading-relaxed text-white/70">
              Trained caregivers, warm companionship, and round-the-clock
              attention — so every senior in our care feels at home, not just
              housed.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full px-7 py-3.5 font-semibold"
              style={{ background: colors.coral, color: "white" }}
            >
              Meet our caregivers
            </a>
          </div>
          <div className="relative h-72 md:h-full">
            <img
              src="https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=1200&auto=format&fit=crop"
              className="h-full w-full object-cover"
              alt="Caregiver with elderly man"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, ${colors.tealDeep} 0%, rgba(44,86,82,0) 35%)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* INTRO / STATS */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="font-display mb-3 text-3xl leading-snug md:text-4xl">
          Care that feels like{" "}
          <span className="underline-swoop" style={{ color: colors.coral }}>
            family
            <svg viewBox="0 0 200 10" preserveAspectRatio="none">
              <path
                d="M0,6 Q50,0 100,6 T200,6"
                stroke={colors.coralSoft}
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
          , not a shift
        </h2>
        <p className="text-ink/60 mx-auto mb-16 max-w-xl">
          Fourteen years of helping families in Sylhet find dependable,
          dignified care for the people they love most.
        </p>

        <div className="grid gap-10 text-left md:grid-cols-3">
          <div className="flex gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ background: colors.creamDim }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.tealMid}
                strokeWidth="2"
              >
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Round-the-clock watch</h3>
              <p className="text-ink/60 text-sm">
                A caregiver is always nearby, day and night.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ background: colors.creamDim }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.tealMid}
                strokeWidth="2"
              >
                <path d="M12 15l-5.5 3 1.5-6L3 8l6-.5L12 2l3 5.5 6 .5-5 4 1.5 6z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">
                Trained, background-checked staff
              </h3>
              <p className="text-ink/60 text-sm">
                Every caregiver is certified and vetted.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ background: colors.creamDim }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.tealMid}
                strokeWidth="2"
              >
                <path d="M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z" />
              </svg>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">A real home setting</h3>
              <p className="text-ink/60 text-sm">
                Comfortable rooms, home-cooked meals, familiar routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BE HAPPY SPLIT */}
      <section className="grid items-stretch md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
          className="h-72 w-full object-cover md:h-full"
          alt="Caregiver with elderly woman in wheelchair"
        />
        <div
          className="flex flex-col justify-center px-6 py-20 md:px-16"
          style={{ background: colors.creamDim }}
        >
          <h2 className="font-display mb-5 text-3xl leading-snug md:text-4xl">
            Be happy{" "}
            <span style={{ color: colors.coral }}>and keep smiling</span>
          </h2>
          <p className="text-ink/60 mb-8 max-w-md leading-relaxed">
            Fostering strong relationships between clients and caregivers sits
            at the heart of what we do. Our coordinators take the time to match
            temperament and interests, not just schedules — so the person
            showing up each day is someone your parent actually looks forward to
            seeing.
          </p>
          <a
            href="#"
            className="inline-block w-fit rounded-full px-7 py-3 font-semibold text-white"
            style={{ background: colors.tealDeep }}
          >
            Learn how we match caregivers
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-16">
        <p className="mb-2 text-sm" style={{ color: colors.coral }}>
          What we offer
        </p>
        <h2 className="font-display mb-14 text-3xl md:text-4xl">
          Senior care services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="card-hover overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1576765607924-c9ba9c3aefd4?q=80&w=800&auto=format&fit=crop"
              className="h-48 w-full object-cover"
              alt="Home care"
            />
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">
                In-home companionship
              </h3>
              <p className="text-ink/60 text-sm">
                Daily visits for conversation, light housekeeping, and help
                around the home.
              </p>
            </div>
          </div>
          <div className="card-hover overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
              className="h-48 w-full object-cover"
              alt="Family care"
            />
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">
                Family respite care
              </h3>
              <p className="text-ink/60 text-sm">
                Short-term coverage so family caregivers can rest, travel, or
                work without worry.
              </p>
            </div>
          </div>
          <div className="card-hover overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=800&auto=format&fit=crop"
              className="h-48 w-full object-cover"
              alt="Medical care"
            />
            <div className="p-6">
              <h3 className="mb-2 text-lg font-semibold">
                Medical & mobility support
              </h3>
              <p className="text-ink/60 text-sm">
                Medication reminders, physiotherapy visits, and coordination
                with doctors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-full px-8 py-3 font-semibold text-white"
            style={{ background: colors.coral }}
          >
            See all services
          </a>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section
        className="grid items-center md:grid-cols-2"
        style={{ background: colors.creamDim }}
      >
        <div className="px-6 py-16 md:px-16">
          <p className="mb-2 text-sm" style={{ color: colors.coral }}>
            Not sure where to start?
          </p>
          <h2 className="font-display mb-4 text-3xl leading-snug">
            Friendly guidance is always one call away
          </h2>
          <p className="text-ink/60 mb-8 max-w-md">
            Every family's situation is different. Talk to a care coordinator,
            free of charge and with no obligation.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full px-7 py-3 font-semibold text-white"
            style={{ background: colors.tealDeep }}
          >
            Talk to a coordinator
          </a>
        </div>
        <div className="px-6 md:px-16">
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop"
            className="h-64 w-full rounded-2xl object-cover"
            alt="Support coordinator"
          />
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="mx-auto max-w-6xl px-6 py-24 text-center md:px-16"
      >
        <p className="mb-2 text-sm" style={{ color: colors.coral }}>
          The people behind the care
        </p>
        <h2 className="font-display mb-14 text-3xl md:text-4xl">
          Our support team
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
              className="mb-4 h-56 w-full rounded-2xl object-cover"
              alt="Melissa Munoz"
            />
            <h4 className="font-semibold">Melissa Munoz</h4>
            <p className="text-xs" style={{ color: colors.coral }}>
              Co-Founder
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              className="mb-4 h-56 w-full rounded-2xl object-cover"
              alt="John Abraham"
            />
            <h4 className="font-semibold">John Abraham</h4>
            <p className="text-xs" style={{ color: colors.coral }}>
              Care Director
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
              className="mb-4 h-56 w-full rounded-2xl object-cover"
              alt="Silviano Stainz"
            />
            <h4 className="font-semibold">Silviano Stainz</h4>
            <p className="text-xs" style={{ color: colors.coral }}>
              Operations Manager
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
              className="mb-4 h-56 w-full rounded-2xl object-cover"
              alt="Alexander Gary"
            />
            <h4 className="font-semibold">Alexander Gary</h4>
            <p className="text-xs" style={{ color: colors.coral }}>
              Founder
            </p>
          </div>
        </div>
      </section>

      {/* BOOK APPOINTMENT BANNER */}
      <section id="contact" className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
            alt="Living room"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(20,34,32,.72)" }}
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 text-white md:grid-cols-2 md:px-16">
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm" style={{ color: colors.coralSoft }}>
              Ready to join?
            </p>
            <h2 className="font-display mb-4 text-3xl leading-snug md:text-4xl">
              A calm, family environment awaits
            </h2>
            <p className="max-w-sm text-white/70">
              We're always glad to welcome new families. Send us a note and a
              coordinator will get back to you within a day.
            </p>
          </div>
          <form className="text-ink space-y-4 rounded-2xl bg-white p-8">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                className="border-ink/10 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={
                  { "--tw-ring-color": colors.tealMid } as React.CSSProperties
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                className="border-ink/10 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={
                  { "--tw-ring-color": colors.tealMid } as React.CSSProperties
                }
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Your message
              </label>
              <textarea
                rows={3}
                className="border-ink/10 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none"
                style={
                  { "--tw-ring-color": colors.tealMid } as React.CSSProperties
                }
              />
            </div>
            <button
              type="button"
              className="w-full rounded-lg py-3 font-semibold text-white"
              style={{ background: colors.tealDeep }}
            >
              Book an appointment
            </button>
          </form>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="mx-auto max-w-6xl px-6 py-24 md:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm" style={{ color: colors.coral }}>
              Life beyond care
            </p>
            <h2 className="font-display mb-4 text-3xl leading-snug">
              Events & cultural programs
            </h2>
            <p className="text-ink/60 mb-8 max-w-sm">
              We organize regular social and cultural activities to keep every
              resident engaged, active, and connected.
            </p>
            <a
              href="#"
              className="inline-block rounded-full px-7 py-3 font-semibold text-white"
              style={{ background: colors.coral }}
            >
              See our event photos
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop"
                className="h-40 w-full object-cover"
                alt="Painting activity"
              />
              <div className="bg-white p-3">
                <p className="text-ink/50 text-xs">July 25, 2026</p>
                <p className="text-sm font-medium">Adult painting circle</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                className="h-40 w-full object-cover"
                alt="Chess afternoon"
              />
              <div className="bg-white p-3">
                <p className="text-ink/50 text-xs">August 21, 2026</p>
                <p className="text-sm font-medium">Chess & board games</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591123720164-a3e2e8adf6e0?q=80&w=1600&auto=format&fit=crop"
            className="h-full w-full object-cover"
            alt="Elderly couple"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(20,34,32,.75)" }}
          />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 py-24 text-center text-white">
          <p className="font-display mb-6 text-xl leading-relaxed md:text-2xl">
            "Thank you for the tremendous support over the past eighteen months.
            You came to our rescue, providing dependable, skilled care for my
            father every single time."
          </p>
          <p className="font-semibold">Brandon Munson</p>
          <p className="text-sm text-white/60">Son of a resident</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: colors.ink }} className="text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-16">
          <div>
            <div className="font-display mb-3 text-xl text-white">
              Willow Home Care
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              We've supported elders and their families across Sylhet for over
              fourteen years.
            </p>
            <p className="mt-4 text-sm">support@willowcare.example</p>
            <p className="text-sm">18 Willow Lane, Sylhet</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Helpful links</h4>
            <ul className="space-y-2 text-sm">
              <li>Accessibility</li>
              <li>Insurance</li>
              <li>Volunteer</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm">
              Stay up to date with our latest news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-ink flex-1 rounded-l-lg px-4 py-2.5 text-sm focus:outline-none"
              />
              <button
                className="rounded-r-lg px-5 text-sm font-semibold text-white"
                style={{ background: colors.coral }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs">
          © 2026 Willow Home Care. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
