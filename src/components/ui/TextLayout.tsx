import { TextLayoutProps } from "@/interfaces";

const TextLayout = ({ children, className = "" }: TextLayoutProps) => {
    return (
      <div className={`m-auto py-16 px-5 w-[95%] md:w-[80%] ${className}`}>
        {children}
      </div>
    );
};
  
export default TextLayout;