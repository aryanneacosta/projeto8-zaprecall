import "./style.css";

export default function Question({ index, pergunta }) {
    return (
        <li className="aberta"
            key={index}>
            <div className="texto">
                {pergunta}
            </div>
            <img src="./././img/setinha.png" alt="setinha" />
        </li>
    );
}