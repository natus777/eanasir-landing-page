"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { headingFont } from "@/lib/fonts";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Download Phantom",
    description:
      "Download Phantom or wallet of your choice from the Play Store or AppStore.",
    image: "/benefits/1.png",
  },
  {
    icon: "LineChart",
    title: "Get some SOL",
    description:
      "You can buy directly from Phantom or buy on another exchange and send it to your wallet.",
    image: "/benefits/2.png",
  },
  {
    icon: "Wallet",
    title: "Go to raydium.io",
    description:
      "Now that you have some Solana, head to Raydium.io (or Jup.ag if you prefer) to be able to swap your $SOL for some $COPPER.",
    image: "/benefits/3.png",
  },
  {
    icon: "Sparkle",
    title: "Buy $COPPER",
    description:
      "Paste the token address (CA) into Raydium and switch SOL for $COPPER. There's zero taxes so you don’t need to worry.",
    image: "/benefits/4.png",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="how-to-buy" className="container py-24 sm:py-32">
      <div className="flex flex-col lg:text-left gap-y-12">
        {/* Heading Section */}
        <div>
          <h2 className={`${headingFont.className} text-lg text-primary mb-2 tracking-wider`}>Get $COPPER</h2>
          <h2 className={`${headingFont.className} text-2xl md:text-3xl font-bold mb-4`}>How to buy?</h2>
          <p className="text-base text-muted-foreground mb-8">
            Follow my steps on how you can get the best Copper in the World!
          </p>
        </div>

        {/* Cards Section - Now in a single row */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 w-full overflow-x-auto">
          {benefitList.map(({ icon, title, description, image }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="min-w-[280px] max-w-[320px] flex-1"
            >
              <Card className="h-full flex flex-col bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number">
                {/* Image at full card width */}
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover rounded-t-lg"
                />

                <CardHeader className="flex flex-col items-start">
                  <div className="flex items-center justify-between w-full">
                    {/* Icon on the left */}
                    <Icon
                      name={icon as keyof typeof icons}
                      size={28}
                      color="hsl(var(--primary))"
                      className="text-primary"
                    />
                    {/* Number on the right */}
                    <span className="text-4xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30 text-right">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle className="text-left text-lg">{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-left text-sm flex-grow">
                  {description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
