import { useEffect, useState } from "react";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

export default function Default({ children }) {
  const [visible, setVisible] = useState(false);
   const [showArticle, setShowArticle] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setVisible(false);
    }
  }, []);

    const timeleft = 20;
    const downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        setShowArticle(true);
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar")?.value = 20 - timeleft;
      timeleft -= 1;
    }, 2000);
    
  return (
    <>
      <div className="">
        {/* {!showArticle && (
          <>
         
            <div className=" flex relative justify-center items-center">
              <div className=" absolute text-white">lick to continue or wait 20s</div>
              <progress
                className="w-full"
                value="0"
                max="20"
                id="progressBar"
              ></progress>
            </div>
          </>
        )} */}
       
       {showArticle && <> <NavBar /> <main className="container m-auto"> {children}</main>
        <Footer />
        <FloatingButton
          hidebutton={() => setVisible(false)}
          showbutton={() => setVisible(true)}
          hideHeader={visible}
        /></>}
      </div>
    </>
  );
}
