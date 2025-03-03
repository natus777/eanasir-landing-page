"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { headingFont } from "@/lib/fonts";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Detail_of_the_Sumerian_statue_of_Lugaldalu.JPG/2880px-Detail_of_the_Sumerian_statue_of_Lugaldalu.JPG",
    name: "Lugal the Furious",
    userName: "Chariot Maker",
    comment:
      "Ea Nasir, may the gods smite your scales! This copper was so weak my apprentice bent it with his bare hands! Now I have to explain to my client why his chariot reinforcements are as sturdy as a reed hut. Refund or may Ishtar’s wrath be upon you!",
    rating: 2,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Stele_of_Naram-Sin_of_Akkad.jpg/440px-Stele_of_Naram-Sin_of_Akkad.jpg",
    name: "Nanni the Furious",
    userName: "Disgruntled Copper Buyer",
    comment:
      "I ordered premium copper, and what did I get? Broken promises and bad business! Never again. Zero stars!",
    rating: 1.0,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/King_Ur-Nammu.jpg/500px-King_Ur-Nammu.jpg",
    name: "Ur-Nammu the Disappointed",
    userName: "Aspiring Blacksmith",
    comment:
      "I was promised high-quality copper, yet it crumbled like an old clay tablet! I tried making a dagger, and it bent with a mere flick of the wrist. This is not copper; this is betrayal in metallic form.",
    rating: 1.0,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zrywWQ5dBoFk7Rzft_mHF8WIWUihOsGRTA&s",
    name: "Ilu-Bani the Merchant",
    userName: "Honest Trader (Mostly)",
    comment:
      "Ea Nasir, you swindler! I paid a full sack of barley for this shipment, yet half the ingots are missing! Did you think I wouldn’t notice? My camels carry heavier loads of shame than this. Fix this, or I will make sure the entire market hears of your dishonor!",
    rating: 1.8,
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Detail._Assyrian_king_Tukulti-Ninurta_I_stands_and_kneels%2C_13th_century_BCE._From_Assur%2C_Iraq._Pergamon_Museum.jpg/440px-Detail._Assyrian_king_Tukulti-Ninurta_I_stands_and_kneels%2C_13th_century_BCE._From_Assur%2C_Iraq._Pergamon_Museum.jpg",
    name: "Tukulti the Cursed",
    userName: "Bronze Spear Specialist",
    comment:
      "This copper was so weak that the spearhead I made bent when I struck a *wooden* training dummy. A WOODEN one! Now my warriors mock me, and I suspect my wife does too. You have brought dishonor upon my forge!",
    rating: 1.2,
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0; // If there's a fraction, we add a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-1 pb-6">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="size-4 fill-primary text-primary" />
      ))}
      {halfStar && (
        <Star key="half" className="size-4 fill-primary text-primary opacity-50" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="size-4 text-gray-400" />
      ))}
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className={`${headingFont.className} text-lg text-primary text-center mb-2 tracking-wider`}>
          Testimonials
        </h2>

        <h2 className={`${headingFont.className} text-3xl md:text-4xl text-center font-bold mb-4`}>
          Hear What Our Buyers Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  {renderStars(review.rating)}
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
