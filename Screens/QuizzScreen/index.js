import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabScreen1 from '../TabsScreen/TabScreen1';
import TabScreen2 from '../TabsScreen/TabScreen2';

const Tab = createMaterialTopTabNavigator();

const Index = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Question1" component={TabScreen1} />
            <Tab.Screen name="Question2" component={TabScreen2} />
        </Tab.Navigator>
    )
}

export default Index;