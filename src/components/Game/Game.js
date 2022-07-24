import React from "react";

import "./style.css";

import Bottom from "../Bottom/Bottom";
import Header from "../Header/Header";
import Card from "../Card/Card";

const flashcards = [
    { 
        pergunta: 'O que é JSX?', 
        resposta: 'Uma extensão de linguagem do JavaScript', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'O React é __', 
        resposta: 'uma biblioteca JavaScript para construção de interfaces', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'Componentes devem iniciar com __', 
        resposta: 'letra maiúscula', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'Podemos colocar __ dentro do JSX', 
        resposta: 'expressões', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'O ReactDOM nos ajuda __', 
        resposta: ' interagindo com a DOM para colocar componentes React na mesma', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'Usamos o npm para __', 
        resposta: 'gerenciar os pacotes necessários e suas dependências', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'Usamos props para __', 
        resposta: 'passar diferentes informações para componentes', 
        clicked: false,
        answer: 'play-outline'
    },
    { 
        pergunta: 'Usamos estado (state) para __', 
        resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', 
        clicked: false,
        answer: 'play-outline'
    }
]


export default function Game({ setTela }) {
    const [flashcard, setFlashcard] = React.useState(flashcards);
    const [answers, setAnswers] = React.useState([]);

    function clickedCard(flashcardIndex) {
        let newFlashcards = flashcard.map((flashcard, index) => {
            if (index === flashcardIndex) {
                return {
                    ...flashcard,
                    clicked: true,
                }
            } else {
                return {
                    ...flashcard,
                    clicked: false,
                }
            }
        })
        setFlashcard([...newFlashcards]); 
    }

    function answeredCard(flashcardIndex, answer) {
        let newFlashcards = flashcard.map((flashcard, index) => {
            if (index === flashcardIndex) {
                return {
                    ...flashcard,
                    clicked: false,
                    answer: answer
                }
            } else {
                return {
                    ...flashcard,
                    clicked: false,
                }
            }
        })
        setFlashcard([...newFlashcards]); 
        setAnswers([...answers, answer]);
    }

    return (
        <>
            <Header setTela={setTela} />
            <ul>
                {flashcard.map(
                    (flashcard, index) => (
                        <Card 
                            key={index} 
                            index={index} 
                            pergunta={flashcard.pergunta}
                            resposta={flashcard.resposta}
                            clicked={flashcard.clicked} 
                            clickedCard={clickedCard}
                            answeredCard={answeredCard}
                            answer={flashcard.answer}
                        />)
                )}
            </ul>
            <Bottom answers={answers} flashcards={flashcards.length} />
        </>
    );
}
