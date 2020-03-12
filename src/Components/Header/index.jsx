import React from 'react'
import { Button, Menu, Modal, Input, Carousel } from 'antd'
import { saveData, joinQuery } from '../../http'
import './index.scss'

const position = {
    home: '首页',
    introduce: '公司介绍',
    news: '农业新闻',
    production: '农业产品',
    class: '产品分类',
    us: '联系我们'
}

export default class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isAdmin: window.location.pathname.includes('Manage') ? true : false,
            isShowLoginModal: false,
            loginInfo: {
                name: '',
                password: '',
            },
            position: window.location.pathname === '/' ? 'home' : window.location.pathname.split('/')[1],
            managePosition: window.location.pathname === '/' ? 'introduceManage' : window.location.pathname.split('/')[1],
        }
    }

    handleOk () {
        const { loginInfo } = this.state
        if (loginInfo.name === '' || loginInfo.password === '') {
            return Modal.confirm({
                title: '警告',
                content: '请输入用户名和密码'
            })
        }

        saveData('/user/login', {
            username:loginInfo.name,
            password:loginInfo.password
        })
        .then ((data) => {
            window.location.pathname = 'introduceManage'
            this.setState({
                isShowLoginModal: !this.state.isShowLoginModal,
                isAdmin: !this.state.isAdmin
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleCancel () {
        this.setState({ isShowLoginModal: !this.state.isShowLoginModal })
    }

    showLoginModal () {
        this.setState({ isShowLoginModal: !this.state.isShowLoginModal })
    }

    onNameChange (e) {
        const { loginInfo }  = this.state
        loginInfo.name = e.target.value
        this.setState({ loginInfo: loginInfo })
    }

    onPasswordChange (e) {
        const { loginInfo } = this.state
        loginInfo.password = e.target.value
        this.setState({ loginInfo: loginInfo })
    }

    onMenuSelected(item) {
        window.location.pathname = item.key
    }

    render () {
        return (
            <div>
                <Modal
                    title='登录'
                    visible={this.state.isShowLoginModal}
                    onOk={() => this.handleOk()}
                    onCancel={() => this.handleCancel()}
                    maskClosable={false}
                    closable={false}
                >   用户名：
                    <Input
                        value={this.state.loginInfo.name}
                        placeholder='请输入用户名'
                        onChange={(e) => this.onNameChange(e)}
                    />
                    密码：
                    <Input.Password
                        placeholder='请输入密码'
                        value={this.state.loginInfo.password}
                        onChange={(e) => this.onPasswordChange(e)}
                    />
                </Modal>
                <div className='title-container'>
                    <div className='name-container'>
                        <div className='logo'>
                            <img src="http://3.pic.pc6.com/up/2015-9/20159115335.png" alt="" />
                        </div>
                        <div className='name'>
                            <p>华鑫农业信息管理系统</p>
                        </div>
                    </div>
                    <div className='admin-login-container'>
                        {
                            this.state.isAdmin ? (
                                <div>
                                    你好，Admin
                                </div>
                            ) : (
                                <Button type='primary' onClick={() => this.showLoginModal()}>管理员登录</Button>
                            )
                        }
                    </div>
                </div>
                {
                    !this.state.isAdmin ?
                    (
                        <div className='menu-container'>
                            <Menu
                                mode='horizontal'
                                theme='light'
                                defaultSelectedKeys={['home']}
                                onSelect={(item) => this.onMenuSelected(item)}
                                selectedKeys={[this.state.position]}
                            >
                                <Menu.Item key='home'>
                                    首页
                                </Menu.Item>
                                <Menu.Item key='introduce'>
                                    公司介绍
                                </Menu.Item>
                                <Menu.Item key='news'>
                                    农业新闻
                                </Menu.Item>
                                 <Menu.Item key='production'>
                                    农业产品
                                </Menu.Item>
                                <Menu.Item key='class'>
                                    产品分类
                                </Menu.Item>
                                <Menu.Item key='us'>
                                    联系我们
                                 </Menu.Item>
                            </Menu>
                        </div>
                    ) :
                    (
                        <div className='adminMenu-container'>
                            <Menu
                                mode='horizontal'
                                theme='light'
                                defaultSelectedKeys={['introduceManage']}
                                onSelect={(item) => this.onMenuSelected(item)}
                                selectedKeys={[this.state.managePosition]}
                            >
                                <Menu.Item key='introduceManage'>
                                    公司介绍管理
                                </Menu.Item>
                                <Menu.Item key='newsManage'>
                                    农业新闻管理
                                </Menu.Item>
                                <Menu.Item key='productionManage'>
                                    农业产品管理
                                </Menu.Item>
                                <Menu.Item key='classManage'>
                                    产品分类管理
                                </Menu.Item>
                                <Menu.Item key='usManage'>
                                    联系我们管理
                                </Menu.Item>
                            </Menu>
                        </div>
                    )
                }
                {
                    this.state.isAdmin ?
                    (
                        <div></div>
                    ) :
                    (
                        <Carousel>
                            <img src="#" alt='' />
                            <img src="#" alt='' />
                            <img src="#" alt='' />
                            <img src="#" alt='' />
                        </Carousel>
                    )
                }
                { !this.state.isAdmin ? <p>当前位置：{position[this.state.position]}</p> : <div></div> }
            </div>
        )
    }
}