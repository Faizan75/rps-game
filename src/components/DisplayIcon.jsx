import { useContext } from "react";
import { Appcontext } from "../Store/AppContext";

function DisplayIcon() {
  let { genCompChoice } = useContext(Appcontext);
  return (
    <div className="choices">
      <div className="choice" id="rock" onClick={() => genCompChoice("rock")}>
        <img src="src/Images/rock.png" />
      </div>
      <div className="choice" id="paper" onClick={() => genCompChoice("paper")}>
        <img src="src/Images/paper.png" />
      </div>
      <div
        className="choice"
        id="scissors"
        onClick={() => genCompChoice("scissors")}
      >
        <img src="src/Images/scissors.png" />
      </div>
    </div>
  );
}

export default DisplayIcon;
