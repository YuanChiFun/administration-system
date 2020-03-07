import React from 'react'
import Header from './Components/Header'
import Basic from './Components/Basic'
import ClassManage from './Components/ClassManage'
import ProductionManage from './Components/productionManage'
import NewsManage from './Components/NewsManage'
import IntroduceManage from './Components/IntruduceMangage'
import './App.scss'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            position: window.location.pathname === '/' ? 'home' : window.location.pathname.split('/')[1],
            isAdmin: window.location.pathname.includes('Manage') ? true : false,
            managePosition: window.location.pathname === '/' ? 'introduceManage' : window.location.pathname.split('/')[1],
        }
    }
    render () {
        return (
            <div>
                <div className='container'>
                    <Header></Header>
                    {
                        this.state.isAdmin ? 
                        (
                            <div>
                                { this.state.managePosition === 'classManage' && <ClassManage /> }
                                { this.state.managePosition === 'productionManage' && <ProductionManage /> }
                                { this.state.managePosition === 'newsManage' && <NewsManage /> }
                                { this.state.managePosition === 'introduceManage' && <IntroduceManage />}
                            </div>
                        )
                        : (
                            <div className = 'content-container'>
                                <div className = 'right-side'>
                                    <Basic></Basic>
                                </div>
                                <div className='left-side'></div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;
