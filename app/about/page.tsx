export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <section className="relative overflow-hidden px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(250,204,21,0.25),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(249,115,22,0.20),transparent_25%),linear-gradient(135deg,#020202,#0f0f0f,#2a1400)]" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between py-4">
          <a href="/" className="text-3xl font-black text-yellow-300">
            Sinzo
          </a>

          <div className="flex gap-3 text-sm font-bold">
            <a href="/" className="rounded-full bg-white/10 px-4 py-2">
              Home
            </a>
            <a href="/about" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
              About Us
            </a>
            <a href="/policy" className="rounded-full bg-white/10 px-4 py-2">
              Policy
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl py-20">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-yellow-300">
            About Us
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Introduction of{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Sinzo
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-9 text-gray-300">
            Sinzo is an India-first e-commerce marketplace created with a clear
            mission: to make online shopping more affordable, more direct, and
            more powerful for Indian customers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-br from-white/10 via-white/5 to-yellow-500/10 p-8 shadow-2xl md:p-12">
          <div className="space-y-6 text-lg leading-9 text-gray-300">
            <p>
              In the traditional shopping system, many extra costs are added
              before a product reaches the customer. Importers, agents,
              distributors, resellers, middlemen, and platform commissions
              increase the final selling price. Because of this, customers often
              pay much more than the real manufacturing cost of the product.
            </p>

            <p>
              Sinzo is being built to change this system. Our goal is to bypass
              unnecessary middle layers and source products directly from
              factories and manufacturers, especially from large manufacturing
              hubs in China and other global supply markets.
            </p>

            <p>
              By buying closer to the factory source, Sinzo aims to reduce extra
              margins, reduce platform fee pressure, and bring products to
              Indian customers at more exciting and competitive prices.
            </p>

            <p>
              We are preparing to bring millions of products across multiple
              categories, including fashion, ladies western wear, inner
              garments, artificial jewellery, beauty products, bags, shoes,
              men’s clothing, watches, toys, electronics, mobile accessories,
              earpods, kitchen ware, gaming products, TV, furniture, sports
              products, books, digital games, hardware tools, baby products,
              home care, appliances, automobile products and many more.
            </p>

            <p>
              Sinzo is not just another online shopping platform. Sinzo is a new
              shopping idea designed for customers who want better variety,
              better prices, and a direct factory-to-home shopping experience.
            </p>

            <p>
              Our vision is simple: connect manufacturers directly with Indian
              customers and make global products more accessible for every home
              in India.
            </p>
          </div>

          <div className="mt-10 rounded-[35px] border border-yellow-400/30 bg-black/50 p-7">
            <h2 className="text-3xl font-black text-yellow-300">
              Factory Direct. India’s Smartest Price.
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              With Sinzo, customers can expect a fresh e-commerce experience,
              exciting launch offers, massive product variety, and a strong
              focus on affordability. We are working to create a marketplace
              where customers can discover more products, compare better
              options, and shop with confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              "Direct Factory Sourcing",
              "Millions of Products",
              "Better Prices",
              "India-first Marketplace",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-yellow-400/20 bg-white/5 p-5 text-center"
              >
                <p className="font-black text-yellow-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-10 text-center text-black">
          <h2 className="text-4xl font-black">
            Sinzo is coming soon with a 7 Days Mega Launch Sale
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg font-extrabold leading-8">
            Early customers will get special opening deals across many product
            categories. Sinzo — millions of products, direct sourcing, better
            prices, and a new way to shop online.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-yellow-300"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}