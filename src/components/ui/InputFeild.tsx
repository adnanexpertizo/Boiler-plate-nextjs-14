import { MyInputProps } from "@/interfaces";


const MyInput = ({ type, name, placeholder, value, onChange, required = false, className = '', pattern, title }: MyInputProps) => {
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full p-[14px] my-2 sm:my-6 border-b border-primary outline-none focus:border-2 focus:border-secondary ${className}`}
        pattern={pattern}
        title={title}
      />
    );
  };
  
  export default MyInput;