"use client";
import background from "@/public/landingPage/background.webp";
import phone from "@/public/landingPage/phone.webp";
import friendsRight from "@/public/landingPage/friendsRight.webp";
import avater from "@/public/landingPage/avater.webp";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import ButtonCtn from "./button";

const Hero = () => {
  return (
    <>
      <div className="w-full  h-[300vh] items-center flex flex-col pt-[10rem] relative ">
        <div className=" absolute top-0 flex gap-[2rem]  translate-x-[-50%] left-[50%] h-full  w-[100%]">
          <div className="  w-full absolute z-[10] h-[50%]">
            <Image
              src={background}
              alt="background"
              fill
              className="object-cover"
            />
            <div className=" w-full   absolute bottom-[-25%] h-[70%]  bg-white blur-[200px]"></div>
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

        <div className="h-[100vh] sticky w-[20%]  border2 left-[50%] translate-x-[-50%] top-0 z-[10] ">
          <Image
            src={phone}
            alt="phone"
            className="  absolute top-[50%] translate-y-[-50%] w-full"
          />
        </div>

        <div className="border2 w-full md:max-w-[90%] flex z-[10] mt-[-80vh] ">
          <div className="border2 w-full h-[40rem] gap-[4rem] flex flex-col">
            <div className="aspect-video border2"></div>
            <div className={` flex  gap-3 ${Sf_pro_bold.className}`}>
              <div className="w-[7rem] aspect-square rounded-[100%]">
                <Image
                  src={avater}
                  alt="avater"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col w-full  justify-between">
                <p className="text-xl opacity-70">Hello John Alexis 👋</p>
                <div className="flex gap-1 cursor-pointer  text-[#BE8469] group">
                  <button className="rounded-full group-hover:bg-[#BE8469] group-hover:text-white  px-4 py-3 bg-white shadow-md">
                    Start live session{" "}
                  </button>
                  <div className="h-full group-hover:bg-[#BE8469] group-hover:text-white aspect-square text-2xl bg-white flex justify-center items-center shadow-md rounded-full">
                    <i className="bi bi-arrow-right "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border2 w-full h-[40rem]"></div>
          <div className="border2 w-full  gap-[4rem] flex flex-col">
            <div className="w-[15rem] rounded-[25px] justify-center pt-[3%] relative flex overflow-hidden aspect-[1/1] ">
              <Image
                src={friendsRight}
                alt="friendsRight"
                className="w-full h-full absolute top-0 left-0 object-cover"
              />
              <p
                className={`${Sf_pro_bold.className} text-black/40 z-[10] text-center `}
              >
                Add up your close <br />{" "}
                <span className="text-black">friends</span> &{" "}
                <span className="text-black">community</span>
              </p>
            </div>

            <div className=" flex  bg-white rounded-[25px] w-fit gap-3  px-7 py-10">
              <div className=" bg-gradient-to-b from-black w-[2.5px]"></div>
              <div className=" flex flex-col  text-sm gap-2">
                <p className={`${Sf_pro_bold.className} text-black `}>SUUVO</p>
                <p
                  className={`${Sf_pro_medium.className} text-black/40  z-[10]  `}
                >
                  One app, with endless opportunities, an app that lets <br />{" "}
                  you connect with
                  <span className="text-black"> friends globally </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
