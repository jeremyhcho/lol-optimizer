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
      players: [],
      sortBy: 'name',
      order: 'asc',
      numeric: 0,
      scrollLock: false
    }

    this.sortTable = this.sortTable.bind(this)
  }

  componentWillReceiveProps (newProps) {
    let newState = {}

    if (this.parseScrollLock(newProps) != this.state.scrollLock) {
      newState.scrollLock = !this.state.scrollLock
    }

    if (!isEqual(this.props.players, newProps.players)) {
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
 
  sortedPlayers () {
    return (
      this.state.players.sort((current, next) => {
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
 
  renderTable () {
    if (this.props.players.length) {
      return (
        this.sortedPlayers().map((player) => {
          let visible = player.name.toLowerCase().includes(this.props.searchText.toLowerCase())

          return (
            <ScrollableRow
              cols={ this.parseCols() }
              defaultColWidth={ 75 }
              object={ player }
              key={ player.remote_id }
              style={{ display: visible ? 'table-row' : 'none' }}
              scrollLock={ this.state.scrollLock }
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
        className='player-stats-table'
        wrapperStyle={{ width: '100%' }}
        style={{ width: '100%' }}
        bodyStyle={{ overflow: 'visible' }}
      >
        <TableHeader
          displaySelectAll={ false }
          adjustForCheckbox={ false }>
          <ScrollableHeader
            cols={ this.parseHeader() }
            defaultColWidth={ 75 }
            sortBy={ this.state.sortBy }
            order={ this.state.order }
            sortTable={ this.sortTable }
            scrollLock={ this.state.scrollLock }
          />
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

export default Dimensions()(
  connect(mapStateToProps)(PlayerStatsTable)
)