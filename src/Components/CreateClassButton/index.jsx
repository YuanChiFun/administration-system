import React from 'react'
import { Button, Modal, Input } from 'antd'
import { saveData, deleteData,loadData } from '../../http';

export default class CreateClassButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            updateModal: false,
            updateInfo: {
                name: '',
                describes: '',
            },
        }
    }

    componentDidMount() {
        loadData('/types/list')
        .then(data => {
            console.log(data)
        })
        .catch(err=> console.log(err))
    }

    onUpdateNameChange(e) {
        const { updateInfo } = this.state
        updateInfo.name = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onUpdateDescribtionChange(e) {
        const { updateInfo } = this.state
        updateInfo.describes = e.target.value
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
        saveData('/types/update', {
            tid: this.props.id,
            typeName: updateInfo.name,
            describes: updateInfo.describes
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
        this.setState({ updateModal: !this.state.updateModal })
    }

    deleteNew() {
        deleteData('/types/delete', { id: this.props.id })
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
                    title='修改'
                    visible={this.state.updateModal}
                    onOk={() => this.handleUpdate()}
                    onCancel={() => this.setState({ updateModal: !this.state.updateModal })}
                >
                    名称
                    <Input onChange={(e) => this.onUpdateNameChange(e)} value={this.state.updateInfo.name} />
                    描述
                    <Input.TextArea onChange={(e) => this.onUpdateDescribtionChange(e)} value={this.state.updateInfo.describes} />
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