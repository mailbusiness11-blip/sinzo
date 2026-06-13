"use client";

import { useEffect, useState } from "react";

type MovingProduct = {
  id: number;
  name: string;
  image: string;
};

const makeProductLine = (
  products: { name: string; image: string }[],
  total: number
): MovingProduct[] => {
  return Array.from({ length: total }, (_, index) => {
    const product = products[index % products.length];

    return {
      id: index + 1,
      name: product.name,
      image: product.image,
    };
  });
};

const categories = [
  {
    name: "Fashion",
    emoji: "👗",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Electronics",
    emoji: "🎧",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Home & Kitchen",
    emoji: "🍳",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Beauty",
    emoji: "💄",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Toys",
    emoji: "🧸",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Shoes",
    emoji: "👠",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Furniture",
    emoji: "🛋️",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Automobile",
    emoji: "🚗",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  },
];

const row1BaseProducts = [
  {
    name: "Ladies Western Dress",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Women Party Dress",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ladies Fashion Wear",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ladies Inner Garments",
    image:
      "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Artificial Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Beauty Products",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ladies Hand Bag",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=600&q=80",
  },
];

const row2BaseProducts = [
  {
    name: "Women Heels",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Men Shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Luxury Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kids Toys",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80",
  },
];

const row3BaseProducts = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Mobile Phone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ear Pods",
    image:
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kitchen Ware",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  },
];

const row4BaseProducts = [
  {
    name: "Gaming Products",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Smart TV",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Furniture",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sports Products",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
  },
];

const row5BaseProducts = [
  {
    name: "Books",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Digital Games",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hardware Tools",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Baby Products",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
  },
];

