import React from 'react'
import { Provider } from 'react-redux'

// Components
import AppRouter from 'components/router'

const Root = ({ store }) => (
  <Provider store={ store }>
    <AppRouter store={ store }/>
  </Provider>
);

export default Root