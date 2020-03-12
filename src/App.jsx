import React from 'react'
import Header from './Components/Header'
import Basic from './Components/Basic'
import ClassManage from './Components/ClassManage'
import ProductionManage from './Components/productionManage'
import NewsManage from './Components/NewsManage'
import IntroduceManage from './Components/IntroduceMangage'
import UsManage from './Components/UsManage'
import Sort from './Components/Sort'
import Contact from './Components/Contact'
import Compony from './Components/Intruduce'
import News from './Components/News'
import Span from './Components/Span'
import ShowContainer from './Components/ShowContainer'
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
        const { isAdmin, position, managePosition } = this.state
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
                                { this.state.managePosition === 'usManage' && <UsManage />}
                            </div>
                        )
                        : (
                            <div className = 'content-container'>
                                <div className = 'right-side'>
                                    <Basic></Basic>
                                    <Span></Span>
                                    { position === 'home' && (
                                        <div>
                                            <Sort shape='small' />
                                            <Span />
                                            <News shape='small' />
                                            <Span />
                                            <Contact shape='small' />
                                            <Span />
                                        </div>
                                    )}
                                    { position === 'introduce' && (
                                        <div>
                                            <News shape='small' />
                                            <Span />
                                        </div>
                                    )}
                                    {position === 'news' && (
                                        <div>
                                            <Sort shape='small' />
                                            <Span />
                                            <Contact shape='small' />
                                            <Span />
                                        </div>
                                    )}
                                    {position === 'production' && (
                                        <div>
                                            <News shape='small' />
                                            <Span />
                                            <Contact shape='small' />
                                            <Span />
                                        </div>
                                    )}
                                    {
                                        position === 'class' && (
                                            <div>
                                                <News shape='small' />
                                                <Span />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='left-side'>
                                    {position === 'home' && (
                                        <div>
                                            <Compony shape='small'></Compony>
                                            <Span />
                                            <ShowContainer shape='small'/>
                                        </div>
                                    )}
                                    {position === 'introduce' && (
                                        <Compony shape='big' />
                                    )}
                                    {position === 'news' && (
                                        <div>
                                            <News shape='big' />
                                        </div>
                                    )}
                                    {
                                        position === 'production' && (
                                            <div>
                                                <ShowContainer shape='big' />
                                            </div>
                                        )
                                    }
                                    {
                                        position === 'class' && (
                                            <div>
                                                <Sort shape='big' />
                                            </div>
                                        )
                                    }
                                    {
                                        position === 'us' && (
                                            <div>
                                                <Contact shape='big' />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;
