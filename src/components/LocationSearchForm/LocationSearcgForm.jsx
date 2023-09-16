import { useForm } from 'react-hook-form';
import styles from './LocationSearchForm.module.scss';

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
    <form
      className={styles.search_form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        onFormSubmit(data.city);
        reset({ city: '' });
      })}
    >
      <div className={styles.input_block}>
        <input
          className={
            (formState.errors.city?.type === 'required' || isError) &&
            styles.error
          }
          type="search"
          id="city"
          name="city"
          {...register('city', fieldConfig)}
        />
        <label for="city">{label}</label>
      </div>
      <button>Search</button>
    </form>
  );
};
