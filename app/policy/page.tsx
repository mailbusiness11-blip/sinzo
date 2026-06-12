export default function PolicyPage() {
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
            <a href="/about" className="rounded-full bg-white/10 px-4 py-2">
              About Us
            </a>
            <a href="/policy" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
              Policy
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl py-20">
          <p className="text-sm font-black uppercase tracking-[0.4em] text-yellow-300">
            Company Policy
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Delivery, COD &{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Return Policy
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-xl leading-9 text-gray-300">
            Sinzo is being built with a direct sourcing model. Our aim is to
            bring products closer from factories and suppliers to Indian
            customers by reducing unnecessary middle layers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-br from-white/10 via-white/5 to-orange-500/10 p-8 shadow-2xl md:p-12">
          <div className="rounded-[35px] border border-yellow-400/30 bg-black/50 p-7">
            <h2 className="text-3xl font-black text-yellow-300">
              Cash on Delivery Available
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Cash on Delivery, also known as COD, will be available for
              eligible products and eligible serviceable locations. COD
              availability may depend on product type, order value, delivery
              location and logistics partner support.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[35px] border border-yellow-400/30 bg-black/50 p-7">
              <h2 className="text-3xl font-black text-yellow-300">
                Fast Delivery by Air
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                In this option, Sinzo imports the product for the customer by
                air shipment. This option is suitable for customers who want
                faster delivery.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                The estimated delivery time for this option is usually around
                7 to 10 days after order processing and dispatch.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                Air freight charges are higher, so the product cost in this
                option may be higher compared to sea shipment.
              </p>
            </div>

            <div className="rounded-[35px] border border-orange-400/30 bg-black/50 p-7">
              <h2 className="text-3xl font-black text-orange-300">
                Economy Delivery by Sea
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                In this option, Sinzo imports the product for the customer by
                sea shipment. This option is suitable for customers who want a
                lower price and can wait longer for delivery.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                The estimated delivery time for this option is usually around
                30 to 40 days.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                Because sea freight is more economical than air freight, this
                option may offer prices up to around 50% lower than the fast air
                delivery option on selected products.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[35px] border border-green-400/30 bg-black/50 p-7">
            <h2 className="text-3xl font-black text-green-300">
              Return Policy
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Sinzo will provide a return policy for eligible products. If a
              customer wants to return a product, the buyer will need to pay the
              applicable return logistics, courier or shipping charges, unless
              the return is approved under a special case such as wrong product,
              damaged product or any issue confirmed by Sinzo support.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Returned products must be unused, undamaged, in original
              condition, and with original packaging, tags, invoice and
              accessories wherever applicable.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-300">
              Final return approval will depend on product condition, product
              category and Sinzo return verification.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              "COD Available",
              "7–10 Days Air Delivery",
              "30–40 Days Sea Delivery",
              "Buyer Pays Return Logistics",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-yellow-400/20 bg-white/5 p-5 text-center"
              >
                <p className="font-black text-yellow-300">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-gray-400">
            Note: Delivery timelines are estimated and may vary due to customs
            clearance, international shipping conditions, supplier processing
            time, logistics partner delays, holidays, weather conditions or
            other operational reasons.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-r from-yellow-500 to-orange-500 p-10 text-center text-black">
          <h2 className="text-4xl font-black">Need Help?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
            For any enquiry about delivery, COD, return or products, contact
            Sinzo anytime.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <a
              href="https://wa.me/918750511089"
              target="_blank"
              className="rounded-3xl bg-black p-6 text-white"
            >
              <p className="text-yellow-300">WhatsApp</p>
              <h3 className="mt-2 text-2xl font-black">+91 87505 11089</h3>
            </a>

            <a
              href="mailto:work@sinzo.in"
              className="rounded-3xl bg-black p-6 text-white"
            >
              <p className="text-yellow-300">Email</p>
              <h3 className="mt-2 text-2xl font-black">work@sinzo.in</h3>
            </a>

            <a
              href="https://www.instagram.com/sinzo.in"
              target="_blank"
              className="rounded-3xl bg-black p-6 text-white"
            >
              <p className="text-yellow-300">Instagram</p>
              <h3 className="mt-2 text-2xl font-black">@sinzo.in</h3>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}