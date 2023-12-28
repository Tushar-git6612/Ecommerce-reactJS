import { Fragment, memo } from "react";
import gallery1 from "../../../images/gallery-1.jpg";
import gallery2 from "../../../images/gallery-2.jpg";
import gallery3 from "../../../images/gallery-3.jpg";
import gallery4 from "../../../images/gallery-4.jpg";
import gallery5 from "../../../images/gallery-5.jpg";
import gallery6 from "../../../images/gallery-6.jpg";
import { Link } from "react-router-dom";

function Section() {
  const pictures: { image: string }[] = [
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
    { image: gallery5 },
    { image: gallery6 },
  ];

  return (
    <Fragment>
      <section className="ftco-gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-4">
              <h2 className="mb-4">Follow Us On Instagram</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            {pictures.map((item, index) => {
              return (
                <div className="col-md-4 col-lg-2 " key={index}>
                  <Link
                    to="/"
                    className="gallery image-popup img d-flex align-items-center"
                    style={{ backgroundImage: `url(${item?.image})` }}
                  >
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-instagram"></span>
                    </div>
                  </Link>
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
