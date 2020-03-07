import React from 'react'
import { Input, Button } from 'antd'

import './index.scss'

export default class UsManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            call: '',
            address: '',
            phone: '',
            telephone: '',
            chuanzhen: '',
            email: '',
            postNumber: '',
            QQ: '',
        }
    }

    onNameChange (e) {
        this.setState({ name: e.target.value })
    }

    onAddressChange (e) {
        this.setState({ address: e.target.value })
    }

    onCallChange (e) {
        this.setState({ call: e.target.value })
    }

    onChuanzhenChange (e) {
        this.setState({ chuanzhen: e.target.value })
    }

    onEmailChange (e) {
        this.setState({ email: e.target.value })
    }

    onPhoneChange (e) {
        this.setState({ phone: e.target.value })
    }

    onPostNumberChange (e) {
        this.setState({ postNumber: e.target.value })
    }

    onQQChange (e) {
        this.setState({ QQ: e.target.value })
    }

    onTelephoneChange (e) {
        this.setState({ telephone: e.target.value })
    }

    submite () {
        const  { name, call, address, phone, telephone, chuanzhen, email, postNumber, QQ} = this.state
    }

    render () {
        return (
            <div>
                公司名称：
                <Input onChange={(e) => this.onNameChange(e)} value={this.state.name} disabled={true} />
                联系人：
                <Input onChange={(e) => this.onCallChange(e)} value={this.state.call} />
                公司地址：
                <Input onChange={(e) => this.onAddressChange(e)} value={this.state.address} />
                手机号码：
                <Input onChange={(e) => this.onPhoneChange(e)} value={this.state.phone} />
                电话号码：
                <Input onChange={(e) => this.onTelephoneChange(e)} value={this.state.telephone} />
                传真：
                <Input onChange={(e) => this.onChuanzhenChange(e)} value={this.state.chuanzhen} />
                邮箱：
                <Input onChange={(e) => this.onEmailChange(e)} value={this.state.email} />
                邮编：
                <Input onChange={(e) => this.onPostNumberChange(e)} value={this.state.postNumber} />
                QQ:
                <Input onChange={(e) => this.onQQChange(e)} value={this.state.QQ} />
                <Button onClick={() => this.submite()}></Button>
            </div>
        )
    }
}