import styles from "./styles.module.css";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

export default function FormInput({
  label,
  type,
  id,
  name,
  placeholder,
  required,
  minLength,
  maxLength,
  pattern,
  ...rest
}: FormInputProps): JSX.Element {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        {...rest}
      />
    </div>
  );
}
