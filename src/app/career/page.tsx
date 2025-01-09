import CareerView from "@/view/CareerView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Client",
};
const page = () => {
  return (
    <div>
      <CareerView/>
    </div>
  )
}

export default page