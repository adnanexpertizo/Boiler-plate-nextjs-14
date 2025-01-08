import { MyListProps } from "@/interfaces";

const MyList = ({ list, className= '' }: MyListProps) => {
  return (
    <ul className={`list-disc pl-5 ${className}`}>
      {list.map((listItem: string, i: number) => (
        // <li key={i} className="md:text=[16px] text=[12px]">
        <li
          key={i}
          className="md:text-[15px] sm:text-[14px] text-[12px] leading-5 sm:leading-6 text-start "
        >
          {listItem}
        </li>
      ))}
    </ul>
  );
};

export default MyList;
