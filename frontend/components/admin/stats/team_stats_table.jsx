import React from 'react'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'

class TeamStatsTable extends React.Component {
   constructor (props) {
     super(props)
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
             <TableHeaderColumn>Salary</TableHeaderColumn>
             <TableHeaderColumn>Team</TableHeaderColumn>
             <TableHeaderColumn>Game Info</TableHeaderColumn>
           </TableRow>
         </TableHeader>
   
         <TableBody
           displayRowCheckbox={ false }
           adjustForCheckbox={ false }
           showRowHover={ true }>
         </TableBody>
       </Table>
     )
   }
}

export default TeamStatsTable