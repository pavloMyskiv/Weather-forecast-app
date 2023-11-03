import styled from 'styled-components';

const StyledInputBlock = styled.div`
  position: relative;
  font-size: inherit;
  flex: 1 1 auto;
  & input {
    padding: 8px;
    width: 100%;
    font-size: inherit;
    color: ${(props) => props.theme.colors.text.major};
    background-color: transparent;
    border: none;
    border-radius: 20px;
    outline: 2px solid
      ${(props) =>
        props.$isError
          ? props.theme.colors.error
          : props.theme.colors.text.major};
    transition: outline-color 500ms;
  }
  & input:focus,
  & input:valid {
    outline-color: ${(props) =>
      props.$isError
        ? props.theme.colors.error
        : props.theme.colors.text.minor};
  }
  & label {
    position: absolute;
    display: inline;
    color: ${(props) =>
      props.$isError
        ? props.theme.colors.error
        : props.theme.colors.text.major};
    background-color: ${(props) => props.theme.colors.background.major};
    top: 0;
    left: 0;
    translate: 8px 8px;
    transition: translate 500ms, scale 500ms, color 500ms;
  }
  & input:focus + label,
  & input:valid + label {
    padding-inline: 5px;
    color: ${(props) =>
      props.$isError
        ? props.theme.colors.error
        : props.theme.colors.text.minor};
    translate: 8px -11px;
    scale: 0.8;
  }
`;

export const InputBlock = ({ label, isError, type, name, id, register }) => {
  return (
    <StyledInputBlock $isError={isError}>
      <input required type={type} id={id} name={name} {...register} />
      <label htmlFor={id}>{label}</label>
    </StyledInputBlock>
  );
};
