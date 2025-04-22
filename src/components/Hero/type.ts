import { StaticImageData } from "next/image";

export interface HeroProps {
    imageSrc: StaticImageData;
    imageAlt: string;
    gradientColor: string;
    content: string;
} 