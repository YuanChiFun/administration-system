import React from 'react'
import { Input, Button, Modal } from 'antd'
import { saveData } from '../../http'
import './index.scss'

export default class IntroduceManage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            call: '',
            mode: '',
            logo: '',
            intruduce: ''
        }
    }

    onCallChange (e) {
        this.setState({ call: e.target.value})
    }
    onNameChange(e) {
        this.setState({ name: e.target.value })
    }
    onLogoChange(e) {
        this.setState({ logo: e.target.value })
    }
    onModeChange(e) {
        this.setState({ mode: e.target.value })
    }
    onIntroduceChange(e) {
        this.setState({ introduce: e.target.value })
    }
    submite () {
        const { name, call, mode, logo, introduce } = this.state
        saveData('/introduce/update', {
            companyName: name,
            contacts: call,
            management_model: mode,
            logo: logo,
            company_introduce: introduce
        })
        .then(data => {
            return Modal.confirm({
                content: '修改成功'
            })
        })
        .catch(err => console.log(err))
    }

    render () {
        const { name, call, mode, logo, introduce } = this.state
        return (
            <div>
                公司名称：
                <Input value={name} onChange={(e) => this.onNameChange(e)}/>
                Logo地址：
                <Input value={logo} onChange={(e) => this.onLogoChange(e)}/>
                联系人：
                <Input value={call} onChange={(e) => this.onCallChange(e)}/>
                经营模式：
                <Input value={mode} onChange={(e) => this.onModeChange(e)}/>
                公司介绍：
                <Input.TextArea value={introduce} onChange={(e) => this.onIntroduceChange(e)}/>
                <Button type='primary' onClick={() => this.submite()}>保存并提交</Button>
            </div>
        )
    }
}