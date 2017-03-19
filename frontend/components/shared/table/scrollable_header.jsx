import React from 'react'

// Material UI
import { TableHeaderColumn, TableRow } from 'material-ui/Table'

class ScrollableHeader extends React.Component {
  constructor (props) {
    super(props)
  }
  
  renderHeaders () {
    return (
      this.props.cols.map((col, index) => (
        <TableHeaderColumn style={ this.buildColStyles(col, index) } key={ index }>
          { col.name }
        </TableHeaderColumn>  
      ))
    )
  }
  
  buildColStyles (col, index) {
    const styles = {}
    
    if (col.fixedPos) {
      styles.position = 'absolute'
      styles.left = `${this.props.cols.slice(0, index).reduce((total, colObj) => (
        total + 48 + (colObj.width || this.props.defaultColWidth)
      ), 0)}px`
      styles.lineHeight = '56px'
      styles.backgroundColor = '#2F3243'
      styles.zIndex = 1
    } else if (col.padding) {
      styles.paddingLeft = `${this.props.cols.slice(0, index).reduce((total, colObj) => (
        total + 55 + (colObj.width || this.props.defaultColWidth)
      ), 0)}px`
    }

    styles.width = `${col.width || this.props.defaultColWidth}px`

    return styles
  }
  
  render () {
    return (
      <TableRow style={{ position: 'relative' }}>
        { this.renderHeaders() }
      </TableRow>
    )
  }
}

export default ScrollableHeader