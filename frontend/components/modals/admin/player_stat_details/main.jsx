import React from 'react'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import {
  Card,
  CardHeader,
  CardActions
} from 'material-ui/Card'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

class PlayerStatMainSection extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Row>
        <Col xs={ 5 } xsOffset={ 1 }>
          <Card style={{ backgroundColor: '#404259' }}>
            <CardHeader
              title='Match History'
              subtitle='See historical performance by match'
              textStyle={{ padding: 0, width: '240px', marginRight: '10px' }}
              avatar={ <FontIcon className='fa fa-history' style={{ lineHeight: '50px' }}/> }
            >
              <IconButton iconClassName='fa fa-angle-right' />
            </CardHeader>
          </Card>

          <Card style={{ backgroundColor: '#404259', marginTop: '30px' }}>
            <CardHeader
              title='Recent News'
              subtitle='Up-to-date news gathered from multiple sources'
              textStyle={{ padding: 0, width: '240px', marginRight: '10px' }}
              avatar={ <FontIcon className='fa fa-newspaper-o' style={{ lineHeight: '50px' }}/> }
            >
              <IconButton iconClassName='fa fa-angle-right' />
            </CardHeader>
          </Card>
        </Col>

        <Col xs={ 5 }>
          <Card style={{ backgroundColor: '#404259' }}>
            <CardHeader
              title='Insights'
              subtitle='Statistics processed & converted to visual insights'
              textStyle={{ padding: 0, width: '240px', marginRight: '10px' }}
              avatar={ <FontIcon className='fa fa-pie-chart' style={{ lineHeight: '50px' }}/> }
            >
              <IconButton iconClassName='fa fa-angle-right' />
            </CardHeader>
          </Card>

          <Card style={{ backgroundColor: '#404259', marginTop: '30px' }}>
            <CardHeader
              title='Competitors'
              subtitle="Compare against players with similar salary"
              textStyle={{ padding: 0, width: '240px', marginRight: '10px' }}
              avatar={ <FontIcon className='fa fa-exchange' style={{ lineHeight: '50px' }}/> }
            >
              <IconButton iconClassName='fa fa-angle-right' />
            </CardHeader>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default PlayerStatMainSection