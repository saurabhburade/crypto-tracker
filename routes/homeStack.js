import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import about from "../screens/about";
import app from "../screens/home";

const screens={
    Home:{
        screen:app,
    },
    About:{
        screen:about
    }
}
const HomeStack= createStackNavigator(screens,{defaultNavigationOptions:{
    header:false
}})
export default createAppContainer(HomeStack)