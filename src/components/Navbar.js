import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { HomePage } from "../pages/homePage/HomePage";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { FlexBox, StyledLink, StyledNav } from "./StyledComponents";

import logo from "../images/image 17.png";
export const Navbar = () => {
  return (
    <>
      <StyledNav>
        <FlexBox>
          <img src={logo} alt="logo" />
          <StyledLink alt="true" to="/landing-page">
            My learning journal
          </StyledLink>
        </FlexBox>

        <div>
          <StyledLink to="/home-page">HOME</StyledLink>
          <StyledLink to="/about-page">ABOUT ME</StyledLink>
        </div>
      </StyledNav>

      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>
    </>
  );
};
