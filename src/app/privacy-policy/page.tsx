import PrivacyPolicyView from "@/view/PrivacyPolicyView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurtel Consulting Group | Privacy Policy",
};
const page = () => {
  return (
    <div>
      <PrivacyPolicyView />
    </div>
  );
};

export default page;
