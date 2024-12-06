import Header from "@/components/Header";
import NewPromCarousel from "@/components/NewPromCarousel";
import NewTanLineCarousel from "@/components/NewTanLineCarousel";
import NewWeddingCarousel from "@/components/NewWeddingCarousel";
import React from "react";

const Gallery = () => {
  return (
    <section>
      <div className="h-[100vh]">
        <div className="bg-gallery-hero bg-cover bg-no-repeat bg-right lg:bg-center w-full h-[85vh]">
          <Header />
          <div className="w-full flex justify-center items-center h-3/5">
            <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-lg opacity-90">
              My Clients
            </h2>
          </div>
        </div>
        <div className="flex flex-col h-[15vh] justify-center ml-[7%] md:ml-[10%]">
          <h2 className="h2 text-2xl md:text-3xl lg:text-4xl">
            A few of the events we tan for . . .
          </h2>
        </div>
      </div>
      <div className="mx-5 flex flex-col mt-10 mb-20">
        {/* Prom and Homecoming  */}
        <div className="flex w-full justify-around items-center">
          <div className="bg-prom-lights bg-cover bg-no-repeat bg-right md:bg-center w-1/3 xl:w-1/4 h-[300px] md:h-[380px] mb-20">
            <div className="w-full flex justify-center items-center h-full">
              <h2 className="w-fit mx-[10%] font-primary text-white font-normal text-center p-8 px-4 md:px-3/5 bg-stone-500/90 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85">
                Prom and Homecoming
              </h2>
            </div>
          </div>
          <div className="w-3/5 xl:w-3/4">
            <NewPromCarousel />
          </div>
        </div>
        {/* Weddings  */}
        <div className="flex w-full justify-around items-center">
          <div className="bg-wedding-thumbnail bg-cover bg-no-repeat bg-center lg:bg-center w-1/3 xl:w-1/4 h-[300px] md:h-[380px] mb-20">
            <div className="w-full flex justify-center items-center h-full">
              <h2 className="w-fit mx-[10%] font-primary text-white font-normal text-center p-8 bg-stone-500/90 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85">
                Weddings
              </h2>
            </div>
          </div>
          <div className="w-3/5 xl:w-3/4">
            <NewWeddingCarousel />
          </div>
        </div>
        {/* Before and After  */}
        <div className="flex w-full justify-around items-center">
          <div className="bg-before-and-after bg-cover bg-no-repeat bg-center lg:bg-center w-1/3 xl:w-1/4 h-[300px] md:h-[380px] mb-20">
            <div className="w-full flex justify-center items-center h-full">
              <h2 className="w-fit mx-[10%] font-primary text-white font-medium text-center p-8 bg-stone-500/90 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85">
                Before and After
              </h2>
            </div>
          </div>
          <div className="w-3/5 xl:w-3/4">
            <NewTanLineCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
