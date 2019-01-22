import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import './style/main.sass'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

if (module.hot) {
    module.hot.accept();
}

OfflinePluginRuntime.install()

render(<Main />, document.getElementById('root'))