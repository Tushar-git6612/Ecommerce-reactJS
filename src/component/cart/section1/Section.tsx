import { Fragment, memo } from "react";
// import Carttotal from "./Cart total";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../../Redux/store/CartSlice";

function Section() {
  //get the cartSlice from redux store
  const cartSlice:any|undefined = useSelector((state: any) => state.cartSlice);
  const dispatch = useDispatch();
  // that remove the item from cartSlice
  const removeCartItem = (data: any) => {
    if (data) {
      dispatch(removeFromCart(data));
    }
  };
  const handleChanger = () => {};

  return (
    <Fragment>
      <section className="ftco-section ftco-cart">
        {cartSlice.length > 0 ? <div className="container">
          { <div className="row">
            <div className="col-md-12">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartSlice?.map((items: any, index: number) => {
                      return (
                        <tr className="text-center" key={index}>
                          <td className="product-remove">
                            <Link to="#"  onClick={() => removeCartItem(items)}>
                              <span
                                className="ion-ios-close"
                              ></span>
                            </Link>
                          </td>

                          <td className="image-prod">
                            <div
                              className="img"
                              style={{
                                backgroundImage: `url(${items?.image})`,
                              }}
                            ></div>
                          </td>

                          <td className="product-name">
                            <h3>{items?.description}</h3>
                            {/* <p>
                              Far far away, behind the word mountains, far from
                              the countries
                            </p> */}
                          </td>

                          <td className="price">
                            Rs.{Math.round(Number(items?.price) * 85)}
                          </td>

                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="quantity"
                                className="quantity form-control input-number"
                                value="1"
                                min="1"
                                max="100"
                                onChange={handleChanger}
                                disabled={true}
                              />
                            </div>
                          </td>
                          <td className="total">{" Rs."}{Math.round(Number(items?.price) * 85)}</td>
                        </tr>
                      );
                    })}
                    {/* <!-- END TR--> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>}
          {/* <div className="row justify-content-start">
            <Carttotal top={5} />
          </div> */}
        </div> : <div className="text-center"><h4 className="text-capitalize">no items found</h4></div>}
      </section>
    </Fragment>
  );
}

export default memo(Section);
