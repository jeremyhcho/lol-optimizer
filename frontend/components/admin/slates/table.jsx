import React from 'react'

// Material UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

class SlatesTable extends React.Component {
  constructor (props) {
    super(props)
  }
  
  formattedStartTime (startTime) {
    return startTime
  }
  
  renderSlateRows () {
    return (
      this.props.slates.map((slate, index) => (
        <TableRow key={ index }>
          <TableRowColumn>{ slate.id }</TableRowColumn>
          <TableRowColumn>{ slate.name }</TableRowColumn>
          <TableRowColumn>{ this.formattedStartTime(slate.start_time) }</TableRowColumn>
          <TableRowColumn>
            <IconButton iconClassName="fa fa-cog" onClick={ this.toggleDropdown } />
          </TableRowColumn>
        </TableRow>
      ))
    )
  }
  
  render () {
    return (
      <Row>
        <Col xs={ 10 } xsOffset={ 1 }>
          <Table selectable={ false } className='slates-list'>
            <TableHeader
              displaySelectAll={ false }
              adjustForCheckbox={ false }>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Start Time</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            
            <TableBody
              displayRowCheckbox={ false }
              adjustForCheckbox={ false }
              showRowHover={ true }>
              { this.renderSlateRows() }
            </TableBody>
          </Table>
        </Col>
      </Row>
    )
  }
}

export default SlatesTable