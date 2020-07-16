import React from 'react'
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class Me extends React.Component {
  render () {
    const { collapsed } = this.props
    return (
      <div className={ collapsed ? 'avatar collapseda-vatar' : 'avatar' }>
        <Badge color="green" className="state" />
        <div>
          <Avatar size={32} icon={<UserOutlined />} />
        </div>
        {
          !collapsed && <div className="name">团队名称</div>
        }
        
      </div>
    )
  }
} 