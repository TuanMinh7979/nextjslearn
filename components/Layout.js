import NavBar from "./NavBar";
import Notify from "./Notify";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Notify></Notify>
      {children}
    </div>
  );
};

export default Layout;
