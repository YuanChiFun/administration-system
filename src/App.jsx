import React from 'react'
import {} from 'react-router-dom'
import Header from './Components/Header'
import './App.css'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <div className='container'>
                    <Header></Header>
                    <div className='container'>

                    </div>
                </div>
            </div>
        )
    }
}

export default App;
