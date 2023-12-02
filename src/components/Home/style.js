import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as name } from "../../assets/icons/Books List.svg";
import { ReactComponent as search } from "../../assets/icons/search-refraction.svg";
import { ReactComponent as bell } from "../../assets/icons/bell-01.svg";
import { ReactComponent as avatar } from "../../assets/icons/user-image.svg";

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`;
const BoxNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const Inbox = styled.div`
  display: flex;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;
Icons.Logo = styled(logo)``;
Icons.Name = styled(name)`
  margin-left: 20px;
`;
Icons.Search = styled(search)`
  margin-left: 20px;
`;
Icons.Bell = styled(bell)`
  /* margin-left: 20px; */
  margin-right: 20px;
`;
Icons.Avatar = styled(avatar)`
  cursor: pointer;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border-radius: 6px;
    background: var(--foundation-white-white-50, #fefefe);
  }
`;
const Input = styled.input`
  outline: none;
  margin-left: 12px;
  width: 264px;
  height: 26px;
  background-color: #333333;
  border: none;
  &::placeholder {
    color: var(--foundation-white-white-50, #fefefe);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.16px;
  }
  &:focus {
    border-radius: 6px;
    background: var(--foundation-white-white-50, #fefefe);
  }
`;

const BoxHome = styled.div`
  margin-top: 37px;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputHome = styled.input`
  width: 320px;
  height: 47px;
  margin-right: 24px;
  padding: 0px 15px;
  outline: none;
  align-items: center;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
  background: var(--foundation-white-white-50, #fefefe);
`;

const CardHome = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
`;

export {
  CardHome,
  InputHome,
  TextBox,
  Container,
  BoxNav,
  Inbox,
  Icons,
  InputBox,
  Input,
  BoxHome,
};
