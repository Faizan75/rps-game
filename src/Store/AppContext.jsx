import { createContext,useReducer} from "react";
export const Appcontext = createContext();


const initialState={
  userScore:0,
  compScore:0,
  result:"",
  bgColor:"Cyan",
  userChoice:"",
  compChoice:""
}

function reducerFunc(state,action){
 switch(action.type){
  case 'USER_WIN':
    return {...state, userScore: state.userScore + 1, result: "win" ,bgColor:"lightgreen",userChoice:action.userChoice,compChoice:action.compChoice};
  case 'COMP_WIN':
    return {...state,compScore:state.compScore+1,result:"lost",bgColor:"red",userChoice:action.userChoice,compChoice:action.compChoice};
  case 'DRAW':
    return {...state,result:"Draw",bgColor:"Lavender",userChoice:action.userChoice,compChoice:action.compChoice}
  default:
   return (state)
 }
}

function AppContextprovider({ children }) {
 

const [currState,dispatch]=useReducer(reducerFunc,initialState)

  function genCompChoice(userChoice){
    let genChoices=['rock','paper','scissors']
    let num=Math.floor(Math.random()*3)
    let compChoice=genChoices[num]
    startGame(userChoice,compChoice)
    
  
  }

  function startGame(userChoice,compChoice){

    if(userChoice === compChoice){
       dispatch({type:"DRAW",userChoice,compChoice})
    }else if(userChoice === 'rock' && compChoice === 'paper'){
       dispatch({type:"COMP_WIN",userChoice,compChoice})
    }else if(userChoice==='rock' && compChoice === 'scissors'){
      dispatch({type:"USER_WIN",userChoice,compChoice})
    }else if(userChoice === 'paper' && compChoice === 'rock'){
      dispatch({type:"USER_WIN",userChoice,compChoice})
    }else if(userChoice === 'paper' && compChoice === 'scissors'){
      dispatch({type:"COMP_WIN",userChoice,compChoice})
    }else if (userChoice === 'scissors' && compChoice === 'paper'){
      dispatch({type:"USER_WIN",userChoice,compChoice})
    }else if (userChoice === 'scissors' && compChoice === 'rock'){
      dispatch({type:"COMP_WIN",userChoice,compChoice})
    }
  }
 

 
  return <Appcontext.Provider value={{genCompChoice,currState}}>
                 {children}
        </Appcontext.Provider>;
}

export default AppContextprovider;
