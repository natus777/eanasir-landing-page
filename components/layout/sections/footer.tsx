import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, HandCoins, Instagram, Twitter, XIcon } from "lucide-react";
import Link from "next/link";
import { headingFont } from "@/lib/fonts";
import DiscordIcon from "@/components/icons/discord-icon";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <img 
                src="/logos/eanasir.png" 
                alt="Logo" 
                className="w-10 h-10 mr-2"
              />
              <h3 className={`${headingFont.className} text-2xl`}>Ea Nasir</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>

            <div>
            <Link
              href="https://x.com/eanasirscopper"
              className="flex items-center gap-2 opacity-60 hover:opacity-100"
            >
              <Twitter size={20} />
              X/Twitter
            </Link>
          </div>

            <div>
              <Link href="https://www.instagram.com/eanasirsellscopper/" className="flex items-center gap-2 opacity-60 hover:opacity-100">
              <Instagram size={20} />

                Instagram
              </Link>
            </div>
          </div>

          

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Telegram
              </Link>
            </div>

            <div>
              <Link href="#" className="flex items-center gap-2 opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/natus777"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Natus777
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
