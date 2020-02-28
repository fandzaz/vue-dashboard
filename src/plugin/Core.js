
const Core = {};
var coreFunction = {
    navBackground:'#fff',
    navTextColor:'#000',
    getColor(){
        return this.color;
    }
 }
Core.install =  (Vue, options) => {
    if(options){
        if(options.hasOwnProperty('navBackground')){  coreFunction.navBackground = options.navBackground }
        if(options.hasOwnProperty('navTextColor')){  coreFunction.navTextColor = options.navTextColor }
    }
    Vue.core = coreFunction
}

export default Core;
