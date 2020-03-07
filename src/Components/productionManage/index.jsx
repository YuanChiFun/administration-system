import React from 'react'
import { Table, Checkbox, Button, Modal, Input, Select } from 'antd'

import './index.scss'

export default class ClassManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    id: 0,
                    name: 'mi',
                    class: 'mimian',
                    updateTime: '2017-10-31 12:12:12'
                },
                {
                    id: 1,
                    name: 'gua',
                    class: 'shuguo',
                    updateTime: '2017-10-31 12:12:12'
                }
            ],
            newModal: false,
            updateModal: true,
            updateInfo: {
                name: '',
                class: '',
            },
            newInfo: {
                name: '',
                class: '',
            }
        }
    }

    onButtonClick () {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalOk () {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalCancel () {
        this.setState({ newModal: !this.state.newModal })
    }
    showUpdateModal (record) {
        return Modal.confirm({
            title: '修改',
            visible: this.state.updateModal,
            content: (
                <div>
                    名称
                    <Input onChange={(e) => this.onUpdateNameChange(e)} value={this.state.updateInfo.name}/>
                    分类
                    <Select onSelect={(e) => this.onUpdateClassSelect(e)} value={this.state.updateInfo.class}/>
                </div>
            ),
            onOk: () => this.handleUpdate(),
            onCancel: () => this.setState({ updateModal: !this.state.updateModal })
        })
    }
    deleteProduction (record) {

    }

    onUpdateNameChange (e) {
        const { updateInfo } = this.state
        updateInfo.name = e.target.value
        this.setState({ updateInfo: updateInfo })
    }

    onUpdateClassSelect (e) {
        const { updateInfo } = this.state
        updateInfo.class = e
        this.setState({ updateInfo: updateInfo })
    }

    onNewNameChange (e) {
        const { newInfo } = this.state
        newInfo.name = e.target.value
        this.setState({ newInfo: newInfo })
    }

    onNewClassSelect (e) {
        const { newInfo } = this.state
        newInfo.class = e
        this.setState({ newInfo: newInfo })
    }

    handleUpdate () {

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
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '分类',
                dataIndex: 'class',
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
                    <Input onChange={(e) => this.onNewNameChange(e)} value={this.state.newInfo.name}/>
                    分类
                    <Select onSelect={(e) => this.onNewClassSelect(e)} value={this.state.newInfo.class}>    
                    </Select>
                </Modal>
                <p className='production-manage-title'>农业产品管理</p>
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