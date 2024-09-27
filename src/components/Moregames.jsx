import { useEffect, useState } from "react"
import './games.css'
import { useLoaderData } from "react-router-dom";

function Moregames(){

  const games=useLoaderData()

  // const [games,setgames]=useState([])

  // useEffect(() => {
  //   fetch("/api/api/games")
  //     .then((response) => response.json())
  //     .then((data) => setgames(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  
  return (
    <div className="games-container">
      {games.map((game) => (
        <div className="game-card" key={game.id}>
          <img src={game.thumbnail} alt={`${game.title} Thumbnail`} className="game-thumbnail" />
          <h3 className="game-title">{game.title}</h3>
          <a href={game.game_url} target="_blank" rel="noopener noreferrer" className="play-button">
            Play Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default Moregames

export const gameloader= async ()=>{
 const response= await fetch('/api/api/games')
 return response.json()
}

