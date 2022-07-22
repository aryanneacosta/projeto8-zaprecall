import React from "react";
import "./style.css";


export default function Question({ index, pergunta, resposta }) {
    const [question, setQuestion] = React.useState(false);

    return (
        <>
            {!question ?
                <li className="aberta"
                    key={index}>
                    <div className="texto">
                        {pergunta}
                    </div>
                    <img
                        onClick={() => setQuestion(true)}
                        src="./././img/setinha.png"
                        alt="setinha"
                    />
                </li>
                :
                <li className="aberta"
                    key={index}>
                    <div className="texto">
                        {resposta}
                    </div>
                    <div className="opções">
                        <div className="button red">
                            <div>Não</div>
                            <div>lembrei!</div>
                        </div>
                        <div className="button yellow">
                            <div>Quase</div>
                            <div>lembrei!</div>
                        </div>
                        <div className="button green">
                            Zap!
                        </div>

                    </div>
                </li>
            }

        </>

    );
}