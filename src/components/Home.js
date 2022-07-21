export default function Home({ setTela }) {
    return (
        <div className="home">
            <img src='././img/logo.png' alt="logo" />
            <div className="titulo">ZapRecall</div>
            <button onClick={() => setTela('game')}>Iniciar Recall!</button>
        </div>
    );
}