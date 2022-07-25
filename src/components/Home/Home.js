import "./style.css"
import logo from '../../assets/img/logo.png'

export default function Home({ setTela }) {
    return (
        <div className="home">
            <img src={logo} alt="logo" />
            <div className="titulo">ZapRecall</div>
            <button onClick={() => setTela('game')}>Iniciar Recall!</button>
        </div>
    );
}