import React from "react";
import ContactButton from "@/components/ContactButton";
import Stats from "@/components/Stats";
import Header from "@/components/Header";

const Home = () => {
  return (
    <section className="h-full">
      <div className="h-[100vh]">
        <div className="bg-home-image bg-cover bg-no-repeat bg-center w-full h-[65vh]">
          <Header />
          <div className="w-full flex justify-center items-center h-4/5 lg:h-3/5">
            <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-95">
              Natural Beauty Starts Here
            </h2>
          </div>
        </div>
        <div className="mb-7 py-6 lg:py-10 text-center">
          <Stats />
          <h2 className="h2 font-secondary mt-14 sm:mt-16 lg:mt-20">
            Welcome to No Bed Head Tanning
          </h2>
          <div className="border-[1px] border-accent my-4 md:my-8 mx-5 md:mx-32 lg:mx-64"></div>
        </div>
      </div>
      <div className="h-full mx-auto px-[30px]">
        <div className="flex flex-col text-center">
          <p className="mx-2 xl:mx-20 text-lg font-light tracking-wider leading-loose">
            No Bed Head Tanning brings the perfect glow directly to you with our
            convenient mobile service in Cornwall, NY. We believe that looking
            your best shouldn&#39;t come at the expense of your health, which is
            why we pride ourselves on using only organic, skin-loving products
            that deliver a beautiful, even tan without any harsh chemicals.
            <br /> <br /> Our expert airbrush technique is designed to enhance
            your natural beauty while keeping your skin nourished and radiant.
            Let us help you glow with confidence and ease, wherever you are.
          </p>
        </div>

        <div className="flex flex-col items-center pt-8 pb-16">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
