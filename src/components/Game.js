import Bottom from "./Bottom";
import Header from "./Header";

export default function Game({ setTela }) {
    const flashcards = [
        {pergunta:'O que é JSX?', resposta:'Uma extensão de linguagem do JavaScript'}, 
        {pergunta:'O React é __', resposta:'uma biblioteca JavaScript para construção de interfaces'},
        {pergunta:'Componentes devem iniciar com __', resposta:'letra maiúscula'},
        {pergunta:'Podemos colocar __ dentro do JSX', resposta:'expressões'},
        {pergunta:'O ReactDOM nos ajuda __', resposta:' interagindo com a DOM para colocar componentes React na mesma'},
        {pergunta:'Usamos o npm para __', resposta:'gerenciar os pacotes necessários e suas dependências'},
        {pergunta:'Usamos props para __', resposta:'passar diferentes informações para componentes'},
        {pergunta:'Usamos estado (state) para __', resposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
    ]

    return (
        <>
            <Header setTela={setTela}/>
            <ul>
                {flashcards.map(
                    (pergunta, index) => (
                        <li className="fechada"
                            key={index}>
                            <div className="texto">
                                Pergunta {index + 1}
                            </div>
                            <ion-icon name="play-outline"></ion-icon>
                        </li>)
                )}
            </ul>
            <Bottom flashcards={flashcards.length}/>
        </>
    );
}