import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

// Actions
import { changeStatParams } from 'actions/admin/stat_actions.js'

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
  }

  render () {
    return (
      <Row start='xs'>
        <DropDownMenu
          onChange={ this.props.changeStatParams('statType') }
          value={ this.props.params.statType }
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
                key={ index }
              />
            ))
          }
        </DropDownMenu>

        <DropDownMenu
          onChange={ this.props.changeStatParams('gamesBack') }
          value={ this.props.params.gamesBack }
          underlineStyle={{ display: 'none' }}
          labelStyle={{ color: '#9EA3B4', border: '1px solid #9EA3B4', lineHeight: '40px', borderRadius: '200px' }}
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
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  params: state.admin.stats.params
})

const mapDispatchToProps = (dispatch) => ({
  changeStatParams: (field) => (e, key, value) => dispatch(changeStatParams(field, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActualToolbar)