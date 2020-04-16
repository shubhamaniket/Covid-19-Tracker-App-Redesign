import 'react-native-get-random-values';
import React from 'react';
import {View,StyleSheet,Text,FlatList,ImageBackground,TextInput,Image} from 'react-native';
import {
    UIActivityIndicator,
  } from 'react-native-indicators';
import _  from 'lodash';
export default class Viewall extends React.Component{
    state = {
        data : [],
        fullData : [],
        isloading : true,
        query : ''
    }
    componentDidMount(){
        this.fetchapi()
    }
    fetchapi = () => {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then((response)=>response.json())
        .then((responsejson)=>{this.setState({
            data : responsejson,
            fullData : responsejson,
            isloading : false
        })})
        .catch((error)=>console.log(error))
    }
    _renderitem = (item) => {
        return(
            <View style={styles.card}>
                <View style={{flex:1.5,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <ImageBackground source={{uri : item.countryInfo.flag}} style={{width:'100%',height:'100%'}}/>
                    </View>
                    <View style={{flex:4,justifyContent:'center',marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{item.country}</Text>
                    </View>
                </View>
                <View style={{flex:2,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'orange',fontSize:18}}>{item.cases}</Text>
                        <Text style={{color:'grey'}}>Confirmed</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'red',fontSize:18}}>{item.deaths}</Text>
                        <Text style={{color:'grey'}}>Deaths</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'blue',fontSize:18}}>{item.recovered}</Text>
                        <Text style={{color:'grey'}}>Recovered</Text>
                    </View>
                </View>
            </View>
        );
    }
    handlesearch = (text) => {
        const formattedQuery = text;
        const data = _.filter(this.state.fullData,item => {
            if(item.country.includes(formattedQuery))
            {
                return true
            }
            return false
        })
        this.setState({data, query: text})
    }
    render(){
        if(this.state.isloading)
        {
            return(
                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                    <UIActivityIndicator color="blue" size={30}/>
                </View>
            );
        }
        else
        {
            return(
                <View style={{flex:1}}>
                    <View style={{width:320,height:40,alignSelf:'center',marginVertical:10,borderWidth:1,borderRadius:100,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assets/search.png')} style={{width:20,height:20}}/>
                        </View>
                        <View style={{flex:6}}>
                            <TextInput placeholder="Search Your Country" style={{color:'blue'}} onChangeText={this.handlesearch}/>
                        </View>
                    </View>
                    <FlatList
                    data={this.state.data}
                    renderItem = {({item})=>this._renderitem(item)}
                    keyExtractor = {(item,index)=>item.country}
                    />
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    card : {
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