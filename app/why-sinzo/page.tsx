export default function WhySinzoPage() {
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

            <a href="/why-sinzo" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
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

        <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              Why Sinzo
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Why Pay Extra Layers When Products Can Come Closer From Source?
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Many online products become expensive before they reach customers.
              Between manufacturers and buyers, there can be importers,
              distributors, sellers, advertising costs, commissions and platform
              fees.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Sinzo is being built with a different vision: reduce unnecessary
              layers and bring products closer from source to customer with
              smarter prices and more choices.
            </p>

            <div className="mt-8">
              <a
                href="/register"
                className="inline-flex rounded-full bg-yellow-400 px-8 py-4 font-black text-black"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="rounded-[40px] border border-yellow-400/30 bg-white/10 p-4">
            <img
              src="/neelam-sinzo2.jpeg"
              alt="Neelam Sharma founder of Sinzo explaining factory direct e-commerce vision"
              className="h-[500px] w-full rounded-[30px] object-cover object-center"
            />

            <div className="p-5 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                Founder-Led Vision
              </p>
              <h2 className="mt-2 text-3xl font-black">Neelam Sharma</h2>
              <p className="mt-3 text-sm font-bold text-gray-300">
                Founder of Sinzo — building trust with a women-led global
                e-commerce vision and 67K+ public followers.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-yellow-400/30 bg-white/10 p-7 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
            The Market Problem
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Extra Middle Layers Can Increase Final Product Prices
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Multiple Middle Layers
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Products often move through different sellers, resellers and
                distributors before reaching customers.
              </p>
            </div>

            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Selling And Platform Costs
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Advertising, commission, logistics and listing costs can affect
                the final price paid by customers.
              </p>
            </div>

            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Customer Pays More
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                When too many costs are added in between, the customer may end
                up paying more than the product’s source value.
              </p>
            </div>

            <div className="rounded-[28px] bg-black/50 p-6">
              <h3 className="text-xl font-black text-yellow-300">
                Sinzo Vision
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Sinzo wants to reduce unnecessary layers and create a smarter
                product discovery and shopping experience.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">🏭</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Factory Direct Vision
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo wants to connect customers closer to product sources.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">💰</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Smarter Prices
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              The aim is to offer better value by reducing unnecessary layers.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 text-center">
            <p className="text-4xl">🛒</p>
            <h3 className="mt-4 text-2xl font-black text-yellow-300">
              Better Shopping
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo is preparing millions of choices across many categories.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}