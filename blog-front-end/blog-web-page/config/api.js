let ipUrl = 'http://localhost:6060/api'

let servicePath = {
    getBlogInfo: ipUrl + '/article/info?id=',
    getTypeList: ipUrl + '/type/list',
    getBlogListByTypeId: ipUrl + '/article/list?typeId=',
}

export default servicePath