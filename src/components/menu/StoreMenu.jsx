import React from "react";
import StoreMenuList from "./StoreMenuList";

import "./styles/StoreMenu.css";

const categorys = [
  {
    title: "Absorbable",
    types: [
      {
        id: "1",
        type: "Vicryl - Braided (PGA)"
      },
      {
        id: "2",
        type: "Vicryl Rapide - Fast Absorb (PGA)"
      },
      {
        id: "3",
        type: "PDS II - Monofilament"
      },
      {
        id: "4",
        type: "Monofilament (Poliglecaprone 25)"
      },
      {
        id: "5",
        type: "Ethicon - Gut & Chromic Gut"
      }
    ]
  },
  {
    title: "Non-Absorbable",
    types: [
      {
        id: "6",
        type: "Ethilon - Nylon Mono"
      },
      {
        id: "7",
        type: "Prolene - Blue Poly Pro"
      },
      {
        id: "8",
        type: "Permahand - Silk Black Braided"
      },
      {
        id: "9",
        type: "Biopsy - Short Black Nylon"
      }
    ]
  },
  {
    title: "High Quality German Stainless Steel",
    types: [
      {
        id: "10",
        type: "Scissors"
      },
      {
        id: "11",
        type: "Towel Clamps"
      },
      {
        id: "12",
        type: "Needle Holders"
      },
      {
        id: "13",
        type: "Retractors/Skin Hooks"
      },
      {
        id: "14",
        type: "Nail Nippers"
      },
      {
        id: "15",
        type: "Forceps"
      }
    ]
  },
  {
    title: "Other Supplies",
    types: [
      {
        id: "16",
        type: "Surgical Instruments"
      },
      {
        id: "17",
        type: "Surgical Blades"
      }
    ]
  }
];

const StoreMenu = props => {
  return (
    <React.Fragment>
      <div className="store-menu-container">
        <div className="table-section-1">
          <div className="section-1">
            <h3>SUTURES: Select Type to Compare</h3>
            <div className="sub-section">
              <StoreMenuList category={categorys[0]} />
              <StoreMenuList category={categorys[1]} />
            </div>
          </div>
          <div className="section-1">
            <StoreMenuList category={categorys[2]} />
          </div>
          <div className="section-1">
            <StoreMenuList category={categorys[3]} />
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
