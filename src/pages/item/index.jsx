import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Calculator from '../../components/itemComponents/calculator'

export default class Item extends React.Component {
  render () {
    return(
      <div>
        <Button type="primary" className="add-btn" icon={<PlusOutlined />}>新建</Button>
        <div>
          <Calculator></Calculator>
        </div>
      </div>
    )
  }
}