import styled from 'styled-components';
import SectionBox from '../SectionBox';

const StyledPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.background.major};
  backdrop-filter: blur(50px);
  opacity: ${(props) => (props.$isActive ? '0.9' : '0')};
  pointer-events: ${(props) => (props.$isActive ? 'all' : 'none')};
  z-index: 1;
  transition: opacity 0.5s;
`;

const StyledPopupInner = styled(SectionBox)`
  margin: 1em;
  padding: 1em;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: end;
  transform: scale(${(props) => (props.$isActive ? '1' : '.1')});
  transition: all 1s;
`;
const StyledContentBox = styled.div`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
`;

export const Popup = ({ isActive, children }) => {
  return (
    <StyledPopup $isActive={isActive}>
      <StyledPopupInner $isActive={isActive}>
        <StyledContentBox>{isActive ? children : ''}</StyledContentBox>
      </StyledPopupInner>
    </StyledPopup>
  );
};
