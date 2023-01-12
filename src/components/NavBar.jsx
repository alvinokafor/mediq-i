import { useState } from "react";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center font-medium py-6">
        <img src="/assets/brand.png" alt="Logo" />

        <ul className="hidden md:flex items-center space-x-10 text-[#001133]">
          <li>Home</li>
          <li>About</li>
          <li>Career</li>
          <li>Blog</li>
        </ul>

        <div className="hidden md:block space-x-5">
          <button className="text-[#001133]">Log in</button>
          <button className="bg-[#181B80] py-2.5 px-6 text-white rounded-lg">
            Sign up
          </button>
        </div>

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          <img src="/assets/menu.svg" alt="" />
        </button>
      </section>

      {mobileMenu && (
        <div className="md:hidden z-20 absolute bg-white top-[80px] w-[325px]">
          <ul className="text-[#001133] font-medium space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>
              <button className="text-[#001133]">Log in</button>
            </li>
            <li>
              {" "}
              <button className="bg-[#181B80] py-1 px-1.5 text-white rounded-lg">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
