import Header from "@/components/Header";
import React from "react";

const tanningTips = () => {
  return (
    <section>
      <div className="h-[100vh]">
        <div className="bg-tanning-tips-hero bg-cover bg-no-repeat bg-top xl:bg-center w-full h-[85vh]">
          <Header />
          <div className="w-full flex justify-center items-center h-4/5">
            <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-90">
              What to Expect
            </h2>
          </div>
        </div>
        <div className="h-[15vh] flex items-center ml-5 md:ml-8 lg:ml-16 xl:ml-24">
          <h1 className="h2 text-2xl sm:text-3xl">
            A brief word about spray tans . . .
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" mx-[3%] flex flex-col justify-center gap-10  md:gap-16">
          <div className="px-4 py-2 lg:p-6 lg:hover:scale-105 lg:hover:text-white rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300">
            <p className="p text-center my-6 font-light">
              Spray tans are a group effort between the client and the artist. A
              long lasting, high quality tan depends on both the skill of the
              artist and the commitment of the client.
            </p>
            <p className="p text-center my-6 font-light">
              We will provide you with everything you need to know to allow your
              tan to be as high quality and long lasting as possible. Of course,
              we will answer any and all questions you may have about the
              process. However, if you are not able to do your part, we cannot
              ensure flawless results.
            </p>
            <p className="p text-center my-6 font-light">
              The prep work before the tan (exfoliating, shaving, moisturizing,
              etc.) and the aftercare once the tan is completed (moisturizing,
              proper bathing technique, etc.) will heavily influence the quality
              and duration of the tan.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <p className="text-center w-fit font-bold text-xl p-5 rounded-lg bg-stone-500/85">
              AVOID DOVE SOAP AT ALL TIMES!
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-14 mb-10">
          <span className="border-[1px] w-11/12 border-accent"></span>
        </div>
        <div className=" mt-12">
          <h2 className="h2 w-full text-center my-6">Before the Tan</h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 text-center">
            <li>
              Always shave and exfoliate the day before your appointment. If you
              don't, you risk having a blotchy, uneven result.
            </li>
            <li>
              Make sure you do not have any lotions, perfumes, deodorant, or
              makeup on the day of your appointment. This could prevent the
              solution from penetrating your skin and can cause an uneven or
              discolored outcome.
            </li>
            <li>
              Moisturizing prolongs the skin renewal cycle, resulting in a
              longer lasting sunless tan.
            </li>
            <li>
              Wear dark loose fitting clothes! No yoga pants, white clothes,
              jeans or tight shoes.
            </li>
            <li>
              Do not come in with old spray tan still on your skin. It is not
              going to magically disappear after a new spray tan. It will
              actually cause it to look worse & stick out more.
            </li>
            <li>
              Start moisturizing & drinking plenty of water a few days before
              your appointment. Hydrated skin holds a spray tan longer. If your
              skin is dry, your tan will not last as long.
            </li>
            <li>
              Do your nails, waxing, & lashes at least 24 hours BEFORE your
              appointment. Never after! A spray tan should be the last thing you
              do.
            </li>
            <li>
              Avoid exfoliants & products with mineral oil the night before your
              appointment.
            </li>
          </ul>
          <div className="w-full my-16 flex justify-center">
            <p className="text-center w-fit font-bold text-xl p-5 rounded-lg bg-stone-500/85">
              AVOID DOVE SOAP AT ALL TIMES!
            </p>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <span className="border-[1px] w-11/12 border-accent"></span>
        </div>
        <div className="mb-16 mt-12">
          <h2 className="h2 w-full text-center my-6">After the Tan</h2>
          <ul className="list-disc list-inside marker:text-accent flex flex-col gap-6 text-center">
            <li>
              Do not shower or exercise for 6-8 hours after your tan. Shower
              with a body wash or shower gel. Bar soaps are not to be used! When
              you shower for the first time, you will see a brown residue wash
              off. This is the temporary bronzer or color guide that was
              applied.
            </li>
            <li>
              When showering, use hands instead of a washcloth, loofa or, mitt.
              Pat dry with a towel instead of rubbing. Do not shave with a dull
              razor.
            </li>
            <li>
              Moisturize, moisturize, moisturize!!! 2-3 times a day for maximum
              color retention. Hydrated skin makes your tan last longer & slows
              down the process of natural skin exfoliation. Use alcohol free
              moisturizer. Alcohol based products are drying to the skin and can
              cause tan to fade quicker and unevenly. i.e.: Banana Boat after
              sun care
            </li>
            <li>
              Avoid anything that can exfoliate your skin such as long, hot
              baths, soaking in hot tubs, exposure to chlorinated water, hair
              removal products (including waxing), acne products, masks and
              scrubs, skin renewing products or exfoliating gloves and sponges.
            </li>
            <li>
              When swimming or soaking in a hot tub, use a thick waterproof
              sunscreen to help seal tan in. This will slow down the fading
              process.
            </li>
            <li>
              Do not sit directly on leather, light colored seats, or furniture
              after your tanning session. A towel is recommended.
            </li>
          </ul>
          <div className="w-full mt-10 flex justify-center">
            <p className="text-center w-fit font-bold text-xl p-5 rounded-lg bg-stone-500/85">
              AVOID DOVE SOAP AT ALL TIMES!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default tanningTips;
