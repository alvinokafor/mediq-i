import React from "react";

export default function Benefits() {
  return (
    <section className="bg-[#1D2238] text-white py-16 md:py-24">
      <div className="outer-container flex flex-col-reverse md:flex-row justify-between items-center">
        <div>
          <h5 className="text-grey text-sm md:text-base font-semibold mb-4">
            BENEFITS
          </h5>
          <h4 className="text-3xl md:text-5xl font-bold md:w-4/5 mb-10">
            Fast, reliable and secure healthcare services
          </h4>

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
              <span>Health tips, emergency calls</span>
            </li>
          </ul>
        </div>

        {/* <div className="w-[325px] h-[400px] md:w-[617px] md:h-[406px] mb-4 md:mb-0"> */}
          <img
            className="md:w-[617px] md:h-[406px] mb-4 md:mb-0"
            src="/assets/benefits.png"
            alt=""
          />
      
      </div>
    </section>
  );
}
