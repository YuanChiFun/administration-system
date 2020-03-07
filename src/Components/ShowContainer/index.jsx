import React from 'react'
import { Card } from "antd"
import './index.scss'

export default class ShowContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Card title='农作物展示'>
                    <div className='show-container'>
                        
                    </div>
                </Card>
            </div>
        )
    }
}