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
  ActualPlayerHeaders,
  ActualPlayerCols,
  PredictedPlayerHeaders,
  PredictedPlayerCols,
  ComparePlayerHeaders,
  ComparePlayerCols
} from 'constants/admin_constants'

// Plugins
import isEqual from 'lodash/isEqual'

class PlayerStatsTable extends React.Component {
   constructor (props) {
     super(props)
     
     this.state = {
       players: []
     }
   }
   
   componentWillReceiveProps (newProps) {
     if (isEqual(this.props.players, newProps.players)) {
       return
     }

     this.setState({ players: [] })
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
     if ((this.state.players.length + 60) >= this.props.players.length) {
       clearInterval(this.interval)
       this.interval = null
     }

     this.setState({
       players: this.state.players.concat(
         this.props.players.slice(
           this.state.players.length,
           this.state.players.length + 60
         )
       )
     })
   }
   
   renderTable () {
     if (this.props.players.length) {
       return (
         this.state.players.map((player) => {
           let visible = player.name.toLowerCase().includes(this.props.searchText.toLowerCase())

           return (
             <ScrollableRow
               cols={ this.parseCols() }
               defaultColWidth={ 75 }
               object={ player }
               key={ player.remote_id }
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
         return ActualPlayerHeaders

       case 'predicted':
         return PredictedPlayerHeaders

       case 'compare':
         return ComparePlayerHeaders
     }
   }
   
   parseCols () {
     switch (this.props.statType) {
       case 'actual':
         return ActualPlayerCols

       case 'predicted':
         return PredictedPlayerCols

       case 'compare':
         return ComparePlayerCols
     }
   }
   
   render () {
     return (
       <Table
         selectable={ false }
         className='player-stats-table'
         style={{ width: '100.1%', display: this.state.players.length ? 'block' : '' }}
         bodyStyle={{ overflow: 'visible' }}
         >
         <TableHeader
           displaySelectAll={ false }
           adjustForCheckbox={ false }>
           <ScrollableHeader cols={ this.parseHeader() } defaultColWidth={ 75 } />
         </TableHeader>
   
         <TableBody
           displayRowCheckbox={ false }
           adjustForCheckbox={ false }
           showRowHover={ this.state.players.length ? true : false }>
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