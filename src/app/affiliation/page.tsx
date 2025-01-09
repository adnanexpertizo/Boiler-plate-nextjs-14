import AffiliationsView from "@/view/AffiliationsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Affiliate",
};
const page = () => {
  return (
    <div>
      <AffiliationsView />
    </div>
  );
};

export default page;
