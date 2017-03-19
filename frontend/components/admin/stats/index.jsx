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
import { fetchStats, resetStats } from 'actions/admin/stat_actions'

// Plugins
import isEqual from 'lodash/isEqual'

class StatsIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: 'players'
    }
    
    this.changeTab = this.changeTab.bind(this)
  }
  
  componentDidMount () {
    this.props.fetchStats({
      stat_type: this.props.params.statType,
      games_back: this.props.params.gamesBack,
      date: this.props.params.date,
      slate_id: this.props.params.slateId
    })
  }
  
  componentWillUnmount () {
    this.props.resetStats()
  }
  
  componentWillReceiveProps (newProps) {
    if (isEqual(this.props.params, newProps.params)) {
      return
    }

    this.props.fetchStats({
      stat_type: newProps.params.statType,
      games_back: newProps.params.gamesBack,
      date: newProps.params.date,
      slate_id: newProps.params.slateId
    })
  }
  
  changeTab () {
    if (this.state.show == 'players') {
      this.setState({ show: 'teams' })
    } else {
      this.setState({ show: 'players' })
    }
  }
  
  renderStatsToolbar () {
    if (this.props.params.statType == 'actual') {
      return <ActualToolbar />
    } else if (this.props.params.statType == 'predicted') {
      return <PredictedToolbar />
    } else {
      return <CompareToolbar />
    }
  }

  renderTab () {
    return (
      <Row>
        <Col xs={ 12 }>
          <Paper style={{ height: '100%', minHeight: 'calc(100vh - 200px)', position: 'relative' }}>
            { this.renderStatsToolbar() }
            
            <Row style={{ position: 'relative', height: 'calc(100% - 73px)' }}>
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
        return <PlayerStatsTable />
      } else {
        return <TeamStatsTable />
      }
    }
  }
  
  render () {
    return (
      <Row style={{ padding: '45px 45px 30px' }} className='stats-wrapper'>
        <Col xs={ 12 } style={{ minWidth: '850px' }}>
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

const mapStateToProps = (state) => ({
  params: state.admin.stats.params,
  isFetching: state.admin.stats.isFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchStats: (params) => dispatch(fetchStats(params)),
  resetStats: () => dispatch(resetStats())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsIndex)