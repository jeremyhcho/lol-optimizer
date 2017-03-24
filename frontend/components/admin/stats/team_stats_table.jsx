import React from 'react'
import { connect } from 'react-redux'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

// Components
import ScrollableHeader from 'components/shared/table/scrollable_header'
import ScrollableRow from 'components/shared/table/scrollable_row'

// Constants
import {
  ActualTeamHeaders,
  ActualTeamCols,
  PredictedTeamHeaders,
  PredictedTeamCols,
  CompareTeamHeaders,
  CompareTeamCols
} from 'constants/admin_constants'

// Plugins
import isEqual from 'lodash/isEqual'

class TeamStatsTable extends React.Component {
   constructor (props) {
     super(props)
     
     this.state = {
       teams: [],
       sortBy: 'name',
       order: 'asc',
       numeric: 0
     }
     
     this.sortTable = this.sortTable.bind(this)
   }

   componentWillReceiveProps (newProps) {
     if (isEqual(this.props.teams, newProps.teams)) {
       return
     }

     this.setState({ teams: [] })
     this.interval = setInterval(this.addItems.bind(this), 700)
   }
   
   componentDidMount () {
     this.interval = setInterval(this.addItems.bind(this), 700)
   }
   
   componentWillUnmount () {
     this.interval && clearInterval(this.interval)
     this.interval = null
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

   sortedPlayers () {
     return (
       this.state.teams.sort((current, next) => {
         let currentKeyVal = current
         let nextKeyVal = next
         
         for (const key of this.state.sortBy.split('.')) {
           currentKeyVal = currentKeyVal[key]
           nextKeyVal = nextKeyVal[key]
         }

         if (this.state.numeric) {
           currentKeyVal = currentKeyVal || 0
           nextKeyVal = nextKeyVal || 0

           if (this.state.order == 'asc') {
             return currentKeyVal - nextKeyVal
           } else {
             return nextKeyVal - currentKeyVal
           }
         } else {
           if (this.state.order == 'asc') {
             if (currentKeyVal.toLowerCase() < nextKeyVal.toLowerCase()) {
               return -1
             }

             if (currentKeyVal.toLowerCase() > nextKeyVal.toLowerCase()) {
               return 1
             }
             
             return 0
           } else {
             if (currentKeyVal.toLowerCase() > nextKeyVal.toLowerCase()) {
               return -1
             }

             if (currentKeyVal.toLowerCase() < nextKeyVal.toLowerCase()) {
               return 1
             }

             return 0
           }
         }
       })
     )
   }
   
   renderTable () {
     if (this.props.teams.length) {
       return (
         this.sortedPlayers().map(team => {
           let visible = team.name.toLowerCase().includes(this.props.searchText.toLowerCase())

           return (
             <ScrollableRow
               cols={ this.parseCols() }
               defaultColWidth={ 75 }
               object={ team }
               key={ team.remote_id }
               style={{ display: visible ? 'table-row' : 'none' }}
             />
           )
         })
       )
     } else {
       return (
         <TableRow>
           <TableRowColumn style={{ textAlign: 'center' }}>
             There are no stats available with these parameters
           </TableRowColumn>
         </TableRow>
       )
     }
   }
   
   parseHeader () {
     switch (this.props.statType) {
       case 'actual':
         return ActualTeamHeaders

       case 'predicted':
         return PredictedTeamHeaders

       case 'compare':
         return CompareTeamHeaders
     }
   }
   
   parseCols () {
     switch (this.props.statType) {
       case 'actual':
         return ActualTeamCols

       case 'predicted':
         return PredictedTeamCols

       case 'compare':
         return CompareTeamCols
     }
   }

   sortTable (e) {
     const key = e.currentTarget.dataset.headerkey
     const numeric = e.currentTarget.dataset.numeric

     if (this.state.sortBy == key) {
       let order = this.state.order
     
       if (order == 'asc') {
         order = 'desc'
       } else if (order == 'desc') {
         order = 'asc'
       }

       this.setState({ order, numeric: parseInt(numeric) })
     } else {
       this.setState({ sortBy: key, order: 'asc', numeric: parseInt(numeric) })
     }
   }

   render () {
     return (
       <Table
         selectable={ false }
         className='team-stats-table'
         style={{ width: '100.1%', display: this.state.teams.length ? 'block' : '' }}
         bodyStyle={{ overflow: 'visible' }}>
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <ScrollableHeader
             cols={ this.parseHeader() }
             defaultColWidth={ 75 }
             sortBy={ this.state.sortBy }
             order={ this.state.order }
             sortTable={ this.sortTable }
           />
         </TableHeader>
   
         <TableBody
           displayRowCheckbox={ false }
           adjustForCheckbox={ false }
           showRowHover={ this.state.teams.length ? true : false }>
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