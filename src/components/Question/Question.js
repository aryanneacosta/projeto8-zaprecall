import React from "react";
import "./style.css";


export default function Question({ index, pergunta, resposta, answeredCard, answer }) {
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
                        <div className="button red"
                            onClick={() => answeredCard(index, 'close-circle')}>
                            <div>Não</div>
                            <div>lembrei!</div>
                        </div>
                        <div className="button yellow"
                            onClick={() => answeredCard(index, 'help-circle')}>
                            <div>Quase</div>
                            <div>lembrei!</div>
                        </div>
                        <div className="button green"
                            onClick={() => answeredCard(index, 'checkmark-circle')}>
                            Zap!
                        </div>

                    </div>
                </li>
            }

        </>

    );
}