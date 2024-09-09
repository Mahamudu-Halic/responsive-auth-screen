"use client";

import {
  AuthContainer,
  AuthDescriptionContainer,
  AuthFormContainer,
  AuthImageContainer,
  AuthPageContainer,
  AuthSliderContainer,
} from "@/components/styled components/containers";
import { Text } from "@/components/styled components/content";
import { H2 } from "@/components/styled components/headings";
import { ImageComponent } from "@/components/styled components/image";
import Image from "next/image";
import React from "react";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <AuthPageContainer>
      <AuthContainer>
        {/* auth slider */}
        <AuthSliderContainer>
          <AuthImageContainer>
            <ImageComponent src="/assets/social-girl.png" alt="social girl" />
          </AuthImageContainer>

          <AuthDescriptionContainer>
            <H2 color="#263238">Exam Mastery Hub</H2>
            <Text align="center" color="#181c19">
              Unleash Your Accademic Success with Exam Mastery Hub’s Exam
              Excellence Platform
            </Text>
          </AuthDescriptionContainer>
        </AuthSliderContainer>

        {/* auth form */}
        <AuthFormContainer>
          <h1>form here</h1>
        </AuthFormContainer>
      </AuthContainer>
    </AuthPageContainer>
  );
};

export default SignInPage;
