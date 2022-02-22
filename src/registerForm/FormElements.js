import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #55346878;
  background-image: repeating-conic-gradient(
    from 45deg,
    #e70fb873 0deg 90deg,
    #2bece2a2 90deg 180deg
  );
`;
export const FormWrapper = styled.form`
  width: 350px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  list-style: none;

  border-radius: 20px;
  padding: 0.7rem;
  background-color: #ff440057;
  background-image: repeating-conic-gradient(
    from 45deg,
    #333 0deg 90deg,
    #444 90deg 180deg
  );
  background-size: 2em 2em;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;
