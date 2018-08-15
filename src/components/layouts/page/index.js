import React from 'react'
import { Link } from 'dva/router'
import { Menu, Select } from "antd"
import { langList } from '../../../locales'
import les from './index.less'

const Option = Select.Option

const Page = ({
  app,
  children,
}) => {
  // 属性获取
  const {
    lang,
  } = app

  // 属性定义
  const menus = lang.menus

  // 方法定义
  const handleChange = (value) => {
    console.log(`selected ${value}`)
    window.location.href = `/${value}`
  }

  // 渲染方法定义
  const mapMenu = (ary) => {
    return ary.map(d => {
      return (
        <Menu.Item key={d.path}>
          <Link to={d.path}>{d.label}</Link>
        </Menu.Item>
      )
    })
  }
  const mapLang = (ary) => {
    return ary.map(d => {
      return (
        <Option key={d.name} value={d.name}>{d.desc}</Option>
      )
    })
  }

  return (
    <div className={les.container}>
      <div className={les.header}>
        <div className={les.headerContent}>
          {/* 路由菜单 */}
          <Menu
            mode="horizontal"
          >
            {mapMenu(menus)}
          </Menu>
          {/* 语言切换 */}
          <Select
            className={les.lang}
            value={lang.name}
            onChange={handleChange}
          >
            {mapLang(langList)}
          </Select>
        </div>
      </div>
      <div className={les.body}>{children}</div>
    </div>
  )
}

export default Page