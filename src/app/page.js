"use client";
import React, { useCallback } from "react";
import watchOne from "../assets/1.png";
import watchTwo from "../assets/2.png";
import watchThree from "../assets/3.png";
import Image from "next/image";
import { Great_Vibes, Poppins } from "next/font/google";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import useEmblaCarousel from "embla-carousel-react";

const great = Great_Vibes({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "700" });
function page() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className=" w-full h-screen bg-black relative">
      <div className=" flex  w-full h-full  ml-20 justify-center items-center">
        <div className=" flex flex-col w-full    h-full justify-between items-center">
          <div className=" flex flex-col items-center">
            <div className=" flex gap-10 items-center relative">
              <motion.div
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <div className=" w-16 h-96 bg-red-700"></div>
              </motion.div>
              <motion.div
                initial={{ y: -1500 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
              >
                <div className=" w-16 h-96 bg-red-700"></div>
              </motion.div>
              <motion.div
                initial={{ y: -3000 }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
              >
                <div className=" w-16 h-96 bg-red-700"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 200 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                className={`${poppins.className} text-[200px] absolute w-full h-full  left-0 flex justify-center`}
              >
                <div className=" ">
                  <h1 className=" text-white uppercase  font-black">Rado</h1>
                </div>
              </motion.div>
            </div>
            <div className=" embla z-10  h-[400px] pt-52 mt-[-200px]">
              <div className=" embla__viewport" ref={emblaRef}>
                <div className="embla__container mt-[-150px]    flex items-center z-10">
                  <div className="w-full flex items-center gap-10  flex-shrink-0 embla__slide ">
                    <motion.div
                      animate={{ scale: 1 }}
                      initial={{ y: 100, scale: 0.8 }}
                      whileInView={{ y: 0, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                      className="z-10 drop-shadow-2xl flex w-full  justify-center flex-shrink-0 "
                    >
                      <Image src={watchOne} width={500} className="  z-10" />
                    </motion.div>
                  </div>
                  <div className="w-full flex items-center gap-10 h-96 flex-shrink-0 embla__slide">
                    <motion.div
                      animate={{ scale: 1 }}
                      initial={{ y: 100, scale: 1 }}
                      whileInView={{ y: 0, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                      className="z-10 drop-shadow-2xl flex w-full justify-center flex-shrink-0 mt-10"
                    >
                      <Image
                        src={watchTwo}
                        width={400}
                        className="mt-[-100px]   z-10"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full flex items-center gap-10 h-96 flex-shrink-0 embla__slide">
                    <motion.div
                      animate={{ scale: 1 }}
                      initial={{ y: 100, scale: 0 }}
                      whileInView={{ y: 0, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                      className="z-10 drop-shadow-2xl flex w-full justify-center flex-shrink-0 mt-10"
                    >
                      <Image
                        src={watchThree}
                        width={400}
                        className=" mt-[-100px] z-10"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full flex items-center gap-10 h-96 flex-shrink-0 embla__slide">
                    <motion.div
                      animate={{ scale: 1 }}
                      initial={{ y: 100, scale: 0 }}
                      whileInView={{ y: 0, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                      className="z-10 drop-shadow-2xl flex w-full justify-center flex-shrink-0 mt-10"
                    >
                      <Image
                        src={watchOne}
                        width={500}
                        className="mt-[-100px]  z-10"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center gap-5 text-white text-2xl mt-10">
              <h1 onClick={scrollPrev} className="embla__prev">
                <GoChevronLeft />
              </h1>
              <h1 onClick={scrollNext} className="embla__prev">
                <GoChevronRight />
              </h1>
            </div>
          </div>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-9xl font-black opacity-40 text-[#303030] bg-gradient-to-b from-white to-black bg-clip-text text-transparent tracking-widest uppercase">
              swiss made
            </h1>
          </motion.div>
        </div>

        <motion.div className="ml-[-500px]">
          <div
            className={`${great.className} text-white mt-20  flex flex-col gap-10  items-end  `}
          >
            <div className=" flex flex-col gap-5 ">
              <h1 className=" text-5xl font-semibold">Octavia red flag</h1>
              <h1 className=" w-80 text-xl text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque sapiente molestias atque omnis at ea, rerum optio
                quam reprehenderit ex eaque
              </h1>
              <h1 className=" text-5xl font-black">$2000</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default page;
