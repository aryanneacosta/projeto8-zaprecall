import "./style.css";

export default function Header({ setTela }) {
    return (
        <div className="header" onClick={() => setTela('home')}>
            <img src="././img/logo.png" alt="logo"/>
            <h1>ZapRecall</h1>
        </div>
    );
}