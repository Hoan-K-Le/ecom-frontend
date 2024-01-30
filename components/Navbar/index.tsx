import React from "react";
import { logoIcon, cart } from "../svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-16 text-2xl">
      <div className="flex gap-4 items-center">
        <Link href="/">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Contact</Link>
      </div>

      <div>
        <p>Hoan's Site</p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/signup">Sign Up</Link>
        <Link href="#">{cart()}</Link>
      </div>
    </nav>
  );
}

export default Navbar;