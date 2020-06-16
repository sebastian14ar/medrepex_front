import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
// import Footer from "../components/menu/Footer";
import ProductTable from "../components/ProductTable";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreMenuTitle from "../components/menu/StoreMenuTitle";
import StoreMenuTitleInstruments from "../components/menu/StoreMenuTitleInstruments";

import "./styles/ProductsPage.css";
import logo from "../images/logo2.jpg";
import { connect } from "react-redux";

// images
import Vicryl from "../images/store/vicryl/leftvisorb.gif";
import VicrylRapide from "../images/store/vicryl-rapide/leftvisorbquick.gif";
import Pds from "../images/store/pds/PDSII-leftmonodox.gif";
import Monocryl from "../images/store/monocryl/Monocryl-leftmonoswift.gif";
import Ethicon1 from "../images/store/ethicon/Ethicon-leftplaingut.gif";
import Ethicon2 from "../images/store/ethicon/leftchromicgut.gif";
import Ethilon from "../images/store/ethilon/Ethinol-leftmonomid.gif";
import Prolene from "../images/store/prolene/Prolene-leftbluepoly.gif";
import Permahand from "../images/store/permahand/Permahand-leftsilkblack.gif";
import Biopsy from "../images/store/biopsy/Biopsy-leftmonomid.gif";
import BladesSm from "../images/store/blades/bladessm.jpg";
import BladeHandle from "../images/store/blades/bladehandle.gif";

// Scissors
import VK1402084 from "../images/store/scissors/VK140-2084.jpg";
// import VK1402511 from "../images/store/scissors/VK140-2511 VK140-2514 VK103-0216.jpg";
// import VK1402514 from "../images/store/scissors/VK140-2511 VK140-2514 VK103-0216.jpg";
// import VK1030216 from "../images/store/scissors/VK140-2511 VK140-2514 VK103-0216.jpg";
// import VK1030211 from "../images/store/scissors/VK103-0211.jpg";
import I01143 from "../images/store/scissors/01-143.jpg";
import I01158 from "../images/store/scissors/01-158.jpg";
import I01165 from "../images/store/scissors/01-165.jpg";
import I01166 from "../images/store/scissors/01-166.jpg";
import I02116 from "../images/store/scissors/02-116.jpg";
import I12167 from "../images/store/scissors/12-167.jpg";
import I12169 from "../images/store/scissors/12-169.jpg";
import VK1022009 from "../images/store/scissors/VK102-2009 VK102-2011.jpg";
import VK1022011 from "../images/store/scissors/VK102-2009 VK102-2011.jpg";
import VK1022109 from "../images/store/scissors/VK102-2109 VK102-2111.jpg";
import VK1022111 from "../images/store/scissors/VK102-2109 VK102-2111.jpg";
// import VK1030614 from "../images/store/scissors/VK103-0216 VK103-0614 VK103-00616.jpg";
// import VK1030616 from "../images/store/scissors/VK103-0216 VK103-0614 VK103-00616.jpg";
import VK1030311 from "../images/store/scissors/VK103-0311 VK103-0314 VK103-0316.jpg";
import VK1030314 from "../images/store/scissors/VK103-0311 VK103-0314 VK103-0316.jpg";
import VK1030316 from "../images/store/scissors/VK103-0311 VK103-0314 VK103-0316.jpg";
import VK1030411 from "../images/store/scissors/VK103-0411 VK103-0414 VK103-0415.jpg";
import VK1030414 from "../images/store/scissors/VK103-0411 VK103-0414 VK103-0415.jpg";
import VK1030415 from "../images/store/scissors/VK103-0411 VK103-0414 VK103-0415.jpg";
import VK1030511 from "../images/store/scissors/VK103-0511 VK103-0514 VK103-0516.jpg";
import VK1030514 from "../images/store/scissors/VK103-0511 VK103-0514 VK103-0516.jpg";
import VK1030516 from "../images/store/scissors/VK103-0511 VK103-0514 VK103-0516.jpg";
import VK1030711 from "../images/store/scissors/VK103-0711 VK103-0714 VK103-0716.jpg";
import VK1030714 from "../images/store/scissors/VK103-0711 VK103-0714 VK103-0716.jpg";
import VK1030716 from "../images/store/scissors/VK103-0711 VK103-0714 VK103-0716.jpg";
import VK1035014 from "../images/store/scissors/VK103-5014 VK103-5017.jpg";
import VK1035017 from "../images/store/scissors/VK103-5014 VK103-5017.jpg";
import VK1035114 from "../images/store/scissors/VK103-5114 VK103-5117.jpg";
import VK1035117 from "../images/store/scissors/VK103-5114 VK103-5117.jpg";
import VK1043214 from "../images/store/scissors/VK104-3214 VK104-3218.jpg";
import VK1043218 from "../images/store/scissors/VK104-3214 VK104-3218.jpg";
import VK1043314 from "../images/store/scissors/VK104-3314 VK104-3318.jpg";
import VK1043318 from "../images/store/scissors/VK104-3314 VK104-3318.jpg";
import VK1140609 from "../images/store/scissors/VK114-0609.jpg";
import VK1140614 from "../images/store/scissors/VK114-0614.jpg";
import VK1431718 from "../images/store/scissors/VK143-1718.jpg";
import VK1775520 from "../images/store/scissors/VK177-5520.jpg";
import VK1402511 from "../images/store/scissors/VK140-2511 VK140-2514.jpg";
import VK1402514 from "../images/store/scissors/VK140-2511 VK140-2514.jpg";
import VK1030611 from "../images/store/scissors/VK103-0611 VK103-0614 VK103-0616.jpg";
import VK1030614 from "../images/store/scissors/VK103-0611 VK103-0614 VK103-0616.jpg";
import VK1030616 from "../images/store/scissors/VK103-0611 VK103-0614 VK103-0616.jpg";
import VK1030211 from "../images/store/scissors/VK103-0211 VK103-0214 VK103-0216.jpg";
import VK1030214 from "../images/store/scissors/VK103-0211 VK103-0214 VK103-0216.jpg";
import VK1030216 from "../images/store/scissors/VK103-0211 VK103-0214 VK103-0216.jpg";

// Towel clamps
import VK1175008 from "../images/store/towel-clamps/VK117-5008.jpg";
import VK1175503 from "../images/store/towel-clamps/VK117-5503 VK117-5513.jpg";
import VK1175513 from "../images/store/towel-clamps/VK117-5503 VK117-5513.jpg";
import VK1175709 from "../images/store/towel-clamps/VK117-5709 VK117-5714.jpg";
import VK1175714 from "../images/store/towel-clamps/VK117-5709 VK117-5714.jpg";

// Needle holders
import I12118 from "../images/store/needle-holders/12-118  VK110-6014 VK110-6017.jpg";
import VK1106014 from "../images/store/needle-holders/12-118  VK110-6014 VK110-6017.jpg";
import VK1106017 from "../images/store/needle-holders/12-118  VK110-6014 VK110-6017.jpg";
import I12121 from "../images/store/needle-holders/12-121  12-122  VK111-2014 VK111-2017.jpg";
import I12122 from "../images/store/needle-holders/12-121  12-122  VK111-2014 VK111-2017.jpg";
import VK1112014 from "../images/store/needle-holders/12-121  12-122  VK111-2014 VK111-2017.jpg";
import VK1112017 from "../images/store/needle-holders/12-121  12-122  VK111-2014 VK111-2017.jpg";
import I12151 from "../images/store/needle-holders/12-151.jpg";
import VK1100212 from "../images/store/needle-holders/VK110-0212.jpg";
import VK1101014 from "../images/store/needle-holders/VK110-1014.jpg";
import VK1101414 from "../images/store/needle-holders/VK110-1414.jpg";
import VK1101814 from "../images/store/needle-holders/VK110-1814 VK110-1815 VK110-1818 VK110-1820.jpg";
import VK1101815 from "../images/store/needle-holders/VK110-1814 VK110-1815 VK110-1818 VK110-1820.jpg";
import VK1101818 from "../images/store/needle-holders/VK110-1814 VK110-1815 VK110-1818 VK110-1820.jpg";
import VK1101820 from "../images/store/needle-holders/VK110-1814 VK110-1815 VK110-1818 VK110-1820.jpg";
import VK1102015 from "../images/store/needle-holders/VK110-2015 VK110-2020.jpg";
import VK1102020 from "../images/store/needle-holders/VK110-2015 VK110-2020.jpg";
import VK132159 from "../images/store/needle-holders/VK132-159 VK132-160 VK132-170.jpg";
import VK132160 from "../images/store/needle-holders/VK132-159 VK132-160 VK132-170.jpg";
import VK132170 from "../images/store/needle-holders/VK132-159 VK132-160 VK132-170.jpg";
import VK132180 from "../images/store/needle-holders/VK132-180.jpg";
import VK1321113 from "../images/store/needle-holders/VK132-1113 VK132-120 VK132-130.jpg";
import VK132120 from "../images/store/needle-holders/VK132-1113 VK132-120 VK132-130.jpg";
import VK132130 from "../images/store/needle-holders/VK132-1113 VK132-120 VK132-130.jpg";

// Nail nippers
import I35117 from "../images/store/nail-nippers/35-117.jpg";
import I35121 from "../images/store/nail-nippers/35-121.jpg";
import I35125 from "../images/store/nail-nippers/35-125  35-127.jpg";
import I35127 from "../images/store/nail-nippers/35-125  35-127.jpg";
import I35129 from "../images/store/nail-nippers/35-129.jpg";
import I35130 from "../images/store/nail-nippers/35-130.jpg";
import VK1437713 from "../images/store/nail-nippers/VK143-7713  35-136.jpg";
import I35136 from "../images/store/nail-nippers/VK143-7713  35-136.jpg";
import VK1437784 from "../images/store/nail-nippers/VK143-7784.jpg";
import VK1437813 from "../images/store/nail-nippers/VK143-7813.jpg";
import VK1437914 from "../images/store/nail-nippers/VK143-7914.jpg";

// Forceps
import I07100 from "../images/store/forceps/07-100  07-102.jpg";
import I07102 from "../images/store/forceps/07-100  07-102.jpg";
import I07101 from "../images/store/forceps/07-101  07-104.jpg";
import I07104 from "../images/store/forceps/07-101  07-104.jpg";
import I07109 from "../images/store/forceps/07-109  07-111.jpg";
import I07111 from "../images/store/forceps/07-109  07-111.jpg";
import I07110 from "../images/store/forceps/07-110  07-112.jpg";
import I07112 from "../images/store/forceps/07-110  07-112.jpg";
import I07113 from "../images/store/forceps/07-113  07-115.jpg";
import I07115 from "../images/store/forceps/07-113  07-115.jpg";
import I07114 from "../images/store/forceps/07-114  07-116.jpg";
import I07116 from "../images/store/forceps/07-114  07-116.jpg";
import I07119 from "../images/store/forceps/07-119  07-123  07-137  07-139.jpg";
import I07123 from "../images/store/forceps/07-119  07-123  07-137  07-139.jpg";
import I07137 from "../images/store/forceps/07-119  07-123  07-137  07-139.jpg";
import I07139 from "../images/store/forceps/07-119  07-123  07-137  07-139.jpg";
import I07120 from "../images/store/forceps/07-120  07-124  07-138  07-140.jpg";
import I07124 from "../images/store/forceps/07-120  07-124  07-138  07-140.jpg";
import I07138 from "../images/store/forceps/07-120  07-124  07-138  07-140.jpg";
import I07140 from "../images/store/forceps/07-120  07-124  07-138  07-140.jpg";
import I07156 from "../images/store/forceps/07-156  07-157  07-158  07-159.jpg";
import I07157 from "../images/store/forceps/07-156  07-157  07-158  07-159.jpg";
import I07158 from "../images/store/forceps/07-156  07-157  07-158  07-159.jpg";
import I07159 from "../images/store/forceps/07-156  07-157  07-158  07-159.jpg";
import I09106 from "../images/store/forceps/09-106.jpg";
import I10104 from "../images/store/forceps/10-104.jpg";
import I13104 from "../images/store/forceps/13-104  14-122  14-132.jpg";
import I14122 from "../images/store/forceps/13-104  14-122  14-132.jpg";
import I14132 from "../images/store/forceps/13-104  14-122  14-132.jpg";
import I13106 from "../images/store/forceps/13-106.jpg";
import I15120 from "../images/store/forceps/15-120.jpg";
import I15124 from "../images/store/forceps/15-124.jpg";
import I15125 from "../images/store/forceps/15-125.jpg";
import I15150 from "../images/store/forceps/15-150.jpg";
import I16112 from "../images/store/forceps/16-112.jpg";
import I17108 from "../images/store/forceps/17-108.jpg";
import I17130 from "../images/store/forceps/17-130.jpg";
import I17132 from "../images/store/forceps/17-132.jpg";
import I20145 from "../images/store/forceps/20-145  20-147  20-149.jpg";
import I20147 from "../images/store/forceps/20-145  20-147  20-149.jpg";
import I20149 from "../images/store/forceps/20-145  20-147  20-149.jpg";
import I21147 from "../images/store/forceps/21-147.jpg";
import I33142 from "../images/store/forceps/33-142  33-146.jpg";
import I33146 from "../images/store/forceps/33-142  33-146.jpg";
import I33150 from "../images/store/forceps/33-150.jpg";
import I3506 from "../images/store/forceps/3506.jpg";
import I7334 from "../images/store/forceps/7334.jpg";
import I7337 from "../images/store/forceps/7337.jpg";
import I7338 from "../images/store/forceps/7338.jpg";
import V307A from "../images/store/forceps/V-307A.jpg";
import V307B from "../images/store/forceps/V-307B.jpg";
import V307C from "../images/store/forceps/V-307C.jpg";
import V307D from "../images/store/forceps/V-307D.jpg";
import V375B from "../images/store/forceps/V-375B  V-375.jpg";
import V375 from "../images/store/forceps/V-375B  V-375.jpg";

import * as storeActions from "../actions/storeActions";
import storeReducers from "../reducers/storeReducers";

