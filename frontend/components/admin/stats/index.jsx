import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import { Tabs, Tab } from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'

// Components
import Loading from 'components/shared/loading'
import PlayerStatsTable from 'components/admin/stats/player_stats_table'
import TeamStatsTable from 'components/admin/stats/team_stats_table'
import ActualToolbar from 'components/admin/stats/toolbars/actual'
import PredictedToolbar from 'components/admin/stats/toolbars/predicted'
import CompareToolbar from 'components/admin/stats/toolbars/compare'

// Actions
import { resetStats, changeParams } from 'actions/admin/stat_actions'

// Plugins
import isEqual from 'lodash/isEqual'

class StatsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: 'players',
      searchText: ''
    }
    
    this.changeStatType = this.changeStatType.bind(this)
    this.changeTab = this.changeTab.bind(this)
    this.triggerSearch = this.triggerSearch.bind(this)
  }
  
  componentWillUnmount () {
    this.props.resetStats()
  }
  
  changeTab () {
    if (this.state.show == 'players') {
      this.setState({ show: 'teams' })
    } else {
      this.setState({ show: 'players' })
    }
  }
  
  changeStatType (e, key, statType) {
    if (this.props.statType != statType) {
      this.props.resetStats()
      this.props.changeParams('statType', statType)
    }
  }
  
  triggerSearch (searchText) {
    this.setState({ searchText })
  }
  
  renderStatsToolbar () {
    if (this.props.statType == 'actual') {
      return (
        <ActualToolbar
          changeStatType={ this.changeStatType }
          triggerSearch={ this.triggerSearch }
        />
      )
    } else if (this.props.statType == 'predicted') {
      return (
        <PredictedToolbar
          changeStatType={ this.changeStatType }
          triggerSearch={ this.triggerSearch }
        />
      )
    } else {
      return (
        <CompareToolbar
          changeStatType={ this.changeStatType }
          triggerSearch={ this.triggerSearch }
        />
      )
    }
  }

  renderTab () {
    return (
      <Row>
        <Col xs={ 12 }>
          <Paper style={{ height: '100%', minHeight: 'calc(100vh - 200px)', position: 'relative' }}>
            { this.renderStatsToolbar() }
            
            <Row style={{ position: 'relative', height: this.props.isFetching ? '100%' : '' }}>
               { this.renderTable() }
            </Row>
          </Paper>
        </Col>
      </Row>
    )
  }
  
  renderTable () {
    if (this.props.isFetching) {
      return <Loading />
    } else {
      if (this.state.show == 'players') {
        return (
          <PlayerStatsTable
            statType={ this.props.statType }
            searchText={ this.state.searchText }
          />
        )
      } else {
        return (
          <TeamStatsTable
            statType={ this.props.statType }
            searchText={ this.state.searchText }
          />
        )
      }
    }
  }
  
  render () {
    return (
      <Row style={{ padding: '45px 45px 30px' }} className='stats-wrapper'>
        <Col xs={ 12 } style={{ minWidth: '1045px' }}>
          <Tabs
            value={ this.state.show }
            onChange={ this.changeTab }
            tabTemplateStyle={{ textAlign: 'center' }}>
            <Tab label='Players' value='players'>
              { this.state.show == 'players' && this.renderTab() }
            </Tab>
    
            <Tab label='Teams' value='teams'>
              { this.state.show == 'teams' && this.renderTab() }
            </Tab>
          </Tabs>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.admin.stats.isFetching,
  statType: state.admin.stats.statType
})

const mapDispatchToProps = (dispatch) => ({
  resetStats: () => dispatch(resetStats()),
  changeParams: (key, value) => dispatch(changeParams(key, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsIndex)