import React from "react";
import Question from "../Question/Question";

import "./style.css";

export default function Card({ index, pergunta, resposta, clicked, clickedCard }) {

    return (
        <>
            {!clicked ?
                <li className="fechada"
                    key={index}
                    onClick={() => clickedCard(index)}>
                    <div className="texto">
                        Pergunta {index + 1}
                    </div>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                :
                <Question 
                    index={index} 
                    pergunta={pergunta} 
                    resposta={resposta} 
                />
            }

        </>

    );
}