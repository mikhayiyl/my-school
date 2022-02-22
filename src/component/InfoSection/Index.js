import React from "react";
import { Button, ButtonR } from "./../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  id,
  to,
  topline,
  headline,
  lightText,
  darkText,
  description,
  alt,
  primary,
  img,
  dir,
  dark,
  dark2,
  buttonLabel,
  seconds,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {dir ? (
                    <ButtonR
                      dark={dark ? 1 : 0}
                      to={seconds > 0 ? to : "/deadline"}
                      smooth="true"
                      duration={500}
                      spy="true"
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </ButtonR>
                  ) : (
                    <Button
                      dark={dark ? 1 : 0}
                      to={to}
                      smooth="true"
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  )}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
