import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href={"/contact"}>
      <Button
        variant="default"
        size="lg"
        className="rounded-full bg-accent-hover hover:bg-accent"
      >
        Book Now
      </Button>
    </Link>
  );
};

export default ContactButton;
