import { Fragment, memo, useEffect } from "react";
import Section1 from "../about/section1/Section";
import Section2 from "./section1/Section";
import Section3 from "../Home/section7/Section";
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
      <Section1 type="shop" />
      <Section2 lg={4} />
      <Section3 />
      <Footer />
    </Fragment>
  );
}

export default memo(Index);
