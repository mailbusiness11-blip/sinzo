export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030303] px-5 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a href="/" className="text-3xl font-black text-yellow-300">
            Sinzo
          </a>

          <div className="flex flex-wrap gap-2 text-sm font-bold">
            <a href="/" className="rounded-full bg-white/10 px-4 py-2">
              Home
            </a>
            <a href="/why-sinzo" className="rounded-full bg-white/10 px-4 py-2">
              Why Sinzo
            </a>
            <a href="/sinzo-ecommerce" className="rounded-full bg-white/10 px-4 py-2">
              Sinzo E-Commerce
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

        <section className="py-16 text-center">
          <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
            Contact Sinzo
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Contact Sinzo E-Commerce Platform
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Sinzo is coming soon with a global e-commerce vision. For business,
            supplier, partnership or launch updates, connect with Sinzo.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">📩</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Business Enquiry
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Suppliers, manufacturers and business partners can connect with
              Sinzo for future e-commerce opportunities.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">🚀</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Launch Updates
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Customers can register now to receive coming soon updates and
              first launch offer information.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">🌍</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Global Vision
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo is planning to serve India, UAE, Nepal, US, UK and more
              markets in the future.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-gradient-to-br from-yellow-400 to-orange-500 p-7 text-center text-black md:p-10">
          <h2 className="text-3xl font-black md:text-5xl">
            Want Sinzo Launch Updates?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg font-extrabold leading-8">
            Register now and become an early Sinzo member before launch.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-full bg-black px-10 py-4 font-black text-yellow-300"
          >
            Register Now
          </a>
        </section>
      </div>
    </main>
  );
}
