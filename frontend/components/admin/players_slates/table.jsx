import React from 'react'

// Grid
import { Row, Col } from 'react-flexbox-grid'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress'
import { Tabs, Tab } from 'material-ui/Tabs'

// Components
import PlayersSlateRow from './row'

class PlayersSlateTable extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      show: 'players'
    }
    
    this.changeTab = this.changeTab.bind(this)
  }

  renderPlayerOrTeamRows () {
    if (this.state.show == 'players') {
      return (
        this.props.slate.players.map((row, index) => (
          <PlayersSlateRow
            key={ index }
            row={ row }
          />
        ))
      )
    } else {
      return (
        this.props.slate.teams.map((row, index) => (
          <PlayersSlateRow
            key={ index }
            row={ row }
          />
        ))
      )
    }
  }
  
  renderTable () {
    if (this.props.slate) {
      return (
        <Table selectable={ false } className='player-slates-list'>
          <TableHeader
            displaySelectAll={ false }
            adjustForCheckbox={ false }>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Salary</TableHeaderColumn>
              <TableHeaderColumn>Game Info</TableHeaderColumn>
              <TableHeaderColumn>Team Abbrev</TableHeaderColumn>
            </TableRow>
          </TableHeader>
    
          <TableBody
            displayRowCheckbox={ false }
            adjustForCheckbox={ false }
            showRowHover={ true }>
            { this.renderPlayerOrTeamRows() }
          </TableBody>
        </Table>
      )
    } else {
      return <CircularProgress />
    }
  }
  
  changeTab () {
    if (this.state.show == 'players') {
      this.setState({ show: 'teams' })
    } else {
      this.setState({ show: 'players' })
    }
  }

  render () {
    const paddingTop = this.props.slate ? '0px' : '100px'

    return (
      <Row size={ 12 }>
        <Col xs={ 12 }>
          <Tabs
            value={ this.state.show }
            onChange={ this.changeTab }
            tabTemplateStyle={{ textAlign: 'center', paddingTop: paddingTop }}>
            <Tab label='Players' value='players'>
              { this.renderTable() }
            </Tab>

            <Tab label='Teams' value='teams'>
              { this.renderTable() }
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

export default PlayersSlateTable