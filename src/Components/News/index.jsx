import React from 'react'
import { Card,Table } from 'antd';
import './index.scss';

const columns = [
  {
    title: '新闻标题',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="http://www.baidu.com">{text}</a>,
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    key: 'time',
  },
]

const data = [
  {
    key: '1',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '2',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '3',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '4',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '5',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '6',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '7',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '8',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '9',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '10',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '11',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  },
  {
    key: '12',
    title: '市民诉苦未囤上大白菜',
    time: '2020-03-03',
  }
]

export default class News extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape
        }
    }

    smallNews = () => (
        <Card title="农业新闻" extra={<a href="#">更多</a>} style={{ width: 400 }}>
            <ul>
                <li><a href="www.baidu.com">市民诉苦未囤上大白菜</a></li>
                <li><a hred="www.qq.com">市民诉苦未囤上大白菜</a></li>
            </ul>
        </Card>
    )
    
    bigNews = () => (
        <Card title="农业新闻" style={{ width: 800 }}>
            <Table
                    dataSource={data}
                    columns={columns}
                    rowKey='id'
                    Pagination={{pageSize: 10}}
                />
        </Card>
    )

    render () {
        const shape = this.state.shape;
        return (
            <div className="news-container">
               {shape == 'big' ? this.bigNews() : this.smallNews()}
            </div>
        )
    }
}