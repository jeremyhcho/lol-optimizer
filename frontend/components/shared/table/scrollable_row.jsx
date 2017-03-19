import React from 'react'

// Material UI
import { TableRow, TableRowColumn } from 'material-ui/Table'

class ScrollableRow extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      hovered: false
    }
  }
  
  renderCols () {
    let currentKeyVal

    return (
      this.props.cols.map((col, index) => {
        currentKeyVal = this.props.object

        for (const key of col.key.split('.')) {
          currentKeyVal = currentKeyVal[key]
        }

        return (
          <TableRowColumn
            style={ this.buildColStyles(col, index) }
            key={ index }>
            { currentKeyVal || col.defaultVal }
          </TableRowColumn>
        )
      })
    )
  }
  
  buildColStyles (col, index) {
    const styles = {}
    
    if (col.fixedPos) {
      styles.position = 'absolute'
      styles.left = `${this.props.cols.slice(0, index).reduce((total, colObj) => (
        total + 48 + (colObj.width || this.props.defaultColWidth)
      ), 0)}px`
      styles.lineHeight = '50px'
    } else if (col.padding) {
      styles.paddingLeft = `${this.props.cols.slice(0, index).reduce((total, colObj) => (
        total + 55 + (colObj.width || this.props.defaultColWidth)
      ), 0)}px`
    }

    styles.width = `${col.width || this.props.defaultColWidth}px`
    styles.backgroundColor = this.state.hovered ? '#505464' : '#2F3243'
    
    return styles
  }
  
  handleMouseOver (bool) {
    return (e) => this.setState({ hovered: bool })
  }
  
  render () {
    return (
      <TableRow
        onMouseOver={ this.handleMouseOver(true) }
        onMouseOut={ this.handleMouseOver(false) }
        style={{ position: 'relative' }}>
        { this.renderCols() }
      </TableRow>)
  }
}

export default ScrollableRow