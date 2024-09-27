const Gamerule = () => {
  return (
    <div className="rules-container">
      <div className="rules-box">
        <h2>Rock, Paper, Scissors Game Rules</h2>
        <p>Here are the game rules for Rock, Paper, Scissors:</p>
        <ul>
          <li><strong>Players:</strong> Two players (User vs. Computer).</li>
          <li><strong>Choices:</strong> Each player chooses one of three options: Rock, Paper, or Scissors.</li>
          <li><strong>Winning Conditions:</strong>
            <ul>
              <li>Rock beats Scissors (Rock crushes Scissors).</li>
              <li>Scissors beats Paper (Scissors cuts Paper).</li>
              <li>Paper beats Rock (Paper covers Rock).</li>
            </ul>
          </li>
          <li><strong>Tie:</strong> If both players choose the same option, the game is a tie and can be played again.</li>
          <li><strong>Rounds:</strong> The game can be played in multiple rounds, keeping track of scores.</li>
          <li><strong>Scoring:</strong>
            <ul>
              <li><strong>Win:</strong> +1 point for the winning player.</li>
              <li><strong>Loss:</strong> 0 points for the losing player.</li>
              <li><strong>Tie:</strong> No points awarded.</li>
            </ul>
          </li>
          <li><strong>Game End:</strong> The game can be played for a predetermined number of rounds or until a player reaches a certain score.</li>
        </ul>
      </div>
    </div>
  );
};

 
export default Gamerule