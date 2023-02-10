import {View, Text, Button} from 'react-native';

const Index = ({navigation}) => {
    return (
        <View>
            <Text>
                Teste de conhecimento.
            </Text>

            <Button title='Inicar teste' onPress={ () => navigation.navigate("Quizz")} />
        </View>
    )
}

export default Index;