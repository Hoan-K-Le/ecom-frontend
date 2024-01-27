import React from "react";
import { logoIcon, cart } from "../svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="bg-black text-white text-xs  flex gap-2 justify-end px-4 py-2">
        <Link href="#">Sell on Hoan's Site</Link>
        <Link href="#">Help & Contact</Link>
      </div>
      <div className="flex justify-between p-5 items-center">
        {/* logo */}
        <div>
          <Link href="/">{logoIcon()}</Link>
          {/* search engine */}
        </div>
        <input
          type="search"
          placeholder="Search..."
          className=" border bg-inherit rounded p-1"
        />
        {/* cart signin || profile pic */}
        <div className="flex items-center gap-2">
          <Link href="/login">Log In</Link>
          <button>{cart()}</button>
        </div>
      </div>

      <div>{/*subnavbar? center, Men, Women, Kids,   */}</div>
    </nav>
  );
}

export default Navbar;
