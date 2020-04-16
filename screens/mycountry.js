import React from 'react';
import {View,StyleSheet,Text,Dimensions,Image,ScrollView,FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import {UIActivityIndicator} from 'react-native-indicators';
const width = Dimensions.get('window').width;
export default class Mycountry extends React.Component{
    state = {
        data : [],
        localdata : [],
        isloading : true
    }
    componentDidMount(){
        this.fetchapi()
        this.fetchlocaldata()
    }
    fetchapi = () => {
        fetch('https://corona.lmao.ninja/v2/countries/india')
        .then((response)=>response.json())
        .then((responsejson)=>{this.setState({
            data : responsejson,
            isloading : false
        })})
    }
    fetchlocaldata = () => {
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then((response)=>response.json())
        .then((responsejson)=>{
            this.setState({
                localdata : responsejson.data.regional,
            })
        })
    }
    _renderitem = (item) => {
        return(
            <View style={styles.cardone}>
                <View style={{flex:1.5,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{item.loc}</Text>
                    </View>
                </View>
                <View style={{flex:2,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'orange',fontSize:18}}>{item.totalConfirmed}</Text>
                        <Text style={{color:'grey'}}>Confirmed</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'red',fontSize:18}}>{item.deaths}</Text>
                        <Text style={{color:'grey'}}>Deaths</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'blue',fontSize:18}}>{item.discharged}</Text>
                        <Text style={{color:'grey'}}>Recovered</Text>
                    </View>
                </View>
            </View>
        );
    }
    render(){
        var d = new Date(this.state.data.updated);
        var cases = this.state.data.cases;
        var activecases = this.state.data.active;
        var deaths = this.state.data.deaths;
        var recovered = this.state.data.recovered;
        var active = activecases/cases;
        var dead = deaths/cases;
        var recover = recovered/cases;
        if(this.state.isloading)
        {
            return(
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize:20,color:'#fff',marginLeft:15}}>My Country</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <UIActivityIndicator size={30} color="blue"/>
                    </View>
                </View>
            );
        }
        else
        {
            return(
                <View style={styles.container}>
                    <ScrollView
                    style={{flex:1}}
                    contentContainerStyle={{width:width,height:4150}}
                    >
                        <View style={styles.header}>
                        <Text style={{fontSize:20,color:'#fff',marginLeft:15}}>My Country</Text>
                    </View>
                    <View style={styles.country}>
                        <View style={{flex:0.5,alignItems:'flex-start',justifyContent:'center'}}>
                            <Image source={require('../assets/pin.png')} style={{width:20,height:20}}/>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:20,fontWeight:'bold',letterSpacing:-1,color:'grey'}}>INDIA</Text>
                        </View>
                        <View style={{flex:4,alignItems:'flex-end',justifyContent:'center'}}>
                            <Text>Updated as on {d.toDateString()}</Text>
                        </View>
                    </View>
                    <View style={styles.total}>
                        <View style={{flex:0.4,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/earth.png')} style={{width:20,height:20}}/>
                        </View>
                        <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:16,letterSpacing:-0.8}}>Total Cases</Text>
                        </View>
                        <View style={{flex:2,alignItems:'flex-end',justifyContent:'center'}}>
                            <Text style={{fontSize:16,color:'orange',fontWeight:'bold',marginHorizontal:5}}>{this.state.data.cases}</Text>
                        </View>
                    </View>
                    <View style={styles.bars}>
                        <Text style={{fontWeight:'bold',fontSize:16,letterSpacing:-0.8}}>Active Cases</Text>
                        <Progress.Bar progress={active} width={width-50} color="orange"/>
                    </View>
                    <View style={styles.bars}>
                        <Text style={{fontWeight:'bold',fontSize:16,letterSpacing:-0.8}}>Deaths</Text>
                        <Progress.Bar progress={dead} width={width-50} color="red"/>
                    </View>
                    <View style={styles.bars}>
                        <Text style={{fontWeight:'bold',fontSize:16,letterSpacing:-0.8}}>Recovered</Text>
                        <Progress.Bar progress={recover} width={width-50} />
                    </View>
                    <View style={styles.card}>
                        <Text style={{fontSize:18,fontWeight:'bold',letterSpacing:-0.8}}>States Data</Text>
                    </View>
                    <View style={{width:width-30,height:4000,alignSelf:'center',top:50}}>
                        <FlatList
                        data={this.state.localdata}
                        renderItem={({item})=>this._renderitem(item)}
                        keyExtractor={(item,index)=>item.loc}
                        />
                    </View>
                    </ScrollView>
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
    header : {
        top : 0,
        left : 0,
        height : 55,
        width : width,
        backgroundColor : '#3498DB',
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        padding : 10
    },
    country : {
        width : width-50,
        height : 50,
        alignSelf : 'center',
        top : 20,
        flexDirection:'row',
    },
    total : {
        width : width-50,
        height : 50,
        backgroundColor : '#c9f0ee',
        alignSelf : 'center',
        top : 25,
        flexDirection : 'row'
    },
    bars : {
        width : width-50,
        height : 60,
        alignSelf : 'center',
        top:50,
    },
    card : {
        width : width-50,
        height : 30,
        alignSelf : 'center',
        top : 50
    },
    cardone : {
        width : 320,
        height : 100,
        backgroundColor : '#fff',
        alignSelf : 'center',
        marginVertical : 10,
        elevation : 1,
        borderRadius : 15,
        padding : 10
    }
})