const row6BaseProducts = [
  {
    name: "Home Care Products",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Home Appliances",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Automobile Products",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bike Accessories",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomePage() {
  const launchDate = new Date("2026-07-12T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const productRows = [
    {
      title:
        "Ladies Western Dress • Inner Garments • Artificial Jewellery • Beauty Products • Bags",
      color: "text-yellow-300",
      border: "border-yellow-400/20",
      label: "Coming Soon",
      products: makeProductLine(row1BaseProducts, 260),
      animation: "animate-[scrollLeft_300s_linear_infinite]",
      keyPrefix: "row1",
    },
    {
      title: "Shoes • Men Clothes • Watches • Toys",
      color: "text-orange-300",
      border: "border-orange-400/20",
      label: "Launch Deal",
      products: makeProductLine(row2BaseProducts, 260),
      animation: "animate-[scrollRight_330s_linear_infinite]",
      keyPrefix: "row2",
    },
    {
      title: "Electronics • Mobile • Earpods • Kitchen Ware",
      color: "text-red-300",
      border: "border-red-400/20",
      label: "Mega Offer",
      products: makeProductLine(row3BaseProducts, 260),
      animation: "animate-[scrollLeft_360s_linear_infinite]",
      keyPrefix: "row3",
    },
    {
      title: "Gaming Products • TV • Furniture • Sports",
      color: "text-purple-300",
      border: "border-purple-400/20",
      label: "Launch Week",
      products: makeProductLine(row4BaseProducts, 260),
      animation: "animate-[scrollRight_390s_linear_infinite]",
      keyPrefix: "row4",
    },
    {
      title: "Books • Digital Games • Hardware Tools • Baby Products",
      color: "text-blue-300",
      border: "border-blue-400/20",
      label: "Coming Soon",
      products: makeProductLine(row5BaseProducts, 260),
      animation: "animate-[scrollLeft_420s_linear_infinite]",
      keyPrefix: "row5",
    },
    {
      title: "Home Care • Appliances Set Supplier • Automobile Products",
      color: "text-green-300",
      border: "border-green-400/20",
      label: "Mega Deals",
      products: makeProductLine(row6BaseProducts, 260),
      animation: "animate-[scrollRight_450s_linear_infinite]",
      keyPrefix: "row6",
    },
  ];

  const productImage = (product: MovingProduct) => (
    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={(e) => {
        e.currentTarget.src =
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80";
      }}
      className="h-44 w-full object-cover"
    />
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden px-5 py-6 md:px-8 md:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(250,204,21,0.24),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.22),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.22),transparent_35%),linear-gradient(135deg,#020202,#0f0f0f,#2a1400)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="text-2xl font-black text-yellow-300 md:text-3xl">
            Sinzo
          </a>

          <div className="flex max-w-full gap-2 overflow-x-auto whitespace-nowrap text-xs font-bold md:flex-wrap md:justify-end md:gap-3 md:text-sm">
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
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              Why Sinzo
            </a>

            <a
              href="/sinzo-ecommerce"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              Sinzo E-Commerce
            </a>

            <a
              href="/faq"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              FAQ
            </a>

            <a
              href="/contact"
              className="rounded-full bg-white/10 px-3 py-2 md:px-4"
            >
              Contact
            </a>

            <a
              href="/register"
              className="rounded-full bg-yellow-400 px-3 py-2 font-black text-black md:px-4"
            >
              Registration
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-10 pt-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:pt-4">
          <div className="mx-auto w-full max-w-2xl text-center md:mx-0 md:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-yellow-300 md:text-sm">
              Going Live Soon
            </p>

            <div className="relative">
              <h1 className="text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
                <span className="bg-gradient-to-r from-yellow-100 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_42px_rgba(250,204,21,0.42)]">
                  Sinzo
                </span>
              </h1>

              <div className="mx-auto mt-3 h-1 w-full max-w-xl rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent md:mx-0" />

              <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-400/45 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 shadow-lg shadow-yellow-500/10 sm:px-5 sm:text-sm md:tracking-[0.2em]">
                <span>⚡</span>
                <span>Global E-Commerce Platform</span>
              </div>

              <p className="mx-auto mt-4 max-w-xl text-center text-xs font-black uppercase leading-6 tracking-[0.22em] text-yellow-300 md:mx-0 md:text-left md:text-sm md:tracking-[0.28em]">
                Factory Direct. India’s Smartest Price.
              </p>
            </div>

            <div className="mt-8 max-w-xl md:mt-10">
              <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h2>

              <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                {["India", "UAE", "Nepal", "US", "UK"].map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-yellow-400/35 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-widest text-yellow-200 shadow-lg shadow-yellow-500/5"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 max-w-xl rounded-[28px] border border-yellow-400/35 bg-yellow-400/10 px-5 py-5 text-center shadow-xl shadow-yellow-500/10 md:text-left">
              <p className="text-xl font-black leading-tight text-yellow-300 md:text-2xl">
                Up to 50%–70% Lower Prices
              </p>

              <p className="mt-1 text-sm font-black text-yellow-200 md:text-base">
                Than Other Platforms on All Products
              </p>

              <p className="mt-3 text-sm font-semibold leading-6 text-gray-300">
                By sourcing directly from factories and reducing unnecessary
                agents, importers, reseller margins and high platform fees.
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-gray-200 md:text-lg">
              Get ready for Sinzo. We are coming with millions of products,
              massive launch offers, exciting prices and a powerful shopping
              experience across multiple categories.
            </p>

            <div className="mt-7 grid max-w-xl grid-cols-4 gap-2 md:gap-3">
              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-yellow-400/35 bg-black/55 p-3 text-center md:rounded-3xl md:p-4"
                >
                  <h3 className="text-2xl font-black text-yellow-300 md:text-4xl">
                    {value}
                  </h3>
                  <p className="mt-1 text-[10px] font-bold uppercase text-gray-300 md:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 max-w-xl rounded-[28px] border border-yellow-300/45 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 p-5 text-black md:p-6">
              <p className="text-xs font-black uppercase tracking-widest md:text-sm">
                Grand Opening Offer
              </p>

              <h3 className="mt-2 text-3xl font-black md:text-4xl">
                7 Days Mega Launch Sale
              </h3>

              <p className="mt-3 text-base font-extrabold md:text-lg">
                We are coming to shake the online shopping market with massive
                deals in the first week.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="/register"
                className="rounded-full bg-yellow-400 px-7 py-3 font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-105 hover:bg-yellow-300 md:px-8 md:py-4"
              >
                Register Now
              </a>

              <a
                href="/why-sinzo"
                className="rounded-full border border-yellow-400/50 bg-black/40 px-7 py-3 font-black text-yellow-300 transition hover:bg-yellow-400 hover:text-black md:px-8 md:py-4"
              >
                Why Sinzo
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl md:max-w-none">
            <div className="relative overflow-hidden rounded-[38px] border-2 border-yellow-400/45 bg-black/60 p-3 md:rounded-[55px]">
              <img
                src="/founder-neelam-sharma.JPG"
                alt="Founder Neelam Sharma"
                className="h-[460px] w-full rounded-[28px] object-cover object-center md:h-[620px] md:rounded-[42px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-yellow-400/40 bg-black/80 p-4 text-center md:bottom-8 md:left-8 md:right-8 md:p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-300 md:text-sm">
                  Founder
                </p>
                <h3 className="text-2xl font-black md:text-3xl">
                  Neelam Sharma
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYPE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
            First Week Special
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            7 Days. Massive Deals. Big Savings.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            During the first 7 days, Sinzo will bring exciting opening offers
            across fashion, electronics, home, beauty, toys, shoes, bags,
            gaming products, books, tools, appliances and automobile products.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
            Multiple Categories
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Launch Week Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Sinzo is preparing millions of products for customers across
            multiple countries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-3xl border border-yellow-400/20 bg-white/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-2xl bg-black/70 px-3 py-2 text-2xl">
                  {category.emoji}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black">{category.name}</h3>
                <p className="mt-2 text-sm font-bold text-yellow-300">
                  Launch Week Offers
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOVING PRODUCTS */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-yellow-300">
            Massive Product Launch
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Millions of Products Are Coming Soon
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
            Fashion, beauty, bags, shoes, men clothes, toys, electronics,
            gaming, TV, furniture, sports, books, tools, baby products, home
            care, appliances and automobile products are coming soon.
          </p>
        </div>

        <div className="relative mt-14 space-y-10">
          {productRows.map((row) => (
            <div key={row.keyPrefix} className="overflow-hidden">
              <h3 className={`mb-4 text-xl font-black ${row.color}`}>
                {row.title}
              </h3>

              <div className={`flex w-max gap-5 ${row.animation}`}>
                {[...row.products, ...row.products].map((product, index) => (
                  <div
                    key={`${row.keyPrefix}-${product.id}-${index}`}
                    className={`w-44 shrink-0 overflow-hidden rounded-3xl border ${row.border} bg-white/5`}
                  >
                    {productImage(product)}
                    <div className="p-3 text-left">
                      <p className="truncate text-sm font-bold">
                        {product.name}
                      </p>
                      <p className={`text-xs font-bold ${row.color}`}>
                        {row.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[45px] border border-yellow-400/30 bg-gradient-to-r from-yellow-500 to-orange-500 p-10 text-center text-black">
          <h2 className="text-4xl font-black">For Any Enquiry Contact Me</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
            Have questions about Sinzo, launch offers, products or partnership?
            Contact us anytime.
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