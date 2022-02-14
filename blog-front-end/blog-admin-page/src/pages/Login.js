import React, {useState} from 'react'
import {Card, Input, Button, Spin} from 'antd'
import {UserOutlined, KeyOutlined} from '@ant-design/icons'

import 'antd/dist/antd.css'
import '../static/css/Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const checkLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
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
                    <Button type='primary' size='large' block oncClick={checkLogin}>
                        登录
                    </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login