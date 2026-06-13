export default function FAQPage() {
  const faqs = [
    {
      question: "What is Sinzo?",
      answer:
        "Sinzo is a global e-commerce platform coming soon with a vision to bring millions of products closer from manufacturers and suppliers to customers.",
    },
    {
      question: "When is Sinzo launching?",
      answer:
        "Sinzo is currently in coming soon stage. Early users can register now to receive launch updates and special launch offer information.",
    },
    {
      question: "Is Sinzo registration free?",
      answer:
        "Yes, early registration on Sinzo is free. Registered users may receive launch updates, first-week sale alerts and special launch bonus information.",
    },
    {
      question: "What is the Sinzo launch bonus?",
      answer:
        "Early registered users may become eligible for special launch bonus offers during the first Sinzo launch sale.",
    },
    {
      question: "Which countries is Sinzo coming to?",
      answer:
        "Sinzo is coming soon to India, UAE, Nepal, US and UK. Future expansion may include more regions.",
    },
    {
      question: "What products will Sinzo offer?",
      answer:
        "Sinzo is planning many categories including fashion, electronics, home and kitchen, beauty, toys, shoes, mobile accessories and more.",
    },
  ];

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
            Learn about Sinzo, registration, launch offers, product categories
            and our coming soon e-commerce platform.
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
          <h2 className="text-3xl font-black md:text-5xl">
            Register Now For Sinzo Launch Updates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Join early and receive Sinzo coming soon updates, launch sale alerts
            and special launch bonus information.
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
