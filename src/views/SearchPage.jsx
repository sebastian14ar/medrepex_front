import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
// import Footer from "../components/menu/Footer";
import SearchTable from "../components/SearchTable";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreMenuTitle from "../components/menu/StoreMenuTitle";

import "./styles/ProductsPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

const medicalItems = [
  {
    code: "315A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle SH Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "316A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle SH Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "416A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle SH Length 30", Undyed, 12/Box`,
    price: 43.98,
  },

  {
    code: "317A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle SH Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "466A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle CP-1 Length 30", Violet, 12/Box`,
    price: 46.25,
  },

  {
    code: "467A",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `0, Needle CP-1 Length 30", Violet, 12/Box`,

    price: 46.25,
  },

  {
    code: "351A",
    ethiconCode: "J351G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle CT Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "352A",
    ethiconCode: "J352G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `0, Needle CT Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "354A",
    ethiconCode: "J354G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2, Needle CT Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "338A",
    ethiconCode: "J338G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle CT-1 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "345A",
    ethiconCode: "J345G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "259A",
    ethiconCode: "J259G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle CT-1 Length 30", Un-dyed, 12/Box`,
    price: 43.98,
  },

  {
    code: "346A",
    ethiconCode: "J346G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `0, Needle CT-1 Length 36", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "341A",
    ethiconCode: "J341G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `1, Needle CT-1 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "340A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `0, Needle CT-1 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "332A",
    ethiconCode: "J332G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle CT-2 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "333A",
    ethiconCode: "J333G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle CT-2 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "334A",
    ethiconCode: "J334G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `0, Needle CT-2 Length 30", Violet, 12/Box`,
    price: 43.98,
  },

  {
    code: "586A",
    ethiconCode: "J586G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle FSL Length 30", Violet, 12/Box`,
    price: 48.31,
  },

  {
    code: "589A",
    ethiconCode: "J589G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle FSL Length 30", Un-dyed, 12/Box`,
    price: 48.31,
  },

  {
    code: "385A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle C-3 (13mm)Length 18", Violet, 12/Box`,

    price: 49.25,
  },

  {
    code: "392A",
    ethiconCode: "J392G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
    price: 46.25,
  },

  {
    code: "398A",
    ethiconCode: "J398G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle FS-2 Length 18", Violet, 12/Box`,
    price: 46.25,
  },

  {
    code: "421A",
    ethiconCode: "J421G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
    price: 46.25,
  },

  {
    code: "422A",
    ethiconCode: "J422G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle FS-2 Length 30", Un-dyed, 12/Box`,
    price: 49.25,
  },

  {
    code: "423A",
    ethiconCode: "J423G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
    price: 49.25,
  },

  {
    code: "452A",
    ethiconCode: "J452G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle FS-1 Length 30", Violet, 12/Box`,
    price: 49.25,
  },

  {
    code: "453A",
    ethiconCode: "J453G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle FS-1 Length 30", Violet, 12/Box`,
    price: 46.25,
  },

  {
    code: "443A",
    ethiconCode: "J443G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `2-0, Needle FS-1 Length 30", Un-dyed, 12/Box`,
    price: 49.25,
  },

  {
    code: "386A",
    ethiconCode: "J386G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle C-3 (13mm) Length 18", Violet, 12/Box`,
    price: 44.9,
  },

  {
    code: "503A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
    price: 81.89,
  },

  {
    code: "504A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
    price: 81.89,
  },

  {
    code: "489A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `6-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

    price: 81.89,
  },

  {
    code: "490A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

    price: 81.89,
  },

  {
    code: "427A",
    ethiconCode: "J427G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,
    price: 71.89,
  },

  {
<<<<<<< HEAD
    code: "426A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, NPS-2 Needle, Undyed, 30" Suture, 12/Box`,
    price: 71.89,
  },

  {
=======
>>>>>>> 7402cd971387a9009ca52b059af5954a16e3b95b
    code: "492A",
    ethiconCode: "J492G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `6-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "493A",
    ethiconCode: "J493G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "494A",
    ethiconCode: "J494G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "500A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle PS-3 (16mm) Length 18", Un-dyed, 12/Box`,

    price: 81.89,
  },

  {
    code: "495A",
    ethiconCode: "J495G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "496A",
    ethiconCode: "J496G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",

    size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "497A",
    ethiconCode: "J497G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
    price: 75.90,
  },

  {
    code: "683A",
    ethiconCode: "",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `3-0, Needle PS-1 Length 18", Un-dyed, 12/Box`,
    price: 71.89,
  },

  {
    code: "464A",
    ethiconCode: "J464G",
    description: "Visorb(PGA)",
    category: "Absorbable Sutures",
    size: `4-0, Needle P-3 Length 18", Violet, 12/Box`,
    price: 81.89,
  },

  {
    code: "VQ392",
    ethiconCode: "VR392",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
    price: 59.33,
  },
  {
    code: "VQ490",
    ethiconCode: "VR490",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `5-0, Needle P-1 Length 18", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ493",
    ethiconCode: "VR493",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `5-0, Needle P-3
            Length 18", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ494",
    ethiconCode: "VR494",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `4-0, Needle P-3
            Length 18", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ496",
    ethiconCode: "VR496",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `4-0, Needle PS-2
            Length 18", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ426",
    ethiconCode: "VQ426",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `4-0, Needle PS-2
            Length 30", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ497",
    ethiconCode: "VR497",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `3-0, Needle PS-2
            Length 18", Un-dyed, 12/Box`,
    price: 95.28,
  },
  {
    code: "VQ935",
    ethiconCode: "VR935",
    description: "Visorb Quick",
    category: "Absorbable Sutures",
    size: `3-0, Needle PS-1
            Length 30", Un-dyed, 12/Box`,
    price: 95.28,
  },

  {
    code: "M315",
    ethiconCode: "Z315",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `4-0, Needle SH
            Length 30", Violet, 12/Box`,
    price: 53.25,
  },
  {
    code: "M316",
    ethiconCode: "Z316",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `3-0, Needle SH
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M317",
    ethiconCode: "Z317",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle SH
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M332",
    ethiconCode: "Z332",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `3-0, Needle CT-2
            Length 30", Violet, 12/Box`,
    price: 56.44,
  },
  {
    code: "M333",
    ethiconCode: "Z333",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle CT-2
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M334",
    ethiconCode: "Z334",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `0, Needle CT-2
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M339",
    ethiconCode: "Z339",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle CT-1
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M340",
    ethiconCode: "Z340",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `0, Needle CT-1
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M397",
    ethiconCode: "Z397",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `4-0, Needle FS-2
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M398",
    ethiconCode: "Z398",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `3-0, Needle FS-2
            Length 30", Violet, 12/Box`,
    price: 51.26,
  },
  {
    code: "M452",
    ethiconCode: "Z452",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `3-0, Needle FS-1
            Length 30", Violet, 12/Box`,
    price: 53.25,
  },
  {
    code: "M451",
    ethiconCode: "Z451",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle FS-1
            Length 30", Violet, 12/Box`,
    price: 53.25,
  },
  {
    code: "M466",
    ethiconCode: "Z466",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle CP-1
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M467",
    ethiconCode: "Z467",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `0, Needle CP-1
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M468",
    ethiconCode: "Z468",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `1, Needle CP-1
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M968",
    ethiconCode: "Z968",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `3-0, Needle CP-2
            Length 30", Violet, 12/Box`,
    price: 51.29,
  },
  {
    code: "M969",
    ethiconCode: "Z969",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `2-0, Needle CP-2
            Length 30", Violet, 12/Box`,
    price: 56.44,
  },
  {
    code: "M970",
    ethiconCode: "Z970",
    description: "Monodox(PDO)",
    category: "Monofilament Sutures",
    size: `0, Needle CP-2
            Length 30", Violet, 12/Box`,
    price: 56.44,
  },

  {
    code: "L310",
    ethiconCode: "Y310G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle SH-1 Length 30", Violet, 12/Box`,

    price: 61.59,
  },

  {
    code: "L315",
    ethiconCode: "Y315G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle SH Length 30", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L316",
    ethiconCode: "Y316G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle SH Length 30", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L317",
    ethiconCode: "Y317G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `2-0, Needle SH Length 30", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L344",
    ethiconCode: "Y344G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle CT-1 Length 36", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L345",
    ethiconCode: "Y345G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L346",
    ethiconCode: "Y346G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `0, Needle CT-1 Length 36", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L762",
    ethiconCode: "Y762G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `2-0, Needle CT-2 Length 36", Violet, 12/Box`,

    price: 45.84,
  },

  {
    code: "L495",
    ethiconCode: "Y495G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L426",
    ethiconCode: "Y426G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L496",
    ethiconCode: "Y496G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L427",
    ethiconCode: "Y427G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L497",
    ethiconCode: "Y497G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L936",
    ethiconCode: "Y936G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle PS-1 Length 30", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L463",
    ethiconCode: "Y463G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `5-0, Needle P-3 Length 18", Violet, 12/Box`,

    price: 80.86,
  },

  {
    code: "L493",
    ethiconCode: "Y493G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L494",
    ethiconCode: "Y494G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

    price: 80.86,
  },

  {
    code: "L922",
    ethiconCode: "Y922G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `4-0, Needle FS-2 Length 36", Violet, 12/Box`,

    price: 51.29,
  },

  {
    code: "L923",
    ethiconCode: "Y923G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle FS-2 Length 36", Violet, 12/Box`,

    price: 51.29,
  },

  {
    code: "L942",
    ethiconCode: "Y942G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `3-0, Needle FS-1 Length 36", Violet, 12/Box`,

    price: 51.29,
  },

  {
    code: "L943",
    ethiconCode: "Y943G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `2-0, Needle FS-1 Length 36", Violet, 12/Box`,

    price: 51.29,
  },

  {
    code: "L987",
    ethiconCode: "Y987G",

    description: "CP Medical Monoswift",
    category: "Absorbable Sutures",

    size: `0, Needle FSL Length 36", Violet, 12/Box`,

    price: 61.59,
  },

  {
    code: "820PG",
    ethiconCode: "H820G",

    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `5-0, Needle FS-2 Length 27", 12/Box`,

    price: 43.16,
  },

  {
    code: "821PG",
    ethiconCode: "H821G",

    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `4-0, Needle FS-2 Length 27", 12/Box`,

    price: 43.16,
  },

  {
    code: "822PG",
    ethiconCode: "H822G",

    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `3-0, Needle FS-2 Length 27", 12/Box`,

    price: 43.16,
  },

  {
    code: "810PG",
    ethiconCode: "H810G",

    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `3-0, Needle FS-1 Length 30", 12/Box`,
    price: 43.16,
  },

  {
    code: "612PG",
    ethiconCode: "612G",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `3-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "537PG",
    ethiconCode: "",
    description: "CP Medical",

    category: "Plain Gut Sutures",

    size: `4-0, Needle X-8, 15mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

    price: 56.44,
  },

  {
    code: "591PG",
    ethiconCode: "591G",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `4-0, Needle FS-2 Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "592PG",
    ethiconCode: "592G",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `3-0, Needle FS-2 Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "593PG",
    ethiconCode: "593G",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `4-0, Needle CP-2 Length 18", 12/Box`,

    price: 56.44,
  },

  {
    code: "535PG",
    ethiconCode: "",
    description: "CP Medical",

    category: "Plain Gut Sutures",

    size: `5-0, Needle C-2, 13mm, 3/8" Cir. Cutting Needle Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "686PG",
    ethiconCode: "686G",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `5-0, Needle P-3 Premium Length 18", 12/Box`,

    price: 68.79,
  },

  {
    code: "1915PG",
    ethiconCode: "",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `5-0, Needle PC-1 Length 18", 12/Box`,

    price: 82.3,
  },

  {
    code: "1916PG",
    ethiconCode: "",
    description: "CP Medical",
    category: "lain Gut Sutures",

    size: `6-0, Needle PC-1 Length 18", 12/Box`,

    price: 82.3,
  },

  {
    code: "1644PG",
    ethiconCode: "H1644G",

    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `4-0, Needle FP-3 Length 18", 12/Box`,

    price: 64.79,
  },

  {
    code: "774PG",
    ethiconCode: "",
    description: "CP Medical",
    category: "Plain Gut Sutures",

    size: `6-0, Needle P-1 Length 18", 12/Box`,

    price: 68.79,
  },

  {
    code: "121CG",
    ethiconCode: "121G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle SH, 1/2" Cir. Taper Point, 26mm Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "122CG",
    ethiconCode: "122G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `3-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "123CG",
    ethiconCode: "123G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `2-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

    price: 35.84,
  },

  {
    code: "203CG",
    ethiconCode: "203CG",

    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle RB-1, 1/2 Cir, 17mm<br />Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "181CG",
    ethiconCode: "",
    description: "CP Medical",
    category: "Chromic Gut Sutures",
    size: `4-0, Needle SH-1, 1/2 Cir 22mm Length 30", 12/Box`,

    price: 51.4,
  },

  {
    code: "182CG",
    ethiconCode: "182G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `3-0, Needle SH-1, 1/2 Cir 26mm Length 30", 12/Box`,

    price: 51.4,
  },

  {
    code: "634CG",
    ethiconCode: "634G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `5-0, Needle FS-2 Length 30", 12/Box`,

    price: 39.96,
  },

  {
    code: "635CG",
    ethiconCode: "635G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle FS-2 Length 27", 12/Box`,

    price: 39.96,
  },

  {
    code: "636CG",
    ethiconCode: "636G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `3-0, Needle FS-2 Length 27", 12/Box`,

    price: 39.96,
  },

  {
    code: "558CG",
    ethiconCode: "558G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle FS-2 Length 18", 12/Box`,

    price: 39.96,
  },

  {
    code: "810CG",
    ethiconCode: "810G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `3-0, Needle CT-1 Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "811CG",
    ethiconCode: "811G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `2-0, Needle CT-1 Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "812CG",
    ethiconCode: "812G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `0, Needle CT-1 Length 30", 12/Box`,

    price: 43.16,
  },

  {
    code: "813CG",
    ethiconCode: "813G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `1, Needle CT-1 Length 30", 12/Box`,

    price: 51.4,
  },

  {
    code: "817CG",
    ethiconCode: "817G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `0, Needle CP-1 Length 30", 12/Box`,

    price: 51.4,
  },

  {
    code: "547CG",
    ethiconCode: "",
    description: "CP Medical",
    category: "Chromic Gut Sutures",
    size: `4-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle 
              Length 20", 12/Box`,

    price: 43.16,
  },

  {
    code: "543CG",
    ethiconCode: "543G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `5-0, Needle C-3, 13mm Cutting Needle Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "546CG",
    ethiconCode: "",
    description: "CP Medical",
    category: "Chromic Gut Sutures",
    size: `4-0, Needle C-3, 13mm Cutting Needle 
              Length 18", 12/Box`,

    price: 43.16,
  },

  {
    code: "1637CG",
    ethiconCode: "1637G",

    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle PS-2 Length 18" Lg., 12/Box`,

    price: 64.79,
  },

  {
    code: "1654CG",
    ethiconCode: "1654G",

    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `4-0, Needle P-3 Length 18", 12/Box`,

    price: 64.79,
  },

  {
    code: "687CG",
    ethiconCode: "687G",
    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `5-0, Needle P-3 Length 18", 12/Box`,

    price: 64.79,
  },

  {
    code: "1242CG",
    ethiconCode: "1242G",

    description: "CP Medical",
    category: "Chromic Gut Sutures",

    size: `6-0, Needle P-1 Length 18", 12/Box`,

    price: 64.79,
  },

  {
    code: "660B",
    ethiconCode: "660G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `6-0, Needle FS-3 Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "661B",
    ethiconCode: "661G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle FS-2 Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "944B",
    ethiconCode: "944G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `4-0, Needle FS-2 Length 10", 12/Box`,

    price: 35.92,
  },

  {
    code: "945B",
    ethiconCode: "945G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle FS-2 Length 10", 12/Box`,

    price: 35.92,
  },

  {
    code: "662B",
    ethiconCode: "662G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `4-0, Needle FS-2 Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "662M",
    ethiconCode: "662H",
    description: "CP Medical",
    category: "Monomid Blue Nylon Sutures",

    size: `4-0, Needle FS-2 Length 30", 12/Box`,

    price: 35.92,
  },

  {
    code: "928B",
    ethiconCode: "928G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `3-0, Needle FS-2 Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "663B",
    ethiconCode: "663G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `3-0, Needle FS-1 Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "663M",
    ethiconCode: "663H",
    description: "CP Medical",
    category: "Monomid Blue Nylon Sutures",

    size: `3-0, Needle FS-1 Length 30", 12/Box`,

    price: 35.92,
  },

  {
    code: "664B",
    ethiconCode: "664G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `2-0, Needle FS Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "664M",
    ethiconCode: "664H",
    description: "CP Medical",
    category: "Monomid Blue Nylon Sutures",

    size: `2-0, Needle FS Length 30", 12/Box`,

    price: 35.92,
  },

  {
    code: "667B",
    ethiconCode: "667G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `6-0, Needle C-2, 13mm Length 18", 12/Box`,

    price: 35.92,
  },
  {
    code: "1696B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `7-0, Needle P-1, 11mm Length 18", 12/Box`,

    price: 77.04,
  },
  {
    code: "668B",
    ethiconCode: "668G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle C-2, 13mm Length 18", 12/Box`,

    price: 35.92,
  },

  {
    code: "697B",
    ethiconCode: "697G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `6-0, Needle P-1 Length 18", 12/Box`,

    price: 66.74,
  },

  {
    code: "1698B",
    ethiconCode: "1698G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `6-0, Needle P-3 Length 18", 12/Box`,

    price: 66.74,
  },

  {
    code: "698B",
    ethiconCode: "698G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle P-3 Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "1663B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `3-0, Needle PS-1, 24mm Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "699B",
    ethiconCode: "699G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `4-0, Needle P-3 Length 18", 12/Box`,

    price: 66.74,
  },

  {
    code: "1666B",
    ethiconCode: "1666G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle PS-2 Length 18", 12/Box`,

    price: 66.74,
  },

  {
    code: "1667B",
    ethiconCode: "1667G",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `4-0, Needle PS-2 Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "1669B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `3-0, Needle PS-2 Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "593B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `2-0, Needle PS-2 Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "1668B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `5-0, Needle PS-3, 16mm Length 18", 12/Box`,

    price: 66.74,
  },
  {
    code: "1665B",
    ethiconCode: "",
    description: "CP Medical",
    category: "Monomid Black Nylon Sutures",

    size: `6-0, Needle PS-3 Length 18", 12/Box`,

    price: 66.74,
  },

  {
    code: "1273B",
    ethiconCode: "",

    description: `Short Black Nylon`,
    category: "Monomid Sutures",

    size: `6-0, Needle P-3 (13mm cutting) Length 10", 12/Box`,

    price: 66.74,
  },

  {
    code: "931B",
    ethiconCode: "",

    description: `Short Black Nylon`,
    category: "Monomid Sutures",

    size: `4-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

    price: 35.92,
  },
  {
    code: "690",
    ethiconCode: "",
    description: `CP Medical Monomid CLEAR`,
    category: "Nylon Sutures",

    size: `5-0, Needle P-3 (13mm cutting) 
              Length 18", 12/Box`,

    price: 60.67,
  },
  {
    code: "691",

    ethiconCode: "",

    description: "CP Medical Monomid CLEAR",
    category: "Nylon Sutures",

    size: `4-0, Needle P-3 (13mm cutting) 
              Length 18", 12/Box`,

    price: 60.67,
  },

  {
    code: "1011P",
    ethiconCode: "1011G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `6-0, Needle C-3, 13mm Length 10", 12/Box`,

    price: 33.78,
  },

  {
    code: "1013P",
    ethiconCode: "1013G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle C-3, 13mm Length 10", 12/Box`,

    price: 33.78,
  },

  {
    code: "1031P",
    ethiconCode: "1031G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle C-3, 13mm Length 10", 12/Box`,

    price: 33.78,
  },

  {
    code: "8661P",
    ethiconCode: "8661G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle FS-2 Length 18", 12/Box`,

    price: 46.14,
  },

  {
    code: "8683P",
    ethiconCode: "8683G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle FS-2 Length 18", 12/Box`,

    price: 46.14,
  },

  {
    code: "8665P",
    ethiconCode: "8665G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `3-0, Needle FS-2 Length 18", 12/Box`,

    price: 46.14,
  },

  {
    code: "8629P",
    ethiconCode: "8629G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle FS-1 Length 18", 12/Box`,

    price: 46.14,
  },

  {
    code: "8684P",
    ethiconCode: "8684G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `3-0, Needle FS-1 Length 18", 12/Box`,

    price: 46.14,
  },
  {
    code: "8663P",
    ethiconCode: "",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `3-0, Needle PS-1 Length 18", 12/Box`,

    price: 72.0,
  },
  {
    code: "8685P",
    ethiconCode: "8685G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `2-0, Needle FS Length 18", 12/Box`,

    price: 46.14,
  },

  {
    code: "8424P",
    ethiconCode: "8424G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `0, Needle CT-1 Length 30", 12/Box`,

    price: 46.14,
  },

  {
    code: "8434P",
    ethiconCode: "",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `0, Needle CT, 40mm Length 30", 12/Box`,

    price: 46.14,
  },

  {
    code: "8435P",
    ethiconCode: "8435G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `1, Needle CT, 40mm Length 30", 12/Box`,

    price: 46.14,
  },

  {
    code: "8690P",
    ethiconCode: "8690G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `0, Needle FS-LX Length 30", 12/Box`,

    price: 46.14,
  },

  {
    code: "8686P",
    ethiconCode: "8686G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle PS-2 Length 18", 12/Box`,

    price: 72.00,
  },

  {
    code: "8682P",
    ethiconCode: "8682G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle PS-2 Length 18", 12/Box`,

    price: 72.0,
  },

  {
    code: "8681P",
    ethiconCode: "8681G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle PS-3 Length 18", 12/Box`,

    price: 72.0,
  },

  {
    code: "8648P",
    ethiconCode: "8648G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `7-0, P6, 8mm Needle Length 18", 12/Box`,

    price: 88.58,
  },

  {
    code: "8687P",
    ethiconCode: "",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `3-0, PS-2 Length 18", 12/Box`,

    price: 72.0,
  },
  {
    code: "8680P",
    ethiconCode: "",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `6-0, PS-3, 16mm Length 18", 12/Box`,

    price: 78.8,
  },
  {
    code: "8695P",
    ethiconCode: "8695G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `6-0, Needle P-3 Length 18", 12/Box`,

    price: 78.80,
  },

  {
    code: "8697P",
    ethiconCode: "8697G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `6-0, Needle P-1 Length 18", 12/Box`,

    price: 78.80,
  },
  {
    code: "8698P",
    ethiconCode: "8698G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle P-3 Length 18", 12/Box`,

    price: 78.80,
  },

  {
    code: "8699P",
    ethiconCode: "8699G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle P-3 Length 18", 12/Box`,

    price: 78.80,
  },

  {
    code: "8870P",
    ethiconCode: "8870G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `5-0, Needle RB-1 Length 30", 12/Box`,

    price: 51.4,
  },

  {
    code: "8871P",
    ethiconCode: "8871G",
    description: "CP Medical Blue",
    category: "Polypropylene Sutures",
    size: `4-0, Needle RB-1, 17mm Length 30", 12/Box`,

    price: 51.40,
  },

  {
    code: "632S",

    ethiconCode: "632G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle X-1, 23mm Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "675S",
    ethiconCode: "675G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle FSL, 30mm Length 30", 12/Box`,

    price: 39.90,
  },

  {
    code: "667S",
    ethiconCode: "667G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `6-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

    price: 41.07,
  },

  {
    code: "736S",
    ethiconCode: "736G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `4-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

    price: 41.07,
  },

  {
    code: "795S",
    ethiconCode: "795G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle C-2, 13mm Length 18", 12/Box`,

    price: 41.07,
  },

  {
    code: "782S",
    ethiconCode: "782G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle CP-2, 26mm Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "833S",
    ethiconCode: "",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `2-0, Needle NSH, 26mm Length 30", 12/Box`,

    price: 39.90,
  },

  {
    code: "750S",
    ethiconCode: "750G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `6-0, Needle FS-3, 16mm Length 18", 12/Box`,

    price: 47.17,
  },

  {
    code: "681S",
    ethiconCode: "",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `6-0, Needle FS-2 Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "682S",
    ethiconCode: "682G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `5-0, Needle FS-2 Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "683S",
    ethiconCode: "683G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `4-0, Needle FS-2 Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "684S",
    ethiconCode: "684G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle FS-1 Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "685S",
    ethiconCode: "685G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `2-0, Needle FS Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "7762S",
    ethiconCode: "7762",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle X-8, 15mm Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "7763S",
    ethiconCode: "7763",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `4-0, Needle X-8, 15mm Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "7772S",
    ethiconCode: "7772",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `3-0, Needle FS-2 Length 18", 12/Box`,

    price: 39.90,
  },

  {
    code: "870S",
    ethiconCode: "",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `5-0, Needle NRB-1 Length 30", 12/Box`,

    price: 47.17,
  },

  {
    code: "1639S",
    ethiconCode: "1639G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `6-0, Needle P-3 Length 18", 12/Box`,

    price: 56.52,
  },

  {
    code: "639S",
    ethiconCode: "639G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `6-0, Needle P-1 Length 18", 12/Box`,

    price: 77.12,
  },

  {
    code: "640S",
    ethiconCode: "640G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `5-0, Needle P-3 Length 18", 12/Box`,

    price: 77.12,
  },

  {
    code: "641S",
    ethiconCode: "641G",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `4-0, Needle P-3 Length 18", 12/Box`,

    price: 67.77,
  },

  {
    code: "1588S",
    ethiconCode: "1588H",

    description: "CP Medical Silk Black",
    category: "Braided Sutures",

    size: `2-0, Needle PS, 26mm Length 18", 12/Box`,

    price: 77.12,
  },

  {
    code: "911B",
    ethiconCode: "",

    description: "Short Black Nylon",
    category: "Monomid Sutures",

    size: `6-0, Needle C-3 (13mm cutting)
            Length 10", 12/Box`,

    price: 35.92,
  },
  {
    code: "913B",
    ethiconCode: "",

    description: "Short Black Nylon",
    category: "Monomid Sutures",

    size: `5-0, Needle C-3 (13mm cutting)
            Length 10", 12/Box`,

    price: 35.92,
  },

  //  End surgical items

  // end oral items

  // end cosmetic items

  // diferent items
  {
    code: "MV-J310",
    description: "Braided Absorbable Suture",
    size: `4-0, Needle NSH-1(SH-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J311",
    description: "Braided Absorbable Suture",
    size: `-0, Needle NSH-1(SH-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J315",
    description: "Braided Absorbable Suture",
    size: `4-0, Needle NSH(SH) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J316",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NSH(SH) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J317",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NSH(SH) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J318",
    description: "Braided Absorbable Suture",
    size: `0, Needle NSH(SH) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J332",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NCT-2(CT-2) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J333",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NCT-2(CT-2) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J334",
    description: "Braided Absorbable Suture",
    size: `0, Needle NCT-2(CT-2) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J338",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NCT-1(CT-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J339",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NCT-1(CT-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J340",
    description: "Braided Absorbable Suture",
    size: `0, Needle NCT-1(CT-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J341",
    description: "Braided Absorbable Suture",
    size: `1, Needle NCT-1(CT-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J397",
    description: "Braided Absorbable Suture",
    size: `4-0, Needle NFS-2(FS-2) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J398",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NFS-2(FS-2) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J451",
    description: "Braided Absorbable Suture",
    size: `4-0, Needle NFS-1(FS-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J452",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NFS-1(FS-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J453",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NFS-1(FS-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J460",
    description: "Braided Absorbable Suture",
    size: `3-0, Needle NX-1(X-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J461",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NX-1(X-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J466",
    description: "Braided Absorbable Suture",
    size: `2-0, Needle NCP-1(CP-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J467",
    description: "Braided Absorbable Suture",
    size: `0, Needle NCP-1(CP-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J468",
    description: "Braided Absorbable Suture",
    size: `1, Needle NCP-1(CP-1) Length 27"`,
    price: 29.9,
  },
  {
    code: "MV-J587",
    description: "Braided Absorbable Suture",
    size: `0, Needle NF-SL(F-SL) Length 27"`,
    price: 29.9,
  },
  // end

  // diferent items
  {
    code: "MV-Z310",
    description: "Monofilament Synthetic Suture",

    size: "4-0, Needle SH-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z311",

    description: "Monofilament Synthetic Suture",

    size: "3-0, Needle SH-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z316",
    description: "Monofilament Synthetic Suture",
    size: "3-0, Needle SH Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z317",

    description: "Monofilament Synthetic Suture",

    size: "2-0, Needle SH Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z332",

    description: "Monofilament Synthetic Suture",

    size: "3-0, Needle CT-2 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z333",

    description: "Monofilament Synthetic Suture",

    size: "2-0, Needle CT-2 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z334",

    description: "Monofilament Synthetic Suture",

    size: "0, Needle CT-2 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z339",

    description: "Monofilament Synthetic Suture",

    size: "2-0, Needle CT-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z340",

    description: "Monofilament Synthetic Suture",

    size: "0, Needle CT-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z341",

    description: "Monofilament Synthetic Suture",

    size: "1, Needle CT-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z397",

    description: "Monofilament Synthetic Suture",

    size: "4-0, Needle FS-2 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z398",

    description: "Monofilament Synthetic Suture",

    size: "3-0, Needle FS-2 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z451",

    description: "Monofilament Synthetic Suture",

    size: "2-0, Needle FS-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z452",

    description: "Monofilament Synthetic Suture",

    size: "3-0, Needle FS-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z466",

    description: "Monofilament Synthetic Suture",

    size: "2-0, Needle CP-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z467",

    description: "Monofilament Synthetic Suture",

    size: "0, Needle CP-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z468",

    description: "Monofilament Synthetic Suture",

    size: "1, Needle CP-1 Length 27",

    price: 36.9,
  },

  {
    code: "MV-Z587",

    description: "Monofilament Synthetic Suture",

    size: "0, Needle F-SL Length 27",

    price: 36.9,
  },

  // end

  // diferent items
  {
    code: "MV-H821",

    description: "GUT OASIS Plain Gut Suture, 12/Box",

    size: `4-0, Needle FS-2
            Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-H822",

    description: "GUT OASIS Plain Gut Suture, 12/Box",

    size: `3-0, Needle FS-2
            Length 27"`,

    price: 21.0,
  },
  {
    code: "MV-635",

    description: "Natural Chromic-Gut Sutures",

    size: `4-0, Needle FS-2 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-636",

    description: "Natural Chromic-Gut Sutures",

    size: `3-0, Needle FS-2 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-637",

    description: "Natural Chromic-Gut Sutures",

    size: `2-0, Needle FS-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-638",

    description: "Natural Chromic-Gut Sutures",

    size: `0, Needle FS Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-810",

    description: "Natural Chromic-Gut Sutures",

    size: `3-0, Needle CT-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-811",

    description: "Natural Chromic-Gut Sutures",

    size: `2-0, Needle CT-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-812",

    description: "Natural Chromic-Gut Sutures",

    size: `0, Needle CT-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-813",

    description: "Natural Chromic-Gut Sutures",

    size: `1, Needle CT-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-817",

    description: "Natural Chromic-Gut Sutures",

    size: `0, Needle CP-1 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-883",

    description: "Natural Chromic-Gut Sutures",

    size: `2-0, Needle CT-2 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-884",

    description: "Natural Chromic-Gut Sutures",

    size: `0, Needle CT-2 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-888",

    description: "Natural Chromic-Gut Sutures",

    size: `0, Needle CP-2 Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-G121",

    description: "Natural Chromic-Gut Sutures",

    size: `4-0, Needle HS Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-G122",

    description: "Natural Chromic-Gut Sutures",

    size: `3-0, Needle HS Length 27"`,

    price: 21.0,
  },

  {
    code: "MV-G123",

    description: "Natural Chromic-Gut Sutures",

    size: `2-0, Needle HS Length 27"`,

    price: 21.0,
  },
  //end

  // diferent items
  {
    code: "MV-661",

    description: "Nylon Monofilament Suture",

    size: `5-0, Needle FS-2 Length 30"`,

    price: 21.9,
  },

  {
    code: "MV-662",

    description: "Nylon Monofilament Suture",

    size: `4-0, Needle FS-2
            Length 30"`,

    price: 21.9,
  },

  {
    code: "MV-663",

    description: "Nylon Monofilament Suture",

    size: `3-0, Needle FS-1 Length 30"`,

    price: 21.9,
  },

  {
    code: "MV-664",

    description: "Nylon Monofilament Suture",

    size: `2-0, Needle FS
            Length 30"`,

    price: 21.9,
  },

  {
    code: "MV-1629",

    description: "Nylon Monofilament Suture",

    size: `4-0, Needle FS-1
            Length 30"`,

    price: 21.9,
  },

  //end

  // diferent items

  {
    code: "MV-8661",

    description: "OASIS Blue Polypropylene, 12/Box",

    size: `5-0, Needle FS-2 Length 18"`,

    price: 28.9,
  },

  {
    code: "MV-8665",

    description: "OASIS Blue Polypropylene, 12/Box",

    size: `3-0, Needle FS-2 Length 18"`,

    price: 28.9,
  },

  {
    code: "MV-8683",

    description: "OASIS Blue Polypropylene, 12/Box",

    size: `4-0, Needle FS-2 Length 18"`,

    price: 28.9,
  },

  {
    code: "MV-8684",

    description: "OASIS Blue Polypropylene, 12/Box",

    size: `3-0, Needle FS-1 Length 18"`,

    price: 28.9,
  },

  {
    code: "MV-8685",

    description: "OASIS Blue Polypropylene, 12/Box",

    size: `2-0, Needle FS Length 18"`,

    price: 28.9,
  },

  // end

  // diferent items

  {
    code: "MV-682",

    description: "OASIS Black Braided Silk Suture, 12/Box",

    size: `nowrap>5-0, Needle FS-2 Length 18"`,

    price: 19.5,
  },

  {
    code: "MV-683",

    description: "OASIS Black Braided Silk Suture, 12/Box",

    size: `nowrap>4-0, Needle FS-2 Length 18"`,

    price: 19.5,
  },

  {
    code: "MV-629",

    description: "OASIS Black Braided Silk Suture, 12/Box",

    size: `4-0, Needle FS-1 Length 18"`,

    price: 19.5,
  },

  {
    code: "MV-684",

    description: "OASIS Black Braided Silk Suture, 12/Box",

    size: `3-0, Needle FS-1 Length 18"`,

    price: 19.5,
  },

  {
    code: "MV-685",

    description: "OASIS Black Braided Silk Suture, 12/Box",

    size: `2-0, Needle FS Length 18"`,

    price: 19.5,
  },

  // end

  // end veterinarian items

  {
    code: "VK140-2084",
    description: `Knowles Bandage Scissors, 5 1/2`,
    price: 29.5,
  },

  {
    code: "VK140-2511",
    description: `Lister Bandage Scissors, 4 1/2`,
    price: 24.5,
  },

  {
    code: "VK140-2514",
    description: `Lister Bandage Scissors, 5 1/2`,
    price: 24.5,
  },

  {
    code: "VK103-0211",
    description: `OR Scissors, Blunt/Blunt, 4 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-0311",
    description: `OR Scissors, Blunt/Blunt, 4 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK103-0214",
    description: `OR Scissors, Blunt/Blunt, 5 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-0314",
    description: `OR Scissors, Blunt/Blunt, 5 1/2", Curve`,
    price: 29.5,
  },

  {
    code: "VK103-0216",
    description: `OR Scissors, Blunt/Blunt, 6 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-0316",
    description: `OR Scissors, Blunt/Blunt, 6 1/2", Curve`,
    price: 29.5,
  },

  {
    code: "VK103-0611",
    description: `OR Scissors, Sharp/Blunt, 4 1/2", Straigh`,
    price: 28.5,
  },

  {
    code: "VK103-0711",
    description: `OR Scissors, Sharp/Blunt, 4 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK103-0614",
    description: `OR Scissors, Sharp/Blunt, 5 1/2", Straigh`,
    price: 24.5,
  },

  {
    code: "VK103-0714",
    description: `OR Scissors, Sharp/Blunt, 5 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK103-0616",
    description: `OR Scissors, Sharp/Blunt, 6 1/2", Straigh`,
    price: 29.5,
  },

  {
    code: "VK103-0716",
    description: `OR Scissors, Sharp/Blunt, 6 1/2", Curve`,
    price: 29.5,
  },

  {
    code: "VK103-0411",
    description: `OR Scissors, Sharp/Sharp, 4 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-0511",
    description: `OR Scissors, Sharp/Sharp, 4 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK103-0414",
    description: `OR Scissors, Sharp/Sharp, 5 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-0514",
    description: `OR Scissors, Sharp/Sharp, 5 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK103-0415",
    description: `OR Scissors, Sharp/Sharp, 6 1/2", Straigh`,
    price: 29.5,
  },

  {
    code: "VK103-0516",
    description: `OR Scissors, Sharp/Sharp, 6 1/2", Curve`,
    price: 34.8,
  },

  {
    code: "01-158",
    description: `Castroviejo Scissors, 4 1/4`,
    price: 36.0,
  },

  {
    code: "01-166",
    description: `Ear Cropping Scissors, Sharp/Blunt, 6 1/2", Curve`,
    price: 36.0,
  },

  {
    code: "01-165",
    description: `Ear Cropping Scissors, Blunt/Blunt, 6 1/2", Straigh`,
    price: 39.9,
  },

  {
    code: "VK102-2009",
    description: `Iris Scissors, 3 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK102-2109",
    description: `Iris Scissors, 3 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK102-2011",
    description: `Iris Scissors, 4 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK102-2111",
    description: `Iris Scissors, 4 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK114-0614",
    description: `Littauer Scissors, 5 1/2`,
    price: 24.5,
  },

  {
    code: "VK177-5520",
    description: `Martin Cartilage Scissors, 8", Curve`,
    price: 41.0,
  },

  {
    code: "VK103-5014",
    description: `Mayo Dissecting Scissors, 5 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK103-5114",
    description: `Mayo Dissecting Scissors, 5 1/2", Curve`,
    price: 24.5,
  },

  {
    code: "VK103-5017",
    description: `Mayo Dissecting Scissors, 6 3/4", Straigh`,
    price: 24.5,
  },

  {
    code: "VK103-5117",
    description: `Mayo Dissecting Scissors, 6 3/4", Curve`,
    price: 26.5,
  },

  {
    code: "12-167",
    description: `Mayo-Stille Scissors, 5.5", Curve`,
    price: 49.5,
  },

  {
    code: "12-169",
    description: `Mayo-Stille Scissors, 6.75", Curve`,
    price: 49.5,
  },

  {
    code: "VK104-3214",
    description: `Metzenbaum Scissors, 5 1/2", Straigh`,
    price: 22.5,
  },

  {
    code: "VK104-3314",
    description: `Metzenbaum Scissors, 5 1/2", Curve`,
    price: 22.5,
  },

  {
    code: "VK104-3218",
    description: `Metzenbaum Scissors, 7", Straigh`,
    price: 29.5,
  },

  {
    code: "VK104-3318",
    description: `Metzenbaum Scissors, 7", Curve`,
    price: 33.8,
  },

  {
    code: "02-116",
    description: `Northbent Stitch Scissors, 4 1/2`,
    price: 39.0,
  },

  {
    code: "VK114-0609",
    description: `Spencer Stitch Scissors, 3 1/2`,
    price: 24.5,
  },

  {
    code: "01-143",
    description: `Strabismus Scissors, 4 1/4", Curved or Straig`,
    price: 34.9,
  },

  {
    code: "VK143-1718",
    description: `White Toenail Scissors, 4 3/4`,
    price: 49.0,
  },

  {
    code: "VK117-5503",

    description: `Backhaus Towel Clamp, 3 1/2"`,

    price: 22.5,
  },

  {
    code: "VK117-5513",

    description: `Backhaus Towel Clamp, 5 1/4"`,

    price: 22.5,
  },

  {
    code: "VK117-5008",

    description: `Jones Towel Clamp, 3"`,
    price: 23.9,
  },

  {
    code: "VK117-5709",

    description: `Lorna Towel Clamp, Non-Perforating, 4"`,

    price: 28.8,
  },

  {
    code: "VK117-5714",

    description: `Lorna Towel Clamp, Non-Perforating, 5 1/4"`,

    price: 28.8,
  },

  {
    code: "VK110-1414",
    description: `Baumgartner Needle Holder, 5 1/4"`,
    price: 24.9,
  },

  {
    code: "VK110-2015",
    description: `Crile-Wood Needle Holder, 6"`,
    price: 28.0,
  },

  {
    code: "VK110-2020",
    description: `Crile-Wood Needle Holder, 8"`,
    price: 38.75,
  },

  {
    code: "VK110-0212",
    description: `Derf Needle Holder, 4 3/4"`,
    price: 38.8,
  },

  {
    code: "12-122",
    description: `Mathieu Needle Holder, 5"`,
    price: 26.5,
  },

  {
    code: "VK111-2014",
    description: `Mathieu Needle Holder, 5 1/2"`,
    price: 48.5,
  },

  {
    code: "VK111-2017",
    description: `Mathieu Needle Holder, 6 1/2"`,
    price: 48.5,
  },

  {
    code: "12-121",
    description: `Mathieu Needle Holder, 8"`,
    price: 41.75,
  },

  {
    code: "VK110-1814",
    description: `Mayo-Hegar Needle Holder, 5 1/2"`,
    price: 28.8,
  },

  {
    code: "VK110-1815",
    description: `Mayo-Hegar Needle Holder, 6"`,
    price: 26.5,
  },

  {
    code: "VK110-1818",
    description: `Mayo-Hegar Needle Holder, 7"`,
    price: 28.8,
  },

  {
    code: "VK110-1820",
    description: `Mayo-Hegar Needle Holder, 8"`,
    price: 33.75,
  },

  {
    code: "VK110-6014",
    description: `Olsen-Hegar Needle Holder with Scissor Combo, 5 1/2"`,

    price: 38.75,
  },

  {
    code: "VK110-6017",
    description: `Olsen-Hegar Needle Holder with Scissor Combo, 6 1/2"`,

    price: 38.75,
  },

  {
    code: "12-118",
    description: `Olsen-Hegar Needle Holder with Scissor Combo, 7 1/2"`,

    price: 31.8,
  },

  {
    code: "VK110-1014",
    description: `Webster Needle Holder, 4 3/4"`,
    price: 28.8,
  },

  {
    code: "12-151",
    description: `Webster Needle Holder w/ Tungsten Carbide Smooth Jaws, 5`,

    price: 63.0,
  },

  {
    code: "VK132-1113",
    description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5 1/2"`,

    price: 88.0,
  },

  {
    code: "VK132-120",
    description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 6"`,

    price: 88.0,
  },

  {
    code: "VK132-130",
    description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 7"`,

    price: 88.0,
  },

  {
    code: "VK132-159",
    description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5"`,

    price: 98.0,
  },

  {
    code: "VK132-160",
    description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5 1/2"`,

    price: 88.0,
  },

  {
    code: "VK132-170",
    description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 6 3/4"`,

    price: 88.0,
  },

  {
    code: "VK132-180",
    description: `Olsen Hegar Needle Holder w/ Tungsten Carbide Jaws, 7.5"`,

    price: 124.8,
  },

  {
    code: "VK124-4013",

    description: `Gelpi Retractor, 3.5"`,

    price: 84.0,
  },

  {
    code: "VK124-4014",

    description: `Gelpi Retractor, 5.5"`,

    price: 93.0,
  },

  {
    code: "VK124-7010",
    description: `Balfour Abdominal Retractor w/Fixed Side Blades, 2.5" deep, 7" spread`,
    price: 295.0,
  },

  {
    code: "VK120-0508",
    description: `Senn-Miller Retractor, 6.375", Double Ended, Sharp`,
    price: 28.8,
  },

  {
    code: "VK120-0509",
    description: `Senn-Miller Retractor, 6.375", Double Ended Blunt`,
    price: 28.8,
  },

  {
    code: "VK122-1821",
    description: `US Army Retractor, 8.5" Double Ended, Set of 2`,
    price: 31.0,
  },

  {
    code: "PF-500-10",
    description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, 13mm Sharp Teeth`,
    price: 59.0,
  },

  {
    code: "PF-501-10",
    description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, Blunt`,
    price: 59.0,
  },

  {
    code: "PF-502-10",
    description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, Semi-Sharp Teeth`,
    price: 59.0,
  },

  {
    code: "PF-503-13",
    description: `Weitlaner Retractor, 5 1/8", 3x4 Prongs, 13mm Blunt Teeth`,
    price: 64.0,
  },

  {
    code: "PF-506-16",
    description: `Weitlaner Retractor, 6 1/2", 3x4 Prongs, 13mm Semi-Sharp Teeth`,
    price: 64.0,
  },

  {
    code: "PF-511-13",
    description: `Weitlaner Retractor, 5 1/8", 3x4 Prongs, 21mm Blunt Teeth`,
    price: 98.0,
  },

  {
    code: "VK143-7914",
    description: `Anvil Nail Splitting Forcep , double spring, 5"`,

    price: 76.5,
  },
  {
    code: "35-121",
    description: `Nail Nipper, Single Spring, 6", Straight`,

    price: 37.5,
  },
  {
    code: "35-125",
    description: `Barrel Spring Nail Nipper, 4 1/2"`,

    price: 46.8,
  },
  {
    code: "35-127",
    description: `Barrel Spring Nail Nipper, 5 1/2"`,

    price: 57.8,
  },
  {
    code: "35-130",
    description: `Nail Nipper w/Double Spring 7", Straight`,

    price: 61.5,
  },
  {
    code: "VK143-7813",
    description: `Nail Nipper w/Double Spring, 6", straight`,

    price: 48.5,
  },
  {
    code: "VK143-7713",
    description: `Nail Nipper w/Double Spring, 5 1/2", concave`,

    price: 78.8,
  },
  {
    code: "35-136",
    description: `Nail Nipper w/Double Spring, 6 1/2", concave`,

    price: 48.5,
  },
  {
    code: "VK143-7784",
    description: `Nail Nipper w/Double Spring, 5 1/2", angled concave`,

    price: 62.75,
  },
  {
    code: "35-117",
    description: `Tissue & Cuticle Nipper, 4 1/2"`,

    price: 46.8,
  },
  {
    code: "35-129",
    description: `Double Action Nail Nipper, 6", Concave`,

    price: 77.0,
  },

  {
    code: "15-125",
    description: `Adson Brown Forcep, 4 3/4", 7x7 Teeth"`,
    price: 22.5,
  },

  {
    code: "15-120",
    description: `Adson Dressing Forcep, 4 3/4", Serrated`,
    price: 22.5,
  },

  {
    code: "15-124",
    description: `Adson Tissue Forcep, 4 3/4", 1x2 Teeth`,
    price: 22.5,
  },

  {
    code: "15-150",
    description: `Iris Delicate Forcep, 4", Straight, 1x2 Teeth, Serrated`,
    price: 22.5,
  },

  {
    code: "16-112",
    description: `Carmalt Splinter Forceps, 4 ½” Curved`,
    price: 22.5,
  },

  {
    code: "13-106",
    description: `Thumb Dressing Forcep, 5 1/2", Serrated`,
    price: 22.5,
  },

  {
    code: "13-104",
    description: `Thumb Dressing Forcep, 5 1/2", 1x2 Teeth`,
    price: 22.5,
  },

  {
    code: "14-122",
    description: `Thumb Tissue Forcep, 5 1/2", 2x3 Teeth`,
    price: 22.5,
  },

  {
    code: "14-132",
    description: `Thumb Tissue Forcep, 5 1/2", 3x4 Teeth`,
    price: 22.5,
  },

  {
    code: "17-108",
    description: `Allis Tissue Forcep, 6", 5x6 Teeth`,
    price: 29.8,
  },

  {
    code: "33-142",
    description: `Baby Kern Bone Holding Forceps w/Ratchet, Jaw Cap, 1/4" - 7/8", 5 3/4"`,
    price: 78.5,
  },

  {
    code: "33-146",
    description: `Baby Kern Bone Holding Forceps w/Ratchet, Jaw Cap, 1/4" - 1 1/8", 9" `,
    price: 94.5,
  },

  {
    code: "3506",
    description: `Bone Fragment Forceps, Smaller Fragment Forceps`,
    price: 46.5,
  },

  { code: "33-150", description: `Bone Holding Forceps, 7"`, price: 46.5 },

  {
    code: "07-113",
    description: `Crile Forcep, 5 1/2", Straight`,
    price: 22.5,
  },

  {
    code: "07-114",
    description: `Crile Forcep, 5 1/2", Curved`,
    price: 22.5,
  },

  {
    code: "07-115",
    description: `Crile Forcep, 6 1/4", Straight`,
    price: 22.5,
  },

  {
    code: "07-116",
    description: `Crile Forcep, 6 1/4", Curved`,
    price: 22.5,
  },

  {
    code: "20-145",
    description: `Desmarres Chalazion Forcep, 16mm, 3 1/2"`,
    price: 59.5,
  },

  {
    code: "20-147",
    description: `Desmarres Chalazion Forcep, 20mm, 3 1/2"`,
    price: 59.5,
  },

  {
    code: "20-149",
    description: `Desmarres Chalazion Forcep, 26mm, 3 1/2"`,
    price: 59.5,
  },

  {
    code: "17-130",
    description: `Doyen Intestinal Forcep, 9", Straight`,
    price: 31.5,
  },

  {
    code: "17-132",
    description: `Doyen Intestinal Forcep, 9", Curved`,
    price: 31.5,
  },

  {
    code: "07-156",
    description: `Ferguson Angiotribe Forcep, 6 1/4", or Straight`,
    price: 31.5,
  },

  {
    code: "07-157",
    description: `Ferguson Angiotribe Forcep, 6 1/4", or Curved`,
    price: 31.5,
  },

  {
    code: "07-158",
    description: `Ferguson Angiotribe Forcep, 7 1/2", or Straight`,
    price: 36.5,
  },

  {
    code: "07-159",
    description: `Ferguson Angiotribe Forcep, 7 1/2", or Curved`,
    price: 36.5,
  },

  {
    code: "09-106",
    description: `Foerster Sponge Forcep, 9 1/2", Serrated, Straight`,
    price: 24.9,
  },

  {
    code: "21-147",
    description: `Hartman Alligator Serrated Forcep, 5 1/2"`,
    price: 78.0,
  },

  {
    code: "07-109",
    description: `Kelly Forcep, 5 1/2", Straight`,
    price: 22.5,
  },

  {
    code: "07-110",
    description: `Kelly Forcep, 5 1/2", Curved`,
    price: 22.5,
  },

  {
    code: "07-111",
    description: `Kelly Forcep, 6 1/4", Straight`,
    price: 22.5,
  },

  {
    code: "07-112",
    description: `Kelly Forcep, 6 1/4", Curved`,
    price: 22.5,
  },

  {
    code: "07-100",
    description: `Mosquito Forcep, 3 1/2", Straight`,
    price: 22.5,
  },

  {
    code: "07-101",
    description: `Mosquito Forcep, 3 1/2", Curved`,
    price: 22.5,
  },

  {
    code: "07-102",
    description: `Mosquito Forcep, 5", Straight`,
    price: 22.5,
  },

  {
    code: "07-104",
    description: `Mosquito Forcep, 5", Curved`,
    price: 22.5,
  },

  {
    code: "07-137",
    description: `Rochester-Carmalt Forcep, 6 1/4", Straight`,
    price: 22.5,
  },

  {
    code: "07-138",
    description: `Rochester-Carmalt Forcep, 6 1/4", Curved`,
    price: 22.5,
  },

  {
    code: "07-139",
    description: `Rochester-Carmalt Forcep, 8", Straight`,
    price: 27.8,
  },

  {
    code: "07-140",
    description: `Rochester-Carmalt Forcep, 8", Curved`,
    price: 27.8,
  },

  {
    code: "07-119",
    description: `Rochester-Pean Forcep, 6 1/4", Straight`,
    price: 22.5,
  },

  {
    code: "07-120",
    description: `Rochester-Pean Forcep, 6 1/4", Curved`,
    price: 22.5,
  },

  {
    code: "07-123",
    description: `Rochester-Pean Forcep, 8", Straight `,
    price: 25.8,
  },

  {
    code: "07-124",
    description: `Rochester-Pean Forcep, 8", Curved`,
    price: 25.8,
  },

  {
    code: "V-375B",
    description: `Ruskin-Liston Bone Cutting Forceps, Double Action, 7 1/2", Curved`,
    price: 98.0,
  },

  {
    code: "V-375",
    description: `Ruskin-Liston Bone Cutting Forceps, Double Action, 7 1/2", Straight`,
    price: 98.0,
  },

  {
    code: "10-104",
    description: `Sterilizer Forceps, three prong"`,
    price: 25.8,
  },

  {
    code: "V-307A",
    description: `Universal Extracting Forceps, 7"`,
    price: 78.5,
  },

  {
    code: "V-307B",
    description: `Splitter/Separator Extracting Forceps, 7"`,
    price: 78.5,
  },

  {
    code: "V-307C",
    description: `Incisor/Bicuspid Extracting Forceps, 7"`,
    price: 68.5,
  },

  {
    code: "V-307D",
    description: `Molar Extracting Forceps, 7"`,
    price: 68.5,
  },

  {
    code: "7334",
    description: `Magill Forceps Infant (Small)`,
    price: 22.5,
  },

  {
    code: "7337",
    description: `Magill Forceps Child (Medium)`,
    price: 22.5,
  },

  {
    code: "7338",
    description: `Magill Forceps Adult (Large)`,
    price: 25.8,
  },

  {
    code: "SS10",
    description: "Size 10 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },
  {
    code: "SS11",
    description: "Size 11 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS12",
    description: "Size 12 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS15",
    description: "Size 15 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS20",
    description: "Size 20 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS21",
    description: "Size 21 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS22",
    description: "Size 22 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SS23",
    description: "Size 23 Stainless Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS10",
    description: "Size 10 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS11",
    description: "Size 11 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS12",
    description: "Size 12 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS15",
    description: "Size 15 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS20",
    description: "Size 20 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },
  {
    code: "CS21",
    description: "Size 21 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS22",
    description: "Size 22 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "CS23",
    description: "Size 23 Carbon Steel Surgical Blade - 100/box",
    price: 18.9,
  },

  {
    code: "SBH-06-100",

    description:
      "SIZE #3 Scalpel Handle, Stainless Steel For use with blades #10-#15 - Unit",
    price: 9.95,
  },

  {
    code: "SBH-06-102",

    description:
      "SIZE #4 Scalpel Handle, Stainless Steel For use with blades #20-#25 - Unit",
    price: 9.95,
  },

  {
    code: "SBH-06-104",

    description:
      "SIZE #7 Scalpel Handle, Stainless Steel For use with blades #10-#15 - Unit",
    price: 18.95,
  },
  {
    code: "63S",

    ethicon_code: "SA63H",

    description: "Silk Black Braided",

    size: "4/0",

    needle: "NONE",

    length: "17-18 inch",

    price: 84.8,
  },

  {
    code: "65S",

    ethicon_code: "",

    description: "Silk Black Braided",

    size: "2/0",

    needle: "NONE",

    length: "17-18 inch",

    price: 84.8,
  },

  {
    code: "66S",

    ethicon_code: "SA66G",

    description: "Silk Black Braided",

    size: "0",

    needle: "NONE",

    length: "17-18 inch",

    price: 84.8,
  },

  {
    code: "85S",

    ethicon_code: "",

    description: "Silk Black Braided",

    size: "2/0",

    needle: "NONE",

    length: "10-30 inch",

    price: 84.8,
  },

  {
    code: "303S",

    ethicon_code: "A303H",

    description: "Silk Black Braided",

    size: "4/0",

    needle: "NONE",

    length: "12-30 inch",

    price: 84.8,
  },

  {
    code: "304S",

    ethicon_code: "A304H",

    description: "Silk Black Braided",

    size: "3/0",

    needle: "NONE",

    length: "12-30 inch",

    price: 84.8,
  },

  {
    code: "305S",

    ethicon_code: "A305H",

    description: "Silk Black Braided",

    size: "2/0",

    needle: "NONE",

    length: "12-30 inch",

    price: 84.8,
  },

  {
    code: "306S",

    ethicon_code: "A306H",

    description: "Silk Black Braided",

    size: "0",

    needle: "NONE",

    length: "6-30 inch",

    price: 84.8,
  },

  {
    code: "307S",

    ethicon_code: "A307H",

    description: "Silk Black Braided",

    size: "1",

    needle: "NONE",

    length: "6-30 inch",

    price: 84.8,
  },

  {
    code: "8521P",

    ethicon_code: "8521H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NSH, NSH",

    length: "36 inch",

    price: 103.9,
  },

  {
    code: "8522P",

    ethicon_code: "8522H",

    description: "Polypro Blue Monofilament",

    size: "3/0",

    needle: "NSH, NSH",

    length: "36 inch",

    price: 103.9,
  },

  {
    code: "8523P",

    ethicon_code: "8523H",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "NSH, NSH",

    length: "36 inch",

    price: 103.9,
  },

  {
    code: "8524P",

    ethicon_code: "N/A",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NSH-1",

    length: "36 inch",

    price: 103.9,
  },

  {
    code: "8525P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "SH-1, SH-1",

    length: "36 inch",

    price: 99.9,
  },

  {
    code: "8526P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "SH-1, SH-1",

    length: "30 inch",

    price: 148.0,
  },

  {
    code: "8533P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "SH, SH",

    length: "48 inch",

    price: 148.0,
  },

  {
    code: "8534P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "3/0",

    needle: "SH, SH",

    length: "48 inch",

    price: 103.9,
  },

  {
    code: "8556P",

    ethicon_code: "8556H",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NRB-1, NRB-1",

    length: "36 inch",

    price: 109.8,
  },

  {
    code: "8557P",

    ethicon_code: "8557H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NRB-1, NRB-1",

    length: "36 inch",

    price: 113.9,
  },

  {
    code: "8558P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "3/0",

    needle: "NSH, NSH",

    length: "36 inch",

    price: 113.9,
  },

  {
    code: "5692P",

    ethicon_code: "N/A",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NSH-1, NSH-1",

    length: "36 inch",

    price: 99.9,
  },

  {
    code: "8581P",

    ethicon_code: "8581H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NBB, NBB",

    length: "36 inch",

    price: 148.0,
  },

  {
    code: "8623P",

    ethicon_code: "8623H",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "NKS",

    length: "30 inch",

    price: 99.9,
  },

  {
    code: "8702P",

    ethicon_code: "8702H",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NBV-1, NBV-1",

    length: "24 inch",

    price: 218.0,
  },

  {
    code: "8703P",

    ethicon_code: "8703H",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NBV-1, NBV-1",

    length: "30 inch",

    price: 218.0,
  },

  {
    code: "8704P",

    ethicon_code: "8704H",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NCC, NCC",

    length: "24 inch",

    price: 244.6,
  },

  {
    code: "8706P",

    ethicon_code: "8706H",

    description: "Polypro Blue Monofilament",

    size: "6/0",

    needle: "NC-1, NC-1",

    length: "30 inch",

    price: 188.0,
  },

  {
    code: "8707P",

    ethicon_code: "8707H",

    description: "Polypro Blue Monofilament",

    size: "6/0",

    needle: "NCC-1, NCC-1",

    length: "30 inch",

    price: 288.0,
  },

  {
    code: "8709P",

    ethicon_code: "8709H",

    description: "Polypro Blue Monofilament",

    size: "6/0",

    needle: "NBV-1, NBV-1",

    length: "30 inch",

    price: 178.0,
  },

  {
    code: "8710P",

    ethicon_code: "8710H",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NRB-2, NRB-2",

    length: "30 inch",

    price: 99.9,
  },

  {
    code: "8711P",

    ethicon_code: "8711H",

    description: "Polypro Blue Monofilament",

    size: "6/0",

    needle: "NRB-2, NRB-2",

    length: "30 inch",

    price: 99.9,
  },

  {
    code: "8720P",

    ethicon_code: "8720H",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NC-1, NC-1",

    length: "36 inch",

    price: 129.5,
  },

  {
    code: "8721P",

    ethicon_code: "8721H",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NCC-1, NCC-1",

    length: "36 inch",

    price: 163.0,
  },

  {
    code: "8727P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "C-1, C-1",

    length: "24 inch",

    price: 143.0,
  },

  {
    code: "8730P",

    ethicon_code: "8730H",

    description: "Polypro Blue Monofilament",

    size: "8/0",

    needle: "NBV130-5, NBV130-5",

    length: "18 inch",

    price: 394.0,
  },

  {
    code: "8731P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NBV130-5, NBV130-5",

    length: "18 inch",

    price: 615.0,
  },

  {
    code: "8732P",

    ethicon_code: "8732H",

    description: "Polypro Blue Monofilament",

    size: "8/0",

    needle: "NBV130-5, NBV130-5",

    length: "24 inch",

    price: 461.0,
  },

  {
    code: "8735P",

    ethicon_code: "8735H",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NBV175-6, NBV175-6",

    length: "24 inch",

    price: 461.0,
  },

  {
    code: "8807P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "6/0",

    needle: "NCC, NCC",

    length: "24 inch",

    price: 294.0,
  },

  {
    code: "8831P",

    ethicon_code: "8831H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NSH",

    length: "30 inch",

    price: 87.9,
  },

  {
    code: "8832P",

    ethicon_code: "8832H",

    description: "Polypro Blue Monofilament",

    size: "3/0",

    needle: "NSH",

    length: "30 inch",

    price: 69.7,
  },

  {
    code: "8833P",

    ethicon_code: "8833H",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "NSH",

    length: "30 inch",

    price: 69.7,
  },

  {
    code: "8840P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "SH",

    length: "60 inch",

    price: 138.0,
  },

  {
    code: "8843P",

    ethicon_code: "8843H",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "NMH, NMH",

    length: "36 inch",

    price: 87.9,
  },

  {
    code: "8880P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "7/0",

    needle: "NC-1, NC-1",

    length: "18 inch",

    price: 99.8,
  },

  {
    code: "8934P",

    ethicon_code: "8934H",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "NV-5, NV-5",

    length: "36 inch",

    price: 163.5,
  },

  {
    code: "8935P",

    ethicon_code: "8935H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NV-5, NV-5",

    length: "36 inch",

    price: 135.0,
  },

  {
    code: "8974P",

    ethicon_code: "",

    description: "Polypro Blue Monofilament",

    size: "5/0",

    needle: "V-5, V-5",

    length: "36 inch",

    price: 135.0,
  },

  {
    code: "8975P",

    ethicon_code: "8975H",

    description: "Polypro Blue Monofilament",

    size: "4/0",

    needle: "NV-7, NV-7",

    length: "36 inch",

    price: 135.0,
  },

  {
    code: "8976P",

    ethicon_code: "8976H",

    description: "Polypro Blue Monofilament",

    size: "3/0",

    needle: "NV-7, NV-7",

    length: "36 inch",

    price: 135.0,
  },

  {
    code: "8977P",

    ethicon_code: "8977H",

    description: "Polypro Blue Monofilament",

    size: "2/0",

    needle: "NV-7, NV-7",

    length: "36 inch",

    price: 135.0,
  },

  {
    code: "CP43A",

    ethicon_code: "SXX43",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NRB-1, NRB-1",

    length: "5-30 inch",

    price: 750.0,
  },

  {
    code: "CP54A",

    ethicon_code: "SXX54",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-5, NV-5",

    length: "5-30 inch",

    price: 1020.0,
  },

  {
    code: "CP58SA",

    ethicon_code: "N/A",

    description: "Polybond Braided Polyester Coated",

    size: "3/0",

    needle: "NBB, NBB",

    length: "30 inch",

    price: 93.0,
  },

  {
    code: "CP77A",

    ethicon_code: "PXX77",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-7, NV-7",

    length: "5-30 inch",

    price: 1020.0,
  },

  {
    code: "CP523A",

    ethicon_code: "X523H",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH, NSH",

    length: "36 inch",

    price: 90.0,
  },

  {
    code: "CP553A",
    ethicon_code: "",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NRB-1, NRB-1",

    length: "4-30 inch",

    price: 240.0,
  },

  {
    code: "CP557A",

    ethicon_code: "X557H",

    description: "Polybond Braided Polyester Coated",

    size: "4/0",

    needle: "NRB-1, NRB-1",

    length: "36 inch",

    price: 115.0,
  },

  {
    code: "CP558A",

    ethicon_code: "X558H",

    description: "Polybond Braided Polyester Coated",

    size: "3/0",

    needle: "NRB-1, NRB-1",

    length: "36 inch",

    price: 103.0,
  },

  {
    code: "CP563A",

    ethicon_code: "X563H",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH, NSH",

    length: "30 inch",

    price: 99.9,
  },

  {
    code: "CP588A",

    ethicon_code: "X588H",

    description: "Polybond Braided Polyester Coated",

    size: "3/0",

    needle: "NBB, NBB",

    length: "30 inch",

    price: 103.0,
  },

  {
    code: "CP664A",

    ethicon_code: "",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH",

    length: "36 inch",

    price: 69.9,
  },

  {
    code: "CP761A",

    ethicon_code: "X761H",

    description: "Polybond Braided Polyester Coated",

    size: "4/0",

    needle: "NSH-1, NSH-1",

    length: "36 inch",

    price: 103.0,
  },

  {
    code: "CP762A",

    ethicon_code: "X762H",

    description: "Polybond Braided Polyester Coated",

    size: "3/0",

    needle: "NSH-1, NSH-1",

    length: "36 inch",

    price: 99.9,
  },

  {
    code: "CP763A",

    ethicon_code: "X763H",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH-1, NSH-1",

    length: "36 inch",

    price: 99.9,
  },

  {
    code: "CP683A",

    ethicon_code: "X683G",

    description: "Polybond Braided Polyester Coated",

    size: "4/0",

    needle: "NFS-2",

    length: "18 inch",

    price: 69.9,
  },

  {
    code: "CP833A",

    ethicon_code: "X833H",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH",

    length: "30 inch",

    price: 69.9,
  },

  {
    code: "CP976A",

    ethicon_code: "X976H",

    description: "Polybond Braided Polyester Coated",

    size: "3/0",

    needle: "NV-7, NV-7",

    length: "30 inch",

    price: 123.0,
  },

  {
    code: "CP977A",

    ethicon_code: "X977H",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-7, NV-7",

    length: "30 inch",

    price: 113.0,
  },

  {
    code: "CP10X42A",

    ethicon_code: "10X42",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NRB-1, NRB-1",

    length: "5-30 inch",

    price: 540.0,
  },

  {
    code: "CP10X52A",

    ethicon_code: "10X42",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-5, NV-5",

    length: "5-30 inch",

    price: 684.0,
  },

  {
    code: "CP10X66A",

    ethicon_code: "10X66",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-7, NV-7",

    length: "5-36 inch",

    price: 684.0,
  },

  {
    code: "CP10X72A",

    ethicon_code: "10X72",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NV-7, NV-7",

    length: "10-30 inch",

    price: 684.0,
  },

  {
    code: "CP10X80A",

    ethicon_code: "N/A",

    description: "Polybond Braided Polyester Coated",

    size: "2/0",

    needle: "NSH-1, NSH-1",

    length: "10-36 inch",

    price: 514.0,
  },

  {
    code: "904A",

    ethicon_code: "J904T",

    description: "Visorb (PGA)",

    size: "3-0",

    needle: "None",

    length: "12-18 inch",

    price: 174.0,
  },

  {
    code: "905A",

    ethicon_code: "J905T",

    description: "Visorb (PGA)",

    size: "2-0",

    needle: "None",

    length: "12-18 inch",

    price: 174.0,
  },

  {
    code: "ST435",
    ethicon_code: "M435G",
    description: "STEEL 5",
    size: "5",
    needle: "NV-56",
    length: "4-30 inch",

    price: 368.0,
  },

  {
    code: "ST649",
    ethicon_code: "M649G",
    description: "STEEL 6",
    size: "6",
    needle: "NV-40",
    length: "4-18 inch",

    price: 451.0,
  },

  {
    code: "ST650",
    ethicon_code: "M650G",
    description: "STEEL 5",
    size: "5",
    needle: "NV-40",
    length: "4-18 inch",

    price: 420.0,
  },

  {
    code: "ST653",
    ethicon_code: "M653G",
    description: "STEEL 5",
    size: "5",
    needle: "NCCS",
    length: "4-18 inch",
    price: 405.0,
  },

  {
    code: "ST654",
    ethicon_code: "M654G",
    description: "STEEL 6",
    size: "6",
    needle: "NCCS",
    length: "4-18 inch",
    price: 405.0,
  },

  {
    code: "ST655",
    ethicon_code: "M655G",
    description: "STEEL 7",
    size: "7",
    needle: "NCCS",
    length: "4-18 inch",
    price: 420.0,
  },

  {
    code: "ST657",
    ethicon_code: "M657G",
    description: "STEEL 5",
    size: "5",
    needle: "NCCS",
    length: "2-18 inch",
    price: 211.0,
  },
  {
    code: "OSS-35W",
    ethicon_code: "M657G",
    description: `Lever Action Disposable Skin Stapler with 35 WIDE Staples
      (7.2mm x 4.3mm after closure)`,
    price: 11.9,
  },
  {
    code: "S-REM",
    description: `Disposable Skin Staple Remover – Tweezer Style`,
    price: 4.95,
  },
];

// const NO_RUTE = [
//   "gscissors",
//   "gtowelclamps",
//   "gneedleholders",
//   "gretractors",
//   "gnailnippers",
//   "gforceps",
//   "blades",
// ];

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: medicalItems,
    };
  }

  handleChange = (event) => {
    let newItems = [];
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
    newItems = medicalItems.filter(
      (i) =>
        i.code.toUpperCase().includes(this.state.search.toUpperCase()) ||
        i.description.toUpperCase().includes(this.state.search.toUpperCase())
    );
    this.setState({ items: newItems });
  };

  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <div className="navbar">
            <div className="navbar-container">
              <img src={logo} alt="logo" />
              <div></div>
            </div>
          </div>
          <div className="menu menu-section">
            <SideMenu />
            <SideMenuProducts />
          </div>
          <div className="main">
            <StoreMenuTitle title="Search" />
            <div className="product-container">
              <div className="form-search">
                <input
                  name="search"
                  onChange={this.handleChange}
                  value={this.state.search}
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <SearchTable items={this.state.items} />
            </div>
          </div>
          {/* <div className="footer-page">
            <Footer />
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (reducers) => {
  return storeReducers;
};

export default connect(mapStateToProps, storeActions)(SearchPage);
