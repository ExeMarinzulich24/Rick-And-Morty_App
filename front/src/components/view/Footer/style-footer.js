import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #455A64;
  font-size: 1.2rem;
  width: 100%;
  height: auto;
  color: white;
  padding: 12px;

  p {
    margin: 6px 0;
    text-align: center;
    line-height: 1.5;
  }
`;

export const LinkedIn = styled(LinkedInIcon)`
  width: 50px !important;
  height: 50px !important;
  transition: all 1.35s ease-in-out;

  &:hover {
    color: #1976D2;
  }
`;

export const GitHub = styled(GitHubIcon)`
width: 50px !important;
height: 50px !important;
transition: all 1.35s ease-in-out;

&:hover {
  color: #212121;
}
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0 16px;

  transition: all 2.0s ease-in-out;

&:hover {
  color: white;
}
`;
