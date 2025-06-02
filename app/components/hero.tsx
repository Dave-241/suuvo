"use client";
import background from "@/public/landingPage/background.webp";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import ButtonCtn from "./button";

const Hero = () => {
  return (
    <>
      <div className="w-full  h-[300vh] flex flex-col pt-[10rem] relative ">
        <div className=" absolute top-0 flex gap-[2rem]  translate-x-[-50%] left-[50%] h-full  w-[100%]">
          <div className="  w-full absolute z-[10] h-[50%]">
            <Image
              src={background}
              alt="background"
              fill
              className="object-cover"
            />
            <div className=" w-full   absolute bottom-[-25%] h-[70%]  bg-white blur-[100px]"></div>
          </div>
          <div className="w-full h-full blur-[150px]   bg-[#DDE5FE] rounded-b-full"></div>
          <div className="w-full h-full  blur-[150px]   bg-[#FDDBFF] rounded-b-full"></div>
        </div>

        <div
          className={` z-[10] items-center flex flex-col gap-[1rem] text-center ${Sf_pro_medium.className}`}
        >
          <h1
            className={`text-center text-[45px] leading-[120%] md:text-[80px] md:leading-[120%] z-[10]  `}
          >
            The Future of <br /> Social Media
          </h1>
          <p className=" md:px-0 px-[10%]">
            {" "}
            A new way to connect, create, and engage. Experience a social media
            platform that <br className="md:block hidden" /> goes beyond
            likes—built for real connections, privacy, and engagement.
          </p>
          <ButtonCtn />
        </div>
      </div>
    </>
  );
};

export default Hero;
