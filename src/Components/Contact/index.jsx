import React from 'react'
import { Card } from 'antd'
import { loadData } from '../../http';
import './index.scss'

export default class Contact extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape,
            data: {}
        }
    }

    componentDidMount() {
        loadData('/contact/list')
        .then(data => {
            this.setState({data: data[0]})
        })
        .catch(err=> console.log(err))
    }
    
    smallContact = () => {
        const data = this.state.data
        return (
        <Card title="联系我们" style={{ width: 400 }}>
            <div className="contact">
                <div className="c-name">{data.companyName}</div>
                    <div>
                        <p>地址：{data.address}</p>
                        <p>联系人：{data.contacts}</p>
                        <p>手机：{data.phone}</p>
                        <p>Q Q：{data.qq}</p>
                    </div>
            </div>
        </Card>
        )}

    bigContact = () => {
        const data = this.state.data
        return (
        <Card title="联系我们" style={{ width: 800 }}>
            <div className="contact">
                <div className="c-name">{data.companyName}</div>
                    <div>
                        <p>地址：{data.address}</p>
                        <p>联系人：{data.contacts}</p>
                        <p>手机：{data.phone}</p>
                        <p>Q Q：{data.qq}</p>
                        <p>电话：{data.telephone}</p>
                        <p>传真：{data.fax}</p>
                        <p>邮箱：{data.eMail}</p>
                        <p>邮编：{data.zipCode}</p>
                    </div>
            </div>
        </Card>
    )}

    render () {

        const shape = this.state.shape;
            return (
                <div className="contact-container">
                    {shape == 'big' ? this.bigContact() : this.smallContact()}
                </div>
            )
    }
}