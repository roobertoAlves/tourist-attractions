import { SafeAreaView, Text, Button } from 'react-native';
import style from '../css/style';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen( { navigation } ) 
{
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.paragraph}>This is the home screen of the app.</Text>

            <Button title="About" onPress={() => navigation.navigate('about')} />
            <Button title="Contact" onPress={() => navigation.navigate('contact')} />
            <Button title="Images" onPress={() => navigation.navigate('images')} />
            
        </SafeAreaView>
    );
}
