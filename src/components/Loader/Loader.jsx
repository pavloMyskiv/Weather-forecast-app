import styled from 'styled-components';

const StyledLoader = styled.div`
  margin: 20px auto;
  width: 88px;
  height: 88px;
  display: grid;
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side, #0000 40%, #454e5b 41%);
  background: linear-gradient(
        0deg,
        rgba(69, 78, 91, 0.5) 50%,
        rgba(69, 78, 91, 1) 0
      )
      center/7px 100%,
    linear-gradient(90deg, rgba(69, 78, 91, 0.25) 50%, rgba(69, 78, 91, 0.75) 0)
      center/100% 7px;
  background-repeat: no-repeat;
  animation: spinner-d3o0rx 1.4s infinite steps(12);
  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  &::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }

  @keyframes spinner-d3o0rx {
    100% {
      transform: rotate(1turn);
    }
  }
`;
export const Loader = () => {
  return <StyledLoader />;
};
