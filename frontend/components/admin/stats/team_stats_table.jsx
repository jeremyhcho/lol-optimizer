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

class TeamStatsTable extends React.Component {
   constructor (props) {
     super(props)
   }
   
   renderTable () {
     return (
       this.props.teams.map(team => (
         <TableRow hoverable={ true } key={ team.remote_id }>
           <TableRowColumn>{ team.remote_id }</TableRowColumn>
           <TableRowColumn>{ team.name }</TableRowColumn>
           <TableRowColumn>{ team.position }</TableRowColumn>
         </TableRow>
       ))
     )
   }
   
   render () {
     return (
       <Table selectable={ false } className='team-stats-table' style={{ width: '100.1%' }}>
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <TableRow>
             <TableHeaderColumn>ID</TableHeaderColumn>
             <TableHeaderColumn>Name</TableHeaderColumn>
             <TableHeaderColumn>Position</TableHeaderColumn>
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
  teams: state.admin.stats.teams
})

export default connect(mapStateToProps)(TeamStatsTable)