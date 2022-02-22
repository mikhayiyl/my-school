import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: repeating-conic-gradient(
    from 45deg,
    #555 0deg 90deg,
    #333 90deg 180deg
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileBody = styled.div`
  width: 400px;
  height: auto;
  padding: 1rem;
  border-radius: 20px;
  background: pink;
  box-shadow: 2px 3px 50px #fff;

  @media screen and (max-width: 760px) {
    width: 270px;
    height: auto;
  }
`;
