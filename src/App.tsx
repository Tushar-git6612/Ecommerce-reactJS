import "./App.css";
import { memo, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./component/loader/Loader";
import Home from "./component/Home/Index";
import About from "./component/about/Index";
import Nav from "./component/navbar/Nav";
import Blog from "./component/blog/Index";
import Contact from "./component/contact/Index";
import Shop from "./component/shop/Index";
import SingleProduct from "./component/single product/Index";
import Cart from "./component/cart/Index";
import Checkout from "./component/checkout/Index";
import Blogsingle from "./component/blog single/Index";
// const Home = lazy(() => FrontPageDelay(import("./component/Home/Index")));
// const About = lazy(() => otherPageDelay(import("./component/about/Index")));
// const Nav = lazy(() => otherPageDelay(import("./component/navbar/Nav")));
// const Blog = lazy(() => otherPageDelay(import("./component/blog/Index")));
// const Contact = lazy(() => otherPageDelay(import("./component/contact/Index")));
// const Shop = lazy(() => otherPageDelay(import("./component/shop/Index")));
// const SingleProduct = lazy(() =>
//   otherPageDelay(import("./component/single product/Index"))
// );
// const Cart = lazy(() => otherPageDelay(import("./component/cart/Index")));
// const Checkout = lazy(() =>
//   otherPageDelay(import("./component/checkout/Index"))
// );
// const Blogsingle = lazy(() =>
//   otherPageDelay(import("./component/blog single/Index"))
// );

// Add a fixed delay so you can see the loading state on front page of website
// function FrontPageDelay(FrontPagePromise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 400);
//   }).then(() => FrontPagePromise);
// }

// Add a fixed delay so you can see the loading state on other pages of website
// function otherPageDelay(otherPagePromise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 100);
//   }).then(() => otherPagePromise);
// }

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/SingleProduct" element={<SingleProduct />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Blogsingle" element={<Blogsingle />} />
          </Route>
        </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default memo(App);
