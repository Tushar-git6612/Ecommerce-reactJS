import { Fragment, memo } from "react";
import { useSelector } from "react-redux";
import Card from "../../Home/section3/Card";
import Sidebar from "./Sidebar";

function Section({ lg }: { lg: number }) {
  const data = useSelector((state: any) => state.products);

  return (
    <Fragment>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {data?.map((item: any, index: number) => {
                  return (
                    <div
                      className={`col-sm-12 col-md-6 col-lg-${lg} d-flex`}
                      key={index}
                    >
                      <Card data={item} />
                    </div>
                  );
                })}
              </div>
              {/* <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <Link to="#">&lt;</Link>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <Link to="#">2</Link>
                      </li>
                      <li>
                        <Link to="#">3</Link>
                      </li>
                      <li>
                        <Link to="#">4</Link>
                      </li>
                      <li>
                        <Link to="#">5</Link>
                      </li>
                      <li>
                        <Link to="#">&gt;</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>

            {/* sidebar */}
            <div className="col-md-4 col-lg-2">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
