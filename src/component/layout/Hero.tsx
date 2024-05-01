'use client';

import { motion } from 'framer-motion';
import Arrow from "@/static/Arrow";
import Typing from "@/static/Typing";
import Link from "next/link";
import Image from 'next/image';
import myImage from './aipic2.png';
import ContactBtn from "../menu/elements/ContactBtn";

function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-indigo-900 to-purple-800">
      <div className="flex desktop:flex-row mobile:flex-col-reverse items-center w-full flex-1">
        <div className="flex flex-col z-20 text-white desktop:w-3/5 mobile:w-full mobile:text-center">
          <motion.p
            className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-cyan-300 w-full animate-textIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} // Delay 0.2s
          >
            Dream Decoder
          </motion.p>
          <motion.p
            className="desktop:text-[3vw] mobile:text-[5vw] animate-textIn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }} // Delay 0.4s
          >
            Unlock the secrets of your subconscious with <Typing />
          </motion.p>
          <div className="flex justify-center mt-4">
            <motion.div
              className="opacity-0 animate-buttonIn"
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ContactBtn title={"Get started today"} />
            </motion.div>
          </div>
        </div>
        <div className="desktop:w-3/5 mobile:w-full flex justify-end perspective-3d">
          <Image
            className="desktop:w-3/4 mobile:w-full object-contain self-center animate-3d"
            src={myImage}
            alt="Dreaming Illustration"
            layout="responsive"
          />
        </div>
      </div>
      <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
        <Link href="/#Explore" aria-label='Explore'>
          <Arrow />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
