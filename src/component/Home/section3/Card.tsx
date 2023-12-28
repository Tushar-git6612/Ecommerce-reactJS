import { Fragment, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/store/CartSlice";

function Card({ data }: any) {
  // state of cart button that changed when user add the item in cart
  const [cartBtn, setCartBtn] = useState("Add to cart");
  // get cartSlice state from redux store
  const cartSlice = useSelector((state: any) => state.cartSlice);
  
  let num = 0;
  useEffect(() => {
    if (num < 1) {
      cartSlice?.forEach((item: any) => {
        if (item?.id === data?.id) {
          setCartBtn("Added");
        }
      });
    }
    //eslint-disable-next-line
  }, [cartSlice]);

  const dispatch = useDispatch();
  // that function added items in cartSlice
  const addCartFunc = (data: any) => {
    if (data) {
      dispatch(addToCart(data));
      setCartBtn("Added");
    }
  };

  return (
    <Fragment>
      <div className="product d-flex flex-column">
        <Link to="/" className="img-prod">
          <img
            className="img-fluid"
            src={data?.image}
            alt="Colorlib Template"
          />
          {data?.offPercent && (
            <span className="status">{data?.offPercent}</span>
          )}
          <div className="overlay"></div>
        </Link>
        <div className="text py-3 pb-4 px-3">
          <div className="d-flex">
            <div className="cat">
              <span>{data?.title}</span>
            </div>
            <div className="rating">
              <p className="text-right mb-0">
                <Link to="/">
                  <span className="ion-ios-star-outline"></span>
                </Link>
                <Link to="/">
                  <span className="ion-ios-star-outline"></span>
                </Link>
                <Link to="/">
                  <span className="ion-ios-star-outline"></span>
                </Link>
                <Link to="/">
                  <span className="ion-ios-star-outline"></span>
                </Link>
                <Link to="/">
                  <span className="ion-ios-star-outline"></span>
                </Link>
              </p>
            </div>
          </div>
          <h3>
            <Link to="/">{data?.description}</Link>
          </h3>
          <div className="pricing">
            <p className="price">
              {data?.offPrice && (
                <span className="mr-2 price-dc">{data?.price * 85}</span>
              )}
              {
                <span className="price-sale">
                  {`Rs.${
                    data?.offPrice ? data?.offPrice * 85 : data?.price * 85
                  }`}
                </span>
              }
            </p>
          </div>
          <p className="bottom-area d-flex px-3">
            <Link
              to="#"
              className="add-to-cart text-center py-2 mr-1"
              onClick={() => addCartFunc(data)}
            >
              <span>
                {cartBtn}{" "}
                {cartBtn === "Add to cart" ? (
                  <i className="ion-ios-add ml-1"></i>
                ) : (
                  <i></i>
                )}
              </span>
            </Link>
            <Link to="/" className="buy-now text-center py-2">
              Buy now
              <span>
                <i className="ion-ios-cart ml-1"></i>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Card);
