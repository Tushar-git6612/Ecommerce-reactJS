import { Fragment, memo } from "react";
import SimpleSlider from "./Slider";
// import bg_1 from "../../../images/bg_1.png";
// import bg_2 from "../../../images/bg_2.png";

function Section() {
  return (
    <Fragment>
      <section id="home-section" className="hero">
        <div className="" style={{ background: "#dbcc8f" }}>
          <div style={{ backgroundColor: "transparent" }} className="h-100 p-3">
            <div className="container-fluid p-2" style={{cursor:"grab"}}>
              <SimpleSlider />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
