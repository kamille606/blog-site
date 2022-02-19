import React, {useState} from 'react'
import {Card, Input, Button, Spin, message} from 'antd'
import {UserOutlined, KeyOutlined} from '@ant-design/icons'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import 'antd/dist/antd.css'
import '../static/css/Login.css'

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = () => {
        setIsLoading(true)
        if (!username) {
            closeLoadingWithMsg('用户名不能为空')
            return false
        }
        if (!password) {
            closeLoadingWithMsg('密码不能为空')
            return false
        }
        let dataProps = {
            'username': username,
            'password': password
        }
        axios({
            method: 'post',
            url: servicePath.userLogin,
            data: dataProps,
            withCredentials: true
        }).then(res => {
            setIsLoading(false)
            if (res.data.data === true) {
                props.history.push('/admin')
            } else {
                closeLoadingWithMsg('用户名或密码错误')
            }
        }).catch(() => {
            closeLoadingWithMsg('网络连接超时')
        })
    }

    const closeLoadingWithMsg = (msg) => {
        message.error(msg)
        setTimeout(() => {
            setIsLoading(false)
        }, 100)
    }

    return (
        <div className='login-div'>
            <Spin tip='loading...' spinning={isLoading}>
                <Card title='Lain blog web page' bordered={true} style={{width: 400}}>
                    <Input
                        id='username'
                        size='large'
                        placeholder='请输入用户名'
                        prefix={<UserOutlined/>}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <br/>
                    <br/>
                    <Input.Password
                        id='password'
                        size='large'
                        placeholder='请输入密码'
                        prefix={<KeyOutlined/>}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <br/>
                    <br/>
                    <Button type='primary' size='large' block onClick={checkLogin}>
                        登录
                    </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login