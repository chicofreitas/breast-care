import {View, TouchableHighlight, Text, Image, StyleSheet, ScrollView, Alert, Button} from 'react-native';
import { Flex } from "@react-native-material/core";

const styles = StyleSheet.create({
    touch:{
        marginVertical:20,
        marginHorizontal:40,
        shadowRadius:2,
        shadowOffset:2
    },
    container: {
        height:100,
        backgroundColor:"white",
    },
    images: {
        width:100,
        height:100
    },
    title:{
        fontWeight:"bold", 
        fontSize:18, 
        color:"gray"
    }
  });

const Index = ({navigation}) => {
    return (
        <View>
            <ScrollView>
            <View style={{ alignContent: "center" }}>
                
                <TouchableHighlight style={styles.touch}
                    onPress={() => navigation.navigate("Intro")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                        style={styles.images}
                        source={require('./img/001-breast.png')}/>
                        <View style={{padding:10, flexGrow:1, width:0}}>
                            <Text style={styles.title}>Conceito</Text>

                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.
                            </Text>
                        </View>
                    </Flex>

                </TouchableHighlight>

                <TouchableHighlight style={styles.touch}
                    onPress={() => navigation.navigate("Positions")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                            style={styles.images}
                            source={require('./img/002-breast-cancer.png')}/>
                        <View style={{padding:10, flexGrow:1, width:0}}>
                            <Text  style={styles.title}>Posicionamentos e Técnicas</Text>
                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro.
                            </Text>
                        </View>
                    </Flex>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touch}
                    onPress={() => navigation.navigate("Artifacts")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                            style={styles.images}
                            source={require('./img/001-breast.png')}/>
                        <View style={{padding:10, flexGrow:1, width:0}}>
                            <Text style={styles.title}>Artefatos</Text>
                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.
                            </Text>
                        </View>
                    </Flex>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touch}data
                    onPress={() => navigation.navigate("Anatomy")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                            style={styles.images}
                            source={require('./img/001-breast.png')}/>
                        <View  style={{padding:10, flexGrow:1, width:0}}>
                            <Text style={styles.title}>Anatomia da Mama</Text>
                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.
                            </Text>
                        </View>
                    </Flex>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touch}
                    onPress={() => navigation.navigate("Tips")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                            style={styles.images}
                            source={require('./img/006-books.png')}/>
                        <View  style={{padding:10, flexGrow:1, width:0}}>
                            <Text style={styles.title}>Dicas de Leitura</Text>
                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.
                            </Text>
                        </View>
                    </Flex>
                </TouchableHighlight>

                <TouchableHighlight style={styles.touch}
                    onPress={() => navigation.navigate("Questions")}
                    >
                    <Flex direction='row' style={styles.container}>
                        <Image 
                            style={styles.images}
                            source={require('./img/008-quiz.png')}/>
                        <View   style={{padding:10, flexGrow:1, width:0}}>
                            <Text style={styles.title}>Quizz</Text>
                            <Text style={{flexWrap:"wrap"}}>
                            Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.
                            </Text>
                        </View>
                    </Flex>
                </TouchableHighlight>
            </View>
            </ScrollView>
        </View>
    )
}

export default Index;