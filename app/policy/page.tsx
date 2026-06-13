export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#030303] px-5 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-3xl font-black text-yellow-300">
            Sinzo
          </a>

          <div className="flex max-w-full gap-2 overflow-x-auto whitespace-nowrap text-sm font-bold md:flex-wrap md:justify-end">
            <a href="/" className="rounded-full bg-white/10 px-4 py-2">
              Home
            </a>

            <a href="/about" className="rounded-full bg-white/10 px-4 py-2">
              About Us
            </a>

            <a href="/founder" className="rounded-full bg-white/10 px-4 py-2">
              Founder
            </a>

            <a href="/why-sinzo" className="rounded-full bg-white/10 px-4 py-2">
              Why Sinzo
            </a>

            <a href="/sinzo-brand" className="rounded-full bg-white/10 px-4 py-2">
              Sinzo Brand
            </a>

            <a href="/faq" className="rounded-full bg-white/10 px-4 py-2">
              FAQ
            </a>

            <a href="/contact" className="rounded-full bg-white/10 px-4 py-2">
              Contact
            </a>

            <a href="/policy" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
              Policy
            </a>

            <a href="/register" className="rounded-full bg-white/10 px-4 py-2">
              Registration
            </a>
          </div>
        </div>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              Sinzo Policy
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Sinzo Policies For A Transparent Shopping Future
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sinzo is currently in coming soon stage. Our policy page explains
              how early registration, launch communication, user information and
              future shopping updates are planned to be handled.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              As Sinzo moves closer to launch, detailed customer policies,
              return rules, shipping details, payment safety and marketplace
              terms will be published clearly on the official website.
            </p>
          </div>

          <div className="rounded-[40px] border border-yellow-400/30 bg-white/10 p-4">
            <img
              src="/neelam-sinzo4.jpeg"
              alt="Neelam Sharma founder of Sinzo building trust and transparent shopping policies"
              className="h-[500px] w-full rounded-[30px] object-cover object-top"
            />

            <div className="p-5 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                Trust & Transparency
              </p>
              <h2 className="mt-2 text-3xl font-black">Neelam Sharma</h2>
              <p className="mt-3 text-sm font-bold text-gray-300">
                Founder of Sinzo — building a women-led e-commerce brand with
                trust, public visibility and 67K+ followers.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-5">
          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-black text-yellow-300">
              1. Early Registration
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Users may register on Sinzo to receive launch updates, first-week
              sale alerts and special launch bonus information. Registration
              does not create any purchase obligation.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-black text-yellow-300">
              2. User Information
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Information submitted through Sinzo registration may be used to
              contact users about official Sinzo launch updates, offers and
              platform information.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-black text-yellow-300">
              3. Launch Offers
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Launch bonus information, first-week sale alerts and promotional
              offers may be subject to final launch terms, product availability,
              region and official Sinzo rules.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-black text-yellow-300">
              4. Future Shopping Policies
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              Detailed policies for orders, shipping, returns, refunds,
              cancellations, payments and customer support will be published
              before or during the official Sinzo shopping launch.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-black text-yellow-300">
              5. Official Information
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              The official website of Sinzo is www.sinzo.in. Users should rely
              on the official Sinzo website and official social media profile
              @sinzo.in for trusted brand updates.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-black/60 p-7 text-center md:p-10">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Register Safely On The Official Sinzo Website
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Use only www.sinzo.in for official Sinzo launch registration and
            updates.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 px-10 py-4 font-black text-black"
          >
            Register Now
          </a>
        </section>
      </div>
    </main>
  );
}