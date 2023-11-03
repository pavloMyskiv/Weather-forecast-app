import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  align-items: center;
`;
export const Header = (props) => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
};
