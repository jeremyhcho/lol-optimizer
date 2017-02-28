import React from 'react'

// Components
import AdminSidebar from 'components/admin/sidebar'
import AdminTopNav from 'components/admin/top_nav'

class AdminLayout extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div id='admin-wrapper'>
        <AdminSidebar />
        <AdminTopNav />

        <div className='section'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default AdminLayout