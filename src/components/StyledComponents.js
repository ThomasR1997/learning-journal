import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styling for nav div
export const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.5em 3em;
`;

// Styling for NavLink
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: ${(props) => (props.alt ? "0.2em" : "1em")};
  font-weight: ${(props) => (props.alt ? "700" : "600")};
`;

// Utility div for placement
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
