import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './windows/home';
import About from './windows/about';
import Contact from './windows/contact';
import Images from './windows/img'

const Telas =   createNativeStackNavigator();

export default function App() 
{
    return (
        <NavigationContainer>

            <Telas.Navigator initialRouteName="home">
                <Telas.Screen name="home" component={HomeScreen} 
                  options={
                    {
                      title: 'HOME',
                      headerTitleAlign: 'center',
                      headerTitleStyle: { fontSize: 28, fontWeight: 'bold', color: "#000"}
                    }
                  }
                />

                <Telas.Screen name="about" component={About} />
                <Telas.Screen name="contact" component={Contact} />
                <Telas.Screen name="images" component={Images} />

            </Telas.Navigator>
            
        </NavigationContainer>
    );
}
