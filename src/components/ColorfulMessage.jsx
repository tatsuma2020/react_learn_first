import React, { useState } from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentSytle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentSytle}>{children}</p>;
};

export default ColorfulMessage;
