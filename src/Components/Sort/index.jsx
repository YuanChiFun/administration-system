import React from 'react'
import { Card } from 'antd'
import './index.scss'
import { loadData } from '../../http'

export default class Sort extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape,
            data: []
        }
    }

    componentDidMount() {
        loadData('/types/list')
        .then(data => {
            this.setState({data: data})
        })
        .catch(err=> console.log(err))
    }

    sortModel = r => (
        <div key={r.tid} className="sort">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="rgba(153, 153, 153, 1)">
                <path d="M0 0h48v48H0z" fill="none"></path>
                <path d="M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm7-18c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm7 13c4.66 0 8.61-2.91 10.21-7H13.79c1.6 4.09 5.55 7 10.21 7z"></path>
            </svg>
            <div className="sort-name">{r.typeName}</div>
            <div className="sort-des">{r.describes}</div>
        </div>
    )

    smallSort = () => {
        const data = this.state.data
        return (
        <Card title="产品分类" style={{ width: 400 }}>
            {
                data.slice(0,2).map(r=> this.sortModel(r))
            }
        </Card>
    )}

    bigSort = () => {
        const data = this.state.data
        return (
        <Card title="所有产品分类" style={{ width: 800 }}>
            {
                data.map(r=> this.sortModel(r))
            }
        </Card>
    )}

    render () {
        const shape = this.state.shape;
            return (
                <div className="sort-container">
                    {shape === 'big' ? this.bigSort() : this.smallSort()}
                </div>
            )
    }
}