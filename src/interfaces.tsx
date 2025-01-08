export type ContentProfessionalInterface = {
  heading: string;
  text?: string;
  list?: string[]
  width: string
};


export type MyInputProps ={
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  pattern?: string;
  title?: string;
}

export type MyBannerProps ={
  text: string; 
  imageUrl: string; 
  className?: string;
}

export type MyHeadingProps ={
  text: string; 
  className?: string;
}
export type MyListProps ={
  list: string[];
  className?: string; 
}

export type MyParaProps={
  text: string; 
  className?: string;
}

export type TextLayoutProps = {
  children: React.ReactNode; // Using ReactNode for better typing
  className?: string; // Made className optional with a default value
};

export type HeroCaruselProps ={
  imageURL: string; // URL for the image
  text: string; // Text content for the carousel
}

export type SamplePrevArrowProps ={
  className?: string;
  onClick?: () => void;
  type?: "prev" | "next";
}

export type BannerdataProps = {
  text: string;
  image: string;
}
export type NotRebortProps = {
  isRobotChecked: boolean;
  setIsRobotChecked: (value: boolean) => void;
  showErrorMessage: boolean; // Prop to control the display of error message
}
export type IconProps={
  width: number;
  height :number;
}