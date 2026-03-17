// pra usar o css module, precisamos importar o styles
import styles from './Button.module.css'
// então criamos nosso componente
export default function ButtonModule({text}){
    return(
        // pra usar na classe o modeule, chamamos como objeto dps "." e o nome da nossa classe
        <button className={styles.buttonLegal}>{text}</button>
    )
}