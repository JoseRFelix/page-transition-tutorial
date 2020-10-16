import React from "react";
import "./src/css/style.css";

const Wrapper = ({ children }) => {
  const [isFirstMount] = React.useState(true);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isFirstMount })
      )}
    </>
  );
};

export const wrapPageElement = ({ element }) => {
  return <Wrapper>{element}</Wrapper>;
};
