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
    let vals
    let formattedVal

    return (
      this.props.cols.map((col, index) => {
        currentKeyVal = this.props.object
        vals = {}
        
        for (const key of col.key.split('|')) {
          for (const key2 of key.split('.')) {
            currentKeyVal = currentKeyVal[key2]
          }
          
          vals[key] = currentKeyVal || col.defaultVal
          currentKeyVal = this.props.object
        }

        formattedVal = col.innerHTML

        for (let [key, val] of Object.entries(vals)) {
          if (formattedVal) {
            formattedVal = formattedVal.replace(key, val)
          } else {
            formattedVal = val.toString()
          }
        }

        return (
          <TableRowColumn
            style={ this.buildColStyles(col, index) }
            key={ index }>
            <div dangerouslySetInnerHTML={{ __html: formattedVal }}>
            </div>
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
    const styles = {
      ...this.props.style,
      position: 'relative'
    }

    return (
      <TableRow
        onMouseOver={ this.handleMouseOver(true) }
        onMouseOut={ this.handleMouseOver(false) }
        style={ styles }>
        { this.renderCols() }
      </TableRow>)
  }
}

export default ScrollableRow