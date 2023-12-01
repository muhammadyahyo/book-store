import styled from "styled-components";
import { ReactComponent as google } from "../../assets/icons/google.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
`;

const Box = styled.div`
  margin: 20px auto;
  width: 430px;
  /* height: 305px; */
  padding: 20px 28px;
  /* border: 2px red solid; */

  border-radius: 12px;
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;
const Text = styled.h1`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: Mulish;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-bottom: 36px;
`;
const Icons = styled.div``;
Icons.Google = styled(google)``;
Icons.Facebook = styled(facebook)``;

const Social = styled.div`
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
`;
export { Container, Box, Text, Icons, Social };
