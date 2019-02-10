import React, { Component } from 'react'
import { connect } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import { Badge, Alert } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

class PlayerList extends Component {
    getFeedbackForNumber(number) {
        const {drawings} = this.props
        let feedback = 'primary'
        drawings.map(draw => {
            if(draw.numbers.split(',').includes(number)) {
                feedback = 'success'
                return true
            }
            return false
        })
        return feedback
    }
    render() {
        const data = this.props.players
        const {result, bestsPlayersATM} = this.props
        const columns = [
            {
            dataField: 'id',
            hidden: true 
            },
            {
            dataField: 'name',
            text: 'Joueur',
            sort: true,
            filter: textFilter({
                placeholder: 'Rechercher...'
              })
            },
            {
            dataField: 'numbers',
            text: 'Numéros',
            formatter: (props) => {
                let html = []
                props.split(',').map((number,i) => {
                    html.push(<Badge key={i} variant={this.getFeedbackForNumber(number)} className="badge-lotto">{number}</Badge>)
                    return true
                }) 
                return html
                },
            sort: false
            }, 
            {
            dataField: 'missing',
            text: 'Manquants',
            sort: true
            }
        ]
        const defaultSorted = [{
            dataField: 'missing',
            order: 'asc'
        }]
        return (
                <div>
                    {result.win && (
                        <Alert variant="success" dismissible className="text-center mt-2">                 
                            <WinPlayers best={result.players}/>
                        </Alert> 
                    )}
                    {!result.win && (
                        <Alert variant="primary" dismissible className="text-center mt-2">                 
                            <BestPlayers best={bestsPlayersATM}/>
                        </Alert>               
                    )}
                    <BootstrapTable bootstrap4 keyField='id' data={data} columns={columns}
                        defaultSorted={defaultSorted}
                        pagination={paginationFactory({sizePerPage: 5})}
                        filter={filterFactory()}
                    />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      players: state.players,
      drawings: state.drawings,
      result: state.result,
      bestsPlayersATM: state.bestsPlayersATM
    }
}

function BestPlayers(props) {
    if (!props.best || props.best.length === 0) {
      return 'Chargement...'
    }
    if(props.best.length > 1) {
        return (
            <p>Actuellement, les meilleurs joueurs sont:
                <strong>&nbsp;
                    {props.best.map((best,i) => {
                        if(i === props.best.length - 1)
                            return best.name
                        else
                            return best.name+', '
                    })}
                </strong>
                &nbsp;avec <strong>{props.best[0].missing}</strong> numéros manquants.
            </p>
        )
    } else {
        return (
            <p>Actuellement, le meilleur joueur est: <strong>{props.best[0].name}</strong>
            &nbsp;avec <strong>{props.best[0].missing}</strong> numéros manquants.
            </p>
        )
    }
}

function WinPlayers(props) {
    if (!props.best || props.best.length === 0) {
      return 'Chargement...'
    }
    if(props.best.length > 1) {
        return (
            <p>
                <Alert.Heading>Il y a plusieurs gagnants!</Alert.Heading> 
                <strong>&nbsp;
                    {props.best.map((best,i) => {
                        if(i === props.best.length - 1)
                            return best.name
                        else
                            return best.name+', '
                    })}
                </strong>
                &nbsp;ont gagné!
            </p>
        )
    } else {
        return (
            <p>
            <Alert.Heading>Il y a un gagnant!</Alert.Heading> 
            <strong>{props.best[0].name}</strong>
            &nbsp;a gagné!
            </p>
        )
    }
}
  
export default connect(mapStateToProps)(PlayerList)