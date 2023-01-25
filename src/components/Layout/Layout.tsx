import React from "react";

// we are returning a functional component
const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
};
export default Layout;
