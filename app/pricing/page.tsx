"use client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: 29,
    buttonText: "Start Free Trial",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 displays",
      "Basic content scheduling",
      "Email support",
      "1 GB storage",
      "Standard templates",
      "Manual uploads",
    ],
  },
  {
    title: "Professional",
    monthlyPrice: 99,
    buttonText: "Start Free Trial",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 displays",
      "Advanced scheduling",
      "Priority support",
      "50 GB storage",
      "Custom branding",
      "API access",
      "Analytics dashboard",
      "Team collaboration",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 299,
    buttonText: "Start Free Trial",
    popular: false,
    inverse: false,
    features: [
      "Up to 200 displays",
      "Full scheduling suite",
      "24/7 phone support",
      "500 GB storage",
      "White label options",
      "Advanced API",
      "Real-time analytics",
      "Multi-location management",
      "Custom integrations",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 999,
    buttonText: "Contact Sales",
    popular: false,
    inverse: false,
    features: [
      "Unlimited displays",
      "Enterprise scheduling",
      "Dedicated account manager",
      "Unlimited storage",
      "Full white label",
      "Enterprise API",
      "Advanced analytics & reporting",
      "Multiple workspace support",
      "Custom development",
      "SLA guarantee",
      "On-premises deployment",
    ],
  },
  {
    title: "Agency",
    monthlyPrice: 499,
    buttonText: "Start Free Trial",
    popular: false,
    inverse: false,
    features: [
      "Up to 500 displays",
      "Multi-client management",
      "Reseller support",
      "1 TB storage",
      "Agency branding",
      "Full API access",
      "Client reporting tools",
      "White label portal",
      "Custom templates",
      "Priority onboarding",
    ],
  },
  {
    title: "Developer",
    monthlyPrice: 49,
    buttonText: "Start Free Trial",
    popular: false,
    inverse: false,
    features: [
      "Up to 10 displays",
      "Full API access",
      "Developer documentation",
      "10 GB storage",
      "Sandbox environment",
      "Community support",
      "Webhook support",
      "REST & GraphQL APIs",
    ],
  },
];

export default function PricingPage() {
  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Transparent Pricing for Every Scale
            </h2>
            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
              Choose the perfect plan for your digital signage needs. Scale up
              anytime with no long-term commitments.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center lg:flex-wrap">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                features,
                inverse,
              }) => (
                <div
                  key={title}
                  className={twMerge(
                    "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                    inverse === true && "border-black bg-black text-white",
                    popular && !inverse && "ring-2 ring-blue-500"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          animate={{
                            backgroundPositionX: "-100%",
                          }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        >
                          Most Popular
                        </motion.span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span className="tracking-tight font-bold text-black/50">
                      /month
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white w-full mt-[30px]",
                      inverse && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm flex items-center gap-4"
                      >
                        <Image
                          src="/assets/check.svg"
                          alt="Check Icon"
                          width={16}
                          height={16}
                          className="h-6 w-6"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          {/* FAQ-style section */}
          <div className="mt-24 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-gray-600">
                  Yes, upgrade or downgrade your plan at any time. Changes take
                  effect on your next billing cycle.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-600">
                  We accept all major credit cards, bank transfers, and digital
                  wallets. Annual billing is available for all plans.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  Is there a free trial?
                </h4>
                <p className="text-gray-600">
                  Yes, all plans include a 14-day free trial. No credit card
                  required to get started.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  What counts as a display?
                </h4>
                <p className="text-gray-600">
                  One display = one connected screen or signage unit managed
                  through SignageHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
