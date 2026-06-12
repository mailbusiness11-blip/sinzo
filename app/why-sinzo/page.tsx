export default function WhySinzoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <section className="relative min-h-screen overflow-hidden px-5 py-6 md:px-8 md:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(250,204,21,0.24),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.22),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.22),transparent_35%),linear-gradient(135deg,#020202,#0f0f0f,#2a1400)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-black text-yellow-300 md:text-3xl">
            Sinzo
          </a>

          <div className="flex flex-wrap justify-end gap-2 text-xs font-bold md:gap-3 md:text-sm">
            <a href="/" className="rounded-full bg-white/10 px-3 py-2 md:px-4">
              Home
            </a>

            <a
              href="/about"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              About Us
            </a>

            <a
              href="/policy"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              Policy
            </a>

            <a
              href="/why-sinzo"
              className="rounded-full bg-yellow-400 px-3 py-2 font-black text-black md:px-4"
            >
              Why Sinzo
            </a>

            <a
              href="/register"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              Registration
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              Why Sinzo?
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Why Pay Extra Layers When Sinzo Can Bring Products Closer From
              Source To Your Home?
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-300 md:text-xl">
              Sinzo is being built with one clear mission: reduce unnecessary
              middle layers, bring products closer from manufacturers and
              suppliers to customers, and help people shop smarter.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="rounded-full bg-yellow-400 px-8 py-4 font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-105 hover:bg-yellow-300"
              >
                Register Now
              </a>

              <a
                href="/"
                className="rounded-full border border-yellow-400/50 bg-black/40 px-8 py-4 font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
              >
                Back To Home
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[42px] border border-yellow-400/30 bg-black/55 p-6 shadow-2xl shadow-yellow-500/10 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">
                The Market Problem
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Online Shopping Looks Simple, But The Price Often Carries Many
                Hidden Layers
              </h2>

              <div className="mt-6 space-y-5 text-base font-medium leading-8 text-gray-300 md:text-lg">
                <p>
                  Today, when a customer buys a product online, the price is not
                  only the product price. Many extra costs can be added before
                  the product reaches the customer.
                </p>

                <p>
                  A manufacturer makes the product. Then the product may pass
                  through importers, agents, wholesalers, resellers, platform
                  sellers, warehouses, advertising costs and marketplace fees.
                </p>

                <p>
                  Big online marketplaces may also charge sellers different
                  fees, commissions, payment charges, delivery charges and
                  advertising costs. At the end, many of these costs are added
                  to the final selling price.
                </p>

                <p className="font-black text-yellow-300">
                  Who pays this extra cost? The customer.
                </p>
              </div>
            </div>

            <div className="rounded-[42px] border border-yellow-400/30 bg-gradient-to-br from-yellow-500 to-orange-500 p-6 text-black shadow-2xl shadow-yellow-500/20 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.28em]">
                Sinzo Mission
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Factory Direct. Smarter Prices. Better Shopping.
              </h2>

              <p className="mt-6 text-lg font-extrabold leading-8">
                Sinzo wants to reduce unnecessary middle layers and bring
                products closer from manufacturers and suppliers to customers.
                When the supply chain becomes shorter, the price can become
                smarter.
              </p>

              <div className="mt-8 rounded-[32px] bg-black p-6 text-white">
                <p className="text-sm font-black uppercase tracking-widest text-yellow-300">
                  Our Big Question
                </p>

                <p className="mt-3 text-2xl font-black leading-tight">
                  Why should customers pay extra when products can come closer
                  from source to home?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-[32px] border border-yellow-400/25 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl">🏭</p>
              <h3 className="mt-4 text-2xl font-black text-yellow-300">
                Factory Direct Vision
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-gray-300">
                Sinzo wants to bring products closer from manufacturers and
                suppliers to customers.
              </p>
            </div>

            <div className="rounded-[32px] border border-yellow-400/25 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl">💰</p>
              <h3 className="mt-4 text-2xl font-black text-yellow-300">
                Smarter Prices
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-gray-300">
                By reducing unnecessary layers, customers can get better value
                across many categories.
              </p>
            </div>

            <div className="rounded-[32px] border border-yellow-400/25 bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-4xl">🛒</p>
              <h3 className="mt-4 text-2xl font-black text-yellow-300">
                Millions Of Products
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-gray-300">
                Sinzo is coming with fashion, electronics, home, beauty, toys,
                shoes, accessories and more.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[45px] border border-yellow-400/30 bg-gradient-to-br from-white/10 to-white/5 p-7 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">
                  Our Story
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                  Sinzo Is Not Just Another Shopping Website
                </h2>
              </div>

              <div className="space-y-5 text-base font-medium leading-8 text-gray-300 md:text-lg">
                <p>
                  Sinzo is a new shopping movement for people who want better
                  prices, more choices and direct access to a huge range of
                  products.
                </p>

                <p>
                  Customers are tired of paying high prices because of multiple
                  middle layers. Sellers also face many costs before their
                  products reach the public.
                </p>

                <p>
                  Sinzo wants to create a smarter shopping model where customers
                  can discover products with better value, bigger selection and
                  exciting launch offers.
                </p>

                <p className="text-xl font-black text-yellow-300">
                  Sinzo is coming soon to India, UAE, Nepal, US and UK.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[45px] border border-yellow-400/30 bg-black/60 p-7 text-center md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">
              Early Access
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Register Now And Be First To Access Sinzo Launch Offers
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-8 text-gray-300">
              Early registered users may get special launch updates, first-week
              sale alerts and extra launch bonus offers.
            </p>

            <a
              href="/register"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 px-10 py-4 text-base font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-105"
            >
              Register Now & Get Launch Bonus
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}