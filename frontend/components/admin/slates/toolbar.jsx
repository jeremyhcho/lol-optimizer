import React from 'react'

// Material UI
import DatePicker from 'material-ui/DatePicker'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

class SlatesToolbar extends React.Component {
  constructor (props) {
    super(props)
    this.disableFromDates = this.disableFromDates.bind(this)
    this.disableToDates = this.disableToDates.bind(this)
  }

  disableFromDates (date) {
    return date > this.props.to || date > new Date()
  }
  
  disableToDates (date) {
    return date < this.props.from
  }

  render () {
    return (
      <Row>
        <Col xs={ 10 } xsOffset={ 1 }>
          <Row>
            <Col xs={ 6 } style={{ textAlign: 'center' }}>
              <DatePicker
                onChange={ this.props.handleChangeFromDate }
                autoOk={ true }
                floatingLabelText="From"
                defaultDate={ this.props.from }
                className='from-date'
                container="inline"
                style={{ display: 'inline-block' }}
                shouldDisableDate={ this.disableFromDates }
              />
            </Col>

            <Col xs={ 6 } style={{ textAlign: 'center' }}>
              <DatePicker
                onChange={ this.props.handleChangeToDate }
                autoOk={ true }
                floatingLabelText="To"
                defaultDate={ this.props.to }
                className='to-date'
                container="inline"
                style={{ display: 'inline-block' }}
                shouldDisableDate={ this.disableToDates }
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default SlatesToolbar