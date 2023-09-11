import Link from "next/link";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { PiCaretUpBold } from "react-icons/pi";

export default function Footer() {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations",
  ];
  return (
    <div className="px-20 border-t border-t-gray-200 py-4 flex justify-between w-full tex-sm z-50 bg-white items-center">
      <ul className="flex gap-3 font-normal">
        <li>&copy; {new Date().getFullYear()} Shortlet Naija Inc</li>
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="capitalize">
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="flex items-center gap-2 cursor-pointer">
          <FiGlobe /> English (US)
        </li>
        <li className="cursor-pointer">₦ NGN</li>
        <li className="flex items-center gap-2 cursor-pointer">
          Support & Resources <PiCaretUpBold />
        </li>
      </ul>
    </div>
  );
}
