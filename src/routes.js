import Home from './components/Home.vue';
import Header from './components/Header.vue';
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserEdit from './components/user/UserEdit.vue';
// import UserDetails from './components/user/UserDetails.vue';

//ovi gore importi znace da se sve odmah loaduje (EagerLoading)
//zato se for lazy loading ovi importi upakuju u drugu sintaaksu 
//(ovu sintaksu webpack prepozna i ne ukljci importe koji su u njoj odmah) - require.ensure([]) sitaksu
const User = resolve => {
    //ensure -kada god zelimo ovo sto zivi u ovoj komp npr kliknemo na link
    //resolve -kao promise da nam ustvari i dostavi to
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user')
}
//svaki put kopiramo, i da postane dugo ali vredi da se sacuva performansa u vecim aplikacijama
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user')
}

//ako hocemo da ih grupisemo tj da napravimo grupu (jedan bundle umesto cetiri) koja se odjednom loaduje, dodamo treci parametar 'user'
const UserDetails = resolve => {
    require.ensure(['./components/user/UserDetails.vue'], () => {
        resolve(require('./components/user/UserDetails.vue'));
    }, 'user')
}

export const routes = [
    { path: '', name: 'root', components:{
        //named (top) router component
        default: Home,
        'header-top': Header,
    }},
    { path: '/user', components:{
        //second (bottom) named router component
        default: User,
        'header-bottom': Header,
    }, children: [
        // ako imamo / to ce apendovati na domain name
        { path: '', component: UserStart },
        // 2bg)
        { path: ':id', component: UserDetails, beforeEnter: ( to, from, next ) => {
            next();
        }},
        // ako setujemo name to nam olaksava kod dinamickih ruta da ne moramo da konkateniramo path 
        // nego samo prosledimo objekat sa dva parametra od kojih je jedan name a drugi query param 
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        // redirekcija kad se ukuca odredjena rec recimo
        { path: '/redirect', redirect: '/user'},
        // redirekcija preko imena ali onda je u objektu
        // { path: '/redirect', redirect: { name: 'root' }}
        //Wild cards:
        { path: '/*', redirect: '/' }

        //Lazy loading: loading the parts of the app only when we need it
    ]}
]