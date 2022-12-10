import React from "react";
import Home from "../screens/Home/index"
import Palette from "../screens/palette/index"

import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack= createNativeStackNavigator ()
export default function Root (){
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
 headerTitle: 'Palettes'
        }}/>
        <Stack.Screen name="Palette" component={Palette}/>

    </Stack.Navigator>
}