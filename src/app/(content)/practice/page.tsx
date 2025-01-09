import PracticeView from "@/view/PracticeView"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Practice",
};
const page = () => {
  return (
    <div>
      <PracticeView/>
    </div>
  )
}

export default page