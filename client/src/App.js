import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios'

import Navb from './components/Navb'
import PlayerList from './components/PlayerList'
import drawingList from './components/DrawingList'
import About from './components/About'

import { setDrawings } from './actions/drawingActions'
import { setPlayers, setBestsPlayersATM } from './actions/playerActions'
import { setResult } from './actions/resultActions'

//import { getPlayersData } from './data/players'
//import { getDrawingsData } from './data/drawings'

import './App.css';

class App extends Component {

  countMissingNumbers(player, drawings) {
    let missing = player.numbers.split(',').length
    // eslint-disable-next-line array-callback-return
    player.numbers.split(',').map(number => {
        if(drawings.some(draw => {
            if(draw.numbers.split(',').includes(number)) {
                return true
            }
            return false
        })){
            missing -= 1
        }
    })
    return parseInt(missing)
  }

  setPlayersData(players, drawings) {
    players.map(player => {
      player['missing'] = this.countMissingNumbers(player,drawings)
      return true
    })
    this.props.setPlayers(
      players
    )
  }

  setBestPlayersAndResult(players){
    let bestPlayers = []
    let isWin = false

    const theBestPlayer = players.reduce((oldest, player) => {
      return oldest.missing < player.missing ? oldest : player;
    }, {});
    bestPlayers.push(theBestPlayer)

    players.filter(player => {
      if(theBestPlayer.missing === player.missing && theBestPlayer.id !== player.id)
        bestPlayers.push(player)
      return true
    })

    if(theBestPlayer.missing === 0)
      isWin = true
    let result = {win: isWin, players: bestPlayers}

    this.props.setBestsPlayersATM(
      bestPlayers
    )
    this.props.setResult(
      result
    )
  }

  componentDidMount() {
    var that = this
    axios.all([
      axios.get('api/players'),
      axios.get('api/drawings')
    ])
    .then(axios.spread(function (players, drawings) {
      that.props.setDrawings(
        drawings.data
      )
      that.setPlayersData(players.data, drawings.data)
      that.setBestPlayersAndResult(players.data)
    })).catch(error => console.log(error));

    /*const players = getPlayersData()
    const drawings = getDrawingsData()
    this.props.setDrawings(
      drawings
    )
    this.setPlayersData(players, drawings)
    this.setBestPlayersAndResult(players)*/
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Container fluid="true">
          <Navb/>
          <Switch>
            <Route exact path='/' component={PlayerList}/>
            <Route path='/drawings' component={drawingList}/>
            <Route path='/about' component={About} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    drawings: state.drawings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPlayers: (players) => dispatch(setPlayers(players)),
    setDrawings: (drawings) => dispatch(setDrawings(drawings)),
    setBestsPlayersATM: (bestPlayersATM) => dispatch(setBestsPlayersATM(bestPlayersATM)),
    setResult: (result) => dispatch(setResult(result))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
