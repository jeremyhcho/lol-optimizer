import React from 'react'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import { Tabs, Tab } from 'material-ui/Tabs'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'

// Components
import Loading from 'components/shared/loading'
import PlayerStatsTable from 'components/admin/stats/player_stats_table'
import TeamStatsTable from 'components/admin/stats/team_stats_table'

const durationOptions = [
  { value: 'season', label: 'Season' },
  { value: 'last_3', label: 'Last 3 Matches' },
  { value: 'last_5', label: 'Last 5 Matches' },
  { value: 'last_10', label: 'Last 10 Matches' }
]

const statTypeOptions = [
  { value: 'actual', label: 'Actual' },
  { value: 'predicted', label: 'Predicted' }
]

class StatsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: 'players',
      statType: 'actual',
      duration: 'season'
    }
    
    this.changeTab = this.changeTab.bind(this)
    this.changeParams = this.changeParams.bind(this)
  }
  
  changeTab () {
    if (this.state.show == 'players') {
      this.setState({ show: 'teams' })
    } else {
      this.setState({ show: 'players' })
    }
  }
  
  changeParams (field) {
    return (e, index, val) => this.setState({ [field]: val })
  }
  
  renderTab () {
    return (
      <Row>
        <Col xs={ 12 }>
          <Paper style={{ height: '100%', minHeight: 'calc(100vh - 200px)', position: 'relative' }}>
            <Row start='xs'>
              <DropDownMenu
                onChange={ this.changeParams('statType') }
                value={ this.state.statType }
                underlineStyle={{ display: 'none' }}
                labelStyle={{ color: '#9EA3B4', border: '1px solid #9EA3B4', lineHeight: '40px', borderRadius: '200px' }}
                iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
                style={{ margin: '25px 0 0 25px' }}>
                {
                  statTypeOptions.map((option, index) => (
                    <MenuItem
                      value={ option.value }
                      primaryText={ option.label }
                      style={{ color: '#9EA3B4' }}
                    />
                  ))
                }
              </DropDownMenu>

              <DropDownMenu
                onChange={ this.changeParams('duration') }
                value={ this.state.duration }
                underlineStyle={{ display: 'none' }}
                labelStyle={{ color: '#9EA3B4', border: '1px solid #9EA3B4', lineHeight: '40px', borderRadius: '200px' }}
                iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
                style={{ margin: '25px 0 0 25px' }}>
                {
                  durationOptions.map((option, index) => (
                    <MenuItem
                      key={ index }
                      value={ option.value }
                      primaryText={ option.label }
                      style={{ color: '#9EA3B4' }}
                    />
                  ))
                }
              </DropDownMenu>
            </Row>
            
            <Row style={{ position: 'relative', height: 'calc(100% - 73px)' }}>
               { this.renderTable() }
            </Row>
          </Paper>
        </Col>
      </Row>
    )
  }
  
  renderTable () {
    // if (this.props.stats) {
    if (this.state.show == 'players') {
      return <PlayerStatsTable />
    } else {
      return <TeamStatsTable />
    }
    // } else {
    //   return <Loading />
    // }
  }
  
  render () {
    return (
      <Row style={{ padding: '45px 45px 0' }} className='stats-wrapper'>
        <Col xs={ 12 }>
          <Tabs
            value={ this.state.show }
            onChange={ this.changeTab }
            tabTemplateStyle={{ textAlign: 'center' }}>
            <Tab label='Players' value='players'>
              { this.renderTab() }
            </Tab>
    
            <Tab label='Teams' value='teams'>
              { this.renderTab() }
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

export default StatsIndex