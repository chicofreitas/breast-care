import {ScrollView, View, Text, ImageBackground, Image} from 'react-native';
const Index = () => {
    return (
        <ScrollView style={{}}>
            <ImageBackground
                style={{elevation:6, shadowRadius:5, shadowColor:"#000", shadowOffset:{width:5, height:5},minHeight:200, alignItems:"center",paddingTop:60}} 
                source={
                    {uri: 'https://images.pexels.com/photos/14640918/pexels-photo-14640918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                } resizeMode="cover">
                <Text style={{fontWeight:"bold", fontSize:24, color:"#fff"}}>Artefatos</Text>
            </ImageBackground>

            <View style={{padding:20}}>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna libero, pellentesque in dignissim sed, rutrum vitae nunc. Vestibulum suscipit ullamcorper sem sit amet rhoncus. Maecenas id rhoncus lorem, suscipit lacinia lectus. In a justo non magna laoreet imperdiet. Aenean tincidunt sapien hendrerit sapien sagittis faucibus. Sed tincidunt, ligula sed ullamcorper vulputate, eros risus tincidunt diam, quis faucibus augue urna sed eros. Suspendisse velit ante, mollis pellentesque viverra eu, placerat sed ex. Donec id rhoncus augue, eu consequat leo.

                </Text>

                <View style={{alignItems:"center"}}>
                    <Image 
                        style={{width:280, height:280, marginVertical:20, alignContent:"center"}}
                        source={
                        {uri: 'https://images.pexels.com/photos/14640918/pexels-photo-14640918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                    }/>
                </View>
                
                <Text style={{fontSize:9, color:"#c777c6", textAlign:"center", marginTop:-10, paddingBottom:20}}>
                    Imagem 1. Seios de uma mulher.
                </Text>
                
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla magna libero, pellentesque in dignissim sed, rutrum vitae nunc. Vestibulum suscipit ullamcorper sem sit amet rhoncus. Maecenas id rhoncus lorem, suscipit lacinia lectus. In a justo non magna laoreet imperdiet. Aenean tincidunt sapien hendrerit sapien sagittis faucibus. Sed tincidunt, ligula sed ullamcorper vulputate, eros risus tincidunt diam, quis faucibus augue urna sed eros. Suspendisse velit ante, mollis pellentesque viverra eu, placerat sed ex. Donec id rhoncus augue, eu consequat leo.

                Etiam lacus metus, aliquet molestie erat in, scelerisque vulputate leo. Phasellus sed nibh a odio tincidunt pellentesque ut non lectus. Donec in arcu interdum, pharetra turpis id, consequat ex. Duis rhoncus, nibh quis venenatis iaculis, sapien dolor tempus urna, et tempus metus libero sit amet enim. Praesent in accumsan orci, at pharetra ante. Donec aliquam ut nisl vitae sodales. Aliquam dictum neque eget tortor commodo, a ornare nunc blandit. Vestibulum posuere, sapien a fermentum ornare, ex ligula vestibulum lacus, eu tempus leo massa et tortor. Ut mollis pharetra maximus. In eget accumsan leo, quis auctor ante. Curabitur ac bibendum elit. Duis et luctus nulla. Duis sit amet nibh sapien.

                Aenean ultricies diam ut dolor accumsan, iaculis fringilla felis dapibus. Donec molestie est magna, vel tempor erat congue vitae. Nulla iaculis pellentesque nulla, id efficitur felis tincidunt ultricies. Mauris pharetra pretium turpis elementum porttitor. Duis augue sem, consectetur quis egestas eu, finibus non diam. Praesent hendrerit auctor ligula sed feugiat. Sed rutrum lobortis nibh nec commodo. Maecenas ultrices arcu in elit tempus, non suscipit neque tempus. Nam volutpat accumsan lobortis.

                </Text>
            </View>
        </ScrollView>
    )
}

export default Index;