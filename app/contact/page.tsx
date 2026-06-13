export default function ContactPage() {
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

            <a href="/contact" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
              Contact
            </a>

            <a href="/register" className="rounded-full bg-white/10 px-4 py-2">
              Registration
            </a>
          </div>
        </div>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              Contact Sinzo
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Contact The Official Sinzo Team
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              For launch updates, customer registration, supplier enquiries,
              business partnerships and official Sinzo information, use the
              contact details below.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="https://wa.me/918750511089"
                className="rounded-[26px] border border-yellow-400/25 bg-white/10 p-5 transition hover:bg-yellow-400 hover:text-black"
              >
                <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                  WhatsApp
                </p>
                <p className="mt-2 text-2xl font-black">+91 87505 11089</p>
              </a>

              <a
                href="mailto:work@sinzo.in"
                className="rounded-[26px] border border-yellow-400/25 bg-white/10 p-5 transition hover:bg-yellow-400 hover:text-black"
              >
                <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                  Email
                </p>
                <p className="mt-2 text-2xl font-black">work@sinzo.in</p>
              </a>

              <a
                href="https://www.instagram.com/sinzo.in/"
                className="rounded-[26px] border border-yellow-400/25 bg-white/10 p-5 transition hover:bg-yellow-400 hover:text-black"
              >
                <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                  Instagram
                </p>
                <p className="mt-2 text-2xl font-black">@sinzo.in</p>
              </a>
            </div>
          </div>

          <div className="rounded-[40px] border border-yellow-400/30 bg-white/10 p-4">
            <img
              src="/neelam-sinzo3.jpeg"
              alt="Neelam Sharma founder of Sinzo official contact and business enquiries"
              className="h-[500px] w-full rounded-[30px] object-cover object-top"
            />

            <div className="p-5 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                Founder Trust
              </p>
              <h2 className="mt-2 text-3xl font-black">Neelam Sharma</h2>
              <p className="mt-3 text-sm font-bold text-gray-300">
                Founder of Sinzo — women-led global e-commerce vision with
                public social media presence and 67K+ followers.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-yellow-400/30 bg-white/10 p-7 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
            Enquiry Types
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            How Can We Help?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Customer Updates
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Register for launch alerts, first-week sale information and
                special launch bonus updates.
              </p>
            </div>

            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Supplier Enquiry
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Manufacturers, suppliers and product partners can contact Sinzo
                for future collaboration.
              </p>
            </div>

            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Business Enquiry
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                For partnerships, media, marketing or business communication,
                contact the official Sinzo team.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-black/60 p-7 text-center md:p-10">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Register Now For Official Launch Updates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Become an early Sinzo member and receive official launch alerts
            directly.
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