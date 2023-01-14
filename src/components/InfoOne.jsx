export default function InfoOne() {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="py-16 md:py-24 inner-container flex flex-col md:flex-row items-center justify-between md:space-x-16">
        <div className="flex-1">
          <img className="object-fit" src="/assets/healthcare.png" alt="" />
        </div>

        <div className="mt-4 md:mt-0 text-secondary flex-1 space-y-4 text-center md:text-left">
          <h2 className="font-bold text-2xl md:text-3xl">Personalized healthcare</h2>
          <p className="text-[#57585D] md:w-4/5">
            Mediq-i ensures that everyone, without distinction of region,
            political belief, religion or socio-economic background enjoys the
            highest attainable standard of health.
          </p>
        </div>
      </div>
    </section>
  );
}
