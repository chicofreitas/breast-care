import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../MainScreen';
import IntroScreen from '../IntroScreen';
import QuestionScreen from '../QuestionsScreen';
import QuizzScreen from '../QuizzScreen';
import PositionsScreen from '../PositionsScreen';
import ArtifactsScreen from '../ArtifactsScreen';
import AnatomyScreen from '../AnatomyScreen';
import TipsScreen from '../TipsScreen';

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Itens', headerShown:false }}/>
                <Stack.Screen name="Intro" component={IntroScreen} options={{ title: 'Conceitos', headerShown:false }}/>
                <Stack.Screen name="Positions" component={PositionsScreen} options={{ title: 'Posições e Técnicas',headerShown:false }}/>
                <Stack.Screen name="Artifacts" component={ArtifactsScreen} options={{ title: 'Artefatos',headerShown:false }}/>
                <Stack.Screen name="Anatomy" component={AnatomyScreen}  options={{ title: 'Anatomia da Mama',headerShown:false }}/>
                <Stack.Screen name="Tips" component={TipsScreen}  options={{ title: 'Dicas de Leitura',headerShown:false }}/>
                <Stack.Screen name="Questions" component={QuestionScreen}  options={{ title: 'Quizz',headerShown:false }}/>
                <Stack.Screen name="Quizz" component={QuizzScreen}/>
            </Stack.Navigator>
    )
}

export default Index;