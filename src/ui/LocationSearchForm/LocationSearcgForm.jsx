import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import styled from 'styled-components';
import InputBlock from '../../components/InputBlock';

const StyledForm = styled.form`
  padding: 0 0.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationSearchForm = ({ onFormSubmit, label, isError }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    values: {
      city: '',
    },
  });
  const fieldConfig = {
    required: 'true',
  };

  return (
    <StyledForm
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        onFormSubmit(data.city);
        reset({ city: '' });
        document.activeElement.blur();
      })}
    >
      <InputBlock
        label={label}
        isError={formState.errors.city?.type === 'required' || isError}
        type={'search'}
        id={'city'}
        name={'city'}
        register={register('city', fieldConfig)}
      />
      <Button fontSize="l">Search</Button>
    </StyledForm>
  );
};
