import { useContext } from "react";
import { Appcontext } from "../Store/AppContext";

function Message() {

  const {currState}=useContext(Appcontext)
  
 
  return (
    <div className="msgcontent">
    <p id="msg" style={{ backgroundColor: currState.bgColor }} >
    {currState.result === "win" ? 
    `Your Choice "${currState.userChoice}" & Computer Choice "${currState.compChoice}" : You Win!!`
    : currState.result === "lost" ? `Your Choice "${currState.userChoice}" & Computer Choice "${currState.      compChoice}" : Computer Win!!`
    : currState.result === "Draw" ? `Your Choice "${currState.userChoice}" & Computer Choice "${currState.      compChoice}" :Match Draw !!` 
    : "Let's Play "} 
    </p>
    </div>
  ); 
}
export default Message;
