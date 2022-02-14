import React, {useState, useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from "axios";
import {Row, Col, Menu} from 'antd'
import {HomeOutlined, YoutubeOutlined, SmileOutlined} from '@ant-design/icons'

import servicePath from "../config/api";

const Header = () => {

    const [navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeList).then(
                (res) => {
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    const handlerClick = function (e) {
        Router.push('/?id=' + e.key)
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">
                        <Link href={{pathname: '/', query: {id: 0}}}>
                            <a>Lain</a>
                        </Link>
                    </span>
                    <span className="header-text">程序员之路</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handlerClick}>
                        <Menu.Item key="0">
                            <HomeOutlined/>
                            博客首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.id}>
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header