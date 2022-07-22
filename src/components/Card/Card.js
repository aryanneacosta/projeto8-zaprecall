import React from "react";
import Question from "../Question/Question";

import "./style.css";

export default function Card({ index, pergunta, resposta, clicked, clickedCard, answeredCard, answer }) {

    return (
        <>
            {!clicked ?
                <li className="fechada"
                    key={index}
                    onClick={() => clickedCard(index)}>
                    <div className={`texto ${answer}`}>
                        Pergunta {index + 1}
                    </div>
                    <ion-icon name={answer}></ion-icon>
                </li>
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