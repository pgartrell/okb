import React from "react";
import { VANeedHelph2, VANeedHelph4, VANeedHelpdiv } from "../styles/VAQuestions.styles.js";

const VANeedHelp = () => {
  return (
      <VANeedHelpdiv>
        <VANeedHelph2>Need more help?</VANeedHelph2>
        <VANeedHelph4>Email us at <a style={{color:"#FF0000", textDecoration:"underline"}}href="mailto:info@okbfoundation.org">info@okbfoundation.org</a></VANeedHelph4>
      </VANeedHelpdiv>
  );
};

export default VANeedHelp;
