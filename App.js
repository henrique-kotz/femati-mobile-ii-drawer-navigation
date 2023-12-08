//import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import Bulbasaur from './components/Bulbasaur';
import Charmander from './components/Charmander';
import Squirtle from './components/Squirtle';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Bulbasaur" component={Bulbasaur} />
        <Drawer.Screen name="Charmander" component={Charmander} />
        <Drawer.Screen name="Squirtle" component={Squirtle} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}