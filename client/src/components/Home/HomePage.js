import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Styled from "../Global/GlobalStyles";
import { MdOutlineAutoStories } from "react-icons/md";
import {
  Banner,
  BannerHeaderText,
  BannerSubHeaderText,
  BannerSubHeaderText2,
  HowItWorksContainer,
  HowItWorksHeaderText,
  HowItWorksCardHeaderText,
  BannerBtn,
  BannerAnchor,
  BannerBtnRow,
  AboutBetterBudget,
  AboutBetterBudgetHeader,
  AboutBetterBudgetText,
  HowItWorksCardEnd,
  HowItWorksCard1,
  HowItWorksCard2,
  FooterContainer,
  ForgotPasswordAnchor,
  ContactAnchor,
  CardRow,
  Thanks,
} from "./Styles";

function HomePage() {
  const cardRef = useRef();
  const [cardVisible, setCardVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCardVisible(entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.75,
      }
    );
    observer.observe(cardRef.current);
  }, []);

  return (
    <Styled.MainContent>
      <Banner className="shadow">
        <BannerHeaderText className="mb-5 display-2">
          Getting Started With Better Budget!
        </BannerHeaderText>
        <BannerSubHeaderText className="mb-5 display-5">
          Try BetterBudget for a brighter financial future.
        </BannerSubHeaderText>
        <BannerSubHeaderText2 className="mb-5">
          Simple.Easy.Done.
        </BannerSubHeaderText2>

        <BannerBtnRow>
          <BannerAnchor href="#hiw">How It Works</BannerAnchor>
          <BannerBtn to="/register">Create Account</BannerBtn>
        </BannerBtnRow>
      </Banner>

      <AboutBetterBudget className="mt-5 mb-5">
        <AboutBetterBudgetHeader className="">
          About BetterBudget
        </AboutBetterBudgetHeader>
        <AboutBetterBudgetText className="mt-3">
          We have all been there, you've been planning a trip or maybe just
          wanted to get something for your self to enjoy, but you are unsure if
          your monthly budget will allow it. If this statement sounds like
          something that you or a friend has experienced, then BetterBudget
          might just be for you. BetterBudget is a fullstack application that
          was made with the intent of helping people understand their current
          months expenses. With BetterBudget, you dont have to worry about
          exceeding your monthly budget: in real time you can store your monthly
          income and expenses for easy access at any moment, visualize your
          monthly expenses, compare your monthly expenses, and ultimately walk
          away with a greater understanding of your finances.
        </AboutBetterBudgetText>
      </AboutBetterBudget>

      <HowItWorksContainer className="" id="hiw">
        <HowItWorksHeaderText className="">
          How It All Works <MdOutlineAutoStories className="" />
        </HowItWorksHeaderText>

        <CardRow className="">
          <HowItWorksCard1
            className="shadow"
            status={cardVisible}
            ref={cardRef}
          >
            <HowItWorksCardHeaderText className="mb-5">
              <strong>Create</strong>
            </HowItWorksCardHeaderText>
            Use the navigation tool located at the top of the page and click
            register to create an account.
          </HowItWorksCard1>
          <HowItWorksCard2 className="shadow" status={cardVisible}>
            <HowItWorksCardHeaderText className="mb-5">
              <strong>Confirm</strong>
            </HowItWorksCardHeaderText>
            Once your account has been registered, click the link in your email
            to confirm your account and log in.
          </HowItWorksCard2>
          <HowItWorksCardEnd className="shadow" status={cardVisible}>
            <HowItWorksCardHeaderText className="mb-5">
              <strong>Budget</strong>
            </HowItWorksCardHeaderText>
            Once your logged in, simply click the budgets button located on the
            nav bar to begin budgeting.
          </HowItWorksCardEnd>
        </CardRow>
      </HowItWorksContainer>
      <FooterContainer className="">
        <Thanks className="">
          Thanks for visiting <strong className="ms-2">Better</strong>Budget!
        </Thanks>
        <ForgotPasswordAnchor to="/password-recovery" className="">
          Forgot your password?
        </ForgotPasswordAnchor>
      </FooterContainer>
    </Styled.MainContent>
  );
}

export default HomePage;
