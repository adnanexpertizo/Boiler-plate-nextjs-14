import { MyHeadingProps } from "@/interfaces"


const MySubHeading = ({ text, className = '' }: MyHeadingProps) => {
  return (
    <h2 className={`pt-2 pb-1 sm:pb-2 text-[14px] md:text-[17px] font-[700] text-primary sm:leading-5 leading-4 mb-2 ${className}`}>{text}</h2>
  )
}

export default MySubHeading