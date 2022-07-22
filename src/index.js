import React from "react";
import ReactDOM from "react-dom";

import "./assets/reset.css";
import "./assets/style.css";

import Game from "./components/Game/Game";
import Home from "./components/Home/Home";

function App() {
    const [tela, setTela] = React.useState('game');

    return (
        <>
            {tela === 'home' ? 
                <Home setTela={setTela} />
                :
                <Game setTela={setTela} />
            }
            
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));