import React, { Component } from 'react'
import { Table, Badge, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'

class DrawingList extends Component {
    generateJsDate(date){
        const jsDate = new Date(date)
        var options = {year: "numeric", month: "long", day: "numeric"}
        return `Samedi ${jsDate.toLocaleDateString("fr-FR", options)}`
    }
    render() {
        const { drawings } = this.props
        const drawingList = drawings.length ? (
                <Table responsive>
                <thead>
                    <tr>
                        <th>Tirage n°</th>
                        <th>Numeros</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {drawings.map(drawing => (
                    <tr key={drawing.id}>
                        <td>{drawing.id}</td>
                        <td>
                            {drawing.numbers.split(',').map((number,i) => (
                                <Badge key={i} variant='danger' className="badge-lotto">{number}</Badge>
                            ))}
                        </td>
                        <td>{this.generateJsDate(drawing.date)}</td>
                    </tr>
                ))}
                </tbody>
                </Table>
            ) : (
                <Alert className="text-center mt-2" variant="primary">Aucun tirage a afficher pour le moment</Alert>
            )
        return (
            <div className="center">{drawingList}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      drawings: state.drawings
    }
  }
  
  export default connect(mapStateToProps)(DrawingList)