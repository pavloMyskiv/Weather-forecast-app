import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] ||
    props.fontSize ||
    props.theme.fontSize.l};
  margin: ${(props) => props.$margin || '0.2em 1em'};
  color: ${(props) =>
    props.theme.colors.text[props.color] ||
    props.color ||
    props.theme.colors.text.minor};
  font-weight: bold;
`;

export const Title = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};
