import React from 'react'
import { Button, Modal, Input } from 'antd'
import { saveData, deleteData } from '../../http';

export default class CreateButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateModal: false,
            updateInfo: {
                name: '',
                url: '',
            },
        }
    }

    onUpdateNameChange(e) {
        const { updateInfo } = this.state
        updateInfo.name = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onUpdateUrlChange(e) {
        const { updateInfo } = this.state
        updateInfo.url = e.target.value
        this.setState({ updateInfo: updateInfo })
    }


    handleUpdate() {
        const { updateInfo } = this.state
        if (updateInfo.name === '' || updateInfo.url === '') {
            return Modal.confirm({
                title: '警告',
                content: '请输入标题和链接'
            })
        }
        saveData('/news/update', {
            nid: this.props.id,
            newsTitle: updateInfo.name,
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
        deleteData('/news/delete',{ id: this.props.id})
            .then(data => {
                return Modal.confirm({
                    content: '删除成功'
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Modal
                    title= '修改'
                    visible= {this.state.updateModal}
                    onOk= {() => this.handleUpdate()}
                    onCancel= {() => this.setState({updateModal: !this.state.updateModal })}
                    >
                    名称
                    <Input onChange={(e) => this.onUpdateNameChange(e)} value={this.state.updateInfo.name}/>
                    链接
                    <Input.TextArea onChange={(e) => this.onUpdateUrlChange(e)} value={this.state.updateInfo.url}/>
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