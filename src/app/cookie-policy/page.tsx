import CookiePolicyView from "@/view/CookiePolicyView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Cookie Policy",
};
const page = () => {
  return (
    <div>
      <CookiePolicyView />
    </div>
  );
};

export default page;
