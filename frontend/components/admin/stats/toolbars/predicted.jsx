import React from 'react'
import { connect } from 'react-redux'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'

const statTypeOptions = [
  { value: 'actual', label: 'Actual' },
  { value: 'predicted', label: 'Predicted' },
  { value: 'compare', label: 'Compare' }
]

class PredictedToolbar extends React.Component {
  constructor (props) {
    super(props)

    this.handleDateChange = this.handleDateChange.bind(this)
  }
  
  handleDateChange (e, date) {
    this.props.changeStatParams('date')(e, null, date)
  }
  
  renderSlates () {
    if (this.props.params.slates) {
      return (
        this.props.slates.map((slate) => (
          <MenuItem
            value={ slate.id }
            primaryText={ slate.name }
            style={{ color: '#9EA3B4' }}
            key={ slate.id }
          />
        ))
      )
    } else {
      return <MenuItem value={ 0 } primaryText='No Slates Available' />
    }
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

        <DatePicker
          onChange={ this.handleDateChange }
          autoOk={ true }
          floatingLabelText="Date"
          defaultDate={ this.props.params.date }
          container="inline"
          style={{ height: '65px', margin: '5px 0 0 25px' }}
        />
      
        <DropDownMenu
          onChange={ this.props.changeStatParams('slateId') }
          value={ this.props.params.slateId }
          underlineStyle={{ display: 'none' }}
          labelStyle={{ color: '#9EA3B4', border: '1px solid #9EA3B4', lineHeight: '40px', borderRadius: '200px' }}
          iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
          style={{ margin: '25px 0 0 25px' }}
          disabled={ this.props.slates.length ? false : true }>
          { this.renderSlates() }
        </DropDownMenu>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  slates: state.admin.stats.slates,
  params: state.admin.stats.params
})

const mapDispatchToProps = (dispatch) => ({
  changeStatParams: (field) => (e, key, value) => dispatch(changeStatParams(field, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictedToolbar)