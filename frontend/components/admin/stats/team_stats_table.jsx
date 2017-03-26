import React from 'react'
import { connect } from 'react-redux'
import Dimensions from 'react-dimensions'

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

// Actions
import { openModal } from 'actions/modal_actions'

// Plugins
import isEqual from 'lodash/isEqual'

class TeamStatsTable extends React.Component {
   constructor (props) {
     super(props)
     
     this.state = {
       teams: [],
       sortBy: 'name',
       order: 'asc',
       numeric: 0,
       scrollLock: false
     }
     
     this.sortTable = this.sortTable.bind(this)
     this.viewDetails = this.viewDetails.bind(this)
   }
   
   componentWillReceiveProps (newProps) {
     let newState = {}

     if (this.parseScrollLock(newProps) != this.state.scrollLock) {
       newState.scrollLock = !this.state.scrollLock
     }

     if (!isEqual(this.props.teams, newProps.teams)) {
       newState.players = []
     }

     this.setState(newState)
     this.interval = setInterval(this.addItems.bind(this), 700)
   }
   
   componentDidMount () {
     this.interval = setInterval(this.addItems.bind(this), 700)
     this.setState({ scrollLock: this.parseScrollLock() })
   }
   
   componentWillUnmount () {
     this.interval && clearInterval(this.interval)
     this.interval = null
   }

   addItems () {
     if ((this.state.teams.length + 20) > this.props.teams.length) {
       clearInterval(this.interval)
       this.interval = null
     }

     this.setState({
       teams: this.state.teams.concat(
         this.props.teams.slice(
           this.state.teams.length,
           this.state.teams.length + 20
         )
       )
     })
   }

   sortedTeams () {
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
             if (currentKeyVal < nextKeyVal) {
               return -1
             }

             if (currentKeyVal > nextKeyVal) {
               return 1
             }
             
             return 0
           } else {
             if (currentKeyVal > nextKeyVal) {
               return -1
             }
             
             if (currentKeyVal < nextKeyVal) {
               return 1
             }
             
             return 0
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
   
   viewDetails (e) {
     if (e.target.className.includes('cell-icon')) {
       this.props.viewTeamStatDetails(parseInt(e.target.dataset.remote_id))
     }
   }
   
   renderTable () {
     if (this.props.teams.length) {
       return (
         this.sortedTeams().map(team => {
           let visible = team.name.toLowerCase().includes(this.props.searchText.toLowerCase())

           return (
             <ScrollableRow
               cols={ this.parseCols() }
               defaultColWidth={ 75 }
               object={ team }
               key={ team.remote_id }
               style={{ display: visible ? 'table-row' : 'none' }}
               scrollLock={ this.state.scrollLock }
               viewDetails={ this.viewDetails }
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

   parseScrollLock (props = null) {
     props = props ? props : this.props
     let headers = this.parseHeader()

     let headersLength = headers.reduce((sum, header) => (
       sum + (header.width || 75) + 48
     ), 0)

     return headersLength > props.containerWidth
   }

   render () {
     return (
       <Table
         selectable={ false }
         className='team-stats-table'
         style={{ width: '100%' }}
         wrapperStyle={{ width: '100%' }}
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
             scrollLock={ this.state.scrollLock}
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

const mapDispatchToProps = (dispatch) => ({
  viewTeamStatDetails: (teamId) => (
    dispatch(openModal('viewTeamStatDetails', { teamId }))
  )
})

export default Dimensions()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamStatsTable)
)