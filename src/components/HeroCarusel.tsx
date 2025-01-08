import Image from "next/image";
import MyBanner from "./ui/MyBanner";
import { HeroCaruselProps } from "@/interfaces";

const HeroCarusel = ({ image, text }: HeroCaruselProps) => {
  return (
    <div className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-112px)]">
      <Image src={image} alt="Slide" fill className="object-cover" />
      <MyBanner text={text} imageUrl={image} className="h-full" />
    </div>
  );
};

export default HeroCarusel;
