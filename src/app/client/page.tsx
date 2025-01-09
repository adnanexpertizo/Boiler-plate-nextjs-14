import CleintVeiw from "@/view/ClientView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Client",
};
const page = () => {
  return (
    <div>
      <CleintVeiw />
    </div>
  );
};

export default page;
