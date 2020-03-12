import React from 'react'
import { Card,Table } from 'antd';
import moment from 'moment'
import './index.scss';
import { loadData } from '../../http';

export default class News extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape,
            data: []
        }
    }

    componentDidMount() {
      loadData('/news/list')
      .then(data => {
          data.map(r => {
            r.key = r.nid + ""
            r.typeTime = moment(r.typeTime).format('YYYY-MM-D')
          })
          this.setState({data: data})
      })
      .catch(err=> console.log(err))
  }

    smallNews = () => {
      const data = this.state.data
      return (
        <Card title="农业新闻" style={{ width: 400 }}>
            <ul>
              {data.slice(0,2).map(r => <li><a href={r.url}>{r.newsTitle}</a></li>)}
            </ul>
        </Card>
    )}
    
    bigNews = () => {
      const data = this.state.data
      const columns = [
        {
          title: '新闻标题',
          dataIndex: 'newsTitle',
          key: 'newsTitle',
          render: (text, record) => <a href={record.url}>{text}</a>,
        },
        {
          title: '创建时间',
          dataIndex: 'typeTime',
          key: 'typeTime',
        },
      ]
      return (
        <Card title="农业新闻" style={{ width: 800 }}>
            <Table
                    dataSource={data}
                    columns={columns}
                    rowKey='id'
                    Pagination={{pageSize: 10}}
                />
        </Card>
    )}

    render () {
        const shape = this.state.shape;
        return (
            <div className="news-container">
               {shape === 'big' ? this.bigNews() : this.smallNews()}
            </div>
        )
    }
}