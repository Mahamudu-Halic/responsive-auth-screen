import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #c1e0ca;
  justify-content: center;
  align-items: center;
  padding: 50px;

  @media (max-width: 820px) {
    padding: 30px;
  }
  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: green;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ImageContainer = styled.div<{ height: string; width: string }>`
  position: relative;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export const AuthFormContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #fff;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const AuthSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  flex: 1;
  background: #e6feed;
  gap: 20px;

  @media (max-width: 720px) {
    display: none;
  }
`;
export const AuthDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 319px;
  gap: 15px;
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const SlideNavigatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
