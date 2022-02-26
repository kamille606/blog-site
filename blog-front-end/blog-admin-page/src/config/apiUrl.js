let ipUrl = 'http://localhost:6060/api'

let servicePath = {
    userLogin: ipUrl + '/user/login',
    getTypeList: ipUrl + '/type/list',
    addArticle: ipUrl + '/article/add',
    updateArticle: ipUrl + '/article/update',
    getArticleList: ipUrl + '/article/list?typeId=',
    getArticleInfo: ipUrl + '/article/info?id=',
    deleteArticle: ipUrl + '/article/delete?id='
}

export default servicePath