import React from "react";

export default function WaitList() {
  return (
    <section className="inner-container bg-primary text-white rounded-[15px] py-12 md:py-[72px] mt-10 mb-24">
      <h3 className="font-bold text-2xl md:text-4xl text-center mx-auto md:w-3/6 mb-9">
        Join the waitlist to be notified once we go live!
      </h3>

      <form className="text-center bg-transparent py-2 px-[18px] w-[290px] md:w-[349px] border border-white mx-auto rounded-lg font-sm">
        <input className="outline-none bg-transparent mr-2" />
        <button className="bg-white text-secondary py-1 px-2 rounded-lg font-medium">Submit</button>
      </form>
    </section>
  );
}
