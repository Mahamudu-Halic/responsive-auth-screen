"use client";

import AuthSliderComponent from "@/components/auth/auth-slider";
import { Button } from "@/components/styled components/button";
import {
  AuthContainer,
  AuthDescriptionContainer,
  AuthFormContainer,
  ImageContainer,
  AuthPageContainer,
  AuthSliderContainer,
  OptionContainer,
} from "@/components/styled components/containers";
import {
  Divider,
  Span,
  Text,
  UrlLink,
} from "@/components/styled components/content";
import {
  AuthForm,
  FormGroup,
  Input,
  Label,
} from "@/components/styled components/form";
import { H1, H2 } from "@/components/styled components/headings";
import { ImageComponent } from "@/components/styled components/image";
import Image from "next/image";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <AuthPageContainer className="auth-page-container">
      <AuthContainer className="auth-container">
        {/* auth slider */}
        <AuthSliderComponent />

        {/* auth form */}
        <AuthFormContainer>
          <AuthForm width="" border="none">
            <H1 color="#000" align="center" transform="uppercase">
              Mastery
              <Span size={3} color="#69A47A">
                Hub
              </Span>
            </H1>
            <FormGroup>
              <Label color="#898989">Username</Label>
              <Input
                width="100%"
                type="text"
                name="name"
                required
                placeholder="halic"
              />
            </FormGroup>
            <FormGroup>
              <Label color="#898989">Email</Label>
              <Input
                width="100%"
                type="email"
                name="email"
                required
                placeholder="mahamuduhalic@gmail.com"
              />
            </FormGroup>
            <FormGroup>
              <Label color="#898989">Password</Label>
              <Input
                width="100%"
                type="password"
                name="name"
                required
                placeholder="password"
              />
            </FormGroup>

            <Button variant="disabled" color="#fff" type="submit">
              Register
            </Button>

            <OptionContainer>
              <Divider />
              <Text color="#898989">or</Text>
              <Divider />
            </OptionContainer>

            <Button color="#898989" variant="outlined" type="button">
              <ImageContainer width="30px" height="30px">
                <ImageComponent src="/assets/google.svg" alt="social girl" />
              </ImageContainer>
              Continue with Google
            </Button>

            <Text align="center" color="#898989">
              Already have an Account?{" "}
              <UrlLink
                color="#69A47A"
                decoration="underline"
                href={"/auth/sign-in"}
              >
                Sign in
              </UrlLink>
            </Text>
          </AuthForm>
        </AuthFormContainer>
      </AuthContainer>
    </AuthPageContainer>
  );
};

export default RegisterPage;
