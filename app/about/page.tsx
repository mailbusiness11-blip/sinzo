export default function AboutPage() {
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

            <a href="/about" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
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

            <a href="/register" className="rounded-full bg-white/10 px-4 py-2">
              Registration
            </a>
          </div>
        </div>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              About Sinzo
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Building A New E-Commerce Platform With A Factory Direct Vision
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sinzo is being created with a simple belief: online shopping
              should give customers better choices, smarter prices and a direct
              connection to a wide range of products.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Our goal is to build a global e-commerce platform where customers
              can discover products across fashion, electronics, home, beauty,
              toys, shoes, accessories, mobile accessories, appliances and many
              more categories.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-full bg-yellow-400 px-8 py-4 font-black text-black"
              >
                Register For Launch Updates
              </a>

              <a
                href="/founder"
                className="rounded-full border border-yellow-400/50 px-8 py-4 font-black text-yellow-300"
              >
                Meet Founder
              </a>
            </div>
          </div>

          <div className="rounded-[40px] border border-yellow-400/30 bg-white/10 p-4">
            <img
              src="/neelam-sinzo1.jpeg"
              alt="Neelam Sharma founder of Sinzo women-led global e-commerce platform"
              className="h-[520px] w-full rounded-[30px] object-cover object-top"
            />

            <div className="p-5 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                Founder
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
            Our Founder Vision
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Why Sinzo Was Created
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-300">
            <p>
              Sinzo was created with the vision to make online shopping more
              valuable for customers. Many products become expensive before they
              reach buyers because of multiple middle layers, selling costs,
              reseller margins and platform fees.
            </p>

            <p>
              Sinzo wants to work toward a smarter model where products can come
              closer from manufacturers and suppliers to customers. The aim is
              to create a platform that gives customers more choice, better
              value and exciting launch offers.
            </p>

            <p>
              Founder Neelam Sharma represents the Sinzo vision of building a
              trusted, customer-focused and future-ready e-commerce platform
              with global exposure across India, UAE, Hong Kong, China and
              international markets.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">🏭</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Factory Direct Vision
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo wants to bring products closer from source to customers.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">🌍</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Global Platform
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo is preparing for India, UAE, Nepal, US, UK and future
              markets.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">🛒</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Millions Of Products
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Fashion, electronics, home, beauty, toys, shoes and more are
              coming soon.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}