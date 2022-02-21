let ipUrl = 'http://localhost:6060/api'

let servicePath = {
    userLogin: ipUrl + '/user/login',
    getTypeList: ipUrl + '/type/list',
    addArticle: ipUrl + '/article/add',
    updateArticle: ipUrl + '/article/update',
    getArticleList: ipUrl + '/article/list/'
}

export default servicePath