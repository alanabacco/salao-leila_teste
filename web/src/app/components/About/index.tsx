import styles from "./styles.module.css";
import photo from "../../assets/undraw_girl_just_wanna_have_fun_-9-d5u.svg";
import Image from "next/image";

export default function About(): JSX.Element {
  return (
    <>
      <Image
        src={photo}
        height={200}
        alt="Desenho de duas garotas ao ar livre, uma em pé, de vestido rosa e cabelo castanho escuro, a outra está outra sentada, de blusa amarela, calça cinza e cabelo avermelhado. Próximo a elas tem algumas pedras com flores junto. A garota de pé segura uma flor atrás do corpo."
      />
      <p className={styles.aboutDescription}>
        Cabelos, unhas, hidratação e unha. Venha fazer suas unhas, seus cabelos, e até
        mesmo hidratar suas madeixas de cabelo conosco. Tudo esterelizado.
      </p>
    </>
  );
}
