import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Affix} from 'antd'
import {FieldTimeOutlined, FireOutlined, FolderOpenOutlined} from '@ant-design/icons'
import "markdown-navbar/dist/navbar.css"
import axios from 'axios'
import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import servicePath from "../config/api";

const Detailed = (props) => {

    const tocify = new Tocify()
    const renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h></a>\n`
    }

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    })

    let {title, typeName, content, viewCount, gmtCreate} = props
    let html = marked('' + content)

    return (
        <div>
            <Head>
                <title>博客详细页</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>{typeName}</Breadcrumb.Item>
                                <Breadcrumb.Item>{title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            <div className="detailed-title">
                                {title}
                            </div>
                            <div className="list-icon center">
                                <span><FieldTimeOutlined/>{gmtCreate}</span>
                                <span><FolderOpenOutlined/>{typeName}</span>
                                <span><FireOutlined/>{viewCount}</span>
                            </div>
                            <div className="detailed-content" dangerouslySetInnerHTML={{__html: html}}>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="navTitle">文章目录</div>
                            {tocify && tocify.render()}
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

Detailed.getInitialProps = async (content) => {
    let id = content.query.id
    const promise = new Promise((resolve) => {
        axios(servicePath.getBlogInfo + id).then(
            (res) => {
                resolve(res.data.data)
            }
        )
    })
    return await promise
}

export default Detailed