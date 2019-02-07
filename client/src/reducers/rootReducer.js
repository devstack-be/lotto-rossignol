const initState = {
    players: [],
    drawings: [],
    result: {win: false, players: []},
    bestsPlayersATM: []
}
  
const rootReducer = (state = initState, action) => {
    switch(action.type){
      case 'SET_PLAYERS':
        let newPlayers = action.players
        return {
          ...state,
          players: newPlayers
        }
      case 'SET_DRAWINGS':
        let newDrawings = action.drawings
        return {
          ...state,
          drawings: newDrawings
        }
      case 'SET_BESTS_PLAYERS':
        let newBestsPlayersATM = action.bestsPlayersATM
        return {
          ...state,
          bestsPlayersATM: newBestsPlayersATM
        }
      case 'SET_RESULT':
        let newResult = action.result
        return {
          ...state,
          result: newResult
        }
      default:
      return state
    }
}
  
  export default rootReducer