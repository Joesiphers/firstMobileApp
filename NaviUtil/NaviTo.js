export default class Navito {
    
    static resetToHomePage (navigation){
        navigation.navigate('Trend')
    };
    static goPage (page,params) {
        const navigation =Navito.navigation;//pass the navigation
        if (!navigation){console.log('navigation null');
            return}
        //    console.log(params,"from navito");
            navigation.navigate(page, {"new":"params",...params})

    }
}