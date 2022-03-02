import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Row, Col, List} from 'antd'
import {FieldTimeOutlined, FireOutlined, FolderOpenOutlined} from '@ant-design/icons'
import axios from 'axios'
import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import servicePath from "../config/api";

const Home = (list) => {

    const [myList, setMyList] = useState(list.data)

    const renderer = new marked.Renderer()
    useEffect(() => {
        setMyList(list.data)
    })

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

    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item => (
                            <List.Item>
                                <div className="list-title">
                                    <Link href={{pathname: '/detailed', query: {id: item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span><FieldTimeOutlined/>{item.gmtCreate}</span>
                                    <span><FolderOpenOutlined/>{item.typeName}</span>
                                    <span><FireOutlined/>{item.viewCount}人</span>
                                </div>
                                <div className="content"
                                     dangerouslySetInnerHTML={{__html: marked('' + item.introduce)}}
                                ></div>
                            </List.Item>
                        )}
                    />
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author/>
                    <Advert/>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}

Home.getInitialProps = async (content) => {
    let id = content.query.id
    const promise = new Promise((resolve) => {
        axios(servicePath.getBlogListByTypeId + (id == null ? 0 : id)).then(
            (res) => {
                resolve(res.data)
            }
        )
    })
    return await promise
}

export default Home