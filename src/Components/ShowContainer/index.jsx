import React from 'react'
import { Card } from "antd"
import { loadData } from '../../http'
import './index.scss'

export default class ShowContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
            ]
        }
    }

    componentDidMount () {
        loadData('/product/get')
        .then((data) => {
            this.setState({data: data.list})
        })
        .catch(err => console.log(err))
    }

    render () {
        const data = this.props.shape === 'small' ? this.state.data.slice(0, 9) : this.state.data
        return (
            <div>
                <Card title='农作物展示' style={{ width: 800 }}>
                    {
                        data.length === 0 ? <div></div> : (
                            <div className='show-container'>
                                {
                                    data.map((item) => {
                                        return (
                                            <div key={item.pid} className='show-item-container'>
                                                <img src={item.url} alt="" className='show-image' />
                                                <p className='show-name'>{item.productName}</p>
                                                {this.props.shape !== 'small' && <p className='show-name'>{item.typeName}</p>}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </Card>
            </div>
        )
    }
}