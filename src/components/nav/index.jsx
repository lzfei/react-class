import React from 'react'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import { IconFont } from '../../config'
import routes from '../../routes'
import Me from '../me'
import PrivateRoute from '../../components/route/privateRoute'

const urlList = [
  {
    name: '教程',
    url: 'https://help.mockplus.cn/idoc/?hmsr=zctc'
  },
  {
    name: '企业部署',
    url: 'https://www.mockplus.cn/enterprise'
  },
  {
    name: 'Mockplus',
    url: 'https://www.mockplus.cn/mockplus'
  }
]
export default class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      collapsed: false
    }
  }
  toggleCollapsed = () => {
    this.setState((state) => {
      return {
        collapsed: !state.collapsed
      }
    })
  }
  render () {
    const { collapsed } = this.state
    return (
      <Router>
        <div className="main">
          <div className={collapsed ? 'collapseda-nav-switch nav-switch' : 'nav-switch'}>
            {
              collapsed ? <IconFont type='icon-right' onClick={this.toggleCollapsed} /> : <IconFont type='icon-left' onClick={this.toggleCollapsed} />
            }
          </div>
          <div className={collapsed ? 'collapseda-nav nav' : 'nav'}>
            <div className="me">
              <Me collapsed={collapsed} />
            </div>
            <ul>
              {
                routes.map((route, i) => (
                  route.meta.hideInMenu ?
                  '' :
                  <li key={i}>
                    <NavLink to={route.path} activeClassName="selected">
                      <IconFont className="icon" type={route.meta.icon} />
                      {
                        !collapsed && <span className="nav-name">{route.name}</span>
                      }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            {
              !collapsed && <div className="other-nav">
                {
                  urlList.map((item, i) => (
                    <a href={item.url} key={i} target="_blank" rel="noopener noreferrer">{item.name}</a>
                  ))
                }
              </div>
            }
            
          </div>
          <div className={collapsed ? 'collapseda-container' : 'container'}>
            {
              routes.map((route, i) => (
                !route.meta.hideInMenu && (
                route.isAuth 
                ? <PrivateRoute 
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                : <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                )
              ))
            }
          </div>
          <div>
          {
            routes.map((route, i) => (
              route.meta.hideInMenu && 
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </div>
        </div>
      </Router>
    )
  }
}