import styled from "styled-components";

// const getType = ({ type }) => {
//   switch (type) {
//     case "dark":
//       return {
//         background: "transparent",
//         border: "1px solid #FFFFFF",
//         color: "#FFFFFF",
//       };
//     case "light":
//       return {
//         background: "#FFFFFF",
//         border: "1px solid #E6E9EC",
//         color: "#0D233B",
//       };
//     case "primary":
//       return {
//         background: "#0061DF",
//         border: "none",
//         color: "#FFFFFF",
//       };
//     default:
//       return {
//         background: "#0061DF",
//         border: "none",
//         color: "#FFFFFF",
//       };
//   }
// };

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  border: 1px solid #e6e9ec;
  outline: none;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  &:focus {
    border: 1px solid #0061df;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #333333;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Icon = styled.div`
  position: absolute;
  /* transform: translate(-50%, -50%); */
  left: 10px;
`;

export { Container, Wrapper, Icon };
