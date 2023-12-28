import { Fragment, memo } from "react";
import Sidebar from "../../blog/section1/Sidebar";
import { Link } from "react-router-dom";
import person_1 from "../../../images/person_1.jpg";
import image_1 from "../../../images/image_1.jpg";
import image_2 from "../../../images/image_2.jpg";
import Comment from "./Comment";
import CommentForm from "./Comment form ";

function Section() {
  const category: any = {
    type1: "bags",
    type2: "shoes",
    type3: "Dress",
    type4: "Accessories",
    type5: "Makeup",
    type6: "beauty",
  };

  return (
    <Fragment>
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-3">8 Tips For Shopping</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                <img src={image_1} alt="" className="img-fluid" />
              </p>
              <p>
                Molestiae cupiditate inventore animi, maxime sapiente optio,
                illo est nemo veritatis repellat sunt doloribus nesciunt! Minima
                laborum magni reiciendis qui voluptate quisquam voluptatem
                soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <p>
                <img src={image_2} alt="" className="img-fluid" />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum quidem pariatur! Quia fuga iste
                tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam non magni. Reprehenderit nobis
                odit inventore, quia laboriosam harum excepturi ea.
              </p>
              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                ipsam quidem, dolor distinctio similique asperiores voluptas
                enim, exercitationem ratione aut adipisci modi quod quibusdam
                iusto, voluptates beatae iure nemo itaque laborum. Consequuntur
                et pariatur totam fuga eligendi vero dolorum provident.
                Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus
                culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                ducimus at officia adipisci quasi nemo a perspiciatis provident
                magni laboriosam repudiandae iure iusto commodi debitis est
                blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur cupiditate soluta
                doloremque aut ratione. Harum voluptates mollitia illo minus
                praesentium, rerum ipsa debitis, inventore?
              </p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <Link to="#" className="tag-cloud-link">
                    Life
                  </Link>
                  <Link to="#" className="tag-cloud-link">
                    Sport
                  </Link>
                  <Link to="#" className="tag-cloud-link">
                    Tech
                  </Link>
                  <Link to="#" className="tag-cloud-link">
                    Travel
                  </Link>
                </div>
              </div>
              {/* ------- */}
              <div className="about-author d-flex p-4 bg-light">
                <div className="bio align-self-md-center mr-4">
                  <img src={person_1} alt="..." className="img-fluid mb-4" />
                </div>
                <div className="desc align-self-md-center">
                  <h3>Lance Smith</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5">
                <h3 className="mb-5">6 Comments</h3>
                <Comment />
                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <CommentForm />
                </div>
              </div>
            </div>
            <Sidebar category={category} />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default memo(Section);
