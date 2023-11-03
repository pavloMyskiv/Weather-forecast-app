import styled from 'styled-components';

const StyledText = styled.p`
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] ||
    props.fontSize ||
    props.theme.fontSize.m};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) =>
    props.theme.colors.text[props.color] ||
    props.color ||
    props.theme.colors.text.major};
`;

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
