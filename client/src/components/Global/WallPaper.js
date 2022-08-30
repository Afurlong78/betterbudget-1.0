import React from "react";
import { WallPaperContainer } from "./WallPaperStyles";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import {
  FaMoneyBillAlt,
  FaSearchDollar,
  FaCommentsDollar,
} from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { BsCurrencyDollar, BsPiggyBank } from "react-icons/bs";

function WallPaper() {
  return (
    <WallPaperContainer>
      {/* <FilledGreenTriangle />
      <FilledBlueCircle />
      <BlueRectangle />
      <RedRectangle />
      <OrangeCircle />
      <YellowRectangle />
      <PurpleRectangle />
      <FilledBlueTriangle />
      <YellowCircle />
      <LargeRedRectangle />
      <LargeOrangeCircle />
      <FilledLightGreenTriangle />
      <PinkSquare />
      <BlueSquare />
      <FilledPurpleTriangle />
      <RedCircle /> */}

      <BsPiggyBank
        style={{
          height: "300px",
          width: "300px",
          color: "",
          position: "fixed",
          top: "170px",
          left: "0px",
        }}
      />

      <GiMoneyStack
        style={{
          position: "fixed",
          width: "200px",
          height: "200px",
          top: "600px",
          left: "100px",
        }}
      />

      <FaMoneyBillAlt
        style={{
          position: "fixed",
          top: "650px",
          left: "1350px",

          width: "300px",
          height: "300px",
        }}
      />

      <BiDollarCircle
        style={{
          position: "fixed",
          top: "150px",
          left: "1550px",

          width: "150px",
          height: "150px",
        }}
      />

      <BsCurrencyDollar
        style={{
          position: "fixed",
          top: "750px",
          left: "550px",

          width: "150px",
          height: "150px",
        }}
      />

      <AiFillDollarCircle
        style={{
          position: "fixed",
          top: "500px",
          left: "700px",

          width: "150px",
          height: "150px",
        }}
      />

      <FaSearchDollar
        style={{
          position: "fixed",
          top: "500px",
          left: "1650px",

          width: "200px",
          height: "200px",
        }}
      />

      <FaCommentsDollar
        style={{
          position: "fixed",
          top: "300px",
          left: "1100px",

          width: "200px",
          height: "200px",
        }}
      />

      <GiReceiveMoney
        style={{
          position: "fixed",
          top: "100px",
          left: "600px",

          width: "200px",
          height: "200px",
        }}
      />
    </WallPaperContainer>
  );
}

export default WallPaper;
