import {Avatar, Divider} from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://blogimages.jspang.com/blogtouxiang1.jpg"/></div>
            <div className="author-introduction">
                此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} className="account"><GithubOutlined/></Avatar>
                <Avatar size={28} className="account"><QqOutlined/></Avatar>
                <Avatar size={28} className="account"><WechatOutlined/></Avatar>
            </div>
        </div>
    )
}

export default Author