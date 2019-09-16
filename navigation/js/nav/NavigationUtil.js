//全剧导航类
export default class NavigationUtil{
    //返回上一页
    static goBack(params) {
        const {navigation} = params;
        navigation.goBack();
    }
    // 重置到首页
    static resetToHomePage(params) {
        const {navigation} = params;
        if(!navigation){
            console.log("navigation不能为空")
            return
        }
        navigation.navigate('App')
    }
    //跳转页面
    static goToPage(params,page) {
        const navigation = NavigationUtil.navigation;
        navigation.navigate(page,{...params})
    }
}