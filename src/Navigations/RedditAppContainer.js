import React, {Component} from 'react';

import {
    createAppContainer,
    createStackNavigator
} from "react-navigation";
import Homescreen from "../Screens/Homescreen/Homescreen";
import BrowserComponent from "../Components/BrowserComponent/BrowserComponent";




const Root  =  createStackNavigator({
    Home: {
        screen: Homescreen
    },
    Browser: {
        screen:  BrowserComponent
    }
},
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }

});



export const RedditAppContainer  = createAppContainer(Root);




