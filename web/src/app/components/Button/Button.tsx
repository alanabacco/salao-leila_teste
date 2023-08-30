// import styles from "./styles.module.css";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
};

export default function Button({ type = "button", text }: ButtonProps): JSX.Element {
  return <button type={type}>{text}</button>;
}
