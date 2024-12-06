import React from "react";
import Header from "@/components/Header";

const Disclosures = () => {
  return (
    <section>
      <div className="h-[100vh]">
        <div className="bg-disclosures-hero bg-cover bg-no-repeat bg-top xl:bg-center w-full h-[95vh] mb-10">
          <Header />
          <div className="w-full flex justify-center items-center h-4/5">
            <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-90">
              Our Company Ethics and Policies
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
        <div className="order-1 p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
          <h2 className="h2 text-center mb-5 underline underline-offset-8 decoration-2 decoration-accent">
            Privacy Policy
          </h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 lg:gap-10 lg:mt-10 text-center">
            <li>
              We have a "NO GOSSIP" privacy clause. You never have to worry
              about anyone knowing about what you feel are your own personal
              “body flaws" or anything else about you.
            </li>
            <li>
              What is discussed or shown during your session is no one's
              business but your own & we will always make you feel comfortable
              and safe.
            </li>
          </ul>
        </div>
        <div className="order-2 p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
          <h2 className="h2 text-center mb-5 underline underline-offset-8 decoration-2 decoration-accent">
            Pricing
          </h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 text-center">
            <li>All prices increase by $15 for tanning on major holidays.</li>
            <li>
              Touch Up prices are subject to increase based on each clients'
              individual needs.
            </li>
            <li>
              Party rates are strictly subject to the number of guests sprayed
              on that day.
            </li>
            <li>Prices are subject to change.</li>
          </ul>
        </div>
        <div className="order-3 lg:order-5 lg:col-span-2 lg:mx-16 p-4 py-6 lg:p-6 lg:py-8 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
          <h2 className="h2 text-center mb-5 underline underline-offset-8 decoration-2 decoration-accent">
            Minors and Pregnant Clients
          </h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col justify-center gap-6 text-center">
            <li>
              Although Spray Tanning is safe and natural, I ask that if you are
              pregnant or nursing to please consult with your doctor. If you are
              in your first trimester, a doctor's consent form is required.
            </li>
            <li>
              For individual sessions or tanning parties, all guests 16 years of
              age or younger must wear bottoms, have a signed consent form, and
              a parent / legal guardian must be present during the tanning
              process.
            </li>
          </ul>
        </div>
        <div className="order-4 p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
          <h2 className="h2 text-center mb-5 underline underline-offset-8 decoration-2 decoration-accent">
            Appointments
          </h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 lg:gap-8 lg:mt-8 text-center">
            <li>
              A $30 deposit is required via Venmo, Zelle, CashApp or PayPal.
            </li>
            <li>
              All services are by appointment only. We will always do our best
              to accommodate your schedule.
            </li>
            <li>We reserve the right to refuse service to anyone.</li>
          </ul>
        </div>
        <div className="order-5 lg:order-4 p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
          <h2 className="h2 text-center mb-5 underline underline-offset-8 decoration-2 decoration-accent">
            Cancellations and Rescheduling
          </h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 text-center">
            <li>
              A minimum of 48 hours notice before your appointment is required
              in order for 100% of your deposit to be refunded.
            </li>
            <li>
              If less than 48 hours from the time of your party, the deposit
              will be forfeited.
            </li>
            <li>
              If the party is rescheduled, the deposit will be held until it is
              completed.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Disclosures;
