import { useContext } from "react";
import { Appcontext } from "../Store/AppContext";

function ScoreBoard() {
  const {currState}=useContext(Appcontext)
 
  return (
    <div className="scoreBoard">
      <div className="score">
        <p id="userScore">{currState.userScore}</p>
        <p>You</p>
      </div>
      <div className="score">
        <p id="compScore">{currState.compScore}</p>
        <p>Comp</p>
      </div>
    </div>
    
  );
  
}
export default ScoreBoard;
