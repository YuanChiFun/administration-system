import React from 'react'
import { Table, Checkbox, Button, Modal, Input } from 'antd'
import CreateClassButton from '../CreateClassButton'
import moment from 'moment'
import { loadData, saveData } from '../../http'

import './index.scss'

export default class ClassManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [{
                tid: 1,
                typeName: 'sss',
                typeTime: 1583314416000,
                describes: 'xxxx'
            }],
            newModal: false,
            updateModal: true,
            newInfo: {
                name: '',
                describtion: '',
            }
        }
    }

    componentDidMount() {
       loadData('/types/get')
       .then(data=>{
           this.setState({ dataSource: data })
       })
       .catch(err => console.log(err))
    }

    onButtonClick() {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalOk() {
        const { newInfo } = this.state
        if (newInfo.name === '' || newInfo.describtion === '') {
            return Modal.warning({
                title: '警告',
                content: '请输入名称和描述'
            })
        }
        saveData('/types/add', {
            typeName: newInfo.name,
            describes: newInfo.describtion,
        })
        .then(data => {
            this.setState({ newModal: !this.state.newModal })
            return Modal.confirm({
                content: '新增成功',
            })
        })
        .catch(err => console.log(err))
    }
    handleNewModalCancel() {
        this.setState({ newModal: !this.state.newModal })
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

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'tid',
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
                dataIndex: 'typeName',
            },
            {
                title: '描述',
                dataIndex: 'describes',
            },
            {
                title: '更新时间',
                dataIndex: 'typeTime',
                render(time) {
                    return (
                        <div>{moment(time).format('YYYY-MM-D hh:mm:ss a')}</div>
                    )
                }
            },
            {
                title: '操作',
                render: (text, record) => {
                    return (
                        <div className='button-container'>
                            <CreateClassButton type='modify' value='修改' id={text} /><CreateClassButton type='delete' value='删除' id={text}/>
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
                    描述
                    <Input.TextArea onChange={(e) => this.onNewClassChange(e)} value={this.state.newInfo.describtion} />
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
                    pagination={{ pageSize: 10 }}
                />
            </div>
        )
    }
}