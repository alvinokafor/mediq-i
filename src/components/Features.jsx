import React from "react";

export default function Features() {
  return (
    <section className="bg-[#1D2238] text-white py-16 md:py-24 mt-24">
      <div className="outer-container flex flex-col-reverse md:flex-row items-center justify-between">
        <div>
          <h5 className="text-grey text-sm md:text-base font-semibold mb-4">
            FEATURES
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold md:w-3/5">
            One stop shop for telehealth services
          </h4>

          <div className="flex flex-col md:flex-row mt-10 text-sm md:text-base space-y-4 md:space-y-0">
            <ul className="space-y-4">
              <li className="flex md:w-3/5">
                {" "}
                <img
                  className="mr-2"
                  src="/assets/tick-circle.svg"
                  alt=""
                />{" "}
                <span>Quick view of medical centers closest to you</span>
              </li>
              <li className="md:w-3/4 flex">
                <img className="mr-2" src="/assets/tick-circle.svg" alt="" />{" "}
                <span>
                  Online bookings and consultations with medical professionals
                </span>
              </li>
              <li className="flex">
                <img className="mr-2" src="/assets/tick-circle.svg" alt="" />
                <span>In-house visits</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex">
                <img className="mr-2" src="/assets/tick-circle.svg" alt="" />
                <span>Online prescriptions and drug store</span>
              </li>
              <li className="flex">
                <img
                  className="inline mr-2"
                  src="/assets/tick-circle.svg"
                  alt=""
                />
                <span>In app pill reminder</span>
              </li>
              <li className="flex">
                <img className="mr-2" src="/assets/tick-circle.svg" alt="" />
                <span>Health tips</span>
              </li>
              <li className="flex">
                <img className="mr-2" src="/assets/tick-circle.svg" alt="" />
                <span>Emergency calls</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[325px] h-[400px] md:w-[462px] md:h-[558px] mb-4 md:mb-0">
          <img src="/assets/app-preview.png" alt="" />
        </div>
      </div>
    </section>
  );
}
