import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="bg-contact-hero bg-cover bg-no-repeat bg-center w-full h-[85vh]">
        <Header />
        <div className="w-full flex justify-center items-center h-3/5">
          <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-6 xl:p-10 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85">
            Send Us a Message!
          </h2>
        </div>
      </div>
      <form className="container mx-auto">
        <div className="flex flex-col my-8 gap-8">
          <h2 className="h2">We love hearing from you</h2>
          <p className="p mx-5 text-center md:text-left">
            Ask a question, request an appointment, send a review, or give us a
            suggestion. I read every message I receive and love hearing from
            you. Anything you send here goes directly to the owner and will be
            kept private.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className=" text-sm/6 font-medium">
              First name
            </label>
            <div className="mt-2">
              <Input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className=" text-sm/6 font-medium">
              Last name
            </label>
            <div className="mt-2">
              <Input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className=" text-sm/6 font-medium">
              Email address
            </label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className=" text-sm/6 font-medium">
              Street address
            </label>
            <div className="mt-2">
              <Input
                id="street-address"
                name="street-address"
                type="text"
                autoComplete="street-address"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className=" text-sm/6 font-medium">
              City
            </label>
            <div className="mt-2">
              <Input
                id="city"
                name="city"
                type="text"
                autoComplete="address-level2"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className=" text-sm/6 font-medium">
              State / Province
            </label>
            <div className="mt-2">
              <Input
                id="region"
                name="region"
                type="text"
                autoComplete="address-level1"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className=" text-sm/6 font-medium">
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <Input
                id="postal-code"
                name="postal-code"
                type="text"
                autoComplete="postal-code"
              />
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="about" className=" text-sm/6 font-medium">
              About
            </label>
            <div className="mt-2">
              <Textarea id="about" name="about" rows={6} defaultValue={""} />
            </div>
            <p className="mt-3 text-sm/6 text-white/80">
              Tell me a bit about yourself and what you're looking for.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button variant="default" size="lg" className="my-10">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
