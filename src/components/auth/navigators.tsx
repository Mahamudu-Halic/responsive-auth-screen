import React from "react";
import { SlideNavigator } from "../styled components/slide-navigators";
import { SlideNavigatorContainer } from "../styled components/containers";

type Props = {};

const Navigators = (props: Props) => {
  return (
    <SlideNavigatorContainer>
      <SlideNavigator />
      <SlideNavigator width={45} />
      <SlideNavigator />
      <SlideNavigator />
    </SlideNavigatorContainer>
  );
};

export default Navigators;
