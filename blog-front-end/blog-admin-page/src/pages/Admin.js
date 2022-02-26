import React, {useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import {Layout, Menu, Breadcrumb} from 'antd'
import {UserOutlined, FileOutlined, DesktopOutlined, PieChartOutlined} from '@ant-design/icons'

import ArticleAdd from "./ArticleAdd";
import ArticleList from "./ArticleList";
import '../static/css/Admin.css'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

function Admin() {

    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    const handleClickArticle = e => {
        if (e.key === 'articleAdd') {
            navigate('/admin/add')
        } else {
            navigate('/admin/list')
        }
    }

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined/>
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined/>
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={handleClickArticle}
                        title={
                            <span><UserOutlined/><span>文章管理</span></span>
                        }
                    >
                        <Menu.Item key="articleAdd">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <FileOutlined/>
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{background: '#fff', padding: 0}}/>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        <Routes>
                            <Route path='/' element={<ArticleAdd/>}/>
                            <Route path='/add/' element={<ArticleAdd/>}/>
                            <Route path='/add/:id' element={<ArticleAdd/>}/>
                            <Route path='/list/' element={<ArticleList/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>JSPang.com</Footer>
            </Layout>
        </Layout>
    )
}

export default Admin