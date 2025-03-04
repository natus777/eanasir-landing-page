import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { headingFont } from "@/lib/fonts";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is $COPPER?",
    answer:
      "$COPPER is my legendary (and questionably high-quality) copper, now immortalized on the Solana blockchain. A memecoin worthy of the greatest merchant in history—me.",
    value: "item-1",
  },
  {
    question:
      "Where can I buy $COPPER?",
    answer:
      "On Raydium. Just like my copper business, there are no refunds, no complaints, and definitely no guarantees.",
    value: "item-2",
  },
  {
    question: "Is $COPPER a good investment?",
    answer: "Ah, you ask if my copper is good? Of course! But whether it holds value… well, that depends on how much you trust me.",
    value: "item-3",
  },
  {
    question:
      "How do I store $COPPER?",
    answer: "You will need a Solana wallet—Phantom, Solflare, or something similar. Just like my copper, keep it safe, or someone might come knocking on your door with a complaint tablet.",
    value: "item-4",
  },
  {
    question:
      "Is there a roadmap?",
    answer: "A roadmap? Bah! The only road is the one that leads to my warehouse. You’ll get what you get, and you’ll like it.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className={`${headingFont.className} text-lg text-primary text-center mb-2 tracking-wider`}>
          FAQS
        </h2>

        <h2 className={`${headingFont.className} text-3xl md:text-4xl text-center font-bold`}>
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent className="text-lg">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
