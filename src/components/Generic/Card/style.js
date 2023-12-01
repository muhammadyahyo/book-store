import styled from "styled-components";
import { ReactComponent as edit } from "../../../assets/icons/edit.svg";
import { ReactComponent as delet } from "../../../assets/icons/delete.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 300px;
  min-width: 300px;
  min-height: 188px;
  margin-right: 24px;
  margin-bottom: 24px;
  padding: 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;

  border-radius: 12px;
  border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
`;
const Text = styled.h1`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const TextBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Publish = styled.div`
  color: var(--foundation-grey-grey-500, #333);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 107.143% */
`;
const Pages = styled.div`
  color: var(--foundation-purple-purple-300, #9654f4);
  text-align: center;
  padding: 5px 7px;
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.068px;

  border-radius: 8.5px;
  background: var(--foundation-purple-purple-50, #efe6fd);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
`;
const Icons = styled.div``;
Icons.Delete = styled(delet)`
  position: absolute;
  top: -30px;
  right: -50px;
`;
Icons.Edit = styled(edit)`
  position: absolute;
  right: -50px;
  top: 150px;
`;

export { Img, Icons, Pages, Publish, TextBottom, Container, Text };
