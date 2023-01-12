import { useState } from "react";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <section className="outer-container flex justify-between items-center font-medium py-6">
        <img src="/assets/brand.png" alt="Logo" />

        <ul className="hidden md:flex items-center space-x-10 text-secondary">
          <li>Home</li>
          <li>About</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>

        <div className="hidden md:block space-x-5">
          <button className="text-secondary">Log in</button>
          <button className="bg-primary py-2.5 px-6 text-white rounded-lg">
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
        <div className="md:hidden z-20 absolute bg-white top-[80px] w-full px-6">
          <ul className="text-[#001133] font-medium space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>
              <button className="text-secondary">Log in</button>
            </li>
            <li>
              {" "}
              <button className="bg-primary py-1 px-1.5 text-white rounded-lg">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
