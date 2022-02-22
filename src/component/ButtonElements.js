import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ff22bb" : "yellow")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px ${({ primary }) => (primary ? "#ff22bb" : "#00ccff")},
      0 0 30px ${({ primary }) => (primary ? "#fff" : "#111")},
      0 0 60px ${({ primary }) => (primary ? "#fff" : "#111")},
      0 0 100px ${({ primary }) => (primary ? "#fff" : "#111")};
    outline: 4px solid ${({ primary }) => (primary ? "#00ccff" : "#fff")};
  }
`;
export const ButtonR = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease-in-out;
  color: #fff;
  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    text-decoration: none;
    box-shadow: 0 0 20px #fff;
    outline: 4px solid purple;
    color: ${({ primary }) => (primary ? "#010606" : "#fff")};
  }
`;
