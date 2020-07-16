import React, { Component } from "react";
import SideMenu from "../components/menu/SideMenu";
import ProductTable from "../components/CardiacTable";
import SideMenuProducts from "../components/menu/SideMenuProducts";
import StoreMenuTitle from "../components/menu/StoreMenuTitle";

import "./styles/ProductsPage.css";
import logo from "../images/logo2.jpg";

// images
import LeftSilkBlack from "../images/store/cardiac/leftsilkblack.gif";
import LeftBluePoly from "../images/store/cardiac/leftbluepoly.gif";
import PolyBond from "../images/store/cardiac/polybond.gif";
import LeftVisorb from "../images/store/cardiac/leftvisorb.gif";
import SteelSut from "../images/store/cardiac/steelsut.gif";

const medicalItems = [
  {
    type: "cardiac",
    title: "Cardiac Sutures",
    subtype: "suturescardiac",
    items: [
      {
        id: "1",
        title: `Silk Suture is a Braided Non-absorbable, sterile surgical suture composed of an organic protein called Fibroin. This protein is derived from the domesticated species Bombyx mori (B mori) of the family Bombycidae.`,
        imageSection: LeftSilkBlack,
        list: [
          {
            subtitle: `Smooth flow through tissue while maintaining optimal knot security`,
          },
        ],
        codes: [
          {
            code: "63S",
            ethicon_code: "SA63H",
            description: "Silk Black Braided",
            size: "4/0",
            needle: "NONE",
            length: "17-18 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "65S",
            ethicon_code: "",
            description: "Silk Black Braided",
            size: "2/0",
            needle: "NONE",
            length: "17-18 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "66S",
            ethicon_code: "SA66G",
            description: "Silk Black Braided",
            size: "0",
            needle: "NONE",
            length: "17-18 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "85S",
            ethicon_code: "",
            description: "Silk Black Braided",
            size: "2/0",
            needle: "NONE",
            length: "10-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "303S",
            ethicon_code: "A303H",
            description: "Silk Black Braided",
            size: "4/0",
            needle: "NONE",
            length: "12-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "304S",
            ethicon_code: "A304H",
            description: "Silk Black Braided",
            size: "3/0",
            needle: "NONE",
            length: "12-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "305S",
            ethicon_code: "A305H",
            description: "Silk Black Braided",
            size: "2/0",
            needle: "NONE",
            length: "12-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "306S",
            ethicon_code: "A306H",
            description: "Silk Black Braided",
            size: "0",
            needle: "NONE",
            length: "6-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },

          {
            code: "307S",
            ethicon_code: "A307H",
            description: "Silk Black Braided",
            size: "1",
            needle: "NONE",
            length: "6-30 inch",
            price: 84.8,
            imageItem: LeftSilkBlack,
          },
        ],
      },
      {
        id: "2",
        title: `"Polypro" Polypropylene is a Monofilament Non-absorbable, sterile surgical suture composed of a strand of polypropylene, a synthetic linear Polyolefin.`,
        imageSection: LeftBluePoly,
        list: [
          { subtitle: `Uniform diameter of the suture` },
          { subtitle: `Maximum flexibility of the strand` },
          { subtitle: `Excellent security with snug and flattened knots` },
          { subtitle: `Minimal memory and reduced fraying` },
          { subtitle: `Consistent knot strength` },
        ],
        codes: [
          {
            code: "8521P",

            ethicon_code: "8521H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NSH, NSH",

            length: "36 inch",

            price: 103.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8522P",

            ethicon_code: "8522H",

            description: "Polypro Blue Monofilament",

            size: "3/0",

            needle: "NSH, NSH",

            length: "36 inch",

            price: 103.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8523P",

            ethicon_code: "8523H",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "NSH, NSH",

            length: "36 inch",

            price: 103.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8524P",

            ethicon_code: "N/A",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NSH-1",

            length: "36 inch",

            price: 103.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8525P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "SH-1, SH-1",

            length: "36 inch",

            price: 99.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8526P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "SH-1, SH-1",

            length: "30 inch",

            price: 148.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8533P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "SH, SH",

            length: "48 inch",

            price: 148.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8534P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "3/0",

            needle: "SH, SH",

            length: "48 inch",

            price: 103.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8556P",

            ethicon_code: "8556H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NRB-1, NRB-1",

            length: "36 inch",

            price: 109.8,
            imageItem: LeftBluePoly,
          },

          {
            code: "8557P",

            ethicon_code: "8557H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NRB-1, NRB-1",

            length: "36 inch",

            price: 113.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8558P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "3/0",

            needle: "NSH, NSH",

            length: "36 inch",

            price: 113.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "5692P",

            ethicon_code: "N/A",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NSH-1, NSH-1",

            length: "36 inch",

            price: 99.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8581P",

            ethicon_code: "8581H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NBB, NBB",

            length: "36 inch",

            price: 148.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8623P",

            ethicon_code: "8623H",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "NKS",

            length: "30 inch",

            price: 99.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8702P",

            ethicon_code: "8702H",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NBV-1, NBV-1",

            length: "24 inch",

            price: 218.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8703P",

            ethicon_code: "8703H",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NBV-1, NBV-1",

            length: "30 inch",

            price: 218.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8704P",

            ethicon_code: "8704H",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NCC, NCC",

            length: "24 inch",

            price: 244.6,
            imageItem: LeftBluePoly,
          },

          {
            code: "8706P",

            ethicon_code: "8706H",

            description: "Polypro Blue Monofilament",

            size: "6/0",

            needle: "NC-1, NC-1",

            length: "30 inch",

            price: 188.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8707P",

            ethicon_code: "8707H",

            description: "Polypro Blue Monofilament",

            size: "6/0",

            needle: "NCC-1, NCC-1",

            length: "30 inch",

            price: 288.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8709P",

            ethicon_code: "8709H",

            description: "Polypro Blue Monofilament",

            size: "6/0",

            needle: "NBV-1, NBV-1",

            length: "30 inch",

            price: 178.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8710P",

            ethicon_code: "8710H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NRB-2, NRB-2",

            length: "30 inch",

            price: 99.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8711P",

            ethicon_code: "8711H",

            description: "Polypro Blue Monofilament",

            size: "6/0",

            needle: "NRB-2, NRB-2",

            length: "30 inch",

            price: 99.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8720P",

            ethicon_code: "8720H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NC-1, NC-1",

            length: "36 inch",

            price: 129.5,
            imageItem: LeftBluePoly,
          },

          {
            code: "8721P",

            ethicon_code: "8721H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NCC-1, NCC-1",

            length: "36 inch",

            price: 163.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8727P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "C-1, C-1",

            length: "24 inch",

            price: 143.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8730P",

            ethicon_code: "8730H",

            description: "Polypro Blue Monofilament",

            size: "8/0",

            needle: "NBV130-5, NBV130-5",

            length: "18 inch",

            price: 394.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8731P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NBV130-5, NBV130-5",

            length: "18 inch",

            price: 615.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8732P",

            ethicon_code: "8732H",

            description: "Polypro Blue Monofilament",

            size: "8/0",

            needle: "NBV130-5, NBV130-5",

            length: "24 inch",

            price: 461.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8735P",

            ethicon_code: "8735H",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NBV175-6, NBV175-6",

            length: "24 inch",

            price: 461.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8807P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "6/0",

            needle: "NCC, NCC",

            length: "24 inch",

            price: 294.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8831P",

            ethicon_code: "8831H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NSH",

            length: "30 inch",

            price: 87.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8832P",

            ethicon_code: "8832H",

            description: "Polypro Blue Monofilament",

            size: "3/0",

            needle: "NSH",

            length: "30 inch",

            price: 69.7,
            imageItem: LeftBluePoly,
          },

          {
            code: "8833P",

            ethicon_code: "8833H",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "NSH",

            length: "30 inch",

            price: 69.7,
            imageItem: LeftBluePoly,
          },

          {
            code: "8840P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "SH",

            length: "60 inch",

            price: 138.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8843P",

            ethicon_code: "8843H",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "NMH, NMH",

            length: "36 inch",

            price: 87.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8870P",

            ethicon_code: "8870H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NRB-1",

            length: "30 inch",

            price: 69.9,
            imageItem: LeftBluePoly,
          },

          {
            code: "8871P",

            ethicon_code: "8871H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NRB-1",

            length: "30 inch",

            price: 57.7,
            imageItem: LeftBluePoly,
          },

          {
            code: "8880P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "7/0",

            needle: "NC-1, NC-1",

            length: "18 inch",

            price: 99.8,
            imageItem: LeftBluePoly,
          },

          {
            code: "8934P",

            ethicon_code: "8934H",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "NV-5, NV-5",

            length: "36 inch",

            price: 163.5,
            imageItem: LeftBluePoly,
          },

          {
            code: "8935P",

            ethicon_code: "8935H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NV-5, NV-5",

            length: "36 inch",

            price: 135.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8974P",

            ethicon_code: "",

            description: "Polypro Blue Monofilament",

            size: "5/0",

            needle: "V-5, V-5",

            length: "36 inch",

            price: 135.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8975P",

            ethicon_code: "8975H",

            description: "Polypro Blue Monofilament",

            size: "4/0",

            needle: "NV-7, NV-7",

            length: "36 inch",

            price: 135.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8976P",

            ethicon_code: "8976H",

            description: "Polypro Blue Monofilament",

            size: "3/0",

            needle: "NV-7, NV-7",

            length: "36 inch",

            price: 135.0,
            imageItem: LeftBluePoly,
          },

          {
            code: "8977P",

            ethicon_code: "8977H",

            description: "Polypro Blue Monofilament",

            size: "2/0",

            needle: "NV-7, NV-7",

            length: "36 inch",

            price: 135.0,
            imageItem: LeftBluePoly,
          },
        ],
      },
      {
        id: "3",
        title: `"Polybond" Suture is a Non-absorbable Braided Polyester sterile surgical suture, composed of Polyethylene Terepthalate.`,
        imageSection: PolyBond,
        list: [
          {
            subtitle: `High tensile strength, both linear and knotted, thus giving`,
          },
          { subtitle: `Maximum flexibility of the strand` },
          {
            subtitle: `Maximum security in approximation of tissues under stress conditions`,
          },
          {
            subtitle: `Permanent support (tensile strength is retained indefinitely)`,
          },
          { subtitle: `Maximum security with prosthetic implants` },
          {
            subtitle: `Smooth flow through tissue while maintaining optimal knot security.`,
          },
        ],
        codes: [
          {
            code: "CP43A",

            ethicon_code: "SXX43",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NRB-1, NRB-1",

            length: "5-30 inch",

            price: 750.0,
            imageItem: PolyBond,
          },

          {
            code: "CP54A",

            ethicon_code: "SXX54",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-5, NV-5",

            length: "5-30 inch",

            price: 1020.0,
            imageItem: PolyBond,
          },

          {
            code: "CP58SA",

            ethicon_code: "N/A",

            description: "Polybond Braided Polyester Coated",

            size: "3/0",

            needle: "NBB, NBB",

            length: "30 inch",

            price: 93.0,
            imageItem: PolyBond,
          },

          {
            code: "CP77A",

            ethicon_code: "PXX77",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-7, NV-7",

            length: "5-30 inch",

            price: 1020.0,
            imageItem: PolyBond,
          },

          {
            code: "CP523A",

            ethicon_code: "X523H",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH, NSH",

            length: "36 inch",

            price: 90.0,
            imageItem: PolyBond,
          },

          {
            code: "CP553A",
            ethicon_code: "",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NRB-1, NRB-1",

            length: "4-30 inch",

            price: 240.0,
            imageItem: PolyBond,
          },

          {
            code: "CP557A",

            ethicon_code: "X557H",

            description: "Polybond Braided Polyester Coated",

            size: "4/0",

            needle: "NRB-1, NRB-1",

            length: "36 inch",

            price: 115.0,
            imageItem: PolyBond,
          },

          {
            code: "CP558A",

            ethicon_code: "X558H",

            description: "Polybond Braided Polyester Coated",

            size: "3/0",

            needle: "NRB-1, NRB-1",

            length: "36 inch",

            price: 103.0,
            imageItem: PolyBond,
          },

          {
            code: "CP563A",

            ethicon_code: "X563H",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH, NSH",

            length: "30 inch",

            price: 99.9,
            imageItem: PolyBond,
          },

          {
            code: "CP588A",

            ethicon_code: "X588H",

            description: "Polybond Braided Polyester Coated",

            size: "3/0",

            needle: "NBB, NBB",

            length: "30 inch",

            price: 103.0,
            imageItem: PolyBond,
          },

          {
            code: "CP664A",

            ethicon_code: "",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH",

            length: "36 inch",

            price: 69.9,
            imageItem: PolyBond,
          },

          {
            code: "CP761A",

            ethicon_code: "X761H",

            description: "Polybond Braided Polyester Coated",

            size: "4/0",

            needle: "NSH-1, NSH-1",

            length: "36 inch",

            price: 103.0,
            imageItem: PolyBond,
          },

          {
            code: "CP762A",

            ethicon_code: "X762H",

            description: "Polybond Braided Polyester Coated",

            size: "3/0",

            needle: "NSH-1, NSH-1",

            length: "36 inch",

            price: 99.9,
            imageItem: PolyBond,
          },

          {
            code: "CP763A",

            ethicon_code: "X763H",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH-1, NSH-1",

            length: "36 inch",

            price: 99.9,
            imageItem: PolyBond,
          },

          {
            code: "CP683A",

            ethicon_code: "X683G",

            description: "Polybond Braided Polyester Coated",

            size: "4/0",

            needle: "NFS-2",

            length: "18 inch",

            price: 69.9,
            imageItem: PolyBond,
          },

          {
            code: "CP833A",

            ethicon_code: "X833H",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH",

            length: "30 inch",

            price: 69.9,
            imageItem: PolyBond,
          },

          {
            code: "CP976A",

            ethicon_code: "X976H",

            description: "Polybond Braided Polyester Coated",

            size: "3/0",

            needle: "NV-7, NV-7",

            length: "30 inch",

            price: 123.0,
            imageItem: PolyBond,
          },

          {
            code: "CP977A",

            ethicon_code: "X977H",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-7, NV-7",

            length: "30 inch",

            price: 113.0,
            imageItem: PolyBond,
          },

          {
            code: "CP10X42A",

            ethicon_code: "10X42",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NRB-1, NRB-1",

            length: "5-30 inch",

            price: 540.0,
            imageItem: PolyBond,
          },

          {
            code: "CP10X52A",

            ethicon_code: "10X42",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-5, NV-5",

            length: "5-30 inch",

            price: 684.0,
            imageItem: PolyBond,
          },

          {
            code: "CP10X66A",

            ethicon_code: "10X66",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-7, NV-7",

            length: "5-36 inch",

            price: 684.0,
            imageItem: PolyBond,
          },

          {
            code: "CP10X72A",

            ethicon_code: "10X72",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NV-7, NV-7",

            length: "10-30 inch",

            price: 684.0,
            imageItem: PolyBond,
          },

          {
            code: "CP10X80A",

            ethicon_code: "N/A",

            description: "Polybond Braided Polyester Coated",

            size: "2/0",

            needle: "NSH-1, NSH-1",

            length: "10-36 inch",

            price: 514.0,
            imageItem: PolyBond,
          },
        ],
      },
      {
        id: "4",
        title: `CP Medical "Visorb" Coated Absorbable Braided Suture (PGA) Polyglycolic Acid`,
        imageSection: LeftVisorb,
        list: [
          {
            subtitle: `Comparable to Vicryl®, a registered trademark of Ethicon¬®`,
          },
          {
            subtitle: `Excellent tensile strength throughout the critical wound healing period`,
          },
          { subtitle: `Excellent knot security & Handling Characteristics` },
        ],
        codes: [
          {
            code: "904A",

            ethicon_code: "J904T",

            description: "Visorb (PGA)",

            size: "3-0",

            needle: "None",

            length: "12-18 inch",

            price: 174.0,
            imageItem: LeftVisorb,
          },

          {
            code: "905A",

            ethicon_code: "J905T",

            description: "Visorb (PGA)",

            size: "2-0",

            needle: "None",

            length: "12-18 inch",

            price: 174.0,
            imageItem: LeftVisorb,
          },
        ],
      },
      {
        id: "5",
        title: `"Surgical Steel" is Stainless Steel Suture composed of 316L stainless steel conforming to ASTM Standard F138 Grade 2 stainless steel bar and wire for surgical implants.`,
        imageSection: SteelSut,
        list: [
          {
            subtitle: `"Surgical Steel" suture is indicated for use in abdominal wound closure, intestinal anastomosis, hernia repair, sternal closure, and certain orthopedic procedures (cerclage or tendon repair)`,
          },
          {
            subtitle: `"Surgical Steel" suture meets all requirements established by the United States Pharmacopeia (USP) and European Pharmacopeia (EP) for nonabsorbable surgical sutures`,
          },
        ],
        codes: [
          {
            code: "ST435",
            ethicon_code: "M435G",
            description: "STEEL 5",
            size: "5",
            needle: "NV-56",
            length: "4-30 inch",

            price: 368.0,
            imageItem: SteelSut,
          },

          {
            code: "ST649",
            ethicon_code: "M649G",
            description: "STEEL 6",
            size: "6",
            needle: "NV-40",
            length: "4-18 inch",

            price: 451.0,
            imageItem: SteelSut,
          },

          {
            code: "ST650",
            ethicon_code: "M650G",
            description: "STEEL 5",
            size: "5",
            needle: "NV-40",
            length: "4-18 inch",

            price: 420.0,
            imageItem: SteelSut,
          },

          {
            code: "ST653",
            ethicon_code: "M653G",
            description: "STEEL 5",
            size: "5",
            needle: "NCCS",
            length: "4-18 inch",
            price: 405.0,
            imageItem: SteelSut,
          },

          {
            code: "ST654",
            ethicon_code: "M654G",
            description: "STEEL 6",
            size: "6",
            needle: "NCCS",
            length: "4-18 inch",
            price: 405.0,
            imageItem: SteelSut,
          },

          {
            code: "ST655",
            ethicon_code: "M655G",
            description: "STEEL 7",
            size: "7",
            needle: "NCCS",
            length: "4-18 inch",
            price: 420.0,
            imageItem: SteelSut,
          },

          {
            code: "ST657",
            ethicon_code: "M657G",
            description: "STEEL 5",
            size: "5",
            needle: "NCCS",
            length: "2-18 inch",
            price: 211.0,
            imageItem: SteelSut,
          },
        ],
      },
    ],
  },
];

class CardiacPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hero">
          <div className="navbar">
            <div className="navbar-container">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="menu menu-section">
            <SideMenu />
            <SideMenuProducts />
          </div>
          <div className="main">
            <StoreMenuTitle title={medicalItems[0].title} />
            <div className="product-container">
              <ProductTable
                type={medicalItems[0].type}
                items={medicalItems[0].items}
              />
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

export default CardiacPage;
