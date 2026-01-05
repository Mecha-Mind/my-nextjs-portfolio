
// components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import UpToTop from "./UpToTop";

const Layout = ({ children }) => {
  return (
    <>
      <UpToTop />
        <TopLeftImg />
        <Nav />
        <Header />
        <main>
          {children}
        </main>
    
    </>
  );
};

export default Layout;
