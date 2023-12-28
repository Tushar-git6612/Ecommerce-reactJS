import { Fragment, memo } from "react";

function Category() {
  return (
    <Fragment>
      <div className="sidebar-box-2">
        <h2 className="heading">Categories</h2>
        <div className="fancy-collapse-panel">
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Men's Shoes
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">Casual</a>
                    </li>
                    <li>
                      <a href="#">Running</a>
                    </li>
                    <li>
                      <a href="#">Jordan</a>
                    </li>
                    <li>
                      <a href="#">Soccer</a>
                    </li>
                    <li>
                      <a href="#">Football</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Women's Shoes
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">Casual</a>
                    </li>
                    <li>
                      <a href="#">Running</a>
                    </li>
                    <li>
                      <a href="#">Jordan</a>
                    </li>
                    <li>
                      <a href="#">Soccer</a>
                    </li>
                    <li>
                      <a href="#">Football</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accessories
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">T-Shirt</a>
                    </li>
                    <li>
                      <a href="#">Jacket</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Clothing
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body">
                  <ul>
                    <li>
                      <a href="#">Jeans</a>
                    </li>
                    <li>
                      <a href="#">T-Shirt</a>
                    </li>
                    <li>
                      <a href="#">Jacket</a>
                    </li>
                    <li>
                      <a href="#">Shoes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Category);
