import React from "react";
import {
  AuthDescriptionContainer,
  AuthSliderContainer,
  ImageContainer,
} from "../styled components/containers";
import { ImageComponent } from "../styled components/image";
import { H2 } from "../styled components/headings";
import { Text } from "../styled components/content";
import Navigators from "./navigators";

type Props = {};

const AuthSliderComponent = (props: Props) => {
  return (
    <AuthSliderContainer>
      <ImageContainer width="300px" height="230px">
        <ImageComponent src="/assets/social-girl.png" alt="social girl" />
      </ImageContainer>

      <AuthDescriptionContainer>
        <H2 color="#263238">Exam Mastery Hub</H2>
        <Text align="center" color="#181c19" size={0.9}>
          Unleash Your Accademic Success with Exam Mastery Hub’s Exam Excellence
          Platform
        </Text>
      </AuthDescriptionContainer>

      <Navigators />
    </AuthSliderContainer>
  );
};

export default AuthSliderComponent;
