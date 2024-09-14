const base = {
    get() {
        return {
            url : "http://localhost:8080/php2fil7831/",
            name: "php2fil7831",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php2fil7831/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "红色文物APP"
        } 
    }
}
export default base
