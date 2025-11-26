import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center px-12">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src="/assets/AdsOnTV.png"
            alt="SignageHub logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <Link href="/pricing">Pricing</Link>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <Image
            src="/assets/social-x.svg"
            alt="Social X"
            width={16}
            height={16}
          />
          <Image
            src="/assets/social-insta.svg"
            alt="Social Instagram"
            width={16}
            height={16}
          />
          <Image
            src="/assets/social-linkedin.svg"
            alt="Social Linkedin"
            width={16}
            height={16}
          />
          <Image
            src="/assets/social-pin.svg"
            alt="Social Pinterest"
            width={16}
            height={16}
          />
          <Image
            src="/assets/social-youtube.svg"
            alt="Social Youtube"
            width={16}
            height={16}
          />
        </div>
        <p className="mt-6">
          &copy; 2025 SignageHub, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
