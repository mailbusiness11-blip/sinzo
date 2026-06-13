export default function FAQPage() {
  const faqs = [
    {
      question: "What is Sinzo?",
      answer:
        "Sinzo is a global e-commerce platform coming soon. It is being built to offer many product categories, smarter prices and a modern online shopping experience.",
    },
    {
      question: "What is the official Sinzo website?",
      answer:
        "The official website of Sinzo is www.sinzo.in. This is where users can register for launch updates and learn about the Sinzo e-commerce platform.",
    },
    {
      question: "Is Sinzo registration free?",
      answer:
        "Yes, Sinzo early registration is free. Users can register to receive launch updates, first-week sale alerts and launch bonus information.",
    },
    {
      question: "When will Sinzo launch?",
      answer:
        "Sinzo is currently in coming soon stage. The launch date and first sale information will be shared with registered users and on the official website.",
    },
    {
      question: "What products will Sinzo offer?",
      answer:
        "Sinzo is preparing many categories including fashion, electronics, home and kitchen, beauty, toys, shoes, bags, mobile accessories, appliances and more.",
    },
    {
      question: "Which countries is Sinzo coming to?",
      answer:
        "Sinzo is coming soon to India, UAE, Nepal, US and UK. More markets may be added in the future.",
    },
    {
      question: "What is the Sinzo launch bonus?",
      answer:
        "Early registered users may receive special launch bonus information and first-week sale alerts. Final launch offers will be announced during the Sinzo launch period.",
    },
    {
      question: "Is Sinzo connected with other similar names?",
      answer:
        "Sinzo.in is the official website for the Sinzo e-commerce platform. It is not affiliated with other similar-sounding businesses or brands.",
    },
    {
      question: "How can I contact Sinzo?",
      answer:
        "Users and business partners can contact Sinzo through the official website contact page, WhatsApp, email or Instagram profile @sinzo.in.",
    },
  ];

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

            <a href="/why-sinzo" className="rounded-full bg-white/10 px-4 py-2">
              Why Sinzo
            </a>

            <a
              href="/sinzo-ecommerce"
              className="rounded-full bg-white/10 px-4 py-2"
            >
              Sinzo E-Commerce
            </a>

            <a href="/faq" className="rounded-full bg-yellow-400 px-4 py-2 text-black">
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
            Sinzo FAQ
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Frequently Asked Questions About Sinzo
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Find quick answers about Sinzo registration, launch, products,
            official website and e-commerce platform.
          </p>
        </section>

        <section className="grid gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[30px] border border-yellow-400/25 bg-white/10 p-6 md:p-8"
            >
              <h2 className="text-2xl font-black text-yellow-300">
                {faq.question}
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[36px] border border-yellow-400/30 bg-black/60 p-7 text-center md:p-10">
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Visit the contact page or register to receive official Sinzo launch
            updates.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full border border-yellow-400/50 px-8 py-4 font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
            >
              Contact Sinzo
            </a>

            <a
              href="/register"
              className="rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 px-8 py-4 font-black text-black"
            >
              Register Now
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}