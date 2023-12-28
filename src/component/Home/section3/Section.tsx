import { Fragment, memo } from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "./Card";

function Section({lg}:{lg:number}) {
  // get Product state from store
  const products = useSelector((state: any) => state.products);

  return (
    <Fragment>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center">
              <h2 className="mb-4">New Shoes Arrival</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {products?.map((item: any, index: number) => {
              return (
                <div className={`col-sm-12 col-md-6 col-lg-${lg} d-flex`} key={index}>
                  <Card data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
