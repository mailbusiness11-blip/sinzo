export default function SinzoEcommercePage() {
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
            <a href="/sinzo-ecommerce" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
              Sinzo E-Commerce
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

        <section className="py-16 text-center">
          <p className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
            Sinzo E-Commerce
          </p>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            Sinzo E-Commerce Platform Is Coming Soon
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Sinzo is building a smart e-commerce platform with a factory direct
            vision, millions of products and better value for online shoppers.
          </p>

          <div className="mt-8">
            <a
              href="/register"
              className="inline-flex rounded-full bg-yellow-400 px-10 py-4 font-black text-black"
            >
              Register For Early Access
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">🛍️</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Many Categories
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Fashion, electronics, beauty, toys, shoes, home, kitchen, mobile
              accessories and more categories are planned.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">🏭</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Factory Direct Vision
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Sinzo wants to bring products closer from source to customers by
              reducing unnecessary middle layers.
            </p>
          </div>

          <div className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-7 text-center">
            <p className="text-4xl">⚡</p>
            <h2 className="mt-4 text-2xl font-black text-yellow-300">
              Coming Soon
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Early users can register now to receive launch updates and special
              launch offer information.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-white/10 p-7 md:p-10">
          <h2 className="text-3xl font-black md:text-5xl">
            Why Sinzo E-Commerce?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-gray-300">
            <p>
              Many online products become expensive because products pass
              through multiple layers before reaching customers. Marketplace
              fees, advertising costs, resellers and other charges can increase
              final prices.
            </p>

            <p>
              Sinzo is being built to create a smarter shopping model where
              customers can discover a large range of products with better value
              and exciting launch offers.
            </p>

            <p className="text-xl font-black text-yellow-300">
              Sinzo — Factory Direct. Smarter Prices. Better Shopping.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-black/60 p-7 text-center md:p-10">
          <h2 className="text-3xl font-black md:text-5xl">
            Be First To Join Sinzo
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Register now to get early access updates and Sinzo launch offer
            information.
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
