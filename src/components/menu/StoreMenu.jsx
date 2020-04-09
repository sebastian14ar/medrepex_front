import React from "react";
import StoreMenuList from "./StoreMenuList";

import "./styles/StoreMenu.css";

const categorys = [
  {
    title: "Absorbable",
    types: [
      {
        id: "1",
        type: "Vicryl - Braided (PGA)",
        subtype: "suturesvicryl",
        path: "/store/sutures/suturesvicryl",
      },
      {
        id: "2",
        type: "Vicryl Rapide - Fast Absorb (PGA)",
        subtype: "suturesvicrylrapide",
        path: "/store/sutures/suturesvicrylrapide",
      },
      {
        id: "3",
        type: "PDS II - Monofilament",
        subtype: "suturespds",
        path: "/store/sutures/suturespds",
      },
      {
        id: "4",
        type: "Monofilament (Poliglecaprone 25)",
        subtype: "suturesmonoswift",
        path: "/store/sutures/suturesmonoswift",
      },
      {
        id: "5",
        type: "Ethicon - Gut & Chromic Gut",
        subtype: "suturesethicon",
        path: "/store/sutures/suturesethicon",
      },
    ],
  },
  {
    title: "Non-Absorbable",
    types: [
      {
        id: "6",
        type: "Ethilon - Nylon Mono",
        subtype: "suturesethilon",
        path: "/store/sutures/suturesethilon",
      },
      {
        id: "7",
        type: "Prolene - Blue Poly Pro",
        subtype: "suturesprolene",
        path: "/store/sutures/suturesprolene",
      },
      {
        id: "8",
        type: "Permahand - Silk Black Braided",
        subtype: "suturesperma",
        path: "/store/sutures/suturesperma",
      },
      {
        id: "9",
        type: "Biopsy - Short Black Nylon",
        subtype: "suturesbiopsy",
        path: "/store/sutures/suturesbiopsy",
      },
    ],
  },
  {
    title: "High Quality German Stainless Steel",
    types: [
      {
        id: "10",
        type: "Scissors",
        subtype: "gscissors",
        path: "/store/instruments/gscissors",
      },
      {
        id: "11",
        type: "Towel Clamps",
        subtype: "gtowelclamps",
        path: "/store/instruments/gtowelclamps",
      },
      {
        id: "12",
        type: "Needle Holders",
        subtype: "gneedleholders",
        path: "/store/instruments/gneedleholders",
      },
      {
        id: "13",
        type: "Retractors/Skin Hooks",
        subtype: "gretractors",
        path: "/store/instruments/gretractors",
      },
      {
        id: "14",
        type: "Nail Nippers",
        subtype: "gnailnippers",
        path: "/store/instruments/gnailnippers",
      },
      {
        id: "15",
        type: "Forceps",
        subtype: "gforceps",
        path: "/store/instruments/gforceps",
      },
    ],
  },
  {
    title: "Other Supplies",
    types: [
      {
        id: "17",
        type: "Surgical Blades",
        subtype: "blades",
        path: "/store/instruments/blades",
      },
    ],
  },
];

const StoreMenu = (props) => {
  console.log(props.typePage);

  return (
    <React.Fragment>
      <div className="store-menu-container">
        <div className="table-section-1">
          <div className="section-1">
            <h3>SUTURES: Select Type to Compare</h3>
            <div className="sub-section">
              <StoreMenuList type={props.typePage} category={categorys[0]} />
              <StoreMenuList type={props.typePage} category={categorys[1]} />
            </div>
          </div>
          <div className="section-1">
            <StoreMenuList type={props.typePage} category={categorys[2]} />
          </div>
          <div className="section-1">
            <StoreMenuList type={props.typePage} category={categorys[3]} />
          </div>
        </div>
        {/* <div className="table-section-2">
          <div className="section-2">
            <StoreMenuList category={categorys[3]} />
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default StoreMenu;
