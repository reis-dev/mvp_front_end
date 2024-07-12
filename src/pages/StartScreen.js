import Btm from "../components/Btm";
import Stamp from "../components/Stamp";

import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h2>Palavra Secreta</h2>
      <p>Clique no botão para começar a jogar</p>
      <Btm onClick={startGame}>Começar o jogo</Btm>
      <Stamp />
    </div>
  );
};

export default StartScreen;
