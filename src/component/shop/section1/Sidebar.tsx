import { Fragment, memo, useState } from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { filterData, reset } from "../../../Redux/store/ProductSlice";

function Sidebar() {
  const [minValue, setMinValue] = useState<string | undefined>("");
  const [maxValue, setMaxValue] = useState<string | undefined>("");
  const data = useSelector((state: any) => state.products);

  const dispatch = useDispatch();

  const filterValue = () => {
    if (data) {
      var filterData$ = data.filter((item: any) => {
        let price = Number(item.price * 85);
        return price >= Number(minValue) && price <= Number(maxValue);
      });
      dispatch(filterData(filterData$));
    }
  };

  const resetFilter = () => {
    if (data?.length < 8) {
      dispatch(reset({ type: "reset filter" }));
      setMinValue("");
      setMaxValue("");
    }
  };

  return (
    <Fragment>
      <div className="sidebar">
        <Category />
        <div className="sidebar-box-2">
          <h2 className="heading">Price Range</h2>
          <form className="colorlib-form-2" onSubmit={filterValue}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="guests">Price from:</label>
                  <div className="form-field">
                    <i className="icon icon-arrow-down3"></i>
                    <input
                      type="text"
                      name="minPrice"
                      id="min"
                      className="form-control"
                      minLength={2}
                      value={minValue}
                      onChange={(e: any) => setMinValue(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="guests">Price to:</label>
                  <div className="form-field">
                    <i className="icon icon-arrow-down3"></i>
                    <input
                      type="text"
                      name="maxPrice"
                      id="max"
                      className="form-control"
                      maxLength={6}
                      value={maxValue}
                      onChange={(e: any) => setMaxValue(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-around">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={filterValue}
                    disabled={minValue?.length === 0 || maxValue?.length === 0}
                  >
                    filter
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={resetFilter}
                    disabled={minValue?.length === 0 || maxValue?.length === 0}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(Sidebar);
