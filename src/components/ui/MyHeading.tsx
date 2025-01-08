import { MyHeadingProps } from "@/interfaces"



const MyHeading = ({ text, className }: MyHeadingProps) => {
  return (
    <h1 className={`pt-2 pb-1 sm:pb-2 text-[16px] md:text-[22px] font-[700] text-primary border-secondary border-b-4  sm:leading-7 leading-5 max-w-max mb-4 ${className?? ''}`}>{text}</h1>
  )
}

export default MyHeading