import React from "react";
import Question from "../Question/Question";

import "./style.css";

export default function Card({ index, pergunta, resposta, clicked, clickedCard, answeredCard, answer }) {

    function alreadyAnswered(clicked) {
        if (clicked === 'não-virada') {
            return (<li className="fechada"
                key={index}
                onClick={() => clickedCard(index)}>
                <div className={`texto ${answer}`}>
                    Pergunta {index + 1}
                </div>
                <ion-icon name={answer}></ion-icon>
            </li>)
        } else {
            return (<li className="fechada"
                key={index}>
                <div className={`texto ${answer}`}>
                    Pergunta {index + 1}
                </div>
                <ion-icon name={answer}></ion-icon>
            </li>)
        }
    }

    return (
        <>
            {clicked !== 'virada' ?
                alreadyAnswered(clicked)
                :
                <Question
                    index={index}
                    pergunta={pergunta}
                    resposta={resposta}
                    answeredCard={answeredCard}
                    answer={answer}
                />
            }

        </>

    );
}