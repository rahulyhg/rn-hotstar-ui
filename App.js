import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import drawer from './component/drawer';
import ItemList from './component/ItemList';
import Premium from './component/premium';
import Channels from './component/channels';
import Language from './component/language';
import Genres from './component/genres';
import Help from './component/help';
import Terms from './component/terms';
import Privacy from './component/privacypolicy';
import Search from './component/search';
import Login from './component/login';
import Downloads from './component/downloads';
import Watchlist from './component/watchlist';
import Logout from './component/logout';
const Stack = createStackNavigator({
    ItemList :{screen:ItemList},
    Login:{screen:Login},
    Downloads:{screen:Downloads},
    Watchlist:{screen:Watchlist},
    Premium :{ screen :Premium},
    Channels :{screen :Channels},
    Language:{screen:Language},
    Genres:{screen:Genres},
    Help:{screen:Help},
    Terms:{screen:Terms},
    Privacy:{screen:Privacy},
    Search:{screen:Search},
    Logout:{screen:Logout},
   
},{
    headerMode:'float',

})

export default Drawer = createDrawerNavigator({
    Home:{screen: Stack},
},
{
    contentComponent: drawer,
    
})