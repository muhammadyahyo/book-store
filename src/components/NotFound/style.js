import styled from "styled-components";
import { ReactComponent as notfound } from "../../assets/icons/404.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Icons = styled.div``;
Icons.Notfound = styled(notfound)`
  margin: 50px auto;
  /* text-align: center; */
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export { Container, Icons, Box };
