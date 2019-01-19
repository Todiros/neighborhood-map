import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import './style/main.sass'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

if (module.hot) {
    module.hot.accept();
}

if ('serviceWorker' in navigator) {
    runtime.register(); 
}

render(<Main />, document.getElementById('root'))