import React, { useState } from "react";
import { CardData } from "./CardData";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Timer from "./Timer";
import Modal from "./Modal";
import Gotop from "./Gotop";

const Search = (e) => {
  //search component
  const [searchTerm, setSearchTerm] = useState("");
  //Modal component
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState("[]");
  const getData = (image, title, content) => {
    let tempData = [image, title, content];
    setTempData((item) => [1, ...tempData]);
    return setModal(true);
  };

  //Filter component (not completely yet)
  const [type, setType] = useState(CardData);

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="  search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <ImageSlider slides={SliderData} />
      <Timer />

      <section className="product">
        <div className="filter">
          <button
            className="btn"
            value="All"
            onClick={(e) => setType(e.target.value)}
          >
            All
          </button>
          <button
            className="btn"
            value="notebook"
            onClick={(e) => setType(e.target.value)}
          >
            notebook
          </button>
          <button
            className="btn"
            value="smartphone"
            onClick={(e) => setType(e.target.value)}
          >
            smart phone
          </button>
          <button
            className="btn"
            value="tablet"
            onClick={(e) => setType(e.target.value)}
          >
            tablet
          </button>
          <button
            className="btn"
            value="earphone"
            onClick={(e) => setType(e.target.value)}
          >
            earphone
          </button>
        </div>

        <div className="card-container">
          {CardData.filter((item) => {
            switch (type) {
              case "All":
                return item;
              case "notebook":
                return item.type === "notebook";
              case "smartphone":
                return item.type === "smartphone";
              case "tablet":
                return item.type === "tablet";
              case "earphone":
                return item.type === "earphone";
            }
          }).map((item, index) => {
            return (
              <div className="card-body" key={index}>
                <img className="card-image" src={item.image} alt="" />
                <h2>{item.title}</h2>
                <button
                  className="card-button"
                  onClick={() => getData(item.image, item.title, item.content)}
                >
                  click me
                </button>
              </div>
            );
          })}
          {modal === true ? (
            <Modal
              image={tempData[1]}
              title={tempData[2]}
              content={tempData[3]}
              hide={() => setModal(false)}
            />
          ) : (
            ""
          )}
        </div>
      </section>
      <Gotop />
    </div>
  );
};

export default Search;
