import React from 'react'

// Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// Components
import App from 'components/app'
import Hero from 'components/hero/hero'
import LoginForm from 'components/session/login_form'
import SignupForm from 'components/session/signup_form'

// Admin Components
import AdminLayout from 'components/admin/admin_layout'
import SlatesIndex from 'components/admin/slates'
import SlateShow from 'components/admin/slates/show'
import ArticlesIndex from 'components/admin/articles'
import StatsIndex from 'components/admin/stats'

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
        { path: 'login', component: LoginForm, onEnter: this._redirectIfLoggedIn },
        { path: 'signup', component: SignupForm, onEnter: this._redirectIfLoggedIn },
        {
          component: AdminLayout,
          onEnter: this._ensureUserIsAdmin,
          childRoutes: [
            {
              path: 'admin/slates',
              component: SlatesIndex,
              onEnter: this._ensureUserIsAdmin,
            },
            {
              path: 'admin/slates/:id',
              component: SlateShow,
              onEnter: this._ensureUserIsAdmin
            },
            {
              path: 'admin/stats',
              component: StatsIndex,
              onEnter: this._ensureUserIsAdmin
            },
            {
              path: 'admin/articles',
              component: ArticlesIndex,
              onenter: this._ensureUserIsAdmin
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
