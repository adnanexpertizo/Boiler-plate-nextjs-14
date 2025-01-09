
import ContactUsView from "@/view/ContactUsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Contact",
};
const page = () => {
  return (
    <div>
      <ContactUsView />
    </div>
  );
};

export default page;
