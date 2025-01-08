import { MyParaProps } from '@/interfaces'

const MyPara = ({ text, className= '' }: MyParaProps) => {
  return (
    <p className={`md:text-[15px] sm:text-[14px] text-[12px] leading-5 sm:leading-6 text-start ${className}`}>{text}</p>
  )
}

export default MyPara