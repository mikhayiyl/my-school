import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  height: 100%;
  background: #000;
  background-image: repeating-conic-gradient(
    from 45deg,
    #e70fb873 0deg 90deg,
    #2bece2a2 90deg 180deg
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoWrapper = styled.table`
  background: #222;
  width: auto;
  color: #fff;
  opacity: 0.9;
  border-radius: 10px;
  box-shadow: 0 0 30px orangered;
`;
