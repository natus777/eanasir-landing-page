import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Download [AppName]",
    description:
      "Download [AppName] or wallet of your choice from the Play Store or AppStore.",
  },
  {
    icon: "LineChart",
    title: "Get some SOL",
    description:
      "You can buy directly from [AppName] or buy on another exchange and send it to your wallet.",
  },
  {
    icon: "Wallet",
    title: "Go to raydium.io",
    description:
      "Now that you have some Solana, head to Raydium.io (or Jup.ag if you prefer) to be able to swap your $SOL for some $COPPER",
  },
  {
    icon: "Sparkle",
    title: "Buy $COPPER",
    description:
      "Paste the token address (CA) into Raydium and switch SOL for $COPPER. There's zero taxes so you don’t need to worry.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="how-to-buy" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Get</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How to buy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Follow my steps on how you can get the best Copper in the World!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
