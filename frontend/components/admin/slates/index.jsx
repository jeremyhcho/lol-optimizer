import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

// Actions
import { fetchSlates, resetSlates } from 'actions/admin/slate_actions'
import { openModal } from 'actions/modal_actions'

// Grid
import { Grid, Row, Col } from 'react-styled-flexboxgrid'

// Components
import SlatesToolbar from './toolbar'
import SlatesTable from './table'
import CreateSlateModal from 'components/modals/admin/create_slate'
import Loading from 'components/shared/loading'

// Material UI
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

class SlatesIndex extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      from: new Date(),
      to: new Date()
    }

    this.handleChangeToDate = this.handleChangeToDate.bind(this)
    this.handleChangeFromDate = this.handleChangeFromDate.bind(this)
  }
  
  componentDidMount () {
    this.props.fetchSlates({
      from: this.state.from.toString(),
      to: this.state.to.toString()
    })
  }
  
  componentWillUnmount () {
    this.props.resetSlates()
  }
  
  handleChangeToDate (e, date) {
    this.setState({ to: date })

    this.props.fetchSlates({
      from: this.state.from.toString(),
      to: date.toString()
    })
  }
  
  handleChangeFromDate (e, date) {
    this.setState({ from: date })

    this.props.fetchSlates({
      from: date.toString(),
      to: this.state.to.toString()
    })
  }
  
  renderSlatesTable () {
    if (this.props.slatesFetching) {
      return <Loading />
    } else {
      return <SlatesTable slates={ this.props.slates } />
    }
  }

  render () {
    return (
      <Row className='slates-wrapper'>
        <Col xs={ 12 } style={{ position: 'relative', padding: '50px 45px 0 45px' }}>
          <RaisedButton
            label="Add Slate"
            icon={ <FontIcon className='fa fa-plus' style={{ fontSize: '12px' }}/> }
            style={{ position: 'absolute', top: 0, right: '45px' }}
            onTouchTap={ this.props.openModal }
          />

          <Paper rounded={ false } style={{ paddingBottom: '10px' }}>
            <SlatesToolbar
              to={ this.state.to }
              from={ this.state.from }
              handleChangeToDate={ this.handleChangeToDate }
              handleChangeFromDate={ this.handleChangeFromDate }
            />
          </Paper>

          <Paper
            rounded={ false }
            style={{ minHeight: '80px', position: 'relative', padding: '20px', marginTop: '35px' }}>
            { this.renderSlatesTable() }
          </Paper>
        </Col>
        
        <CreateSlateModal />
      </Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  slates: state.admin.slates.slatesList,
  slatesFetching: state.admin.slates.slatesFetching
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSlates: (dateParams) => dispatch(fetchSlates(dateParams)),
  openModal: () => dispatch(openModal('createSlate')),
  resetSlates: () => dispatch(resetSlates())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlatesIndex)