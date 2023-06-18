import React from "react";

const Helmet = (props) => {
  document.title = "Food Ordering App -" + props.title;

  return <div className="w-100">{props.title}</div>;
};

export default Helmet;