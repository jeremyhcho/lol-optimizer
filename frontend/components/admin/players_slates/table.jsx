import React from 'react'
import withRouter from 'react-router'

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
import { Tabs, Tab } from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'

// Components
import PlayersSlateRow from './row'
import Loading from 'components/shared/loading'

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
        <Table selectable={ false } className='player-slates-list' style={{ width: '100.1%' }}>
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
            { this.renderPlayerOrTeamRows() }
          </TableBody>
        </Table>
      )
    } else {
      return <Loading />
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
      <Row style={{ marginTop: '20px' }}>
        <Col xs={ 12 }>
          <Tabs
            value={ this.state.show }
            onChange={ this.changeTab }
            tabTemplateStyle={{ textAlign: 'center', paddingTop: paddingTop }}>
            <Tab label='Players' value='players' className='players'>
              { this.renderTable() }
            </Tab>

            <Tab label='Teams' value='teams' className='teams'>
              { this.renderTable() }
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

export default PlayersSlateTable