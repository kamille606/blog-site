let ipUrl = 'http://localhost:6060/api'

let servicePath = {
    getBlogInfo: ipUrl + '/blog/info?id=',
    getTypeList: ipUrl + '/type/list',
    getBlogListByTypeId: ipUrl + '/blog/list/',
}

export default servicePath