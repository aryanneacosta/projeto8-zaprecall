import "./style.css";

export default function Bottom({ flashcards}) {
    return (
        <div className="bottom">
            <div className="texto">0/{flashcards} CONCLUÍDOS</div>
        </div>
    );
}