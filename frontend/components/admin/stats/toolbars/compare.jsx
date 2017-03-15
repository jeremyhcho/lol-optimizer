import React from 'react'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Material UI
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class CompareToolbar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div></div>
    // return (
    //   <Row start='xs'>
    //     <DropDownMenu
    //       onChange={ this.props.onChange('statType') }
    //       value={ this.props.statType }
    //       underlineStyle={{ display: 'none' }}
    //       labelStyle={{ color: '#9EA3B4', border: '1px solid #9EA3B4', lineHeight: '40px', borderRadius: '200px' }}
    //       iconStyle={{ fill: '#9EA3B4', right: '5px', top: '1px', padding: 0, width: '40px', height: '40px' }}
    //       style={{ margin: '25px 0 0 25px' }}>
    //       {
    //         this.props.statTypeOptions.map((option, index) => (
    //           <MenuItem
    //             value={ option.value }
    //             primaryText={ option.label }
    //             style={{ color: '#9EA3B4' }}
    //             key={ index }
    //           />
    //         ))
    //       }
    //     </DropDownMenu>
    //     
    //   </Row>
    // )
  }
}

export default CompareToolbar