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

const teamHeaders = [
  { name: 'ID', fixedPos: true, width: 50 },
  { name: 'Name', fixedPos: true, width: 115 },
  { name: 'Position', fixedPos: true },
  { name: 'Wins', padding: true },
  { name: 'Losses' },
  { name: 'First Bloods', width: 100 },
  { name: 'Dragons' },
  { name: 'Barons' },
  { name: 'Towers' },
  { name: '< 30 Min' }
]

const teamCols = [
  { key: 'remote_id', fixedPos: true, width: 50 },
  { key: 'name', fixedPos: true, width: 115 },
  { key: 'position', fixedPos: true, defaultVal: 'N/A' },
  { key: 'stats.wins', defaultVal: 0, padding: true },
  { key: 'stats.losses', defaultVal: 0 },
  { key: 'stats.first_bloods', defaultVal: 0, width: 100 },
  { key: 'stats.dragon_kills', defaultVal: 0 },
  { key: 'stats.baron_kills', defaultVal: 0 },
  { key: 'stats.towers_destroyed', defaultVal: 0 },
  { key: 'stats.win_in_30_mins', defaultVal: 0 }
]

class TeamStatsTable extends React.Component {
   constructor (props) {
     super(props)
     
     this.state = {
       teams: []
     }
   }
   
   componentDidMount () {
     setTimeout(() => {
       this.interval = setInterval(this.addItems.bind(this), 200)
       this.setState({ teams: this.props.teams.slice(0, 10) })
     }, 900)
   }
   
   componentWillUnmount () {
     if (this.interval) {
       clearInterval(this.interval)
     }
   }

   addItems () {
     if ((this.state.teams.length + 10) > this.props.teams.length) {
       clearInterval(this.interval)
       this.interval = null
     }

     this.setState({
       teams: this.state.teams.concat(
         this.props.teams.slice(
           this.state.teams.length,
           this.state.teams.length + 10
         )
       )
     })
   }
   
   renderTable () {
     return (
       this.state.teams.map(team => (
         <ScrollableRow
           cols={ teamCols }
           defaultColWidth={ 75 }
           object={ team }
           key={ team.remote_id }
          />
       ))
     )
   }
   
   render () {
     return (
       <Table
         selectable={ false }
         className='team-stats-table'
         style={{ width: '100.1%' }}
         bodyStyle={{ overflow: 'visible' }}>
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <ScrollableHeader cols={ teamHeaders } defaultColWidth={ 75 } />
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