import { Fragment, memo } from "react";
import Card from "./Card";

function Section() {
  return (
    <Fragment>
      <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div className="container">
          <Card />
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
