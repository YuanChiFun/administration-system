import React from 'react'
import { Table, Checkbox, Button, Modal, Input } from 'antd'

import './index.scss'

export default class ClassManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    id: 0,
                    title: 'mi',
                    url: 'mimian',
                    updateTime: '2017-10-31 12:12:12'
                },
                {
                    id: 1,
                    title: 'gua',
                    url: 'shuguo',
                    updateTime: '2017-10-31 12:12:12'
                }
            ],
            newModal: false,
            updateModal: true,
            updateInfo: {
                name: '',
                describtion: '',
            },
            newInfo: {
                name: '',
                describtion: '',
            }
        }
    }

    onButtonClick() {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalOk() {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalCancel() {
        this.setState({ newModal: !this.state.newModal })
    }
    showUpdateModal(record) {
        return Modal.confirm({
            title: '修改',
            visible: this.state.updateModal,
            content: (
                <div>
                    名称
                    <Input onChange={(e) => this.onUpdateNameChange(e)} value={this.state.updateInfo.name} />
                    链接
                    <Input.TextArea onChange={(e) => this.onUpdateClassChange(e)} value={this.state.updateInfo.describtion} />
                </div>
            ),
            onOk: () => this.handleUpdate(),
            onCancel: () => this.setState({ updateModal: !this.state.updateModal })
        })
    }
    deleteProduction(record) {

    }

    onUpdateNameChange(e) {
        const { updateInfo } = this.state
        updateInfo.name = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onUpdateClassChange(e) {
        const { updateInfo } = this.state
        updateInfo.describtion = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onNewNameChange(e) {
        const { newInfo } = this.state
        newInfo.name = e.target.value
        this.setState({ newInfo: newInfo })
    }

    onNewClassChange(e) {
        const { newInfo } = this.state
        newInfo.describtion = e.target.value
        this.setState({ newInfo: newInfo })
    }

    handleUpdate() {

    }

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                render: (id) => {
                    return (
                        <div>
                            <Checkbox>{id}</Checkbox>
                        </div>
                    )
                }
            },
            {
                title: '新闻标题',
                dataIndex: 'title',
            },
            {
                title: '新闻链接',
                dataIndex: 'url',
            },
            {
                title: '更新时间',
                dataIndex: 'updateTime',
            },
            {
                title: '操作',
                render: (text, record) => {
                    return (
                        <div>
                            <a onClick={(record) => this.showUpdateModal(record)}>修改</a> |  <a onClick={(record) => this.deleteProduction(record)}>删除</a>
                        </div>
                    )
                }
            },
        ]
        return (
            <div>
                <Modal
                    title='新建'
                    visible={this.state.newModal}
                    onOk={() => this.handleNewModalOk()}
                    onCancel={() => this.handleNewModalCancel()}
                    maskClosable={false}
                    closable={false}
                >
                    名称
                    <Input onChange={(e) => this.onNewNameChange(e)} value={this.state.newInfo.name} />
                    链接
                    <Input.TextArea onChange={(e) => this.onNewClassChange(e)} value={this.state.newInfo.describtion} />
                </Modal>
                <p className='production-manage-title'>农业新闻管理</p>
                <Button
                    type='primary'
                    onClick={() => this.onButtonClick()}
                >
                    新建
                </Button>
                <Table
                    dataSource={this.state.dataSource}
                    columns={columns}
                    rowKey='id'
                />
            </div>
        )
    }
}