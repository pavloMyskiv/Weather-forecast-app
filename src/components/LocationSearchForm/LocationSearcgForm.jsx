import { useForm } from 'react-hook-form';
import styles from './LocationSearchForm.module.scss';

export const LocationSearchForm = ({ onFormSubmit, label }) => {
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
      <div>
        <input
          className={
            formState.errors.city?.type === 'required' && styles.error_input
          }
          type="search"
          name="city"
          {...register('city', fieldConfig)}
        />
        <button>Search</button>
      </div>
      <label className={label === 'Error!!!' && styles.error_label}>
        {label}
      </label>
    </form>
  );
};
