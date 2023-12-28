import { Fragment, memo, useEffect } from "react";
import Section1 from "./section1/Section";
import Section2 from "./section2/Section";
import Section3 from "./section3/Section";
import Section4 from "../Home/section6/Section";
import Section5 from "../Home/section7/Section";
import Footer from "../footer/Footer";

function Index() {
  let num = 0;
  useEffect(() => {
    if (num < 1) {
      const dropdown$: any = document.querySelector(".dropdown-toggle");
      if (
        window.location.href == "http://localhost:3000/Shop" ||
        window.location.href == "http://localhost:3000/SingleProduct" ||
        window.location.href == "http://localhost:3000/Cart" ||
        window.location.href == "http://localhost:3000/Checkout"
      ) {
        if (!dropdown$.classList.contains("active")) {
          dropdown$.classList.add("active");
        }
      } else {
        dropdown$.classList.remove("active");
      }
      num++;
    }
    //eslint-disable-next-line
  }, [window.location.href]);

  return (
    <Fragment>
      <Section1 type="About"/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Fragment>
  );
}

export default memo(Index);
