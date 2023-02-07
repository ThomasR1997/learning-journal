import { NavLink } from "react-router-dom";
import styled from "styled-components";
import hero from "../images/blog-image-hero.png";

////////////////////////////////////// Navbar //////////////////////////////////////
// Styling for nav div
export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5em 3em;

  @media only screen and (max-width: 600px) {
    padding: 1.5em 2em;
  }

  @media only screen and (max-width: 420px) {
    padding: 1em;
  }
`;

// Styling for NavLink
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  margin: ${(props) => (props.alt ? "0.2em" : "1em")};
  font-weight: ${(props) => (props.alt ? "700" : "600")};
  font-size: ${(props) => (props.alt ? "20px" : "16px")};

  @media only screen and (max-width: 600px) {
    font-size: ${(props) => (props.alt ? "14px" : "12px")};
  }

  @media only screen and (max-width: 367px) {
    font-size: ${(props) => (props.alt ? "12px" : "11px")};
  }
`;

// Utility div for placement
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

////////////////////////////////////// LandingPage //////////////////////////////////////

export const HeroDiv = styled.div`
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  min-height: 25em;
  padding: 3em;

  @media only screen and (max-width: 850px) {
    padding: 1em;
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 850px) {
    font-size: 32px;
  }
`;

export const HeroPDiv = styled.div`
  width: 46%;
  text-align: start;
  flex-wrap: wrap;

  @media only screen and (max-width: 1300px) {
    width: 60%;
  }

  @media only screen and (max-width: 1000px) {
    width: 70%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
  }
`;

export const HeroP = styled.p`
  color: white;
  font-size: 16px;

  @media only screen and (max-width: 850px) {
    font-size: 12px;
  }
`;

////////////////////////////////////// HomePage //////////////////////////////////////

////////////////////////////////////// AboutPage //////////////////////////////////////
