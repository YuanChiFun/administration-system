import React from 'react'
import { Card } from 'antd'
import './index.scss'
import { loadData } from '../../http';

export default class Compony extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape,
            data: {}
        }
    }
    
    componentDidMount() {
        loadData('/introduce/list')
        .then(data => {
            this.setState({data: data[0]})
        })
        .catch(err=> console.log(err))
    }

    smallIntruduce = () => {
        const data = this.state.data
        return (
        <Card title="公司介绍" style={{ width: 800 }}>
            <div className="introduction">
                    {data.companyIntroduce}
            </div>
        </Card>
    )}

    bigIntruduce = () => {
        const data = this.state.data
        return (
        <Card title="公司介绍" style={{ width: 800 }}>
            <div className="introduction">
                 {data.companyIntroduce}
            </div>
        </Card>
    )}


    render () {
        const shape = this.state.shape;
        return (
            <div className="inrtuduce-container">
               {shape === 'big' ? this.bigIntruduce() : this.smallIntruduce()}
            </div>
        )
    }
}