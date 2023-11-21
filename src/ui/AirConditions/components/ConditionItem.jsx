import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rounder } from '../../../utils/rounder';
import styled from 'styled-components';
import Text from '../../../components/Text';
import Title from '../../../components/Title';

const StyledConditionItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  grid-gap: 0.8em;
  & svg {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    color: ${(props) => props.theme.colors.text.minor};
  }
`;

export const ConditionItem = ({ condition, text }) => {
  if (!condition) {
    return;
  }
  return (
    <StyledConditionItem>
      <FontAwesomeIcon icon={text.icon} size="xs" />
      <Title $margin="0" fontSize="s">
        {text.title}
      </Title>
      <Text fontSize="xl">
        {rounder(condition)}
        {text.param}
      </Text>
    </StyledConditionItem>
  );
};
