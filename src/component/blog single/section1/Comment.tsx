import { Fragment, memo } from "react";
import person_1 from "../../../images/person_1.jpg";
import { Link } from "react-router-dom";

function Comment() {
  return (
    <Fragment>
      <ul className="comment-list">
        <li className="comment">
          <div className="vcard bio">
            <img src={person_1} alt="" />
          </div>
          <div className="comment-body">
            <h3>John Doe</h3>
            <div className="meta">June 27, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <Link to="#" className="reply">
                Reply
              </Link>
            </p>
          </div>
        </li>

        <li className="comment">
          <div className="vcard bio">
            <img src={person_1} alt="" />
          </div>
          <div className="comment-body">
            <h3>John Doe</h3>
            <div className="meta">June 27, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <Link to="#" className="reply">
                Reply
              </Link>
            </p>
          </div>

          <ul className="children">
            <li className="comment">
              <div className="vcard bio">
                <img src={person_1} alt="" />
              </div>
              <div className="comment-body">
                <h3>John Doe</h3>
                <div className="meta">June 27, 2018 at 2:21pm</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                  autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                  voluptas earum impedit necessitatibus, nihil?
                </p>
                <p>
                  <Link to="#" className="reply">
                    Reply
                  </Link>
                </p>
              </div>

              <ul className="children">
                <li className="comment">
                  <div className="vcard bio">
                    <img src={person_1} alt="" />
                  </div>
                  <div className="comment-body">
                    <h3>John Doe</h3>
                    <div className="meta">June 27, 2018 at 2:21pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p>
                      <Link to="#" className="reply">
                        Reply
                      </Link>
                    </p>
                  </div>

                  <ul className="children">
                    <li className="comment">
                      <div className="vcard bio">
                        <img src={person_1} alt="" />
                      </div>
                      <div className="comment-body">
                        <h3>John Doe</h3>
                        <div className="meta">June 27, 2018 at 2:21pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p>
                          <Link to="#" className="reply">
                            Reply
                          </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="comment">
          <div className="vcard bio">
            <img src={person_1} alt="" />
          </div>
          <div className="comment-body">
            <h3>John Doe</h3>
            <div className="meta">June 27, 2018 at 2:21pm</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              quidem laborum necessitatibus, ipsam impedit vitae autem, eum
              officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
              impedit necessitatibus, nihil?
            </p>
            <p>
              <Link to="#" className="reply">
                Reply
              </Link>
            </p>
          </div>
        </li>
      </ul>
    </Fragment>
  );
}

export default memo(Comment);
