import React from 'react'

// Material UI
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class PlayersSlateRow extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <TableRow>
        <TableRowColumn>{ this.props.row.remote_id }</TableRowColumn>
        <TableRowColumn>{ this.props.row.name }</TableRowColumn>
        <TableRowColumn>{ this.props.row.position }</TableRowColumn>
        <TableRowColumn>${ this.props.row.salary }</TableRowColumn>
        <TableRowColumn>{ this.props.row.team_abbreviation }</TableRowColumn>
        <TableRowColumn>{ this.props.row.game_info }</TableRowColumn>
      </TableRow>
    )
  }
}

export default PlayersSlateRow