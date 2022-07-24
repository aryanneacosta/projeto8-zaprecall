import "./style.css";
import logo from "../../assets/img/logo.png"

export default function Header({ setTela }) {
    return (
        <div className="header" onClick={() => setTela('home')}>
            <img src={logo} alt="logo"/>
            <h1>ZapRecall</h1>
        </div>
    );
}