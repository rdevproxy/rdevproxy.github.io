"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white mb-20 p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            $whoami <br /> Cybersecurity Professional
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I am Renz Gomez, a Penetration Tester, Ethical Hacker and Incident Responder based in the Philippines. Get a glimpse of my journey in cybersecurity where I uncover vulnerabilities, strengthen defenses, and ensure digital resilience for organization.
          </Typography>
        
        </div>
        <Image
          width={1024}
          height={1024}
          alt="hero-image"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
