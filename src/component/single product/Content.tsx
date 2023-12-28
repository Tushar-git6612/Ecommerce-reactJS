import { Fragment, memo } from "react";
import person_1 from "../../images/person_1.jpg";
import person_2 from "../../images/person_2.jpg";
import person_3 from "../../images/person_3.jpg";
import { Link } from "react-router-dom";

function Content() {
  return (
    <Fragment>
      <div className="col-md-12 tab-wrap">
        <div className="tab-content bg-light" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-1"
            role="tabpanel"
            aria-labelledby="day-1-tab"
          >
            <div className="p-4">
              <h3 className="mb-4">Nike Free RN 2019 iD</h3>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-2"
            role="tabpanel"
            aria-labelledby="v-pills-day-2-tab"
          >
            <div className="p-4">
              <h3 className="mb-4">Manufactured By Nike</h3>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-3"
            role="tabpanel"
            aria-labelledby="v-pills-day-3-tab"
          >
            <div className="row p-4">
              <div className="col-md-7">
                <h3 className="mb-4">23 Reviews</h3>
                <div className="review">
                  <div
                    className="user-img"
                    style={{ backgroundImage: `url(${person_1})` }}
                  ></div>
                  <div className="desc">
                    <h4>
                      <span className="text-left">Jacob Webb</span>
                      <span className="text-right">14 March 2018</span>
                    </h4>
                    <p className="star">
                      <span>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                      </span>
                      <span className="text-right">
                        <Link to="#" className="reply">
                          <i className="icon-reply"></i>
                        </Link>
                      </span>
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrov
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div
                    className="user-img"
                    style={{ backgroundImage: `url(${person_2})` }}
                  ></div>
                  <div className="desc">
                    <h4>
                      <span className="text-left">Jacob Webb</span>
                      <span className="text-right">14 March 2018</span>
                    </h4>
                    <p className="star">
                      <span>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                      </span>
                      <span className="text-right">
                        <Link to="#" className="reply">
                          <i className="icon-reply"></i>
                        </Link>
                      </span>
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrov
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div
                    className="user-img"
                    style={{ backgroundImage: `url(${person_3})` }}
                  ></div>
                  <div className="desc">
                    <h4>
                      <span className="text-left">Jacob Webb</span>
                      <span className="text-right">14 March 2018</span>
                    </h4>
                    <p className="star">
                      <span>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                        <i className="ion-ios-star-outline"></i>
                      </span>
                      <span className="text-right">
                        <Link to="#" className="reply">
                          <i className="icon-reply"></i>
                        </Link>
                      </span>
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrov
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rating-wrap">
                  <h3 className="mb-4">Give a Review</h3>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      (98%)
                    </span>
                    <span>20 Reviews</span>
                  </p>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      (85%)
                    </span>
                    <span>10 Reviews</span>
                  </p>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      (98%)
                    </span>
                    <span>5 Reviews</span>
                  </p>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      (98%)
                    </span>
                    <span>0 Reviews</span>
                  </p>
                  <p className="star">
                    <span>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      <i className="ion-ios-star-outline"></i>
                      (98%)
                    </span>
                    <span>0 Reviews</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Content);
