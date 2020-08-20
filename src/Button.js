import React, { memo } from "react";

export default memo(function Button(props) {
//   console.log("Button comp");
  return <button {...props}>{props.children}</button>;
});