const medicalItems = [
  {
    type: "surgical",
    title: "SUTURES Comparable to Vicryl",
    subtype: "suturesvicrylsurgical",
    items: [
      {
        id: "1",
        title: `CP Medical "Visorb" Coated Absorbable Braided Suture (PGA) Polyglycolic Acid`,
        subHeader: "",
        imageSection: Vicryl,
        list: [
          {
            subtitle: `Comparable to Vicryl®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "315A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "316A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "416A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle SH Length 30", Undyed, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "317A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "466A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CP-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "467A",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CP-1 Length 30", Violet, 12/Box`,

            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "351A",
            ethiconCode: "J351G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "352A",
            ethiconCode: "J352G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "354A",
            ethiconCode: "J354G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "338A",
            ethiconCode: "J338G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "345A",
            ethiconCode: "J345G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "259A",
            ethiconCode: "J259G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-1 Length 30", Un-dyed, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "346A",
            ethiconCode: "J346G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-1 Length 36", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "341A",
            ethiconCode: "J341G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `1, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "340A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "332A",
            ethiconCode: "J332G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "333A",
            ethiconCode: "J333G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "334A",
            ethiconCode: "J334G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "586A",
            ethiconCode: "J586G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FSL Length 30", Violet, 12/Box`,
            price: 48.31,
            imageItem: Vicryl,
          },

          {
            code: "589A",
            ethiconCode: "J589G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FSL Length 30", Un-dyed, 12/Box`,
            price: 48.31,
            imageItem: Vicryl,
          },

          {
            code: "385A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle C-3 (13mm)Length 18", Violet, 12/Box`,

            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "392A",
            ethiconCode: "J392G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "398A",
            ethiconCode: "J398G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "421A",
            ethiconCode: "J421G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "422A",
            ethiconCode: "J422G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 30", Un-dyed, 12/Box`,
            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "423A",
            ethiconCode: "J423G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "452A",
            ethiconCode: "J452G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "453A",
            ethiconCode: "J453G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FS-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "443A",
            ethiconCode: "J443G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FS-1 Length 30", Un-dyed, 12/Box`,
            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "386A",
            ethiconCode: "J386G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle C-3 (13mm) Length 18", Violet, 12/Box`,
            price: 44.9,
            imageItem: Vicryl,
          },

          {
            code: "503A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "504A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "489A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "490A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "427A",
            ethiconCode: "J427G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "492A",
            ethiconCode: "J492G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "493A",
            ethiconCode: "J493G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "494A",
            ethiconCode: "J494G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "500A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-3 (16mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "495A",
            ethiconCode: "J495G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "496A",
            ethiconCode: "J496G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "497A",
            ethiconCode: "J497G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "683A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1 Length 18", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "464A",
            ethiconCode: "J464G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Violet, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Vicryl Rapide",
    subtype: "suturesvicrylrapidesurgical",
    items: [
      {
        id: "2",
        title: `“CP Medical” Visorb Quick (PGA) Fast Absorbing Braided Suture`,
        subHeader: "",
        imageSection: VicrylRapide,
        list: [
          {
            subtitle: `Comparable to Vicryl Rapide®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Initial strength comparable to Nylon & Gut` },
          {
            subtitle: `Begins to fall off in 7 to 10 Days; no wound tension by 10 Days`,
          },
          { subtitle: `Elicits lower tissue reaction than Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "VQ392",
            ethiconCode: "VR392",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 59.33,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ490",
            ethiconCode: "VR490",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ493",
            ethiconCode: "VR493",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3
                    Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ494",
            ethiconCode: "VR494",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3
                    Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ496",
            ethiconCode: "VR496",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                    Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ426",
            ethiconCode: "VQ426",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                    Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ497",
            ethiconCode: "VR497",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2
                    Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ935",
            ethiconCode: "VR935",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1
                    Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to PDS II",
    subtype: "suturespdssurgical",
    items: [
      {
        id: "3",
        title: `CP Medical “Monodox” Synthetic Absorbable Monofilament Suture (PDS) Polydioxanone`,
        subHeader: "",
        imageSection: Pds,
        list: [
          {
            subtitle: `Comparable to PDS II®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Maintains tensile strength for up to six weeks` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          {
            subtitle: `Excellent handling, exceptional suppleness, and good knot security`,
          },
          {
            subtitle: `Non-wicking, which eliminates bacterial migration along suture line`,
          },
          {
            subtitle: `FDA-approved D&C Violet No.2 color for better visibility during surgery`,
          },
        ],
        codes: [
          {
            code: "M315",
            ethiconCode: "Z315",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle SH
                    Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M316",
            ethiconCode: "Z316",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle SH
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M317",
            ethiconCode: "Z317",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle SH
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M332",
            ethiconCode: "Z332",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CT-2
                    Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M333",
            ethiconCode: "Z333",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-2
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M334",
            ethiconCode: "Z334",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-2
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M339",
            ethiconCode: "Z339",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-1
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M340",
            ethiconCode: "Z340",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-1
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M397",
            ethiconCode: "Z397",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle FS-2
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M398",
            ethiconCode: "Z398",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-2
                    Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M452",
            ethiconCode: "Z452",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-1
                    Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M451",
            ethiconCode: "Z451",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle FS-1
                    Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M466",
            ethiconCode: "Z466",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-1
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M467",
            ethiconCode: "Z467",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-1
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M468",
            ethiconCode: "Z468",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `1, Needle CP-1
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M968",
            ethiconCode: "Z968",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CP-2
                    Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M969",
            ethiconCode: "Z969",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-2
                    Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M970",
            ethiconCode: "Z970",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-2
                    Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Monocryl",
    subtype: "suturesmonoswiftsurgical",
    items: [
      {
        id: "4",
        title: `"CP Medical" Monoswift (Polyglycolide-CO-Caprolactone) Fast Absorbing Monofilament Suture`,
        subHeader: "",
        imageSection: Monocryl,
        list: [
          {
            subtitle: `Comparable to Monocryl®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `Maintains 70% of original tensile strength at day 7, 40% at day 14 and 0% at day 21`,
          },
          {
            subtitle: `Excellent knot security, handling and minimal drag; very little reactivity with the tissue`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "L310",
            ethiconCode: "Y310G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle SH-1 Length 30", Violet, 12/Box`,

            price: 61.59,
            imageItem: Monocryl,
          },

          {
            code: "L315",
            ethiconCode: "Y315G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L316",
            ethiconCode: "Y316G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L317",
            ethiconCode: "Y317G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L344",
            ethiconCode: "Y344G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L345",
            ethiconCode: "Y345G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L346",
            ethiconCode: "Y346G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L762",
            ethiconCode: "Y762G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle CT-2 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L495",
            ethiconCode: "Y495G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L426",
            ethiconCode: "Y426G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L496",
            ethiconCode: "Y496G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L427",
            ethiconCode: "Y427G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L497",
            ethiconCode: "Y497G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L936",
            ethiconCode: "Y936G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-1 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L463",
            ethiconCode: "Y463G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Violet, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L493",
            ethiconCode: "Y493G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L494",
            ethiconCode: "Y494G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L922",
            ethiconCode: "Y922G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle FS-2 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L923",
            ethiconCode: "Y923G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle FS-2 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L942",
            ethiconCode: "Y942G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle FS-1 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L943",
            ethiconCode: "Y943G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle FS-1 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L987",
            ethiconCode: "Y987G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `0, Needle FSL Length 36", Violet, 12/Box`,

            price: 61.59,
            imageItem: Monocryl,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Ethicon",
    subtype: "suturesethiconsurgical",
    items: [
      {
        id: "5",
        title: `CP Medical Plain Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon1,
        list: [
          { subtitle: `Natural Gut, Comparable to Ethicon® Plain Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "820PG",
            ethiconCode: "H820G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "821PG",
            ethiconCode: "H821G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "822PG",
            ethiconCode: "H822G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "810PG",
            ethiconCode: "H810G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "612PG",
            ethiconCode: "612G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "537PG",
            ethiconCode: "",
            description: "CP Medical",

            category: "Plain Gut Sutures",

            size: `4-0, Needle X-8, 15mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

            price: 56.44,
            imageItem: Ethicon1,
          },

          {
            code: "591PG",
            ethiconCode: "591G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "592PG",
            ethiconCode: "592G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "593PG",
            ethiconCode: "593G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle CP-2 Length 18", 12/Box`,

            price: 56.44,
            imageItem: Ethicon1,
          },

          {
            code: "535PG",
            ethiconCode: "",
            description: "CP Medical",

            category: "Plain Gut Sutures",

            size: `5-0, Needle C-2, 13mm, 3/8" Cir. Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "686PG",
            ethiconCode: "686G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle P-3 Premium Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },

          {
            code: "1915PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle PC-1 Length 18", 12/Box`,

            price: 82.3,

            imageItem: Ethicon1,
          },

          {
            code: "1916PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "lain Gut Sutures",

            size: `6-0, Needle PC-1 Length 18", 12/Box`,

            price: 82.3,

            imageItem: Ethicon1,
          },

          {
            code: "1644PG",
            ethiconCode: "H1644G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FP-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon1,
          },

          {
            code: "774PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },
        ],
      },
      {
        id: "6",
        title: `CP Medical Chromic Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon2,
        list: [
          { subtitle: `Chromic Coated, Comparable to Ethicon® Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "121CG",
            ethiconCode: "121G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle SH, 1/2" Cir. Taper Point, 26mm Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "122CG",
            ethiconCode: "122G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "123CG",
            ethiconCode: "123G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `2-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

            price: 35.84,
            imageItem: Ethicon2,
          },

          {
            code: "203CG",
            ethiconCode: "203CG",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle RB-1, 1/2 Cir, 17mm<br />Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "181CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle SH-1, 1/2 Cir 22mm Length 30", 12/Box`,

            price: 51.4,
            imageItem: Ethicon2,
          },

          {
            code: "182CG",
            ethiconCode: "182G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle SH-1, 1/2 Cir 26mm Length 30", 12/Box`,

            price: 51.4,
            imageItem: Ethicon2,
          },

          {
            code: "634CG",
            ethiconCode: "634G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle FS-2 Length 30", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "635CG",
            ethiconCode: "635G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle FS-2 Length 27", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "636CG",
            ethiconCode: "636G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle FS-2 Length 27", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "558CG",
            ethiconCode: "558G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "810CG",
            ethiconCode: "810G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "811CG",
            ethiconCode: "811G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `2-0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "812CG",
            ethiconCode: "812G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "813CG",
            ethiconCode: "813G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `1, Needle CT-1 Length 30", 12/Box`,

            price: 51.4,
            imageItem: Ethicon2,
          },

          {
            code: "817CG",
            ethiconCode: "817G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `0, Needle CP-1 Length 30", 12/Box`,

            price: 51.4,
            imageItem: Ethicon2,
          },

          {
            code: "547CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle 
                        Length 20", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "543CG",
            ethiconCode: "543G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle C-3, 13mm Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "546CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle C-3, 13mm Cutting Needle 
                        Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "1637CG",
            ethiconCode: "1637G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle PS-2 Length 18" Lg., 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1654CG",
            ethiconCode: "1654G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "687CG",
            ethiconCode: "687G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1242CG",
            ethiconCode: "1242G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Ethilon",
    subtype: "suturesethilonsurgical",
    items: [
      {
        id: "7",
        title: `CP Medical "Monomid" Non-Absorbable Nylon Monofilament Suture Available in Black, Blue and CLEAR`,
        subHeader: "",
        imageSection: Ethilon,
        list: [
          {
            subtitle: `Comparable to Ethilon®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "660B",
            ethiconCode: "660G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle FS-3 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "661B",
            ethiconCode: "661G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "944B",
            ethiconCode: "944G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "945B",
            ethiconCode: "945G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle FS-2 Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "662B",
            ethiconCode: "662G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "662M",
            ethiconCode: "662H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `4-0, Needle FS-2 Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "928B",
            ethiconCode: "928G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "663B",
            ethiconCode: "663G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "663M",
            ethiconCode: "663H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `3-0, Needle FS-1 Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "664B",
            ethiconCode: "664G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "664M",
            ethiconCode: "664H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `2-0, Needle FS Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "667B",
            ethiconCode: "667G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
          {
            code: "1696B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `7-0, Needle P-1, 11mm Length 18", 12/Box`,

            price: 77.04,
            imageItem: Ethilon,
          },
          {
            code: "668B",
            ethiconCode: "668G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "697B",
            ethiconCode: "697G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1698B",
            ethiconCode: "1698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "698B",
            ethiconCode: "698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1663B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle PS-1, 24mm Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "699B",
            ethiconCode: "699G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1666B",
            ethiconCode: "1666G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1667B",
            ethiconCode: "1667G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1669B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "593B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `2-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1668B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle PS-3, 16mm Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1665B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle PS-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1273B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle P-3 (13mm cutting) Length 10", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "911B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "913B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "931B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
          {
            code: "690",
            ethiconCode: "",
            description: `CP Medical Monomid CLEAR`,
            category: "Nylon Sutures",

            size: `5-0, Needle P-3 (13mm cutting) 
                        Length 18", 12/Box`,

            price: 60.67,
            imageItem: Ethilon,
          },
          {
            code: "691",

            ethiconCode: "",

            description: "CP Medical Monomid CLEAR",
            category: "Nylon Sutures",

            size: `4-0, Needle P-3 (13mm cutting) 
                        Length 18", 12/Box`,

            price: 60.67,
            imageItem: Ethilon,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Prolene",
    subtype: "suturesprolenesurgical",
    items: [
      {
        id: "8",
        title: `CP Medical Blue Polypropylene Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Prolene,
        list: [
          {
            subtitle: `Comparable to Prolene®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "1011P",
            ethiconCode: "1011G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1013P",
            ethiconCode: "1013G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1031P",
            ethiconCode: "1031G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "8661P",
            ethiconCode: "8661G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8683P",
            ethiconCode: "8683G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8665P",
            ethiconCode: "8665G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8629P",
            ethiconCode: "8629G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle FS-1 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8684P",
            ethiconCode: "8684G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },
          {
            code: "8663P",
            ethiconCode: "",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `3-0, Needle PS-1 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },
          {
            code: "8685P",
            ethiconCode: "8685G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8424P",
            ethiconCode: "8424G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `0, Needle CT-1 Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8831P",
            ethiconCode: "8831G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle SH, 26mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8434P",
            ethiconCode: "",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `0, Needle CT, 40mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8435P",
            ethiconCode: "8435G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `1, Needle CT, 40mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8690P",
            ethiconCode: "8690G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `0, Needle FS-LX Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8686P",
            ethiconCode: "8686G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-2 Length 18", 12/Box`,
            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8682P",
            ethiconCode: "8682G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8681P",
            ethiconCode: "8681G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-3 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8648P",
            ethiconCode: "8648G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `7-0, P6, 8mm Needle Length 18", 12/Box`,

            price: 88.58,
            imageItem: Prolene,
          },

          {
            code: "8687P",
            ethiconCode: "",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `3-0, PS-2 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },
          {
            code: "8680P",
            ethiconCode: "",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, PS-3, 16mm Length 18", 12/Box`,

            price: 78.8,
            imageItem: Prolene,
          },
          {
            code: "8695P",
            ethiconCode: "8695G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8697P",
            ethiconCode: "8697G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
          {
            code: "8698P",
            ethiconCode: "8698G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8699P",
            ethiconCode: "8699G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8870P",
            ethiconCode: "8870G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle RB-1 Length 30", 12/Box`,

            price: 51.4,
            imageItem: Prolene,
          },

          {
            code: "8871P",
            ethiconCode: "8871G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle RB-1, 17mm Length 30", 12/Box`,

            price: 51.4,
            imageItem: Prolene,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    title: "SUTURES Comparable to Perma-Hand",
    subtype: "suturespermasurgical",
    items: [
      {
        id: "9",
        title: `CP Medical Silk Black Braided Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Permahand,
        list: [
          {
            subtitle: `Comparable to Perma-Hand, a registered trademark of Ethicon`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "632S",

            ethiconCode: "632G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-1, 23mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "675S",
            ethiconCode: "675G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FSL, 30mm Length 30", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "667S",
            ethiconCode: "667G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "736S",
            ethiconCode: "736G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "795S",
            ethiconCode: "795G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "782S",
            ethiconCode: "782G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle CP-2, 26mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "833S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle NSH, 26mm Length 30", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "750S",
            ethiconCode: "750G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-3, 16mm Length 18", 12/Box`,

            price: 47.17,
            imageItem: Permahand,
          },

          {
            code: "681S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "682S",
            ethiconCode: "682G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "683S",
            ethiconCode: "683G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "684S",
            ethiconCode: "684G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "685S",
            ethiconCode: "685G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7762S",
            ethiconCode: "7762",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7763S",
            ethiconCode: "7763",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7772S",
            ethiconCode: "7772",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "870S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle NRB-1 Length 30", 12/Box`,

            price: 47.17,
            imageItem: Permahand,
          },

          {
            code: "1639S",
            ethiconCode: "1639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 56.52,
            imageItem: Permahand,
          },

          {
            code: "639S",
            ethiconCode: "639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "640S",
            ethiconCode: "640G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "641S",
            ethiconCode: "641G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 67.77,
            imageItem: Permahand,
          },

          {
            code: "1588S",
            ethiconCode: "1588H",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle PS, 26mm Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },
        ],
      },
    ],
  },
  {
    type: "surgical",
    subtype: "suturesbiopsysurgical",
    title: "Short Biopsy Sutures",

    items: [
      {
        id: "10",
        title: `CP Medical Black Monomid Short Biopsy Sutures`,
        subHeader: "",
        imageSection: Biopsy,
        list: [
          { subtitle: `Non-Absorbable` },
          { subtitle: `Ideal for  3-4 punch closures` },
          { subtitle: `Maximum Flexibility, Knot Security` },
          { subtitle: `Minimal Memory` },
          { subtitle: `Precision Point 3/8 circle reverse cutting needle` },
        ],
        codes: [
          {
            code: "911B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "913B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "931B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
        ],
      },
    ],
  },
  //  End surgical items
  {
    type: "oral",
    subtype: "suturesvicryloral",
    title: "SUTURES Comparable to Vicryl",
    items: [
      {
        id: "11",
        title: `CP Medical "Visorb" Coated Absorbable Braided Suture (PGA) Polyglycolic Acid`,
        subHeader: "",
        imageSection: Vicryl,
        list: [
          {
            subtitle: `Comparable to Vicryl®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "427A",
            ethiconCode: "J427G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "492A",
            ethiconCode: "J492G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "493A",
            ethiconCode: "J493G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "494A",
            ethiconCode: "J494G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "500A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-3 (16mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "495A",
            ethiconCode: "J495G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "496A",
            ethiconCode: "J496G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "497A",
            ethiconCode: "J497G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "683A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1 Length 18", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "464A",
            ethiconCode: "J464G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Violet, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to Vicryl Rapide",
    subtype: "suturesvicrylrapideoral",
    items: [
      {
        id: "12",
        title: `“CP Medical” Visorb Quick (PGA) Fast Absorbing Braided Suture`,
        subHeader: "",
        imageSection: VicrylRapide,
        list: [
          {
            subtitle: `Comparable to Vicryl Rapide®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Initial strength comparable to Nylon & Gut` },
          {
            subtitle: `Begins to fall off in 7 to 10 Days; no wound tension by 10 Days`,
          },
          { subtitle: `Elicits lower tissue reaction than Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "VQ490",
            ethiconCode: "VR490",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ493",
            ethiconCode: "VR493",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ494",
            ethiconCode: "VR494",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ496",
            ethiconCode: "VR496",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ426",
            ethiconCode: "VQ426",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                      Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ497",
            ethiconCode: "VR497",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ935",
            ethiconCode: "VR935",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1
                      Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to PDS II",
    subtype: Pds,
    items: [
      {
        id: "13",
        title: `CP Medical “Monodox” Synthetic Absorbable Monofilament Suture (PDS) Polydioxanone`,
        subHeader: "",
        imageSection: "",
        list: [
          {
            subtitle: `Comparable to PDS II®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Maintains tensile strength for up to six weeks` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          {
            subtitle: `Excellent handling, exceptional suppleness, and good knot security`,
          },
          {
            subtitle: `Non-wicking, which eliminates bacterial migration along suture line`,
          },
          {
            subtitle: `FDA-approved D&C Violet No.2 color for better visibility during surgery`,
          },
        ],
        codes: [
          {
            code: "M315",
            ethiconCode: "Z315",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M316",
            ethiconCode: "Z316",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M317",
            ethiconCode: "Z317",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M332",
            ethiconCode: "Z332",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M333",
            ethiconCode: "Z333",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M334",
            ethiconCode: "Z334",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M339",
            ethiconCode: "Z339",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-1
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M340",
            ethiconCode: "Z340",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-1
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M397",
            ethiconCode: "Z397",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle FS-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M398",
            ethiconCode: "Z398",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M452",
            ethiconCode: "Z452",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-1
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M451",
            ethiconCode: "Z451",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle FS-1
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M466",
            ethiconCode: "Z466",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M467",
            ethiconCode: "Z467",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M468",
            ethiconCode: "Z468",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `1, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M968",
            ethiconCode: "Z968",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M969",
            ethiconCode: "Z969",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M970",
            ethiconCode: "Z970",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to Monocryl",
    subtype: "suturesmonoswiftoral",
    items: [
      {
        id: "14",
        title: `"CP Medical" Monoswift (Polyglycolide-CO-Caprolactone) Fast Absorbing Monofilament Suture`,
        subHeader: "",
        imageSection: Monocryl,
        list: [
          {
            subtitle: `Comparable to Monocryl®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `Maintains 70% of original tensile strength at day 7, 40% at day 14 and 0% at day 21`,
          },
          {
            subtitle: `Excellent knot security, handling and minimal drag; very little reactivity with the tissue`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "L495",
            ethiconCode: "Y495G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L426",
            ethiconCode: "Y426G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L496",
            ethiconCode: "Y496G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L427",
            ethiconCode: "Y427G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L497",
            ethiconCode: "Y497G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L936",
            ethiconCode: "Y936G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-1 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L463",
            ethiconCode: "Y463G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Violet, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L493",
            ethiconCode: "Y493G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L494",
            ethiconCode: "Y494G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to Ethicon",
    subtype: "suturesethiconoral",
    items: [
      {
        id: "15",
        title: `CP Medical Plain Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon1,
        list: [
          { subtitle: `Natural Gut, Comparable to Ethicon® Plain Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "686PG",
            ethiconCode: "686G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle P-3 Premium Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },

          {
            code: "774PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },
        ],
      },
      {
        id: "16",
        title: `CP Medical Chromic Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon2,
        list: [
          { subtitle: `Chromic Coated, Comparable to Ethicon® Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "1637CG",
            ethiconCode: "1637G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle PS-2 Length 18" Lg., 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1654CG",
            ethiconCode: "1654G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "687CG",
            ethiconCode: "687G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1242CG",
            ethiconCode: "1242G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to Ethilon",
    subtype: "suturesethilonoral",
    items: [
      {
        id: "17",
        title: `CP Medical "Monomid" Non-Absorbable Nylon Monofilament Suture Available in Black, Blue and CLEAR`,
        subHeader: "",
        imageSection: Ethilon,
        list: [
          {
            subtitle: `Comparable to Ethilon®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "697B",
            ethiconCode: "697G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1698B",
            ethiconCode: "1698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "698B",
            ethiconCode: "698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "699B",
            ethiconCode: "699G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1666B",
            ethiconCode: "1666G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1667B",
            ethiconCode: "1667G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1273B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle P-3 (13mm cutting) Length 10", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "911B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "913B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "931B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    subtype: "suturesproleneoral",
    title: "SUTURES Comparable to Prolene",
    items: [
      {
        id: "18",
        title: `CP Medical Blue Polypropylene Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Prolene,
        list: [
          {
            subtitle: `Comparable to Prolene®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "8686P",
            ethiconCode: "8686G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8682P",
            ethiconCode: "8682G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8681P",
            ethiconCode: "8681G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-3 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8695P",
            ethiconCode: "8695G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-3 Length 18", 12/Box`,

           price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8697P",
            ethiconCode: "8697G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
          {
            code: "8698P",
            ethiconCode: "8698G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8699P",
            ethiconCode: "8699G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "SUTURES Comparable to Perma-Hand",
    subtype: "suturespermaoral",
    items: [
      {
        id: "19",
        title: `CP Medical Silk Black Braided Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Permahand,
        list: [
          {
            subtitle: `Comparable to Perma-Hand, a registered trademark of Ethicon`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "1639S",
            ethiconCode: "1639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 56.52,
            imageItem: Permahand,
          },

          {
            code: "639S",
            ethiconCode: "639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "640S",
            ethiconCode: "640G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "641S",
            ethiconCode: "641G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 67.77,
            imageItem: Permahand,
          },

          {
            code: "1588S",
            ethiconCode: "1588H",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle PS, 26mm Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },
        ],
      },
    ],
  },
  {
    type: "oral",
    title: "Short Biopsy Sutures",
    subtype: "suturesbiopsyoral",
    items: [
      {
        id: "20",
        title: `CP Medical Black Monomid Short Biopsy Sutures`,
        subHeader: "",
        imageSection: Biopsy,
        list: [
          { subtitle: `Non-Absorbable` },
          { subtitle: `Ideal for  3-4 punch closures` },
          { subtitle: `Maximum Flexibility, Knot Security` },
          { subtitle: `Minimal Memory` },
          { subtitle: `Precision Point 3/8 circle reverse cutting needle` },
        ],
        codes: [
          {
            code: "911B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "913B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "931B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
        ],
      },
    ],
  },
  // end oral items
  {
    type: "cosmetic",
    subtype: "suturesvicrylcosmetic",
    title: "SUTURES Comparable to Vicryl",
    items: [
      {
        id: "21",
        title: `CP Medical "Visorb" Coated Absorbable Braided Suture (PGA) Polyglycolic Acid`,
        subHeader: "",
        imageSection: Vicryl,
        list: [
          {
            subtitle: `Comparable to Vicryl®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "427A",
            ethiconCode: "J427G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "492A",
            ethiconCode: "J492G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "493A",
            ethiconCode: "J493G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "494A",
            ethiconCode: "J494G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "495A",
            ethiconCode: "J495G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "496A",
            ethiconCode: "J496G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "497A",
            ethiconCode: "J497G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "464A",
            ethiconCode: "J464G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Violet, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Vicryl Rapide",
    subtype: "suturesvicrylrapidecosmetic",
    items: [
      {
        id: "22",
        title: `“CP Medical” Visorb Quick (PGA) Fast Absorbing Braided Suture`,
        subHeader: "",
        imageSection: VicrylRapide,
        list: [
          {
            subtitle: `Comparable to Vicryl Rapide®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Initial strength comparable to Nylon & Gut` },
          {
            subtitle: `Begins to fall off in 7 to 10 Days; no wound tension by 10 Days`,
          },
          { subtitle: `Elicits lower tissue reaction than Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "VQ490",
            ethiconCode: "VR490",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ493",
            ethiconCode: "VR493",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ494",
            ethiconCode: "VR494",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },

          {
            code: "VQ426",
            ethiconCode: "VQ426",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                      Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ497",
            ethiconCode: "VR497",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to PDS II",
    subtype: "suturespdscosmetic",
    items: [
      {
        id: "23",
        title: `CP Medical “Monodox” Synthetic Absorbable Monofilament Suture (PDS) Polydioxanone`,
        subHeader: "",
        imageSection: Pds,
        list: [
          {
            subtitle: `Comparable to PDS II®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Maintains tensile strength for up to six weeks` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          {
            subtitle: `Excellent handling, exceptional suppleness, and good knot security`,
          },
          {
            subtitle: `Non-wicking, which eliminates bacterial migration along suture line`,
          },
          {
            subtitle: `FDA-approved D&C Violet No.2 color for better visibility during surgery`,
          },
        ],
        codes: [
          {
            code: "M315",
            ethiconCode: "Z315",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M316",
            ethiconCode: "Z316",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M317",
            ethiconCode: "Z317",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle SH
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M332",
            ethiconCode: "Z332",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M333",
            ethiconCode: "Z333",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M334",
            ethiconCode: "Z334",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M339",
            ethiconCode: "Z339",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-1
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M340",
            ethiconCode: "Z340",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-1
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M397",
            ethiconCode: "Z397",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle FS-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M398",
            ethiconCode: "Z398",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-2
                      Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M452",
            ethiconCode: "Z452",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-1
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M451",
            ethiconCode: "Z451",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle FS-1
                      Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M466",
            ethiconCode: "Z466",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M467",
            ethiconCode: "Z467",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M468",
            ethiconCode: "Z468",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `1, Needle CP-1
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M968",
            ethiconCode: "Z968",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M969",
            ethiconCode: "Z969",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M970",
            ethiconCode: "Z970",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-2
                      Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Monocryl",
    subtype: "suturesmonoswiftcosmetic",
    items: [
      {
        id: "24",
        title: `"CP Medical" Monoswift (Polyglycolide-CO-Caprolactone) Fast Absorbing Monofilament Suture`,
        subHeader: "",
        imageSection: Monocryl,
        list: [
          {
            subtitle: `Comparable to Monocryl®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `Maintains 70% of original tensile strength at day 7, 40% at day 14 and 0% at day 21`,
          },
          {
            subtitle: `Excellent knot security, handling and minimal drag; very little reactivity with the tissue`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "L496",
            ethiconCode: "Y496G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L497",
            ethiconCode: "Y497G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L936",
            ethiconCode: "Y936G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-1 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L463",
            ethiconCode: "Y463G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Violet, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L493",
            ethiconCode: "Y493G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L494",
            ethiconCode: "Y494G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Ethicon",
    subtype: "suturesethiconcosmetic",
    items: [
      {
        id: "25",
        title: `CP Medical Plain Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon1,
        list: [
          { subtitle: `Natural Gut, Comparable to Ethicon® Plain Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "821PG",
            ethiconCode: "H821G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "822PG",
            ethiconCode: "H822G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },
          {
            code: "612PG",
            ethiconCode: "612G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },
          {
            code: "591PG",
            ethiconCode: "591G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "592PG",
            ethiconCode: "592G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "593PG",
            ethiconCode: "593G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle CP-2 Length 18", 12/Box`,

            price: 56.44,
            imageItem: Ethicon1,
          },
          {
            code: "686PG",
            ethiconCode: "686G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle P-3 Premium Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },

          {
            code: "1644PG",
            ethiconCode: "H1644G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FP-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon1,
          },
        ],
      },
      {
        id: "26",
        title: `CP Medical Chromic Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon2,
        list: [
          { subtitle: `Chromic Coated, Comparable to Ethicon® Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "558CG",
            ethiconCode: "558G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },
          {
            code: "1654CG",
            ethiconCode: "1654G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "687CG",
            ethiconCode: "687G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1242CG",
            ethiconCode: "1242G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Ethilon",
    subtype: "suturesethiloncosmetic",
    items: [
      {
        id: "27",
        title: `CP Medical "Monomid" Non-Absorbable Nylon Monofilament Suture Available in Black, Blue and CLEAR`,
        subHeader: "",
        imageSection: Ethilon,
        list: [
          {
            subtitle: `Comparable to Ethilon®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "660B",
            ethiconCode: "660G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle FS-3 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "661B",
            ethiconCode: "661G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "944B",
            ethiconCode: "944G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "662B",
            ethiconCode: "662G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "928B",
            ethiconCode: "928G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "663B",
            ethiconCode: "663G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "664B",
            ethiconCode: "664G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "697B",
            ethiconCode: "697G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1698B",
            ethiconCode: "1698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "698B",
            ethiconCode: "698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "911B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "913B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "931B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Prolene",
    subtype: "suturesprolenecosmetic",
    items: [
      {
        id: "28",
        title: `CP Medical Blue Polypropylene Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Prolene,
        list: [
          {
            subtitle: `Comparable to Prolene®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "1011P",
            ethiconCode: "1011G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1013P",
            ethiconCode: "1013G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1031P",
            ethiconCode: "1031G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "8661P",
            ethiconCode: "8661G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8686P",
            ethiconCode: "8686G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8682P",
            ethiconCode: "8682G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8681P",
            ethiconCode: "8681G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle PS-3 Length 18", 12/Box`,

            price: 72.0,
            imageItem: Prolene,
          },

          {
            code: "8695P",
            ethiconCode: "8695G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8697P",
            ethiconCode: "8697G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
          {
            code: "8698P",
            ethiconCode: "8698G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8699P",
            ethiconCode: "8699G",
            description: "CP Medical Blue",
            category: "Polypropylene Sutures",
            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "SUTURES Comparable to Perma-Hand",
    subtype: "suturespermacosmetic",
    items: [
      {
        id: "29",
        title: `CP Medical Silk Black Braided Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Permahand,
        list: [
          {
            subtitle: `Comparable to Perma-Hand, a registered trademark of Ethicon`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "632S",

            ethiconCode: "632G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-1, 23mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "675S",
            ethiconCode: "675G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FSL, 30mm Length 30", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "667S",
            ethiconCode: "667G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "782S",
            ethiconCode: "782G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle CP-2, 26mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "750S",
            ethiconCode: "750G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-3, 16mm Length 18", 12/Box`,

            price: 47.17,
            imageItem: Permahand,
          },

          {
            code: "681S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "682S",
            ethiconCode: "682G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "683S",
            ethiconCode: "683G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "684S",
            ethiconCode: "684G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "685S",
            ethiconCode: "685G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7762S",
            ethiconCode: "7762",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7763S",
            ethiconCode: "7763",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7772S",
            ethiconCode: "7772",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "1639S",
            ethiconCode: "1639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 56.52,
            imageItem: Permahand,
          },

          {
            code: "639S",
            ethiconCode: "639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "640S",
            ethiconCode: "640G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "641S",
            ethiconCode: "641G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 67.77,
            imageItem: Permahand,
          },
        ],
      },
    ],
  },
  {
    type: "cosmetic",
    title: "Short Biopsy Sutures",
    subtype: "suturesbiopsycosmetic",
    items: [
      {
        id: "30",
        title: `CP Medical Black Monomid Short Biopsy Sutures`,
        subHeader: "",
        imageSection: Biopsy,
        list: [
          { subtitle: `Non-Absorbable` },
          { subtitle: `Ideal for  3-4 punch closures` },
          { subtitle: `Maximum Flexibility, Knot Security` },
          { subtitle: `Minimal Memory` },
          { subtitle: `Precision Point 3/8 circle reverse cutting needle` },
        ],
        codes: [
          {
            code: "911B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "913B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "931B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting)
                          Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
        ],
      },
    ],
  },
  // end cosmetic items
  {
    type: "vet",
    title: "SUTURES Comparable to Vicryl",
    subtype: "suturesvicrylvet",
    items: [
      {
        id: "31",
        title: `CP Medical "Visorb" Coated Absorbable Braided Suture (PGA) Polyglycolic Acid`,
        subHeader: "",
        imageSection: Vicryl,
        list: [
          {
            subtitle: `Comparable to Vicryl®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "MV-J310",
            description: "Braided Absorbable Suture",
            size: `4-0, Needle NSH-1(SH-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J311",
            description: "Braided Absorbable Suture",
            size: `-0, Needle NSH-1(SH-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J315",
            description: "Braided Absorbable Suture",
            size: `4-0, Needle NSH(SH) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J316",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NSH(SH) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J317",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NSH(SH) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J318",
            description: "Braided Absorbable Suture",
            size: `0, Needle NSH(SH) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J332",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NCT-2(CT-2) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J333",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NCT-2(CT-2) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J334",
            description: "Braided Absorbable Suture",
            size: `0, Needle NCT-2(CT-2) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J338",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NCT-1(CT-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J339",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NCT-1(CT-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J340",
            description: "Braided Absorbable Suture",
            size: `0, Needle NCT-1(CT-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J341",
            description: "Braided Absorbable Suture",
            size: `1, Needle NCT-1(CT-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J397",
            description: "Braided Absorbable Suture",
            size: `4-0, Needle NFS-2(FS-2) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J398",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NFS-2(FS-2) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J451",
            description: "Braided Absorbable Suture",
            size: `4-0, Needle NFS-1(FS-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J452",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NFS-1(FS-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J453",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NFS-1(FS-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J460",
            description: "Braided Absorbable Suture",
            size: `3-0, Needle NX-1(X-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J461",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NX-1(X-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J466",
            description: "Braided Absorbable Suture",
            size: `2-0, Needle NCP-1(CP-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J467",
            description: "Braided Absorbable Suture",
            size: `0, Needle NCP-1(CP-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J468",
            description: "Braided Absorbable Suture",
            size: `1, Needle NCP-1(CP-1) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          {
            code: "MV-J587",
            description: "Braided Absorbable Suture",
            size: `0, Needle NF-SL(F-SL) Length 27"`,
            price: 29.9,
            imageItem: Vicryl,
          },
          // end

          {
            code: "315A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "316A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "416A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle SH Length 30", Undyed, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "317A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle SH Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "466A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CP-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "467A",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CP-1 Length 30", Violet, 12/Box`,

            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "351A",
            ethiconCode: "J351G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "352A",
            ethiconCode: "J352G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "354A",
            ethiconCode: "J354G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2, Needle CT Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "338A",
            ethiconCode: "J338G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "345A",
            ethiconCode: "J345G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "259A",
            ethiconCode: "J259G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-1 Length 30", Un-dyed, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "346A",
            ethiconCode: "J346G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-1 Length 36", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "341A",
            ethiconCode: "J341G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `1, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "340A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-1 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "332A",
            ethiconCode: "J332G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "333A",
            ethiconCode: "J333G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "334A",
            ethiconCode: "J334G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `0, Needle CT-2 Length 30", Violet, 12/Box`,
            price: 43.98,
            imageItem: Vicryl,
          },

          {
            code: "586A",
            ethiconCode: "J586G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FSL Length 30", Violet, 12/Box`,
            price: 48.31,
            imageItem: Vicryl,
          },

          {
            code: "589A",
            ethiconCode: "J589G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FSL Length 30", Un-dyed, 12/Box`,
            price: 48.31,
            imageItem: Vicryl,
          },

          {
            code: "385A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle C-3 (13mm)Length 18", Violet, 12/Box`,

            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "392A",
            ethiconCode: "J392G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "398A",
            ethiconCode: "J398G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "421A",
            ethiconCode: "J421G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "422A",
            ethiconCode: "J422G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 30", Un-dyed, 12/Box`,
            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "423A",
            ethiconCode: "J423G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-2 Length 27", Un-dyed, 12/Box`,
            price: 49.25,
            imageItem: Vicryl,
          },

          {
            code: "452A",
            ethiconCode: "J452G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle FS-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "453A",
            ethiconCode: "J453G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FS-1 Length 30", Violet, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "443A",
            ethiconCode: "J443G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `2-0, Needle FS-1 Length 30", Un-dyed, 12/Box`,
            price: 46.25,
            imageItem: Vicryl,
          },

          {
            code: "386A",
            ethiconCode: "J386G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle C-3 (13mm) Length 18", Violet, 12/Box`,
            price: 44.9,
            imageItem: Vicryl,
          },

          {
            code: "503A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "504A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-2 (8mm) Length 18", Un-dyed, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "489A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "490A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 (11mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "427A",
            ethiconCode: "J427G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "492A",
            ethiconCode: "J492G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `6-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "493A",
            ethiconCode: "J493G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "494A",
            ethiconCode: "J494G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "500A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-3 (16mm) Length 18", Un-dyed, 12/Box`,

            price: 81.89,
            imageItem: Vicryl,
          },

          {
            code: "495A",
            ethiconCode: "J495G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "496A",
            ethiconCode: "J496G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "497A",
            ethiconCode: "J497G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,
            price: 75.90,
            imageItem: Vicryl,
          },

          {
            code: "683A",
            ethiconCode: "",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1 Length 18", Un-dyed, 12/Box`,
            price: 71.89,
            imageItem: Vicryl,
          },

          {
            code: "464A",
            ethiconCode: "J464G",
            description: "Visorb(PGA)",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3 Length 18", Violet, 12/Box`,
            price: 81.89,
            imageItem: Vicryl,
          },
        ],
      },
      // diferent items
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Vicryl Rapide",
    subtype: "suturesvicrylrapidevet",
    items: [
      {
        id: "32",
        title: `“CP Medical” Visorb Quick (PGA) Fast Absorbing Braided Suture`,
        subHeader: "",
        imageSection: VicrylRapide,
        list: [
          {
            subtitle: `Comparable to Vicryl Rapide®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Initial strength comparable to Nylon & Gut` },
          {
            subtitle: `Begins to fall off in 7 to 10 Days; no wound tension by 10 Days`,
          },
          { subtitle: `Elicits lower tissue reaction than Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "VQ392",
            ethiconCode: "VR392",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle FS-2 Length 18", Violet, 12/Box`,
            price: 59.33,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ490",
            ethiconCode: "VR490",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-1 Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ493",
            ethiconCode: "VR493",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `5-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ494",
            ethiconCode: "VR494",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle P-3
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ496",
            ethiconCode: "VR496",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ426",
            ethiconCode: "VQ426",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `4-0, Needle PS-2
                      Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ497",
            ethiconCode: "VR497",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-2
                      Length 18", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
          {
            code: "VQ935",
            ethiconCode: "VR935",
            description: "Visorb Quick",
            category: "Absorbable Sutures",
            size: `3-0, Needle PS-1
                      Length 30", Un-dyed, 12/Box`,
            price: 95.28,
            imageItem: VicrylRapide,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to PDS II",
    subtype: "suturespdsvet",
    items: [
      {
        id: "33",
        title: `CP Medical “Monodox” Synthetic Absorbable Monofilament Suture (PDS) Polydioxanone`,
        subHeader: "",
        imageSection: Pds,
        list: [
          {
            subtitle: `Comparable to PDS II®, a registered trademark of Ethicon®`,
          },
          { subtitle: `Maintains tensile strength for up to six weeks` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          {
            subtitle: `Excellent handling, exceptional suppleness, and good knot security`,
          },
          {
            subtitle: `Non-wicking, which eliminates bacterial migration along suture line`,
          },
          {
            subtitle: `FDA-approved D&C Violet No.2 color for better visibility during surgery`,
          },
        ],
        codes: [
          // diferent items
          {
            code: "MV-Z310",
            description: "Monofilament Synthetic Suture",

            size: "4-0, Needle SH-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z311",

            description: "Monofilament Synthetic Suture",

            size: "3-0, Needle SH-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z316",
            description: "Monofilament Synthetic Suture",
            size: "3-0, Needle SH Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z317",

            description: "Monofilament Synthetic Suture",

            size: "2-0, Needle SH Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z332",

            description: "Monofilament Synthetic Suture",

            size: "3-0, Needle CT-2 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z333",

            description: "Monofilament Synthetic Suture",

            size: "2-0, Needle CT-2 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z334",

            description: "Monofilament Synthetic Suture",

            size: "0, Needle CT-2 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z339",

            description: "Monofilament Synthetic Suture",

            size: "2-0, Needle CT-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z340",

            description: "Monofilament Synthetic Suture",

            size: "0, Needle CT-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z341",

            description: "Monofilament Synthetic Suture",

            size: "1, Needle CT-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z397",

            description: "Monofilament Synthetic Suture",

            size: "4-0, Needle FS-2 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z398",

            description: "Monofilament Synthetic Suture",

            size: "3-0, Needle FS-2 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z451",

            description: "Monofilament Synthetic Suture",

            size: "2-0, Needle FS-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z452",

            description: "Monofilament Synthetic Suture",

            size: "3-0, Needle FS-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z466",

            description: "Monofilament Synthetic Suture",

            size: "2-0, Needle CP-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z467",

            description: "Monofilament Synthetic Suture",

            size: "0, Needle CP-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z468",

            description: "Monofilament Synthetic Suture",

            size: "1, Needle CP-1 Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          {
            code: "MV-Z587",

            description: "Monofilament Synthetic Suture",

            size: "0, Needle F-SL Length 27",

            price: 36.9,
            imageItem: Pds,
          },

          // end

          {
            code: "M315",
            ethiconCode: "Z315",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle SH
          Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M316",
            ethiconCode: "Z316",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle SH
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M317",
            ethiconCode: "Z317",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle SH
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M332",
            ethiconCode: "Z332",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CT-2
          Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M333",
            ethiconCode: "Z333",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-2
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M334",
            ethiconCode: "Z334",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-2
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M339",
            ethiconCode: "Z339",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CT-1
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M340",
            ethiconCode: "Z340",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CT-1
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M397",
            ethiconCode: "Z397",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `4-0, Needle FS-2
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M398",
            ethiconCode: "Z398",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-2
          Length 30", Violet, 12/Box`,
            price: 51.26,
            imageItem: Pds,
          },
          {
            code: "M452",
            ethiconCode: "Z452",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle FS-1
          Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M451",
            ethiconCode: "Z451",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle FS-1
          Length 30", Violet, 12/Box`,
            price: 53.25,
            imageItem: Pds,
          },
          {
            code: "M466",
            ethiconCode: "Z466",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-1
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M467",
            ethiconCode: "Z467",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-1
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M468",
            ethiconCode: "Z468",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `1, Needle CP-1
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M968",
            ethiconCode: "Z968",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `3-0, Needle CP-2
          Length 30", Violet, 12/Box`,
            price: 51.29,
            imageItem: Pds,
          },
          {
            code: "M969",
            ethiconCode: "Z969",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `2-0, Needle CP-2
          Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
          {
            code: "M970",
            ethiconCode: "Z970",
            description: "Monodox(PDO)",
            category: "Monofilament Sutures",
            size: `0, Needle CP-2
          Length 30", Violet, 12/Box`,
            price: 56.44,
            imageItem: Pds,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Monocryl",
    subtype: "suturesmonoswiftvet",
    items: [
      {
        id: "34",
        title: `"CP Medical" Monoswift (Polyglycolide-CO-Caprolactone) Fast Absorbing Monofilament Suture`,
        subHeader: "",
        imageSection: Monocryl,
        list: [
          {
            subtitle: `Comparable to Monocryl®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `Maintains 70% of original tensile strength at day 7, 40% at day 14 and 0% at day 21`,
          },
          {
            subtitle: `Excellent knot security, handling and minimal drag; very little reactivity with the tissue`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
        ],
        codes: [
          {
            code: "L310",
            ethiconCode: "Y310G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle SH-1 Length 30", Violet, 12/Box`,

            price: 61.59,
            imageItem: Monocryl,
          },

          {
            code: "L315",
            ethiconCode: "Y315G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L316",
            ethiconCode: "Y316G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L317",
            ethiconCode: "Y317G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle SH Length 30", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L344",
            ethiconCode: "Y344G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L345",
            ethiconCode: "Y345G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L346",
            ethiconCode: "Y346G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `0, Needle CT-1 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L762",
            ethiconCode: "Y762G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle CT-2 Length 36", Violet, 12/Box`,

            price: 45.84,
            imageItem: Monocryl,
          },

          {
            code: "L495",
            ethiconCode: "Y495G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L426",
            ethiconCode: "Y426G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L496",
            ethiconCode: "Y496G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L427",
            ethiconCode: "Y427G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L497",
            ethiconCode: "Y497G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-2 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L936",
            ethiconCode: "Y936G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle PS-1 Length 30", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L463",
            ethiconCode: "Y463G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Violet, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L493",
            ethiconCode: "Y493G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `5-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L494",
            ethiconCode: "Y494G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle P-3 Length 18", Un-dyed, 12/Box`,

            price: 80.86,
            imageItem: Monocryl,
          },

          {
            code: "L922",
            ethiconCode: "Y922G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `4-0, Needle FS-2 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L923",
            ethiconCode: "Y923G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle FS-2 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L942",
            ethiconCode: "Y942G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `3-0, Needle FS-1 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L943",
            ethiconCode: "Y943G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `2-0, Needle FS-1 Length 36", Violet, 12/Box`,

            price: 51.29,
            imageItem: Monocryl,
          },

          {
            code: "L987",
            ethiconCode: "Y987G",

            description: "CP Medical Monoswift",
            category: "Absorbable Sutures",

            size: `0, Needle FSL Length 36", Violet, 12/Box`,

            price: 61.59,
            imageItem: Monocryl,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Ethicon",
    subtype: "suturesethiconvet",
    items: [
      {
        id: "35",
        title: `CP Medical Plain Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon1,
        list: [
          { subtitle: `Natural Gut, Comparable to Ethicon® Plain Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "MV-H821",

            description: "GUT OASIS Plain Gut Suture, 12/Box",

            size: `4-0, Needle FS-2
                      Length 27"`,

            price: 21.0,
            imageItem: Ethicon1,
          },

          {
            code: "MV-H822",

            description: "GUT OASIS Plain Gut Suture, 12/Box",

            size: `3-0, Needle FS-2
                      Length 27"`,

            price: 21.0,
            imageItem: Ethicon1,
          },
          {
            code: "820PG",
            ethiconCode: "H820G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "821PG",
            ethiconCode: "H821G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "822PG",
            ethiconCode: "H822G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 27", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "810PG",
            ethiconCode: "H810G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "612PG",
            ethiconCode: "612G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "537PG",
            ethiconCode: "",
            description: "CP Medical",

            category: "Plain Gut Sutures",

            size: `4-0, Needle X-8, 15mm, 1/2" Cir. Cutting Needle Length 18", 12/Box`,

            price: 56.44,
            imageItem: Ethicon1,
          },

          {
            code: "591PG",
            ethiconCode: "591G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "592PG",
            ethiconCode: "592G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "593PG",
            ethiconCode: "593G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle CP-2 Length 18", 12/Box`,

            price: 56.44,
            imageItem: Ethicon1,
          },

          {
            code: "535PG",
            ethiconCode: "",
            description: "CP Medical",

            category: "Plain Gut Sutures",

            size: `5-0, Needle C-2, 13mm, 3/8" Cir. Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon1,
          },

          {
            code: "686PG",
            ethiconCode: "686G",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle P-3 Premium Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },

          {
            code: "1915PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `5-0, Needle PC-1 Length 18", 12/Box`,

            price: 82.30,
            imageItem: Ethicon1,
          },

          {
            code: "1916PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "lain Gut Sutures",

            size: `6-0, Needle PC-1 Length 18", 12/Box`,

            price: 82.30,
            imageItem: Ethicon1,
          },

          {
            code: "1644PG",
            ethiconCode: "H1644G",

            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `4-0, Needle FP-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon1,
          },

          {
            code: "774PG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Plain Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 68.79,
            imageItem: Ethicon1,
          },
        ],
      },
      {
        id: "36",
        title: `CP Medical Chromic Gut Absorbable Sutures`,
        subHeader: "",
        imageSection: Ethicon2,
        list: [
          { subtitle: `Chromic Coated, Comparable to Ethicon® Chromic Gut` },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          {
            code: "MV-635",

            description: "Natural Chromic-Gut Sutures",

            size: `4-0, Needle FS-2 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-636",

            description: "Natural Chromic-Gut Sutures",

            size: `3-0, Needle FS-2 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-637",

            description: "Natural Chromic-Gut Sutures",

            size: `2-0, Needle FS-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-638",

            description: "Natural Chromic-Gut Sutures",

            size: `0, Needle FS Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-810",

            description: "Natural Chromic-Gut Sutures",

            size: `3-0, Needle CT-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-811",

            description: "Natural Chromic-Gut Sutures",

            size: `2-0, Needle CT-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-812",

            description: "Natural Chromic-Gut Sutures",

            size: `0, Needle CT-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-813",

            description: "Natural Chromic-Gut Sutures",

            size: `1, Needle CT-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-817",

            description: "Natural Chromic-Gut Sutures",

            size: `0, Needle CP-1 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-883",

            description: "Natural Chromic-Gut Sutures",

            size: `2-0, Needle CT-2 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-884",

            description: "Natural Chromic-Gut Sutures",

            size: `0, Needle CT-2 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-888",

            description: "Natural Chromic-Gut Sutures",

            size: `0, Needle CP-2 Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-G121",

            description: "Natural Chromic-Gut Sutures",

            size: `4-0, Needle HS Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-G122",

            description: "Natural Chromic-Gut Sutures",

            size: `3-0, Needle HS Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },

          {
            code: "MV-G123",

            description: "Natural Chromic-Gut Sutures",

            size: `2-0, Needle HS Length 27"`,

            price: 21.00,
            imageItem: Ethicon2,
          },
          {
            code: "121CG",
            ethiconCode: "121G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle SH, 1/2" Cir. Taper Point, 26mm Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "122CG",
            ethiconCode: "122G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "123CG",
            ethiconCode: "123G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `2-0, Needle SH, 1/2 Cir<br />Length 30", 12/Box`,

            price: 35.84,
            imageItem: Ethicon2,
          },

          {
            code: "203CG",
            ethiconCode: "203CG",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle RB-1, 1/2 Cir, 17mm<br />Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "181CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle SH-1, 1/2 Cir 22mm Length 30", 12/Box`,

            price: 51.40,
            imageItem: Ethicon2,
          },

          {
            code: "182CG",
            ethiconCode: "182G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle SH-1, 1/2 Cir 26mm Length 30", 12/Box`,

            price: 51.40,
            imageItem: Ethicon2,
          },

          {
            code: "634CG",
            ethiconCode: "634G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle FS-2 Length 30", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "635CG",
            ethiconCode: "635G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle FS-2 Length 27", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "636CG",
            ethiconCode: "636G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle FS-2 Length 27", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "558CG",
            ethiconCode: "558G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.96,
            imageItem: Ethicon2,
          },

          {
            code: "810CG",
            ethiconCode: "810G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `3-0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "811CG",
            ethiconCode: "811G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `2-0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "812CG",
            ethiconCode: "812G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `0, Needle CT-1 Length 30", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "813CG",
            ethiconCode: "813G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `1, Needle CT-1 Length 30", 12/Box`,

            price: 51.40,
            imageItem: Ethicon2,
          },

          {
            code: "817CG",
            ethiconCode: "817G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `0, Needle CP-1 Length 30", 12/Box`,

            price: 51.40,
            imageItem: Ethicon2,
          },

          {
            code: "547CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle X-1, 23mm, 1/2" Cir. Cutting Needle 
                        Length 20", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "543CG",
            ethiconCode: "543G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle C-3, 13mm Cutting Needle Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "546CG",
            ethiconCode: "",
            description: "CP Medical",
            category: "Chromic Gut Sutures",
            size: `4-0, Needle C-3, 13mm Cutting Needle 
                        Length 18", 12/Box`,

            price: 43.16,
            imageItem: Ethicon2,
          },

          {
            code: "1637CG",
            ethiconCode: "1637G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle PS-2 Length 18" Lg., 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1654CG",
            ethiconCode: "1654G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "687CG",
            ethiconCode: "687G",
            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },

          {
            code: "1242CG",
            ethiconCode: "1242G",

            description: "CP Medical",
            category: "Chromic Gut Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 64.79,
            imageItem: Ethicon2,
          },
        ],
      },
      // diferent items
      //end
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Ethilon",
    subtype: "suturesethilonvet",
    items: [
      {
        id: "37",
        title: `CP Medical "Monomid" Non-Absorbable Nylon Monofilament Suture Available in Black, Blue and CLEAR`,
        subHeader: "",
        imageSection: Ethilon,
        list: [
          {
            subtitle: `Comparable to Ethilon®, a registered trademark of Ethicon­®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          // diferent items
          {
            code: "MV-661",

            description: "Nylon Monofilament Suture",

            size: `5-0, Needle FS-2 Length 30"`,

            price: 21.90,
            imageItem: Ethilon,
          },

          {
            code: "MV-662",

            description: "Nylon Monofilament Suture",

            size: `4-0, Needle FS-2
          Length 30"`,

            price: 21.90,
            imageItem: Ethilon,
          },

          {
            code: "MV-663",

            description: "Nylon Monofilament Suture",

            size: `3-0, Needle FS-1 Length 30"`,

            price: 21.90,
            imageItem: Ethilon,
          },

          {
            code: "MV-664",

            description: "Nylon Monofilament Suture",

            size: `2-0, Needle FS
          Length 30"`,

            price: 21.90,
            imageItem: Ethilon,
          },

          {
            code: "MV-1629",

            description: "Nylon Monofilament Suture",

            size: `4-0, Needle FS-1
          Length 30"`,

            price: 21.90,
            imageItem: Ethilon,
          },

          //end
          {
            code: "660B",
            ethiconCode: "660G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle FS-3 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "661B",
            ethiconCode: "661G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "944B",
            ethiconCode: "944G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "945B",
            ethiconCode: "945G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle FS-2 Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "662B",
            ethiconCode: "662G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "662M",
            ethiconCode: "662H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `4-0, Needle FS-2 Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "928B",
            ethiconCode: "928G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "663B",
            ethiconCode: "663G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "663M",
            ethiconCode: "663H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `3-0, Needle FS-1 Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "664B",
            ethiconCode: "664G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "664M",
            ethiconCode: "664H",
            description: "CP Medical",
            category: "Monomid Blue Nylon Sutures",

            size: `2-0, Needle FS Length 30", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "667B",
            ethiconCode: "667G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
          {
            code: "1696B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `7-0, Needle P-1, 11mm Length 18", 12/Box`,

            price: 77.04,
            imageItem: Ethilon,
          },
          {
            code: "668B",
            ethiconCode: "668G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "697B",
            ethiconCode: "697G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1698B",
            ethiconCode: "1698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "698B",
            ethiconCode: "698G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1663B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle PS-1, 24mm Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "699B",
            ethiconCode: "699G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1666B",
            ethiconCode: "1666G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1667B",
            ethiconCode: "1667G",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1669B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `3-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "593B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `2-0, Needle PS-2 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1668B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `5-0, Needle PS-3, 16mm Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },
          {
            code: "1665B",
            ethiconCode: "",
            description: "CP Medical",
            category: "Monomid Black Nylon Sutures",

            size: `6-0, Needle PS-3 Length 18", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "1273B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle P-3 (13mm cutting) Length 10", 12/Box`,

            price: 66.74,
            imageItem: Ethilon,
          },

          {
            code: "911B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "913B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },

          {
            code: "931B",
            ethiconCode: "",

            description: `Short Black Nylon`,
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting) Length 10", 12/Box`,

            price: 35.92,
            imageItem: Ethilon,
          },
          {
            code: "690",
            ethiconCode: "",
            description: `CP Medical Monomid CLEAR`,
            category: "Nylon Sutures",

            size: `5-0, Needle P-3 (13mm cutting) 
            Length 18", 12/Box`,

            price: 60.67,
            imageItem: Ethilon,
          },
          {
            code: "691",

            ethiconCode: "",

            description: "CP Medical Monomid CLEAR",
            category: "Nylon Sutures",

            size: `4-0, Needle P-3 (13mm cutting) 
            Length 18", 12/Box`,

            price: 60.67,
            imageItem: Ethilon,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Prolene",
    subtype: "suturesprolenevet",
    items: [
      {
        id: "38",
        title: `CP Medical Blue Polypropylene Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Prolene,
        list: [
          {
            subtitle: `Comparable to Prolene®, a registered trademark of Ethicon®`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          // diferent items

          {
            code: "MV-8661",

            description: "OASIS Blue Polypropylene, 12/Box",

            size: `5-0, Needle FS-2 Length 18"`,

            price: 28.90,
            imageItem: Prolene,
          },

          {
            code: "MV-8665",

            description: "OASIS Blue Polypropylene, 12/Box",

            size: `3-0, Needle FS-2 Length 18"`,

            price: 28.90,
            imageItem: Prolene,
          },

          {
            code: "MV-8683",

            description: "OASIS Blue Polypropylene, 12/Box",

            size: `4-0, Needle FS-2 Length 18"`,

            price: 28.90,
            imageItem: Prolene,
          },

          {
            code: "MV-8684",

            description: "OASIS Blue Polypropylene, 12/Box",

            size: `3-0, Needle FS-1 Length 18"`,

            price: 28.90,
            imageItem: Prolene,
          },

          {
            code: "MV-8685",

            description: "OASIS Blue Polypropylene, 12/Box",

            size: `2-0, Needle FS Length 18"`,

            price: 28.90,
            imageItem: Prolene,
          },

          // end
          {
            code: "1011P",
            ethiconCode: "1011G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `6-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1013P",
            ethiconCode: "1013G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "1031P",
            ethiconCode: "1031G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle C-3, 13mm Length 10", 12/Box`,

            price: 33.78,
            imageItem: Prolene,
          },

          {
            code: "8661P",
            ethiconCode: "8661G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8683P",
            ethiconCode: "8683G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8665P",
            ethiconCode: "8665G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8629P",
            ethiconCode: "8629G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle FS-1 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8684P",
            ethiconCode: "8684G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8663P",
            ethiconCode: "",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `3-0, Needle PS-1 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8685P",
            ethiconCode: "8685G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8424P",
            ethiconCode: "8424G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `0, Needle CT-1 Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8831P",
            ethiconCode: "8831G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle SH, 26mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8434P",
            ethiconCode: "",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `0, Needle CT, 40mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8435P",
            ethiconCode: "8435G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `1, Needle CT, 40mm Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8690P",
            ethiconCode: "8690G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `0, Needle FS-LX Length 30", 12/Box`,

            price: 46.14,
            imageItem: Prolene,
          },

          {
            code: "8686P",
            ethiconCode: "8686G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8682P",
            ethiconCode: "8682G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle PS-2 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8681P",
            ethiconCode: "8681G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle PS-3 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },

          {
            code: "8648P",
            ethiconCode: "8648G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `7-0, P6, 8mm Needle Length 18", 12/Box`,

            price: 88.58,
            imageItem: Prolene,
          },

          {
            code: "8687P",
            ethiconCode: "",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `3-0, PS-2 Length 18", 12/Box`,

            price: 72.00,
            imageItem: Prolene,
          },
          {
            code: "8680P",
            ethiconCode: "",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `6-0, PS-3, 16mm Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },
          {
            code: "8695P",
            ethiconCode: "8695G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8697P",
            ethiconCode: "8697G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8698P",
            ethiconCode: "8698G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8699P",
            ethiconCode: "8699G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 78.80,
            imageItem: Prolene,
          },

          {
            code: "8870P",
            ethiconCode: "8870G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `5-0, Needle RB-1 Length 30", 12/Box`,

            price: 51.40,
            imageItem: Prolene,
          },

          {
            code: "8871P",
            ethiconCode: "8871G",

            description: "CP Medical Blue",
            category: "Polypropylene Sutures",

            size: `4-0, Needle RB-1, 17mm Length 30", 12/Box`,

            price: 51.40,
            imageItem: Prolene,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    title: "SUTURES Comparable to Perma-Hand",
    subtype: "suturespermavet",
    items: [
      {
        id: "39",
        title: `CP Medical Silk Black Braided Non-Absorbable Sutures`,
        subHeader: "",
        imageSection: Permahand,
        list: [
          {
            subtitle: `Comparable to Perma-Hand, a registered trademark of Ethicon`,
          },
          {
            subtitle: `“CP Medical” Premium, Extra Sharp Needles are made from the finest 300 Series Stainless Steel`,
          },
          { subtitle: `Stronger, sharper, and enhanced ductility` },
        ],
        codes: [
          // diferent items

          {
            code: "MV-682",

            description: "OASIS Black Braided Silk Suture, 12/Box",

            size: `nowrap>5-0, Needle FS-2 Length 18"`,

            price: 19.50,
            imageItem: Permahand,
          },

          {
            code: "MV-683",

            description: "OASIS Black Braided Silk Suture, 12/Box",

            size: `nowrap>4-0, Needle FS-2 Length 18"`,

            price: 19.50,
            imageItem: Permahand,
          },

          {
            code: "MV-629",

            description: "OASIS Black Braided Silk Suture, 12/Box",

            size: `4-0, Needle FS-1 Length 18"`,

            price: 19.50,
            imageItem: Permahand,
          },

          {
            code: "MV-684",

            description: "OASIS Black Braided Silk Suture, 12/Box",

            size: `3-0, Needle FS-1 Length 18"`,

            price: 19.50,
            imageItem: Permahand,
          },

          {
            code: "MV-685",

            description: "OASIS Black Braided Silk Suture, 12/Box",

            size: `2-0, Needle FS Length 18"`,

            price: 19.50,
            imageItem: Permahand,
          },

          // end

          {
            code: "632S",

            ethiconCode: "632G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-1, 23mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "675S",
            ethiconCode: "675G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FSL, 30mm Length 30", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "667S",
            ethiconCode: "667G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "736S",
            ethiconCode: "736G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle C-3<br />3/8" Cir., Rev. Cut, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "795S",
            ethiconCode: "795G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle C-2, 13mm Length 18", 12/Box`,

            price: 41.07,
            imageItem: Permahand,
          },

          {
            code: "782S",
            ethiconCode: "782G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle CP-2, 26mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "833S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle NSH, 26mm Length 30", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "750S",
            ethiconCode: "750G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-3, 16mm Length 18", 12/Box`,

            price: 47.17,
            imageItem: Permahand,
          },

          {
            code: "681S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "682S",
            ethiconCode: "682G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "683S",
            ethiconCode: "683G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "684S",
            ethiconCode: "684G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-1 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "685S",
            ethiconCode: "685G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle FS Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7762S",
            ethiconCode: "7762",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7763S",
            ethiconCode: "7763",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle X-8, 15mm Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "7772S",
            ethiconCode: "7772",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `3-0, Needle FS-2 Length 18", 12/Box`,

            price: 39.90,
            imageItem: Permahand,
          },

          {
            code: "870S",
            ethiconCode: "",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle NRB-1 Length 30", 12/Box`,

            price: 47.17,
            imageItem: Permahand,
          },

          {
            code: "1639S",
            ethiconCode: "1639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-3 Length 18", 12/Box`,

            price: 56.52,
            imageItem: Permahand,
          },

          {
            code: "639S",
            ethiconCode: "639G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `6-0, Needle P-1 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "640S",
            ethiconCode: "640G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `5-0, Needle P-3 Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },

          {
            code: "641S",
            ethiconCode: "641G",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `4-0, Needle P-3 Length 18", 12/Box`,

            price: 67.77,
            imageItem: Permahand,
          },

          {
            code: "1588S",
            ethiconCode: "1588H",

            description: "CP Medical Silk Black",
            category: "Braided Sutures",

            size: `2-0, Needle PS, 26mm Length 18", 12/Box`,

            price: 77.12,
            imageItem: Permahand,
          },
        ],
      },
    ],
  },
  {
    type: "vet",
    subtype: "suturesbiopsyvet",
    title: "Short Biopsy Sutures",

    items: [
      {
        id: "40",
        title: `CP Medical Black Monomid Short Biopsy Sutures`,
        subHeader: "",
        imageSection: Biopsy,
        list: [
          { subtitle: `Non-Absorbable` },
          { subtitle: `Ideal for  3-4 punch closures` },
          { subtitle: `Maximum Flexibility, Knot Security` },
          { subtitle: `Minimal Memory` },
          { subtitle: `Precision Point 3/8 circle reverse cutting needle` },
        ],
        codes: [
          {
            code: "911B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `6-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "913B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `5-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
          {
            code: "931B",
            ethiconCode: "",

            description: "Short Black Nylon",
            category: "Monomid Sutures",

            size: `4-0, Needle C-3 (13mm cutting)
                      Length 10", 12/Box`,

            price: 35.92,
            imageItem: Biopsy,
          },
        ],
      },
    ],
  },
  // end veterinarian items
  {
    type: "instruments",
    title: "German Stainless Steel Scissors",
    subtype: "instrumentsgscissors",
    items: [
      {
        id: "41",
        title: "",
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK140-2084",
            description: `Knowles Bandage Scissors, 5 1/2`,
            price: 29.5,
            imageItem: VK1402084,
          },

          {
            code: "VK140-2511",
            description: `Lister Bandage Scissors, 4 1/2`,
            price: 24.5,
            imageItem: VK1402511,
          },

          {
            code: "VK140-2514",
            description: `Lister Bandage Scissors, 5 1/2`,
            price: 24.5,
            imageItem: VK1402514,
          },
        ],
      },
      {
        id: "42",
        title: "BLUNT/BLUNT OPERATING ROOM SCISSORS",
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK103-0211",
            description: `OR Scissors, Blunt/Blunt, 4 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1030211,
          },

          {
            code: "VK103-0311",
            description: `OR Scissors, Blunt/Blunt, 4 1/2", Curve`,
            price: 22.5,
            imageItem: VK1030311,
          },

          {
            code: "VK103-0214",
            description: `OR Scissors, Blunt/Blunt, 5 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1030214,
          },

          {
            code: "VK103-0314",
            description: `OR Scissors, Blunt/Blunt, 5 1/2", Curve`,
            price: 29.5,
            imageItem: VK1030314,
          },

          {
            code: "VK103-0216",
            description: `OR Scissors, Blunt/Blunt, 6 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1030216,
          },

          {
            code: "VK103-0316",
            description: `OR Scissors, Blunt/Blunt, 6 1/2", Curve`,
            price: 29.5,
            imageItem: VK1030316,
          },
        ],
      },
      {
        id: "43",
        title: "SHARP/BLUNT OPERATING ROOM SCISSORS",
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK103-0611",
            description: `OR Scissors, Sharp/Blunt, 4 1/2", Straigh`,
            price: 28.5,
            imageItem: VK1030611,
          },

          {
            code: "VK103-0711",
            description: `OR Scissors, Sharp/Blunt, 4 1/2", Curve`,
            price: 22.5,
            imageItem: VK1030711,
          },

          {
            code: "VK103-0614",
            description: `OR Scissors, Sharp/Blunt, 5 1/2", Straigh`,
            price: 24.5,
            imageItem: VK1030614,
          },

          {
            code: "VK103-0714",
            description: `OR Scissors, Sharp/Blunt, 5 1/2", Curve`,
            price: 22.5,
            imageItem: VK1030714,
          },

          {
            code: "VK103-0616",
            description: `OR Scissors, Sharp/Blunt, 6 1/2", Straigh`,
            price: 29.5,
            imageItem: VK1030616,
          },

          {
            code: "VK103-0716",
            description: `OR Scissors, Sharp/Blunt, 6 1/2", Curve`,
            price: 29.5,
            imageItem: VK1030716,
          },
        ],
      },
      {
        id: "43",
        title: "SHARP/SHARP OPERATING ROOM SCISSORS",
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK103-0411",
            description: `OR Scissors, Sharp/Sharp, 4 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1030411,
          },

          {
            code: "VK103-0511",
            description: `OR Scissors, Sharp/Sharp, 4 1/2", Curve`,
            price: 22.5,
            imageItem: VK1030511,
          },

          {
            code: "VK103-0414",
            description: `OR Scissors, Sharp/Sharp, 5 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1030414,
          },

          {
            code: "VK103-0514",
            description: `OR Scissors, Sharp/Sharp, 5 1/2", Curve`,
            price: 22.5,
            imageItem: VK1030514,
          },

          {
            code: "VK103-0415",
            description: `OR Scissors, Sharp/Sharp, 6 1/2", Straigh`,
            price: 29.5,
            imageItem: VK1030415,
          },

          {
            code: "VK103-0516",
            description: `OR Scissors, Sharp/Sharp, 6 1/2", Curve`,
            price: 34.8,
            imageItem: VK1030516,
          },
        ],
      },
      {
        id: "44",
        title: "",
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "01-158",
            description: `Castroviejo Scissors, 4 1/4`,
            price: 36.0,
            imageItem: I01158,
          },

          {
            code: "01-166",
            description: `Ear Cropping Scissors, Sharp/Blunt, 6 1/2", Curve`,
            price: 36.0,
            imageItem: I01166,
          },

          {
            code: "01-165",
            description: `Ear Cropping Scissors, Blunt/Blunt, 6 1/2", Straigh`,
            price: 39.9,
            imageItem: I01165,
          },

          {
            code: "VK102-2009",
            description: `Iris Scissors, 3 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1022009,
          },

          {
            code: "VK102-2109",
            description: `Iris Scissors, 3 1/2", Curve`,
            price: 22.5,
            imageItem: VK1022109,
          },

          {
            code: "VK102-2011",
            description: `Iris Scissors, 4 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1022011,
          },

          {
            code: "VK102-2111",
            description: `Iris Scissors, 4 1/2", Curve`,
            price: 22.5,
            imageItem: VK1022111,
          },

          {
            code: "VK114-0614",
            description: `Littauer Scissors, 5 1/2`,
            price: 24.5,
            imageItem: VK1140614,
          },

          {
            code: "VK177-5520",
            description: `Martin Cartilage Scissors, 8", Curve`,
            price: 41.0,
            imageItem: VK1775520,
          },

          {
            code: "VK103-5014",
            description: `Mayo Dissecting Scissors, 5 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1035014,
          },

          {
            code: "VK103-5114",
            description: `Mayo Dissecting Scissors, 5 1/2", Curve`,
            price: 24.5,
            imageItem: VK1035114,
          },

          {
            code: "VK103-5017",
            description: `Mayo Dissecting Scissors, 6 3/4", Straigh`,
            price: 24.5,
            imageItem: VK1035017,
          },

          {
            code: "VK103-5117",
            description: `Mayo Dissecting Scissors, 6 3/4", Curve`,
            price: 26.5,
            imageItem: VK1035117,
          },

          {
            code: "12-167",
            description: `Mayo-Stille Scissors, 5.5", Curve`,
            price: 49.5,
            imageItem: I12167,
          },

          {
            code: "12-169",
            description: `Mayo-Stille Scissors, 6.75", Curve`,
            price: 49.5,
            imageItem: I12169,
          },

          {
            code: "VK104-3214",
            description: `Metzenbaum Scissors, 5 1/2", Straigh`,
            price: 22.5,
            imageItem: VK1043214,
          },

          {
            code: "VK104-3314",
            description: `Metzenbaum Scissors, 5 1/2", Curve`,
            price: 22.5,
            imageItem: VK1043314,
          },

          {
            code: "VK104-3218",
            description: `Metzenbaum Scissors, 7", Straigh`,
            price: 29.5,
            imageItem: VK1043218,
          },

          {
            code: "VK104-3318",
            description: `Metzenbaum Scissors, 7", Curve`,
            price: 33.8,
            imageItem: VK1043318,
          },

          {
            code: "02-116",
            description: `Northbent Stitch Scissors, 4 1/2`,
            price: 39.0,
            imageItem: I02116,
          },

          {
            code: "VK114-0609",
            description: `Spencer Stitch Scissors, 3 1/2`,
            price: 24.5,
            imageItem: VK1140609,
          },

          {
            code: "01-143",
            description: `Strabismus Scissors, 4 1/4", Curved or Straig`,
            price: 34.9,
            imageItem: I01143,
          },

          {
            code: "VK143-1718",
            description: `White Toenail Scissors, 4 3/4`,
            price: 49.0,
            imageItem: VK1431718,
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "German Stainless Steel Towel Clamps",
    subtype: "instrumentsgtowelclamps",
    items: [
      {
        id: "45",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK117-5503",

            description: `Backhaus Towel Clamp, 3 1/2"`,

            price: 22.5,
            imageItem: VK1175503,
          },

          {
            code: "VK117-5513",

            description: `Backhaus Towel Clamp, 5 1/4"`,

            price: 22.5,
            imageItem: VK1175513,
          },

          {
            code: "VK117-5008",

            description: `Jones Towel Clamp, 3"`,
            price: 23.9,
            imageItem: VK1175008,
          },

          {
            code: "VK117-5709",

            description: `Lorna Towel Clamp, Non-Perforating, 4"`,

            price: 28.8,
            imageItem: VK1175709,
          },

          {
            code: "VK117-5714",

            description: `Lorna Towel Clamp, Non-Perforating, 5 1/4"`,

            price: 28.8,
            imageItem: VK1175714,
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "German Stainless Steel Needle Holders",
    subtype: "instrumentsgneedleholders",
    items: [
      {
        id: "46",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK110-1414",
            description: `Baumgartner Needle Holder, 5 1/4"`,
            price: 24.9,
            imageItem: VK1101414,
          },

          {
            code: "VK110-2015",
            description: `Crile-Wood Needle Holder, 6"`,
            price: 28.0,
            imageItem: VK1102015,
          },

          {
            code: "VK110-2020",
            description: `Crile-Wood Needle Holder, 8"`,
            price: 38.75,
            imageItem: VK1102020,
          },

          {
            code: "VK110-0212",
            description: `Derf Needle Holder, 4 3/4"`,
            price: 38.8,
            imageItem: VK1100212,
          },

          {
            code: "12-122",
            description: `Mathieu Needle Holder, 5"`,
            price: 26.5,
            imageItem: I12122,
          },

          {
            code: "VK111-2014",
            description: `Mathieu Needle Holder, 5 1/2"`,
            price: 48.5,
            imageItem: VK1112014,
          },

          {
            code: "VK111-2017",
            description: `Mathieu Needle Holder, 6 1/2"`,
            price: 48.5,
            imageItem: VK1112017,
          },

          {
            code: "12-121",
            description: `Mathieu Needle Holder, 8"`,
            price: 41.75,
            imageItem: I12121,
          },

          {
            code: "VK110-1814",
            description: `Mayo-Hegar Needle Holder, 5 1/2"`,
            price: 28.8,
            imageItem: VK1101814,
          },

          {
            code: "VK110-1815",
            description: `Mayo-Hegar Needle Holder, 6"`,
            price: 26.5,
            imageItem: VK1101815,
          },

          {
            code: "VK110-1818",
            description: `Mayo-Hegar Needle Holder, 7"`,
            price: 28.8,
            imageItem: VK1101818,
          },

          {
            code: "VK110-1820",
            description: `Mayo-Hegar Needle Holder, 8"`,
            price: 33.75,
            imageItem: VK1101820,
          },

          {
            code: "VK110-6014",
            description: `Olsen-Hegar Needle Holder with Scissor Combo, 5 1/2"`,

            price: 38.75,
            imageItem: VK1106014,
          },

          {
            code: "VK110-6017",
            description: `Olsen-Hegar Needle Holder with Scissor Combo, 6 1/2"`,

            price: 38.75,
            imageItem: VK1106017,
          },

          {
            code: "12-118",
            description: `Olsen-Hegar Needle Holder with Scissor Combo, 7 1/2"`,

            price: 31.8,
            imageItem: I12118,
          },

          {
            code: "VK110-1014",
            description: `Webster Needle Holder, 4 3/4"`,
            price: 28.8,
            imageItem: VK1101014,
          },
        ],
      },
      {
        id: "47",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "12-151",
            description: `Webster Needle Holder w/ Tungsten Carbide Smooth Jaws, 5`,

            price: 63.0,
            imageItem: I12151,
          },

          {
            code: "VK132-1113",
            description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5 1/2"`,

            price: 88.0,
            imageItem: VK1321113,
          },

          {
            code: "VK132-120",
            description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 6"`,

            price: 88.0,
            imageItem: VK132120,
          },

          {
            code: "VK132-130",
            description: `Mayo-Hegar Needle Holder w/ Tungsten Carbide Jaws, 7"`,

            price: 88.0,
            imageItem: VK132130,
          },

          {
            code: "VK132-159",
            description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5"`,

            price: 98.0,
            imageItem: VK132159,
          },

          {
            code: "VK132-160",
            description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 5 1/2"`,

            price: 88.0,
            imageItem: VK132160,
          },

          {
            code: "VK132-170",
            description: `Olsen-Hegar Needle Holder w/ Tungsten Carbide Jaws, 6 3/4"`,

            price: 88.0,
            imageItem: VK132170,
          },

          {
            code: "VK132-180",
            description: `Olsen Hegar Needle Holder w/ Tungsten Carbide Jaws, 7.5"`,

            price: 124.8,
            imageItem: VK132180,
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "German Stainless Steel Retractors",
    subtype: "instrumentsgretractors",
    items: [
      {
        id: "48",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK124-4013",

            description: `Gelpi Retractor, 3.5"`,

            price: 84.0,
            imageItem: "",
          },

          {
            code: "VK124-4014",

            description: `Gelpi Retractor, 5.5"`,

            price: 93.0,
            imageItem: "",
          },

          {
            code: "VK124-7010",
            description: `Balfour Abdominal Retractor w/Fixed Side Blades, 2.5" deep, 7" spread`,
            price: 295.0,
            imageItem: "",
          },

          {
            code: "VK120-0508",
            description: `Senn-Miller Retractor, 6.375", Double Ended, Sharp`,
            price: 28.8,
            imageItem: "",
          },

          {
            code: "VK120-0509",
            description: `Senn-Miller Retractor, 6.375", Double Ended Blunt`,
            price: 28.8,
            imageItem: "",
          },

          {
            code: "VK122-1821",
            description: `US Army Retractor, 8.5" Double Ended, Set of 2`,
            price: 31.0,
            imageItem: "",
          },

          {
            code: "PF-500-10",
            description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, 13mm Sharp Teeth`,
            price: 59.0,
            imageItem: "",
          },

          {
            code: "PF-501-10",
            description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, Blunt`,
            price: 59.0,
            imageItem: "",
          },

          {
            code: "PF-502-10",
            description: `Weitlaner Retractor, 4 3/8", 2x3 Prongs, Semi-Sharp Teeth`,
            price: 59.0,
            imageItem: "",
          },

          {
            code: "PF-503-13",
            description: `Weitlaner Retractor, 5 1/8", 3x4 Prongs, 13mm Blunt Teeth`,
            price: 64.0,
            imageItem: "",
          },

          {
            code: "PF-506-16",
            description: `Weitlaner Retractor, 6 1/2", 3x4 Prongs, 13mm Semi-Sharp Teeth`,
            price: 64.0,
            imageItem: "",
          },

          {
            code: "PF-511-13",
            description: `Weitlaner Retractor, 5 1/8", 3x4 Prongs, 21mm Blunt Teeth`,
            price: 98.0,
            imageItem: "",
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "German Stainless Steel Nail Nippers",
    subtype: "instrumentsgnailnippers",
    items: [
      {
        id: "49",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "VK143-7914",
            description: `Anvil Nail Splitting Forcep , double spring, 5"`,

            price: 76.5,
            imageItem: VK1437914,
          },
          {
            code: "35-121",
            description: `Nail Nipper, Single Spring, 6", Straight`,

            price: 37.5,
            imageItem: I35121,
          },
          {
            code: "35-125",
            description: `Barrel Spring Nail Nipper, 4 1/2"`,

            price: 46.8,
            imageItem: I35125,
          },
          {
            code: "35-127",
            description: `Barrel Spring Nail Nipper, 5 1/2"`,

            price: 57.8,
            imageItem: I35127,
          },
          {
            code: "35-130",
            description: `Nail Nipper w/Double Spring 7", Straight`,

            price: 61.5,
            imageItem: I35130,
          },
          {
            code: "VK143-7813",
            description: `Nail Nipper w/Double Spring, 6", straight`,

            price: 48.5,
            imageItem: VK1437813,
          },
          {
            code: "VK143-7713",
            description: `Nail Nipper w/Double Spring, 5 1/2", concave`,

            price: 78.8,
            imageItem: VK1437713,
          },
          {
            code: "35-136",
            description: `Nail Nipper w/Double Spring, 6 1/2", concave`,

            price: 48.5,
            imageItem: I35136,
          },
          {
            code: "VK143-7784",
            description: `Nail Nipper w/Double Spring, 5 1/2", angled concave`,

            price: 62.75,
            imageItem: VK1437784,
          },
          {
            code: "35-117",
            description: `Tissue & Cuticle Nipper, 4 1/2"`,

            price: 46.8,
            imageItem: I35117,
          },
          {
            code: "35-129",
            description: `Double Action Nail Nipper, 6", Concave`,

            price: 77.0,
            imageItem: I35129,
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "German Stainless Steel Forceps",
    subtype: "instrumentsgforceps",
    items: [
      {
        id: "50",
        title: ``,
        subHeader: "",
        imageSection: "",
        list: [],
        codes: [
          {
            code: "15-125",
            description: `Adson Brown Forcep, 4 3/4", 7x7 Teeth"`,
            price: 22.5,
            imageItem: I15125,
          },

          {
            code: "15-120",
            description: `Adson Dressing Forcep, 4 3/4", Serrated`,
            price: 22.5,
            imageItem: I15120,
          },

          {
            code: "15-124",
            description: `Adson Tissue Forcep, 4 3/4", 1x2 Teeth`,
            price: 22.5,
            imageItem: I15124,
          },

          {
            code: "15-150",
            description: `Iris Delicate Forcep, 4", Straight, 1x2 Teeth, Serrated`,
            price: 22.5,
            imageItem: I15150,
          },

          {
            code: "16-112",
            description: `Carmalt Splinter Forceps, 4 ½” Curved`,
            price: 22.5,
            imageItem: I16112,
          },

          {
            code: "13-106",
            description: `Thumb Dressing Forcep, 5 1/2", Serrated`,
            price: 22.5,
            imageItem: I13106,
          },

          {
            code: "13-104",
            description: `Thumb Dressing Forcep, 5 1/2", 1x2 Teeth`,
            price: 22.5,
            imageItem: I13104,
          },

          {
            code: "14-122",
            description: `Thumb Tissue Forcep, 5 1/2", 2x3 Teeth`,
            price: 22.5,
            imageItem: I14122,
          },

          {
            code: "14-132",
            description: `Thumb Tissue Forcep, 5 1/2", 3x4 Teeth`,
            price: 22.5,
            imageItem: I14132,
          },

          {
            code: "17-108",
            description: `Allis Tissue Forcep, 6", 5x6 Teeth`,
            price: 29.8,
            imageItem: I17108,
          },

          {
            code: "33-142",
            description: `Baby Kern Bone Holding Forceps w/Ratchet, Jaw Cap, 1/4" - 7/8", 5 3/4"`,
            price: 78.5,
            imageItem: I33142,
          },

          {
            code: "33-146",
            description: `Baby Kern Bone Holding Forceps w/Ratchet, Jaw Cap, 1/4" - 1 1/8", 9" `,
            price: 94.5,
            imageItem: I33146,
          },

          {
            code: "3506",
            description: `Bone Fragment Forceps, Smaller Fragment Forceps`,
            price: 46.5,
            imageItem: I3506,
          },

          {
            code: "33-150",
            description: `Bone Holding Forceps, 7"`,
            price: 46.5,
            imageItem: I33150,
          },

          {
            code: "07-113",
            description: `Crile Forcep, 5 1/2", Straight`,
            price: 22.5,
            imageItem: I07113,
          },

          {
            code: "07-114",
            description: `Crile Forcep, 5 1/2", Curved`,
            price: 22.5,
            imageItem: I07114,
          },

          {
            code: "07-115",
            description: `Crile Forcep, 6 1/4", Straight`,
            price: 22.5,
            imageItem: I07115,
          },

          {
            code: "07-116",
            description: `Crile Forcep, 6 1/4", Curved`,
            price: 22.5,
            imageItem: I07116,
          },

          {
            code: "20-145",
            description: `Desmarres Chalazion Forcep, 16mm, 3 1/2"`,
            price: 59.5,
            imageItem: I20145,
          },

          {
            code: "20-147",
            description: `Desmarres Chalazion Forcep, 20mm, 3 1/2"`,
            price: 59.5,
            imageItem: I20147,
          },

          {
            code: "20-149",
            description: `Desmarres Chalazion Forcep, 26mm, 3 1/2"`,
            price: 59.5,
            imageItem: I20149,
          },

          {
            code: "17-130",
            description: `Doyen Intestinal Forcep, 9", Straight`,
            price: 31.5,
            imageItem: I17130,
          },

          {
            code: "17-132",
            description: `Doyen Intestinal Forcep, 9", Curved`,
            price: 31.5,
            imageItem: I17132,
          },

          {
            code: "07-156",
            description: `Ferguson Angiotribe Forcep, 6 1/4", or Straight`,
            price: 31.5,
            imageItem: I07156,
          },

          {
            code: "07-157",
            description: `Ferguson Angiotribe Forcep, 6 1/4", or Curved`,
            price: 31.5,
            imageItem: I07157,
          },

          {
            code: "07-158",
            description: `Ferguson Angiotribe Forcep, 7 1/2", or Straight`,
            price: 36.5,
            imageItem: I07158,
          },

          {
            code: "07-159",
            description: `Ferguson Angiotribe Forcep, 7 1/2", or Curved`,
            price: 36.5,
            imageItem: I07159,
          },

          {
            code: "09-106",
            description: `Foerster Sponge Forcep, 9 1/2", Serrated, Straight`,
            price: 24.9,
            imageItem: I09106,
          },

          {
            code: "21-147",
            description: `Hartman Alligator Serrated Forcep, 5 1/2"`,
            price: 78.0,
            imageItem: I21147,
          },

          {
            code: "07-109",
            description: `Kelly Forcep, 5 1/2", Straight`,
            price: 22.5,
            imageItem: I07109,
          },

          {
            code: "07-110",
            description: `Kelly Forcep, 5 1/2", Curved`,
            price: 22.5,
            imageItem: I07110,
          },

          {
            code: "07-111",
            description: `Kelly Forcep, 6 1/4", Straight`,
            price: 22.5,
            imageItem: I07111,
          },

          {
            code: "07-112",
            description: `Kelly Forcep, 6 1/4", Curved`,
            price: 22.5,
            imageItem: I07112,
          },

          {
            code: "07-100",
            description: `Mosquito Forcep, 3 1/2", Straight`,
            price: 22.5,
            imageItem: I07100,
          },

          {
            code: "07-101",
            description: `Mosquito Forcep, 3 1/2", Curved`,
            price: 22.5,
            imageItem: I07101,
          },

          {
            code: "07-102",
            description: `Mosquito Forcep, 5", Straight`,
            price: 22.5,
            imageItem: I07102,
          },

          {
            code: "07-104",
            description: `Mosquito Forcep, 5", Curved`,
            price: 22.5,
            imageItem: I07104,
          },

          {
            code: "07-137",
            description: `Rochester-Carmalt Forcep, 6 1/4", Straight`,
            price: 22.5,
            imageItem: I07137,
          },

          {
            code: "07-138",
            description: `Rochester-Carmalt Forcep, 6 1/4", Curved`,
            price: 22.5,
            imageItem: I07138,
          },

          {
            code: "07-139",
            description: `Rochester-Carmalt Forcep, 8", Straight`,
            price: 27.8,
            imageItem: I07139,
          },

          {
            code: "07-140",
            description: `Rochester-Carmalt Forcep, 8", Curved`,
            price: 27.8,
            imageItem: I07140,
          },

          {
            code: "07-119",
            description: `Rochester-Pean Forcep, 6 1/4", Straight`,
            price: 22.5,
            imageItem: I07119,
          },

          {
            code: "07-120",
            description: `Rochester-Pean Forcep, 6 1/4", Curved`,
            price: 22.5,
            imageItem: I07120,
          },

          {
            code: "07-123",
            description: `Rochester-Pean Forcep, 8", Straight `,
            price: 25.8,
            imageItem: I07123,
          },

          {
            code: "07-124",
            description: `Rochester-Pean Forcep, 8", Curved`,
            price: 25.8,
            imageItem: I07124,
          },

          {
            code: "V-375B",
            description: `Ruskin-Liston Bone Cutting Forceps, Double Action, 7 1/2", Curved`,
            price: 98.0,
            imageItem: V375B,
          },

          {
            code: "V-375",
            description: `Ruskin-Liston Bone Cutting Forceps, Double Action, 7 1/2", Straight`,
            price: 98.0,
            imageItem: V375,
          },

          {
            code: "10-104",
            description: `Sterilizer Forceps, three prong"`,
            price: 25.8,
            imageItem: I10104,
          },

          {
            code: "V-307A",
            description: `Universal Extracting Forceps, 7"`,
            price: 78.5,
            imageItem: V307A,
          },

          {
            code: "V-307B",
            description: `Splitter/Separator Extracting Forceps, 7"`,
            price: 78.5,
            imageItem: V307B,
          },

          {
            code: "V-307C",
            description: `Incisor/Bicuspid Extracting Forceps, 7"`,
            price: 68.5,
            imageItem: V307C,
          },

          {
            code: "V-307D",
            description: `Molar Extracting Forceps, 7"`,
            price: 68.5,
            imageItem: V307D,
          },

          {
            code: "7334",
            description: `Magill Forceps Infant (Small)`,
            price: 22.5,
            imageItem: I7334,
          },

          {
            code: "7337",
            description: `Magill Forceps Child (Medium)`,
            price: 22.5,
            imageItem: I7337,
          },

          {
            code: "7338",
            description: `Magill Forceps Adult (Large)`,
            price: 25.8,
            imageItem: I7338,
          },
        ],
      },
    ],
  },
  {
    type: "instruments",
    title: "Surgical Blades",
    subtype: "instrumentsblades",
    items: [
      {
        id: "51",
        title: `Stainless Steel Surgical Blades`,
        subHeader: "",
        imageSection: BladesSm,
        list: [
          {
            subtitle: `The stainless steel technology of our blades provide excellent cutting control, sharpness, and strength. Packaged in a foil pouch with an inner liner for maximum protection of both blade and user`,
          },
        ],
        codes: [
          {
            code: "SS10",
            descrption: "Size 10 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },
          {
            code: "SS11",
            description: "Size 11 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS12",
            description: "Size 12 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS15",
            description: "Size 15 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS20",
            description: "Size 20 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS21",
            description: "Size 21 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS22",
            description: "Size 22 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "SS23",
            description: "Size 23 Stainless Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },
        ],
      },
      {
        id: "52",
        title: `Carbon Steel Surgical Blades`,
        subHeader: {
          subHeaders: [
            { name: "FDA Certified" },
            { name: "ISO Certified" },
            { name: "CE Certified" },
          ],
          imageSubHeader: BladesSm,
        },
        imageSection: BladesSm,
        list: [
          {
            subtitle: `The carbon steel technology of our blade provides excellent cutting control, sharpness, and strength. Packaged in a foil pouch with an inner liner for maximum protection of both blade and user`,
          },
        ],
        codes: [
          {
            code: "CS10",
            description: "Size 10 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS11",
            description: "Size 11 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS12",
            description: "Size 12 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS15",
            description: "Size 15 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS20",
            description: "Size 20 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },
          {
            code: "CS21",
            description: "Size 21 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS22",
            description: "Size 22 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },

          {
            code: "CS23",
            description: "Size 23 Carbon Steel Surgical Blade - 100/box",
            price: 18.9,
            imageItem: BladesSm,
          },
        ],
      },
      {
        id: "53",
        title: `Scalpel (Surgical Blade) Handles
        Available in size #3, #4, or #7`,
        subHeader: "",
        imageSection: BladeHandle,
        list: [
          { subtitle: `These Handles are German Made, Stainless Steel:` },
          { subtitle: `Size #3 for Blades #10 thru #15` },
          { subtitle: `Size #4 for Blades #20 thru #25` },
          { subtitle: `Size #7 for Blades #10 thru #15` },
        ],
        codes: [
          {
            code: "SBH-06-100",

            description:
              "SIZE #3 Scalpel Handle, Stainless Steel For use with blades #10-#15 - Unit",
            price: 9.95,
            imageItem: BladeHandle,
          },

          {
            code: "SBH-06-102",

            description:
              "SIZE #4 Scalpel Handle, Stainless Steel For use with blades #20-#25 - Unit",
            price: 9.95,
            imageItem: BladeHandle,
          },

          {
            code: "SBH-06-104",

            description:
              "SIZE #7 Scalpel Handle, Stainless Steel For use with blades #10-#15 - Unit",
            price: 18.95,
            imageItem: BladeHandle,
          },
        ],
      },
    ],
  },
];

const NO_RUTE = [
  "gscissors",
  "gtowelclamps",
  "gneedleholders",
  "gretractors",
  "gnailnippers",
  "gforceps",
  "blades",
];

class ProductsPage extends Component {
  render() {
    let paramType = "";
    const paramSubtype = this.props.match.params.subtype;
    if (NO_RUTE.indexOf(paramSubtype) in NO_RUTE) {
      paramType = "";
    } else {
      paramType = this.props.match.params.type;
    }
    if (paramType === "instruments") {
      paramType = "surgical";
    }
    const medicalPage = medicalItems.filter((mi) =>
      mi.subtype
        .toLowerCase()
        .includes(`${paramSubtype.toLowerCase()}${paramType.toLowerCase()}`)
    );

    return (
      <React.Fragment>
        <div className="hero">
          <div className="navbar">
            <div className="navbar-container">
              <img src={logo} alt="logo" />
              <div>
                {/* <h4>
                  {this.props.storeReducers.storeItems.length
                    ? this.props.storeReducers.storeItems.reduce(
                        (count, item) => count + item.cant,
                        0
                      )
                    : 0}
                </h4> */}
              </div>
            </div>
          </div>
          <div className="menu menu-section">
            <SideMenu />
            <SideMenuProducts />
          </div>
          <div className="main">
            {this.props.match.params.type !== "instruments" ? (
              <StoreMenuTitle title={medicalPage[0].title} />
            ) : (
              <StoreMenuTitleInstruments title={medicalPage[0].title} />
            )}

            <div className="product-container">
              <ProductTable type={paramType} items={medicalPage[0].items} />
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

export default connect(mapStateToProps, storeActions)(ProductsPage);
