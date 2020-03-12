import React from 'react'
import { Button, Modal, Input, Select } from 'antd'
import { saveData, deleteData } from '../../http';

export default class CreateButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateModal: false,
            updateInfo: {
                name: '',
                class: '',
                url: '',
            },
            class: []
        }
    }

    onModifyNameChange(e) {
        const { updateInfo } = this.state
        updateInfo.name = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onModifyUrlChange(e) {
        const { updateInfo } = this.state
        updateInfo.url = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onModifyClassSelect(e) {
        const { updateInfo } = this.state
        updateInfo.class = e
        this.setState({ updateInfo: updateInfo })
    }

    handleUpdate() {
        const { updateInfo } = this.state
        if (updateInfo.name === '' || updateInfo.url === '' || updateInfo.class === '') {
            return Modal.confirm({
                title: '警告',
                content: '请输入标题和链接并选择分类'
            })
        }
        saveData('/product/update', {
            pid: this.props.id,
            productName: updateInfo.name,
            typeName: updateInfo.class,
            url: updateInfo.url
        })
        .then(data => {
            this.setState({ updateModal: !this.state.updateModal })
            return Modal.confirm({
                content: '修改成功'
            })
        })
        .catch(err => console.log(err))
    }

    showUpdateModal() {
        this.setState({ updateModal: !this.state.updateModal})
    }

    deleteNew () {
        deleteData('/product/delete',{ id: this.props.id})
        .then(data => {
                return Modal.confirm({
                    content: '删除成功'
                })
            })
        .catch(err => console.log(err))
    }

    render() {
        const list = this.props.list === undefined ? [] : this.props.list
        return (
            <div>
                <Modal
                    title= '修改'
                    visible= {this.state.updateModal}
                    onOk= {() => this.handleUpdate()}
                    onCancel= {() => this.setState({updateModal: !this.state.updateModal })}
                    >
                    名称
                    <Input onChange={(e) => this.onModifyNameChange(e)} value={this.state.updateInfo.name}/>
                    <p>分类</p>
                    <Select
                        onSelect={(e) => this.onModifyClassSelect(e)}
                        value={this.state.updateInfo.class}
                        style={{ width: 200 }}
                    >
                        {
                            list.map(item => {
                                return (
                                    <Select.Option key='tid' value={item.typeName}>{item.typeName}</Select.Option>
                                )
                            })
                        }
                    </Select>
                    <p>图片链接</p>
                    <Input onChange={(e) => this.onModifyUrlChange(e)} value={this.state.updateInfo.url} />
                </Modal>
                {
                    this.props.type === 'modify' ? (
                        <Button
                            onClick={(e) => this.showUpdateModal(e)}
                            type='primary'
                        >
                            {this.props.value}
                        </Button>
                    ) : (
                        <Button
                            onClick={(e) => this.deleteNew(e)}
                            type='primary'
                            danger
                        >
                            {this.props.value}
                        </Button>
                    )
                }
            </div>
        )
    }
}