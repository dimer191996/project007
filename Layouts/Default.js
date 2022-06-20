import { useEffect, useState } from "react";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setVisible(false);
    }
  }, []);
  return (
    <>
      <div className="">
        <NavBar />
        <main className="container m-auto"> {children}</main> <Footer />
        <FloatingButton
          hidebutton={() => setVisible(false)}
          showbutton={() => setVisible(true)}
          hideHeader={visible}
        />
      </div>
    </>
  );
}
