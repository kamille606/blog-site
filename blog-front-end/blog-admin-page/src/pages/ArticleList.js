import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {List, Row, Col, Modal, message, Button, Switch} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import '../static/css/ArticleList.css'

const {confirm} = Modal

function ArticleList() {

    const [list, setList] = useState([])

    const navigate = useNavigate()

    const getArticleList = () => {
        axios.get(servicePath.getArticleList + 0).then(res => {
            setList(res.data.data)
        })
    }

    const deleteArticle = (id) => {
        confirm({
            title: '确实删除吗?',
            content: '点击OK按钮删除文章',
            onOk() {
                axios.get(servicePath.deleteArticle + id).then(res => {
                    if (res.data.data) {
                        message.success('删除成功')
                        getArticleList()
                    } else {
                        message.error('删除失败')
                    }
                })
            },
            onCancel() {
                message.info('取消删除')
            }
        })
    }

    const updateArticle = (id, checked) => {
        navigate('/admin/add?id=' + id, {state: {id: id}})
    }

    useEffect(() => {
        getArticleList()
    }, [])

    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="list-div">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.typeName}
                            </Col>
                            <Col span={4}>
                                {item.gmtCreate}
                            </Col>
                            <Col span={4}>
                                {item.viewCount}
                            </Col>
                            <Col span={4}>
                                <Button onClick={() => {
                                    updateArticle(item.id)
                                }} type="primary">修改</Button>&nbsp;
                                <Button onClick={() => {
                                    deleteArticle(item.id)
                                }}>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )

}

export default ArticleList