import React from 'react'
import { Card } from 'antd'
import './index.scss'

export default class Compony extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            shape:this.props.shape
        }
    }

    smallIntruduce = () => (
        <Card title="公司介绍" extra={<a href="#">更多</a>} style={{ width: 800 }}>
            <div className="introduction">
                    中国农业信息平台，中国农业信息平台涵盖了农业价格,农产品购买,农业新闻资讯等为一体,
                    引领中国农业走向信息化时代，买农产品还是上中国农产品信息平台，买的放心。
                    业信息工作在不断提高信息工程实施管理能力、应用系统的需求分析能力、电子政务运转支持能力、
                    信息系统安全保障能力、网络信息宣传导向能力、数据处理分析预测能力等服务外，
                    国家除了构建了完备的农业信息网络，还需鼓励建立了完善的农业市场信息体系。
            </div>
        </Card>
    )

    bigIntruduce = () => (
        <Card title="公司介绍" style={{ width: 800 }}>
            <div className="introduction">
                    中国农业信息平台，中国农业信息平台涵盖了农业价格,农产品购买,农业新闻资讯等为一体,
                    引领中国农业走向信息化时代，买农产品还是上中国农产品信息平台，买的放心。
                    农业信息工作在不断提高信息工程实施管理能力、应用系统的需求分析能力、电子政务运转支持能力、
                    信息系统安全保障能力、网络信息宣传导向能力、数据处理分析预测能力等服务外，
                    国家除了构建了完备的农业信息网络，还需鼓励建立了完善的农业市场信息体系。
                    中国农业信息平台，中国农业信息平台涵盖了农业价格,农产品购买,农业新闻资讯等为一体,
                    引领中国农业走向信息化时代，买农产品还是上中国农产品信息平台，买的放心。
                    农业信息工作在不断提高信息工程实施管理能力、应用系统的需求分析能力、电子政务运转支持能力、
                    信息系统安全保障能力、网络信息宣传导向能力、数据处理分析预测能力等服务外，
                    国家除了构建了完备的农业信息网络，还需鼓励建立了完善的农业市场信息体系。
            </div>
        </Card>
    )


    render () {
        const shape = this.state.shape;
        return (
            <div className="inrtuduce-container">
               {shape == 'big' ? this.bigIntruduce() : this.smallIntruduce()}
            </div>
        )
    }
}