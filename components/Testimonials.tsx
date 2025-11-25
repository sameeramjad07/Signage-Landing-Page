"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "SignageHub has transformed how we communicate with customers across our 50 retail locations. Content updates that used to take hours now take minutes.",
    imageSrc: "/assets/avatar-1.png",
    name: "Sarah Anderson",
    username: "@sarahretail",
  },
  {
    text: "The analytics dashboard gives us real insights into customer engagement. We've increased in-store sales by 25% using targeted displays.",
    imageSrc: "/assets/avatar-2.png",
    name: "Mike Johnson",
    username: "@mikej_business",
  },
  {
    text: "Managing 200+ digital signs across multiple states is now effortless. The scheduling features save our team countless hours weekly.",
    imageSrc: "/assets/avatar-3.png",
    name: "Jennifer Lee",
    username: "@jennifersignage",
  },
  {
    text: "We switched from 5 different software tools to SignageHub. The consolidation alone has reduced our tech overhead significantly.",
    imageSrc: "/assets/avatar-4.png",
    name: "David Chen",
    username: "@davidtech",
  },
  {
    text: "The customer support team is fantastic. Whenever we had questions, they resolved them immediately. Best SaaS experience we've had.",
    imageSrc: "/assets/avatar-5.png",
    name: "Lisa Martinez",
    username: "@lisamkt",
  },
  {
    text: "SignageHub's API integration allowed us to connect it seamlessly with our existing systems. Highly recommend for enterprise deployments.",
    imageSrc: "/assets/avatar-6.png",
    name: "Robert White",
    username: "@rwhite_enterprise",
  },
  {
    text: "The mobile app is a game-changer. I can update displays from anywhere, which is crucial for managing emergency notifications.",
    imageSrc: "/assets/avatar-7.png",
    name: "Amanda Foster",
    username: "@amandadigital",
  },
  {
    text: "Cost savings have been incredible. We eliminated manual display management and reduced downtime from 10 hours/month to nearly zero.",
    imageSrc: "/assets/avatar-8.png",
    name: "Thomas Hall",
    username: "@thomashall_ops",
  },
  {
    text: "The built-in compliance tools help us meet regulatory requirements across different regions. Peace of mind at scale.",
    imageSrc: "/assets/avatar-9.png",
    name: "Victoria Brown",
    username: "@vbrown_compliance",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 px-12"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div
                  className="p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
                  key={username}
                >
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Testimonials
            </div>
          </div>

          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Loved by Digital Signage Professionals
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            From small retail stores to enterprise deployments, businesses trust
            SignageHub to manage their digital displays and drive engagement.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
