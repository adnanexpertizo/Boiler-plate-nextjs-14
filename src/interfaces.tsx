export type ContentProfessionalInterface = {
  heading: string;
  text?: string | string[];
  list?: string[]
  width: string
};

export type AboutDetailProps = {
  params: { name: string }
}

export type IconProps={
  width: number;
  height :number;
}

export type ProfessionalProps = {
  fullName: string;
  profession: string;
  title?:string;
}
export type PracticeItemProps = {
  item: {
    id: number;
    heading: string;
    para: string;
    list: string[];
  };
  toggleExpand: (id: number) => void;
  expandedIndices: number[];
}

export type PracticeData = {
  colOneContent: {
    heading: string;
    list: string[];
    width?: "full" | "50%"; 
  }[];
  colTwoContent: {
    heading: string;
    list: string[];
    width?: "full" | "50%"; 
  }[];
};

export type NotRebortProps = {
  isRobotChecked: boolean;
  setIsRobotChecked: (value: boolean) => void;
  showErrorMessage: boolean; // Prop to control the display of error message
}

export type NavbarPageLinkProps = {
  text: string;
  href: string;
}

export type BannerdataProps = {
  text: string;
  image: string;
}
export type SamplePrevArrowProps = {
  className?: string;
  onClick?: () => void;
  type: "prev" | "next";
};

export type HeroCaruselProps = {
  image: string;
  text: string
}

export type MyInputProps = {
  type: string,
  name: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean,
  className?: string,
  pattern?: string,
  title?: string,
};

export type MyBannerProps = {
  text: string;
  imageUrl: string;
  className?: string;
}

export type MyHeadingProps = {
  text: string
  className?:string
}

export type MyListProps  = {
  list: string[];
  className?: string;
}

export type MyParaProps = {
  text: string
  className?: string
}

export type MySubHeadingProps = {
  text: string
  className?: string
}

export type TextLayoutProps = {
  children: React.ReactNode; // Using ReactNode for better typing
  className?: string; // Made className optional with a default value
};

export type AboutDetailViewProps = {
  name: string;
};

export type ProfessionalItemProps = {
    fullName: string;
}