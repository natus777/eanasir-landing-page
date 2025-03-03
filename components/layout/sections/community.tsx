"use client"
import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12">
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-background border-none shadow-lg text-center flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-xl hover:scale-105">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <DiscordIcon />
                  </motion.div>
                  <div>
                    Ready to join this
                    <span className="text-transparent px-2 bg-gradient-to-r from-[#B87333] via-[#D4A373] to-[#8D5524] bg-clip-text">
                      Community?
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
                Join our vibrant Discord community! Connect, share, and grow with
                like-minded enthusiasts. Click to dive in! 🚀
              </CardContent>

              <CardFooter>
                <Button asChild>
                  <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
