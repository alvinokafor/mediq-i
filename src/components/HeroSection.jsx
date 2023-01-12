export default function HeroSection() {
  return (
    <section className="z-10 relative">
      <img
        className="hidden md:block z-10 absolute"
        src="/assets/hero-bg.svg"
        alt=""
      />
      <div className="outer-container flex flex-col-reverse items-center py-6 md:flex-row">
        <div className="z-20 text-center md:text-left">

          <h1 className="text-3xl md:text-7xl text-secondary font-bold md:w-4/5">
            Reliable and affordable telehealth solution
          </h1>

          <p className="mt-6 md:w-[55%]">
            Mediq-i provides you with healthcare services from trusted, licensed
            professionals.{" "}
          </p>

          <button className="hover:opacity-90 transition-all duration-100 cursor-pointer mt-8 py-3 px-8 text-white font-medium bg-primary rounded-lg md:py-4 md:px-12 md:mt-12">
            Get Started
          </button>
        </div>

        <img
          className="z-20 hidden md:block"
          src="/assets/hero-pic.png"
          alt=""
        />
      </div>
    </section>
  );
}
