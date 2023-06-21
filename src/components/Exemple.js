import Style from "./Exemple.module.css";
const Componente = {
    Botao: () => {
        return (
            <>
                <button className={Style.btn}>add</button >
            </>
        )
    },
    Parametro: (obj) => {
        return (
            <h4>Recebendo parametro dentro de função {obj.texto} </h4>

        )
    }
}
export default Componente;