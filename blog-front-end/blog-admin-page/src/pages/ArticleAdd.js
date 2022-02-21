import React, {useState, useEffect} from 'react'
import {marked} from 'marked'
import {Row, Col, Input, Select, Button, message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import '../static/css/ArticleAdd.css'

const {Option} = Select
const {TextArea} = Input

function ArticleAdd() {

    const [articleId, setArticleId] = useState(0)//文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('')//文章标题
    const [articleContent, setArticleContent] = useState('')//markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容')//html内容
    const [introduceMD, setIntroduceMD] = useState()//简介的markdown内容
    const [introduceHtml, setIntroduceHtml] = useState('等待编辑')//简介的html内容
    const [typeInfo, setTypeInfo] = useState([])//文章类别信息
    const [selectedType, setSelectType] = useState(1)//选择的文章类别

    useEffect(() => {
        getTypeList()
    }, [])

    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e) => {
        setIntroduceMD(e.target.value)
        let html = marked(e.target.value)
        setIntroduceHtml(html)
    }

    const getTypeList = () => {
        axios({
            method: 'get',
            url: servicePath.getTypeList,
            withCredentials: true
        }).then(res => {
            setTypeInfo(res.data.data)
        })
    }

    const saveArticle = () => {
        if (!selectedType) {
            message.error('必须选择文章类别')
            return false
        } else if (!articleTitle) {
            message.error('文章名称不能为空')
            return false
        } else if (!articleContent) {
            message.error('文章内容不能为空')
            return false
        } else if (!introduceMD) {
            message.error('简介不能为空')
            return false
        }
        let dataProps = {
            typeId: selectedType,
            title: articleTitle,
            content: articleContent,
            introduce: introduceMD
        }

        if (articleId === 0) {
            axios.post(servicePath.addArticle, dataProps).then(res => {
                let id = res.data.data;
                setArticleId(id)
                if (id !== 0) {
                    message.success('文章添加成功')
                } else {
                    message.error('文章添加失败')
                }
            })
        } else {
            dataProps.id = articleId
            axios.post(servicePath.updateArticle, dataProps).then(res => {
                if (res.data.data) {
                    message.success('文章保存成功')
                } else {
                    message.error('文章保存失败');
                }
            })
        }
    }

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input
                                placeholder="博客标题"
                                size="large"
                                onChange={e => {
                                    setArticleTitle(e.target.value)
                                }}
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} onChange={(value) => {
                                setSelectType(value)
                            }} size="large">
                                {
                                    typeInfo.map((item, index) => {
                                        return (<Option key={index} value={item.id}>{item.typeName}</Option>)
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea
                                className="markdown-content"
                                rows={35}
                                placeholder="文章内容"
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div
                                className="show-html"
                                dangerouslySetInnerHTML={{__html: markdownContent}}
                            >
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea
                                rows={4}
                                value={introduceMD}
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                                placeholder="文章简介"
                            />
                            <br/><br/>
                            <div className="introduce-html"
                                 dangerouslySetInnerHTML={{__html: '文章简介:' + introduceHtml}}
                            >
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ArticleAdd