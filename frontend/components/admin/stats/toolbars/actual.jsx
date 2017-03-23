import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import FlatButton from 'material-ui/FlatButton'

// Actions
import { fetchStats, changeParams } from 'actions/admin/stat_actions.js'

const durationOptions = [
  { value: -1, label: 'Season' },
  { value: 3, label: 'Last 3 Matches' },
  { value: 5, label: 'Last 5 Matches' },
  { value: 10, label: 'Last 10 Matches' }
]

const statTypeOptions = [
  { value: 'actual', label: 'Actual' },
  { value: 'predicted', label: 'Predicted' },
  { value: 'compare', label: 'Compare' }
]

class ActualToolbar extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      searchText: ''
    }

    this.changeGamesBack = this.changeGamesBack.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  
  componentDidMount () {
    this.props.fetchStats({
      stat_type: 'actual',
      games_back: this.props.gamesBack
    })
  }
  
  componentWillReceiveProps (newProps) {
    if (newProps.gamesBack != this.props.gamesBack) {
      this.props.fetchStats({ stat_type: 'actual', games_back: newProps.gamesBack })  
    }
  }
  
  changeGamesBack (e, key, gamesBack) {
    this.props.changeParams('gamesBack', gamesBack)
  }
  
  handleSearch (e, val) {
    e.preventDefault()
    this.setState({ searchText: val })
  }
  
  handleKeyDown (e) {
    if (e.keyCode == 13) {
      e.preventDefault()
      this.props.triggerSearch(this.state.searchText)
    }
  }

  render () {
    return (
      <Row start='xs'>
        <DropDownMenu
          onChange={ this.props.changeStatType }
          value='actual'
          underlineStyle={{ display: 'none' }}
          labelStyle={{
            color: '#9EA3B4',
            border: '1px solid #9EA3B4',
            height: '40px'
            lineHeight: '40px',
            borderRadius: '200px'
          }}
          iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
          style={{ margin: '25px 0 0 25px' }}>
          {
            statTypeOptions.map((option, index) => (
              <MenuItem
                value={ option.value }
                primaryText={ option.label }
                style={{ color: '#9EA3B4' }}
                key={ index }
              />
            ))
          }
        </DropDownMenu>

        <DropDownMenu
          onChange={ this.changeGamesBack }
          value={ this.props.gamesBack }
          underlineStyle={{ display: 'none' }}
          labelStyle={{
            color: '#9EA3B4',
            border: '1px solid #9EA3B4',
            lineHeight: '40px',
            borderRadius: '200px',
            height: '40px'
          }}
          iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
          style={{ margin: '25px 0 0 25px' }}>
          {
            durationOptions.map((option, index) => (
              <MenuItem
                value={ option.value }
                primaryText={ option.label }
                style={{ color: '#9EA3B4' }}
                key={ index }
              />
            ))
          }
        </DropDownMenu>
        
        <TextField
          hintText='Search'
          underlineStyle={{ display: 'none' }}
          inputStyle={{
            color: '#9EA3B4',
            border: '1px solid #9EA3B4',
            lineHeight: '40px',
            borderRadius: '200px',
            padding: '0 20px',
            color: '#EEEEEE',
            fontSize: '15px'
          }}
          hintStyle={{
            lineHeight: '14px',
            paddingLeft: '20px',
            verticalAlign: 'middle',
            color: '#9EA3B4',
            fontSize: '15px'
          }}
          style={{ margin: '25px 0 0 25px', height: '40px', width: '200px' }}
          onChange={ this.handleSearch }
          onKeyDown={ this.handleKeyDown }
          value={ this.state.searchText }
        />
      
        <FlatButton
          icon={ <FontIcon className='material-icons'>search</FontIcon> }
          backgroundColor='#2F3243'
          style={{ margin: '27px 0 0 50px', minWidth: '35px' }}
          onTouchTap={ () => this.props.triggerSearch(this.state.searchText) }
        />
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  gamesBack: state.admin.stats.gamesBack
})

const mapDispatchToProps = (dispatch) => ({
  fetchStats: (params) => dispatch(fetchStats(params)),
  changeParams: (key, value) => dispatch(changeParams(key, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActualToolbar)