import React from 'react'

// Components
import AdminSidebar from 'components/admin/sidebar'
import AdminTopNav from 'components/admin/top_nav'

// Grid
import { Grid, Row, Col } from 'react-flexbox-grid'

class AdminLayout extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div id='admin-wrapper'>
        <AdminTopNav />
        
        <div className='main'>
          <AdminSidebar />

          <div className='section'>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default AdminLayout