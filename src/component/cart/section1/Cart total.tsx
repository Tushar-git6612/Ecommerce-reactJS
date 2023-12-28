import {Fragment,memo} from 'react'
import { Link } from 'react-router-dom';

function Carttotal({top }:{top:number | undefined;}) {
  return (
    <Fragment>
      {/* <div className="row justify-content-start"> */}
          <div className={`col col-lg-5 col-md-6 mt-${top} cart-wrap`}>
            <div className="cart-total mb-3">
              <h3>Cart Totals</h3>
              <p className="d-flex">
                <span>Subtotal</span>
                <span>$20.60</span>
              </p>
              <p className="d-flex">
                <span>Delivery</span>
                <span>$0.00</span>
              </p>
              <p className="d-flex">
                <span>Discount</span>
                <span>$3.00</span>
              </p>
              <hr />
              <p className="d-flex total-price">
                <span>Total</span>
                <span>$17.60</span>
              </p>
            </div>
            <p className="text-center">
              <Link to="" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link>
            </p>
          </div>
        {/* </div> */}
    </Fragment>
  )
}

export default memo(Carttotal);