"use client";
import React from "react";
import Image from "next/image";
import bg from "../../assets/bg7.jpg";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className={` w-full h-screen relative`}>
        <Image src={bg} className=" w-full h-full object-cover" />
        <div className=" absolute top-0 left-0 w-full h-full py-10 px-10 bg-black backdrop-blur-sm bg-opacity-40"></div>
      </div>
    </div>
  );
}

export default page;
