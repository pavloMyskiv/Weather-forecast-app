import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-left: 0.5em;
  padding: 8px;
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] || props.fontSize || 'inherit'};
  border-radius: 20px;
  color: ${(props) =>
    props.theme.colors.text[props.color] ||
    props.color ||
    props.theme.colors.text.minor};
  background: ${(props) =>
    props.theme.colors.background[props.$background] ||
    props.$background ||
    props.theme.colors.background.minor};
`;
export const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
