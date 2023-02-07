import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
