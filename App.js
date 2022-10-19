import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todos from './screens/Todos';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Todos"
          component={Todos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="check" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Einstellungen"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
