"use client";

import { useEffect, useState } from "react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyXx-Wh9p5eCbSsbEahNDBy9kYuzMi3jfhA7rYqZ-F5p0ztnOjZSrWuA_XIYn5DPd9jlw/exec";

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [utmData, setUtmData] = useState({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    pageUrl: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setUtmData({
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      pageUrl: window.location.href,
    });
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("source", "Sinzo Registration Page - 20 Percent Bonus");
    formData.append("bonusOffer", "Register Now and Get More 20% Bonus");
    formData.append("utmSource", utmData.utmSource);
    formData.append("utmMedium", utmData.utmMedium);
    formData.append("utmCampaign", utmData.utmCampaign);
    formData.append("pageUrl", utmData.pageUrl);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setIsRegistered(true);
      form.reset();

      if (typeof window !== "undefined" && "gtag" in window) {
        // @ts-expect-error gtag is loaded from Google Analytics
        window.gtag("event", "sinzo_registration", {
          event_category: "lead",
          event_label: "registration_page_20_percent_bonus",
        });
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <section className="relative min-h-screen overflow-hidden px-5 py-6 md:px-8 md:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(250,204,21,0.24),transparent_26%),radial-gradient(circle_at_85%_15%,rgba(239,68,68,0.22),transparent_25%),radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.22),transparent_35%),linear-gradient(135deg,#020202,#0f0f0f,#2a1400)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="absolute inset-0 bg-black/40" />

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
              href="/register"
              className="rounded-full bg-yellow-400 px-3 py-2 font-black text-black md:px-4"
            >
              Registration
            </a>
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl grid-cols-1 items-center gap-10 pt-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
            <p className="mb-4 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-300">
              Early Access Registration
            </p>

            <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl">
              Register Now
              <span className="mt-3 block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Get More 20% Bonus
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-gray-200 md:text-lg">
              Join Sinzo before launch and get early access updates, first-week
              sale alerts and special launch bonus information.
            </p>

            <div className="mt-7 rounded-[32px] border border-yellow-400/35 bg-yellow-400/10 p-5 shadow-xl shadow-yellow-500/10">
              <p className="text-2xl font-black text-yellow-300">
                🎁 Special Registration Offer
              </p>

              <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
                Register & Get More 20% Bonus
              </h2>

              <p className="mt-3 text-sm font-semibold leading-7 text-gray-300">
                Early registered users may receive special launch benefits,
                priority updates and bonus offers during the first Sinzo launch
                sale.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-yellow-400/25 bg-black/45 p-5 text-center">
                <p className="text-3xl">⚡</p>
                <h3 className="mt-2 font-black text-yellow-300">
                  Early Access
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-300">
                  Get launch updates first.
                </p>
              </div>

              <div className="rounded-3xl border border-yellow-400/25 bg-black/45 p-5 text-center">
                <p className="text-3xl">🎁</p>
                <h3 className="mt-2 font-black text-yellow-300">20% Bonus</h3>
                <p className="mt-2 text-xs leading-5 text-gray-300">
                  Special bonus offer for early users.
                </p>
              </div>

              <div className="rounded-3xl border border-yellow-400/25 bg-black/45 p-5 text-center">
                <p className="text-3xl">🛒</p>
                <h3 className="mt-2 font-black text-yellow-300">
                  Launch Deals
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-300">
                  First-week sale alerts.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="rounded-[42px] border border-yellow-400/30 bg-black/60 p-5 shadow-2xl shadow-yellow-500/10 backdrop-blur md:p-8">
              {isRegistered ? (
                <div className="rounded-[32px] border border-green-400/35 bg-green-500/15 p-8 text-center">
                  <p className="text-6xl">✅</p>

                  <h2 className="mt-5 text-3xl font-black text-green-200 md:text-4xl">
                    Registration Successful
                  </h2>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-green-100">
                    Thank you for registering with Sinzo. Your details are saved
                    successfully. We will notify you when Sinzo launches.
                  </p>

                  <div className="mt-6 rounded-3xl bg-black/35 p-5">
                    <p className="text-xl font-black text-yellow-300">
                      Your 20% Bonus Interest Is Saved 🎁
                    </p>
                    <p className="mt-2 text-sm text-gray-300">
                      Keep watching Sinzo launch updates.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsRegistered(false)}
                    className="mt-7 rounded-full bg-white px-7 py-3 font-black text-black transition hover:scale-105"
                  >
                    Register Another Person
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-center">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
                      Sinzo Early Member
                    </p>

                    <h2 className="mt-3 text-3xl font-black md:text-4xl">
                      Complete Registration
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-gray-300">
                      Register now and get more 20% bonus launch benefit.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-black text-yellow-200">
                          Full Name
                        </label>

                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="Enter your name"
                          className="w-full rounded-2xl border border-yellow-400/20 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-black text-yellow-200">
                          Mobile Number
                        </label>

                        <input
                          type="tel"
                          name="mobileNumber"
                          required
                          placeholder="Enter mobile number"
                          className="w-full rounded-2xl border border-yellow-400/20 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-black text-yellow-200">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="emailAddress"
                          required
                          placeholder="Enter email address"
                          className="w-full rounded-2xl border border-yellow-400/20 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-black text-yellow-200">
                          Country
                        </label>

                        <select
                          name="country"
                          required
                          className="w-full rounded-2xl border border-yellow-400/20 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                        >
                          <option value="">Select country</option>
                          <option value="India">India</option>
                          <option value="UAE">UAE</option>
                          <option value="Nepal">Nepal</option>
                          <option value="US">US</option>
                          <option value="UK">UK</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-yellow-200">
                        Interested Category
                      </label>

                      <select
                        name="interestedCategory"
                        required
                        className="w-full rounded-2xl border border-yellow-400/20 bg-white px-4 py-3 text-sm font-semibold text-black outline-none focus:border-yellow-400"
                      >
                        <option value="">Select category</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Toys">Toys</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Mobile Accessories">
                          Mobile Accessories
                        </option>
                        <option value="All Products">All Products</option>
                      </select>
                    </div>

                    <input
                      type="hidden"
                      name="bonusOffer"
                      value="Register Now and Get More 20% Bonus"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 px-8 py-4 text-base font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Registering..."
                        : "Register Now & Get 20% Bonus"}
                    </button>

                    <p className="text-center text-xs leading-5 text-gray-400">
                      By registering, you agree to receive Sinzo launch updates,
                      early access offers and launch bonus information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}