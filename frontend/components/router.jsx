import React from 'react'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from 'components/app'
import Hero from 'components/hero/hero'
import LoginContainer from 'components/session/login_container'
import SignupContainer from 'components/session/signup_container'

// Admin Components
import AdminLayout from 'components/admin/admin_layout'
import AdminSlatesContainer from 'components/admin/admin_slates_container'

// 404 Component
import NotFound from 'components/not_found'

class AppRouter extends React.Component {
  constructor (props) {
    super(props)
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this)
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
    this._ensureUserIsAdmin = this._ensureUserIsAdmin.bind(this)

    this.routes = {
      path: '/',
      component: App,
      indexRoute: {
        component: Hero,
        onEnter: this._redirectIfLoggedIn
      },
      childRoutes: [
        { path: 'login', component: LoginContainer, onEnter: this._redirectIfLoggedIn },
        { path: 'signup', component: SignupContainer, onEnter: this._redirectIfLoggedIn },
        {
          component: AdminLayout,
          onEnter: this._ensureUserIsAdmin,
          childRoutes: [
            {
              path: 'admin/slates',
              component: AdminSlatesContainer,
              onEnter: this._ensureUserIsAdmin
            }
          ]
        },
        { path: '*', component: NotFound }
      ]
    }
  }

  _ensureUserIsAdmin (nextState, replace) {
    if (!this.props.store.getState().session.currentUser ||
        !this.props.store.getState().session.currentUser.is_admin) {
      replace('/')
    }
  }

  _ensureLoggedIn (nextState, replace) {
    if (!this.props.store.getState().session.currentUser) {
      replace('/login')
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace('/admin/slates')
    }
  }

  render () {
    return <Router history={ browserHistory } routes={ this.routes } />
  }
}

export default AppRouter
