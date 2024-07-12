import Stamp from "../components/Stamp";
import Btm from "../components/Btm";
import Score from "../components/Score";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <Score> {score}</Score>
      <Btm onClick={retry}>Resetar jogo</Btm>
      <Stamp />
    </div>
  );
};

export default GameOver;
