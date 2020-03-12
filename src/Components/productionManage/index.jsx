import React from 'react'
import { Table, Checkbox, Button, Modal, Input, Select } from 'antd'
import CreateProductionButton from '../CreateProductionButton'
import { saveData, loadData } from '../../http';
import moment from 'moment'
import './index.scss'
import { ConsoleWriter } from 'istanbul-lib-report';

export default class ClassManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            newModal: false,
            newInfo: {
                name: '',
                class: '',
                url: '',
            },
            class: [],
        }
    }
    componentDidMount() {
        loadData('/types/list')
            .then(data => {
                this.setState({class: data})
            })
            .catch(err => console.log(err))
        loadData('/product/get')
        .then(data => {
            this.setState({ dataSource: data })
        })
        .catch(err => console.log(err))
    }

    onButtonClick () {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalOk () {
        const { newInfo } = this.state
        if (newInfo.name === '' || newInfo.class === '') {
            return Modal.confirm({
                title: '警告',
                content: '请输入名称并选择分类'
            })
        }
        saveData('/product/add', {
            productName: newInfo.name,
            typeName: newInfo.class,
            url: newInfo.url
        })
            .then(data => {
                this.setState({ newModal: !this.state.newModal })
                return Modal.confirm({
                    content: '新增成功',
                })
            })
            .catch(err => console.log(err))
    }
    handleNewModalCancel () {
        this.setState({ newModal: !this.state.newModal })
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

    onNewUrlChange (e) {
        const { newInfo } = this.state
        newInfo.url = e.target.value
        this.setState({ newInfo: newInfo })
    }

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'pid',
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
                dataIndex: 'productName',
            },
            {
                title: '分类',
                dataIndex: 'typeName',
            },
            {
                title: '更新时间',
                dataIndex: 'productTime',
                render(time) {
                    return (
                        <div>{moment(time).format('YYYY-MM-D hh:mm:ss a')}</div>
                    )
                }
            },
            {
                title: '操作',
                render: (text) => {
                    console.log(text)
                    return (
                        <div className='button-container'>
                            <CreateProductionButton type='modify' value='修改' id={text.pid} list={this.state.class}/>
                            <CreateProductionButton type='delete' value='删除' id={text.pid} /> 
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
                    <p>分类</p>
                    <Select
                        onSelect={(e) => this.onNewClassSelect(e)}
                        value={this.state.newInfo.class}
                        style={{ width: 200 }}
                    >
                        {
                            this.state.class.map(item => {
                                return (
                                    <Select.Option key='tid' value={item.typeName}>{item.typeName}</Select.Option>
                                )
                            })
                        }
                    </Select>
                    <p>图片链接</p>
                    <Input onChange={(e) => this.onNewUrlChange(e)} value={this.state.newInfo.url} />
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