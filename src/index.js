import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import Home from "./components/Home";

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