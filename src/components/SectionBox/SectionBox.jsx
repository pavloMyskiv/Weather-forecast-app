import styled from 'styled-components';

export const SectionBox = styled.div`
  padding: 8px;
  margin-top: 8px;
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.theme.colors.background[props.background] ||
    props.background ||
    props.theme.colors.background.minor};
`;
