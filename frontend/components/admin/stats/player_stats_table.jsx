import React from 'react'
import { connect } from 'react-redux'

// Material UI
import {
  Table,
  TableBody,
  TableHeader
} from 'material-ui/Table'

// Components
import ScrollableHeader from 'components/shared/table/scrollable_header'
import ScrollableRow from 'components/shared/table/scrollable_row'

const playerHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true },
  { name: 'Position', fixedPos: true, width: 75 },
  { name: 'Team', fixedPos: true, width: 50 },
  { name: 'Kills', padding: true, width: 75 },
  { name: 'Deaths', width: 75 },
  { name: 'Assists', width: 75 },
  { name: 'Creep Score', width: 75 },
  { name: '10+ K/A', width: 75 },
  { name: '3K', width: 75 },
  { name: '4K', width: 75 },
  { name: '5K', width: 75 }
]

const playerCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true },
  { key: 'position', fixedPos: true, defaultVal: 'N/A', width: 75 },
  { key: 'team', fixedPos: true, width: 50 },
  { key: 'stats.kills', defaultVal: 0, padding: true, width: 75 },
  { key: 'stats.deaths', defaultVal: 0, width: 75 },
  { key: 'stats.assists', defaultVal: 0, width: 75 },
  { key: 'stats.cs', defaultVal: 0, width: 75 },
  { key: 'stats.ten_ka', defaultVal: 0, width: 75 },
  { key: 'stats.triple_kills', defaultVal: 0, width: 75 },
  { key: 'stats.quad_kills', defaultVal: 0, width: 75 },
  { key: 'stats.penta_kills', defaultVal: 0, width: 75 }
]

class PlayerStatsTable extends React.Component {
   constructor (props) {
     super(props)
   }
   
   renderTable () {
     return (
       this.props.players.map((player) => (
         <ScrollableRow
           cols={ playerCols }
           defaultColWidth={ 75 }
           object={ player }
           key={ player.remote_id }
          />
       ))
     )
   }
   
   render () {
     return (
       <Table
         selectable={ false }
         className='player-stats-table'
         style={{ width: '100.1%' }}
         bodyStyle={{ overflow: 'visible' }}
         >
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <ScrollableHeader cols={ playerHeaders } defaultColWidth={ 75 } />
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