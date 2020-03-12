import React from 'react'
import { Table, Checkbox, Button, Modal, Input } from 'antd'
import moment from 'moment'
import CreateNewsButton from '../CreateNewsButton'
import { loadData, saveData } from '../../http';

import './index.scss'

export default class ClassManage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            newModal: false,
            updateModal: true,
            newInfo: {
                name: '',
                url: '',
            }
        }
    }

    componentDidMount() {
        loadData('/news/list')
        .then((data) => {
            this.setState({dataSource: data})
        })
        .catch(err => console.log(err))
    }

    onButtonClick() {
        this.setState({ newModal: !this.state.newModal })
    }
    handleNewModalOk() {
        const { newInfo } = this.state
        if (newInfo.name === '' && newInfo.url === '') {
            return Modal.confirm({
                title: '警告',
                content: '请输入新闻标题和链接'
            })
        }
        saveData('/news/add', {
            newsTitle: newInfo.name,
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
        newInfo.url = e.target.value
        this.setState({ newInfo: newInfo })
    }

    render() {
        const columns = [
            {
                title: '编号',
                dataIndex: 'nid',
                render: (nid) => {
                    return (
                        <div>
                            <Checkbox>{nid}</Checkbox>
                        </div>
                    )
                }
            },
            {
                title: '新闻标题',
                dataIndex: 'newsTitle',
            },
            {
                title: '新闻链接',
                dataIndex: 'url',
                render(url) {
                    return (
                        <a  href={url}>详情</a>
                    )
                }
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
                dataIndex: 'nid',
                render: (text, record) => {
                    console.log(text)

                    return (
                        <div className='button-container'>
                            <CreateNewsButton type='modify' value='修改' id={text} /><CreateNewsButton type='delete' value='删除' id={text} title={record.newsTitle}/>
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
                    <Input.TextArea onChange={(e) => this.onNewClassChange(e)} value={this.state.newInfo.url} />
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
                    rowKey='nid'
                    pagination={{ pageSize: 10 }}
                />
            </div>
        )
    }
}