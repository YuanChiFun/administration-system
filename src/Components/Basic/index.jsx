import React from 'react'
import { Card } from 'antd'
import './index.scss'
import { loadData } from '../../http';
import { declareTypeAlias } from '@babel/types';

export default class Basic extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            data: {},
        }
    }

    componentDidMount () {
        loadData('/introduce/detail')
        .then(data => {
            this.setState({data: data})
        })
        .catch(err=> console.log(err))
    }

    render () {
        const { data } = this.state
        return (
            <div>
                <div className='basic-container'>
                    <Card
                        title='公司信息'
                        style={{ width: 400 }}
                    >
                        <div className='logo-container'>
                            <img src={data.logo === undefined ? '' : data.logo} className='logo' />
                        </div>
                        <p className='company-name'>{data.companyName === undefined ? '' : data.companyName}</p>
                        <p className='manage-name'>{data.contacts === undefined ? '' : data.contacts}</p>
                        <p className='mode'>{data.management_mode === undefined ? '' : data.management_mode}</p>
                    </Card>
                </div>
            </div>
        )
    }
}