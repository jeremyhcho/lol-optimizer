import React from 'react'
import { connect } from 'react-redux'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class PlayerStatsTable extends React.Component {
   constructor (props) {
     super(props)
   }
   
   renderTable () {
     return (
       this.props.players.map((player) => (
         <TableRow hoverable={ true } key={ player.remote_id }>
           <TableRowColumn>{ player.remote_id }</TableRowColumn>
           <TableRowColumn>{ player.name }</TableRowColumn>
           <TableRowColumn>{ player.position || 'N/A' }</TableRowColumn>
           <TableRowColumn>{ player.team }</TableRowColumn>
         </TableRow>
       ))
     )
   }
   
   render () {
     return (
       <Table selectable={ false } className='player-stats-table' style={{ width: '100.1%' }}>
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <TableRow>
             <TableHeaderColumn>ID</TableHeaderColumn>
             <TableHeaderColumn>Name</TableHeaderColumn>
             <TableHeaderColumn>Position</TableHeaderColumn>
             <TableHeaderColumn>Team</TableHeaderColumn>
           </TableRow>
         </TableHeader>
   
         <TableBody
           displayRowCheckbox={ false }
           adjustForCheckbox={ false }
           showRowHover={ true }>
           { this.renderTable() }
         </TableBody>
       </Table>
     )
   }
}

const mapStateToProps = (state) => ({
  players: state.admin.stats.players
})

export default connect(mapStateToProps)(PlayerStatsTable)