"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const { theme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
    }
  }, []);

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <motion.div
          className="text-center space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-full flex flex-col items-center justify-center py-10 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative w-full h-[165px] mb-[-50px]">
              <Image
                src="/eanasir.png"
                width={200}
                height={400}
                alt="Sumerian Statue"
                className="absolute left-1/2 transform -translate-x-1/2 z-20 drop-shadow-2xl pointer-events-none scale-[1.5] top-[-50px] md:scale-[1.2] md:top-[-30px] sm:scale-[1] sm:top-[-15px] max-sm:scale-[1] max-sm:top-[-15px]"
              />
            </div>

            <div className="relative z-10 text-center space-y-8 mt-[50px]">
              <Badge variant="outline" className="text-sm py-2">
                <span className="mr-2 text-primary">
                  <Badge>New</Badge>
                </span>
                <span> The latest coin is out now! </span>
              </Badge>
            </div>
          </motion.div>

          <motion.h1
            className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ea Nasir sells you
            <br />
            <span className="inline-flex items-center justify-center gap-2 mt-2">
              <img
                src="/logos/eanasir.png"
                alt="Copper Logo"
                className="h-12 md:h-16 w-auto"
              />
              <span className="text-transparent bg-gradient-to-r from-[#B87333] via-[#D4A373] to-[#8D5524] bg-clip-text">
                $COPPER
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="max-w-screen-sm mx-auto text-xl text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {`He's the best copper merchant in the world! And you better trust what he has to tell ya!`}
          </motion.p>

          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Buy $COPPER
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative group mt-14"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="relative z-[10]">
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

            <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 relative z-[10]"
              src={theme === "light" ? "/hero.png" : "/hero.png"}
              alt="dashboard"
            />

            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
