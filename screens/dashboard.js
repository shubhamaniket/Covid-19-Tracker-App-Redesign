import React from 'react';
import {View,StyleSheet,Text,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native';
const width = Dimensions.get('window').width;
import {
    UIActivityIndicator,
  } from 'react-native-indicators';
export default class Dashboard extends React.Component{
    state = {
        dataone : [],
        mostinfected : [],
        isloading : true
    }
    componentDidMount(){
       this.fetchdata();
       this.fetchmostinfected();
    }
    fetchdata = () => {
        fetch('https://corona.lmao.ninja/v2/all')
        .then((response)=>response.json())
        .then((responsejson)=>{this.setState({
            dataone : responsejson,
        })
    })
    }
    fetchmostinfected = () => {
        fetch('https://covid19-server.chrismichael.now.sh/api/v1/CountriesWhereCoronavirusHasSpread')
        .then((response)=>response.json())
        .then((responsejson)=>{this.setState({
            mostinfected : responsejson,
            isloading : false
        })
        console.log(this.state.mostinfected.table[0].Country)
    })
    }
    render(){
        var d = new Date(this.state.dataone.updated)
        if(this.state.isloading){
            return(
                    <View style={styles.container}>
                        <View style={styles.imageview}>
                            <Image source={require('../assets/one.jpg')} style={{width:width,height:200,borderBottomRightRadius:44,borderBottomLeftRadius:44}}/>
                        </View>
                        <View style={styles.header}>
                            <Text style={{fontSize:22,fontWeight:'bold'}}>Covid-19 Tracker</Text>
                        </View>
                        <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
                            <UIActivityIndicator color="blue" size={30}/>
                        </View>
                    </View>
            );
        }
        else
        {
            return(
                <View style={styles.container}>
                    <View style={styles.imageview}>
                        <Image source={require('../assets/one.jpg')} style={{width:width,height:200,borderBottomRightRadius:44,borderBottomLeftRadius:44}}/>
                    </View>
                    <View style={styles.header}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>Covid-19 Tracker</Text>
                        <Text style={{marginTop:8,color:'rgba(0, 0, 0, 0.5)',fontSize:14}}>Updated as on {d.toDateString()}</Text>
                    </View>
                    <View style={styles.card}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/confirmed.png')} style={{width:35,height:35}}/>
                            <Text style={[styles.numbers,{color:'red'}]}>{this.state.dataone.cases}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/deaths.png')} style={{width:40,height:40}}/>
                            <Text style={[styles.numbers,{color:'grey'}]}>{this.state.dataone.deaths}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/recovered.png')} style={{width:35,height:35}}/>
                            <Text style={[styles.numbers,{color:'#2F0DFF'}]}>{this.state.dataone.recovered}</Text>
                        </View>
                    </View>
                    <View style={{height:50,width:330,alignSelf:'center',top:60,flexDirection:'row'}}>
                        <View style={{flex:6,alignItems:'center',justifyContent : 'center'}}>
                            <Text style={styles.mostheader}>Most Affected Countries</Text>
                        </View>
                        <View style={{flex:2,alignItems:'center',justifyContent : 'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Viewall')}>
                                <Text style={{color:'blue'}}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.most}>
                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{flex:1,left:10}}
                        contentContainerStyle={{width : 600}}
                        >
                            <View style={{flex:1,backgroundColor:'#7f8c8d',margin:5,borderRadius:20}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{this.state.mostinfected.table[0].Country}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Infected</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[0].Cases}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Deaths</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[0].Cases}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,backgroundColor:'#e67e22',margin:5,borderRadius:20}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{this.state.mostinfected.table[1].Country}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Infected</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[1].Cases}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Deaths</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[1].Cases}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,backgroundColor:'#2980b9',margin:5,borderRadius:20}}>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{this.state.mostinfected.table[2].Country}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Infected</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[2].Cases}</Text>
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Deaths</Text>
                                    <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[2].Cases}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,backgroundColor:'#54a0ff',margin:5,borderRadius:20}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>{this.state.mostinfected.table[3].Country}</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Infected</Text>
                                        <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[3].Cases}</Text>
                                    </View>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:14,fontWeight:'300',color:'#fff'}}>Deaths</Text>
                                        <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{this.state.mostinfected.table[3].Deaths}</Text>
                                    </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    imageview : {
        width : width,
        height : 200,
        top : 0,
        borderBottomLeftRadius : 44,
        borderBottomRightRadius : 44
    },
    header : {
        top : 25,
        left : 30
    },
    card : {
        width : width-50,
        height : 100,
        backgroundColor : '#fdfdfd',
        alignSelf : 'center',
        top : 50,
        elevation : 2,
        flexDirection : 'row'
    },
    numbers : {
        marginTop : 20,
        fontWeight:'bold',
        fontSize:15
    },
    most : {
        height:200,
        top : 60,
    },
    mostheader : {
        fontSize : 18,
        fontWeight : 'bold',
        
    }
})