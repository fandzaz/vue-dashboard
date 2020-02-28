import About from '@/components/pages/About';
import HelloWorld from '@/components/pages/HelloWorld';
var initRoute = [
    { path: '',name:'home',component: HelloWorld},
    { path: 'about',name:'about',component: About},
]
export default initRoute;