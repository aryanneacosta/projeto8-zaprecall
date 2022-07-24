import "./style.css";
import party from "../../assets/img/party.png";
import sad from "../../assets/img/sad.png";

export default function Bottom({ answers, flashcards }) {

    function concluded(answers) {
        let result = answers.filter(() => answers === 'close-circle');

        if (result.length > 0) {
            return (
                <div className="concluido">
                    <div className="header">
                        <img src={sad} alt="sad" />
                        <div className="titulo">Putz...</div>
                    </div>
                    <div className="texto">
                        <p>Ainda faltam alguns...</p>
                        <p>Mas não desanime!</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="concluido">
                    <div className="header">
                        <img src={party} alt="party" />
                        <div className="titulo">Parabéns!</div>
                    </div>
                    <div className="texto">
                        <p>Você não esqueceu de</p>
                        <p>nenhum flashcard!</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <footer className="bottom">
                {answers.length === flashcards ?
                    concluded(answers)
                    :
                    console.log('not concluded')
                }
                <div className="texto"> {answers.length}/{flashcards} CONCLUÍDOS</div>
                <div className="icons">
                    {answers.map(
                        (answers, index) =>
                            <ion-icon key={index} name={answers}></ion-icon>
                    )}
                </div>
        </footer>

    );
}