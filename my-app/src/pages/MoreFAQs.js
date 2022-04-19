import React, {useLayoutEffect}  from "react";
import VAMoreFAQ from "../components/VAMoreFAQ";
import VANeedHelp from "../components/VANeedHelp";

const MoreFAQs = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div>
      <VAMoreFAQ />
      <VANeedHelp />
    </div>
  );
};

export default MoreFAQs;
