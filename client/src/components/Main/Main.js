import React, { Component } from 'react'
import { Route } from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { connect } from 'react-redux'

import PlayerList from './PlayerList'
import DrawingList from './DrawingList'
import About from './About'
import Navbar from './Layout/Navbar'

import { setDrawings } from '../../actions/drawingActions'
import { setPlayers, setBestsPlayersATM } from '../../actions/playerActions'
import { setResult } from '../../actions/resultActions'

class Main extends Component {
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
        
        if(players.length !== 0) {
          const theBestPlayer = players.reduce((oldest, player) => {
            return oldest.missing < player.missing ? oldest : player
          }, {})

          bestPlayers.push(theBestPlayer)
      
          players.filter(player => {
            if(theBestPlayer.missing === player.missing && theBestPlayer.id !== player.id)
              bestPlayers.push(player)
            return true
          })

          if(theBestPlayer.missing === 0)
            isWin = true
        }
  
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
          axios.get('/api/players'),
          axios.get('/api/drawings')
        ])
        .then(axios.spread(function (players, drawings) {
          that.props.setDrawings(
            drawings.data
          )
          that.setPlayersData(players.data, drawings.data)
          that.setBestPlayersAndResult(players.data)
        })).catch(error => console.log(error))
      }

    render() {
        return (
            <Container fluid={true}>
            <Navbar/>
                <Route exact path='/' component={PlayerList}/>
                <Route exact path='/drawings' component={DrawingList}/>
                <Route exact path='/about' component={About} />
            </Container>
        )
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

export default connect(mapStateToProps,mapDispatchToProps)(Main)