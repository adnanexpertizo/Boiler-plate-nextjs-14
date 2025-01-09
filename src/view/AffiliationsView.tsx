import Template from "@/app/template";

import MyBanner from "@/components/ui/MyBanner";
import React from "react";
const AffiliationsView = () => {
  return (
    <Template> 
       <MyBanner text={"Affiliations"} imageUrl={"/images/affiliation.png"} />
      <> <h1>Appiliation</h1></>
    
    </Template>
  )
}

export default AffiliationsView;
