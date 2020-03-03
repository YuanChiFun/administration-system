import React from 'react'
import { Button, Menu } from 'antd'
import './index.scss'

export default class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <div className='title-container'>
                    <div className='name-container'>
                        <div className='logo'>
                            <img src="https://ww4.sinaimg.cn/bmiddle/006gMa6wgy1gcgs0s2mx6j30me0ilwg6.jpg" alt="" />
                        </div>
                        <div className='name'>
                            <p>华鑫农业信息管理系统</p>
                        </div>
                    </div>
                    <div className='admin-login-container'>
                        <Button type='primary'>管理员登录</Button>
                    </div>
                </div>
                <Menu mode='horizontal' theme='light'>
                    <Menu.Item key='home'>
                        首页
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}