import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import "../Css/Product.css";
import Fullproduct from "./Fullproduct";
import Lessproduct from "./Lessproduct";
import ProductLoader from "./ProductLoader";
const sortingList = [
  "All Products",
  "Sort By Popularity",
  "Sort By Newest",
  "Sort By Trending",
  "Sort By Sale",
];

const ProductDisplay = () => {
  const [view, setView] = useState("lessView");
  const [sorteditem, setSortedItem] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5000/product")
        .then((result) => {
          setProducts(result.data);
          setSortedItem(result.data);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  const handleSort = (e) => {
    let sortval = parseInt(e.target.value);

    if (sortval === 0) {
      setSortedItem(products);
      return;
    } else if (sortval === 1) {
      let sorted = [...products].sort((a, b) => b.rate - a.rate);
      setSortedItem(sorted);
      console.log(sorted);
      return;
    } else if (sortval === 2) {
      const sorted = [...products].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );
      setSortedItem([sorted[0]]);

      return;
    } else if (sortval === 4) {
      let sorted = products.filter((item) => item.sale > 0);
      setSortedItem(sorted);
      return;
    }
  };
  const getButtonStyle = (buttonView) => {
    if (buttonView === view) {
      return { border: "1px solid black" };
    }
    return { border: "none" };
  };

  return (
    <>
      <div className="action-bar d-flex justify-content-between align-items-center">
        <div className="left-part">
          <span>
            <BsFillGrid3X3GapFill
              className="action "
              id="lessview"
              onClick={() => setView("lessView")}
              style={getButtonStyle("lessView")}
            />
          </span>
          <TfiMenuAlt
            className="action"
            id="fullview"
            onClick={() => setView("fullView")}
            style={getButtonStyle("fullView")}
          />
        </div>
        <div className="sorting">
          <select name="sort" id="sort" onChange={handleSort}>
            {sortingList.map((item, index) => {
              return (
                <option value={index} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="display-products">
        {!products.length > 0 ? (
          <ProductLoader />
        ) : (
          <div className="row">
            {sorteditem.map((item, index) => {
              return view === "lessView" ? (
                <Lessproduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  sale={item.sale}
                  rate={item.rate}
                />
              ) : (
                <Fullproduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  sale={item.sale}
                  rate={item.rate}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDisplay;
