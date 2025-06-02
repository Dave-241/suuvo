"use client";
import Image from "next/image";
import { Sf_pro_bold, Sf_pro_medium } from "../utils/font";
import logo from "@/public/landingPage/logo.webp";
import ButtonCtn from "./button";

const SomethingNewIsComing = () => {
  const creators = [
    {
      name: "John Adams",
      username: "@Marysnyder_",
      followers: "65.8k",
      image: "/landing_page/john.webp", // replace with correct path
      avatar: "/landing_page/avatar1.webp", // optional
    },
    {
      name: "Mary Snyder",
      username: "@Marysnyder_",
      followers: "65.8k",
      image: "/landing_page/mary.webp",
      avatar: "/landing_page/avatar2.webp",
    },
    {
      name: "Tory Davies",
      username: "@Marysnyder_",
      followers: "65.8k",
      image: "/landing_page/tory.webp",
      avatar: "/landing_page/avatar3.webp",
    },
    {
      name: "Jenni Davis",
      username: "@Marysnyder_",
      followers: "65.8k",
      image: "/landing_page/jenni.webp",
      avatar: "/landing_page/avatar4.webp",
    },
    {
      name: "Sky",
      username: "@Marysnyder_",
      followers: "65.8k",
      image: "/landing_page/sky.webp",
      avatar: "/landing_page/avatar5.webp",
    },
  ];

  return (
    <>
      <div className=""></div>
    </>
  );
};

export default SomethingNewIsComing;
