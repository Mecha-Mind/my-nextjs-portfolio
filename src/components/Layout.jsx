
// components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </>
  );
};

export default Layout;
