import NavBar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar></NavBar>
      {children}
    </div>
  );
};

export default Layout;
