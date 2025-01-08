import Image from "next/image";
import MyBanner from "./ui/MyBanner";
import { HeroCaruselProps } from "@/interfaces";

const HeroCarusel = ({ imageURL, text }: HeroCaruselProps) => {
  return (
    <div className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-112px)]">
      <Image src={imageURL} alt="Slide" fill className="object-cover" />
      <MyBanner text={text} imageUrl={imageURL} className="h-full" />
    </div>
  );
};

export default HeroCarusel;
