import React from "react";
import { Navbar } from "components/templates";

const Main = ({ children }) => {
  return (
    <div className="bg-white-1">
      <Navbar />
      {children}
    </div>
  );
};

export default Main;
