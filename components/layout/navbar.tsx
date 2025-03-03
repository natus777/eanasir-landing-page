"use client";
import { ChevronsDown, Github, HandCoins, Menu, Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { headingFont } from "@/lib/fonts";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#how-to-buy",
    label: "How to buy",
  },
  {
    href: '#testimonials',
    label: "Testimonials",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
    }
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      audio.volume = 1;
      audio.play().catch(() => {
        console.log("Playback failed, user interaction may be required.");
      });
    } else {
      audio.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className={`${headingFont.className} font-bold text-lg flex items-center`}>
        <img 
          src="/logos/eanasir.png" 
          alt="Logo" 
          className="w-9 h-9 mr-2"
        />
        Ea Nasir
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="font-bold text-lg flex items-center">
                    <img 
                      src="/logos/eanasir.png" 
                      alt="Logo" 
                      className="w-9 h-9 mr-2"
                    />
                    Ea Nasir
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <Button
                onClick={toggleMute}
                className="bg-gradient-to-r from-[#B87333] via-[#D4A373] to-[#8D5524] 
                           text-white p-3 rounded-full shadow-lg 
                           border-2 border-[#D4A373] 
                           hover:shadow-[0px_0px_12px_#D4A373] 
                           transition-all duration-300"
              >
                {isMuted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Button
          onClick={toggleMute}
          className="bg-gradient-to-r from-[#B87333] via-[#D4A373] to-[#8D5524] 
                     text-white p-3 rounded-full shadow-lg 
                     border-2 border-[#D4A373] 
                     hover:shadow-[0px_0px_12px_#D4A373] 
                     transition-all duration-300"
        >
          {isMuted ? <VolumeX className="size-6" /> : <Volume2 className="size-6" />}
        </Button>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="audio/theepicofgilgamesh.mp3"
        preload="auto"
      ></audio>
    </header>
  );
};
