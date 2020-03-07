import React from 'react'
import { Card } from 'antd'
import './index.scss'

export default class Basic extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <div className='basic-container'>
                    <Card
                        title='公司信息'
                        style={{ width: 400 }}
                    >
                        <div className='logo-container'>
                            <img src="https://ww4.sinaimg.cn/bmiddle/006gMa6wgy1gcgs0s2mx6j30me0ilwg6.jpg" className='logo' />
                        </div>
                        <p className='company-name'>华鑫农业信息有限公司</p>
                        <p className='manage-name'>马先生</p>
                        <p className='mode'>经营模式： 服务型【未认证】</p>
                    </Card>
                </div>
            </div>
        )
    }
}