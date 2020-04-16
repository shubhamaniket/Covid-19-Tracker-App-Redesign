import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Dimensions, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
console.disableYellowBox = true;
export default class Precautions extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                style={{flex:1}}
                contentContainerStyle={{width:width,height:1750}}>
                    <View style={styles.box}>
                        <ImageBackground source={require('../assets/header.png')} style={{width:'100%',height:'100%',}} resizeMode="cover"/>
                    </View>
                    <Text style={{left:20,fontSize:20,fontWeight:'bold',letterSpacing:-0.8,top:10}}>Symptoms</Text>
                    <View style={{width:width,height:250,top:20}}>
                        <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{flex:1}}
                        contentContainerStyle={{height:'100%',width:1000}}
                        >
                            <View style={{flex:1,marginHorizontal:20,borderWidth:1}}>
                                <View style={{flex:3}}>
                                    <ImageBackground source={require('../assets/fever.jpg')} style={{width:'100%',height:'100%'}}/>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-0.8}}>Fever</Text>
                                </View>
                            </View>
                            <View style={{flex:1,marginHorizontal:20,borderWidth:1}}>
                                <View style={{flex:3}}>
                                    <ImageBackground source={require('../assets/cough.jpg')} style={{width:'100%',height:'100%'}}/>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-0.8}}>Coughing</Text>
                                </View>
                            </View>
                            <View style={{flex:1,marginHorizontal:20,borderWidth:1}}>
                                <View style={{flex:3}}>
                                <ImageBackground source={require('../assets/breath.jpg')} style={{width:'100%',height:'100%'}}/>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-0.8}}>Shortness of Breath</Text>
                                </View>
                            </View>
                            <View style={{flex:1,marginHorizontal:20,borderWidth:1}}>
                                <View style={{flex:3}}>
                                <ImageBackground source={require('../assets/tired.jpg')} style={{width:'100%',height:'100%'}}/>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-0.8}}>Tiredness</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={{top:40,left:20,fontSize:20,fontWeight:'bold',letterSpacing:-0.8}}>Precautions</Text>
                    <View style={[styles.precaution,{top:50}]}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:-1}}>Stay at Home.</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',padding:11}}>
                                <Text style={{fontSize:16}}>Limit all your essential travels.</Text>
                                <Text style={{fontStyle:"italic",marginTop:10}}>Unless you're going out for food,medicines or other essentials.</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/stayathome.png')} style={{width:130,height:130}}/>
                        </View>
                    </View>
                    <View style={[styles.precaution,{top:70}]}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:10}}>
                                <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:-1}}>Check your temperature.</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',padding:11}}>
                                <Text style={{fontSize:16}}>Check your temperature atleast two times a day.</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/thermometer.jpg')} style={{width:130,height:130}}/>
                        </View>
                    </View>
                    <View style={[styles.precaution,{top:90}]}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:10}}>
                                <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-1}}>Watch for other symptoms.</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',padding:11}}>
                                <Text style={{fontSize:14}}>Apart from fever COVID-19 symptoms include coughing,diffculty breathing and fatigue.</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/watchforsymptoms.png')} style={{width:130,height:130}}/>
                        </View>
                    </View>
                    <View style={[styles.precaution,{top:110}]}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:10}}>
                                <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:-1}}>Practise Social Distancing.</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',padding:11}}>
                                <Text style={{fontSize:16}}>If you want to go out then maintain at least 6 feets distance.</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/socialdistance.png')} style={{width:130,height:130}}/>
                        </View>
                    </View>
                    <View style={[styles.precaution,{top:130}]}>
                        <View style={{flex:1}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:11}}>
                                <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:-1}}>Wash Your Hands.</Text>
                            </View>
                            <View style={{flex:2,alignItems:'center',padding:11}}>
                                <Text style={{fontSize:14}}>Practise good washing practises by washing your hands with soap or alcohol based handwash.</Text>
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/washyourhands.png')} style={{width:140,height:130}}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    box : {
        width:width,
        height : 260,
    },
    precaution : {
        width : width - 30,
        height : 200,
        backgroundColor : 'lightblue',
        alignSelf : 'center',
        flexDirection:'row'
    }
})