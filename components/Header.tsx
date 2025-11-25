import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 px-12">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/AdsOnTV.jpg"
              alt="SignageHub logo"
              height={40}
              width={40}
            />
            <Image
              src="/assets/menu.svg"
              alt="Menu Icon"
              width={16}
              height={16}
              className="h-5 w-5 md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="/pricing">Pricing</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Log In
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
