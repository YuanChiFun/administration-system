import React from 'react'
import { Card } from 'antd'
import './index.scss'

export default class Contact extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape
        }
    }

    smallContact = () => (
        <Card title="联系我们" extra={<a href="#">更多</a>} style={{ width: 400 }}>
            <div className="contact">
                <div className="c-name">华鑫农业信息有限公司</div>
                    <div>
                        <p>地址：xxxxxxxxx</p>
                        <p>联系人：朱女士</p>
                        <p>手机：17603219741</p>
                        <p>Q Q：1052691066</p>
                    </div>
            </div>
        </Card>
    )

    bigContact = () => (
        <Card title="联系我们" style={{ width: 800 }}>
            <div className="contact">
                <div className="c-name">华鑫农业信息有限公司</div>
                    <div>
                        <p>地址：xxxxxxxxx</p>
                        <p>联系人：朱女士</p>
                        <p>手机：17603219741</p>
                        <p>Q Q：1052691066</p>
                        <p>电话：023-61205979</p>
                        <p>传真：xxxxxxxxxx</p>
                        <p>邮箱：1052691066@qq.com</p>
                        <p>邮编：4189743</p>
                    </div>
            </div>
        </Card>
    )

    render () {

        const shape = this.state.shape;
            return (
                <div className="contact-container">
                    {shape == 'big' ? this.bigContact() : this.smallContact()}
                </div>
            )
    }
}