import { useEffect, useState } from "react";
import BreadCrumb from "../components/Breadcrumb";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setVisible(false);
    }
  }, []);
  return (
    <>
      <div className="">
        <NavBar />
        {/* <BreadCrumb/> */}
        <main className="container"> {children}</main>
        <Footer />
        <FloatingButton
          actionButton={() => setVisible(!visible)}
          hideHeader={visible}
        />
      </div>
    </>
  );
}
