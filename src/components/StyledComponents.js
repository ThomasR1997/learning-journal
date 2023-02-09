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
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};

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

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// LandingPage //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// Hero section ////////////////////////////////////

// Background image div
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

// Title for hero section
export const HeroTitle = styled.h1`
  color: white;
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 0;

  @media only screen and (max-width: 850px) {
    font-size: 32px;
  }
`;

// Paragraph div
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

// Hero paragraph styling
export const HeroP = styled.p`
  color: white;
  font-size: 16px;

  @media only screen and (max-width: 850px) {
    font-size: 12px;
  }
`;

//////////////////////////////////// Blog section ////////////////////////////////////

// Styling for blog section
export const BlogSection = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2em;

  width: fit-content;
  margin: 3em auto;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 680px) {
    grid-template-columns: auto;
  }
`;

// Styling for individual blog
export const BlogPost = styled.div`
  width: 19.3em;
  text-align: start;
`;

export const BlogDate = styled.p`
  font-size: 14px;
`;

export const BlogTitle = styled.h1`
  font-size: 24px;
`;

export const BlogText = styled.p`
  font-size: 16px;
  color: #505050;
`;

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// HomePage //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Top margin for home page
export const MarginDiv = styled.div`
  margin-top: 4em;
`;

// Styling for home page content
export const HomeSection = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: start;
`;

export const HomeText = styled.p`
  color: #151515;
  font-size: 16px;
`;

export const StyledImage = styled.img`
  width: 90%;
  height: auto;
  margin: 1em 0;
`;

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// AboutPage //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////// RecentPosts //////////////////////////////////////
export const PostHeader = styled.h2`
  margin-top: 3em;
`;

////////////////////////////////////// Footer //////////////////////////////////////

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #202020;
  padding: 3em;
  margin-top: 3em;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 12px;
  margin: 0.2em;

  font-weight: ${(props) => (props.alt ? "bold" : "normal")};
`;
