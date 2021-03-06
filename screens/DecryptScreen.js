import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView

} from 'react-native'

import { WebView } from 'react-native-webview';



export default class DecryptScreen extends React.Component{
    render(){
        return(
          <ScrollView>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>Python Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
            <iframe
      width="853"
      height="480"
      src="https://ansh-singh-2006.github.io/Html-Editor-Test/"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      </View>

            <br/> <hr width="100%"/> <br/>
            
            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>HTML Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
         <WebView
         source = {{ uri:
         'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default' }}
         />
      </View>

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>CSS Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
         <WebView
         source = {{ uri:
         'https://www.w3schools.com/css/tryit.asp?filename=trycss_default' }}
         />
      </View>

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>JavaScript Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
         <WebView
         source = {{ uri:
         'https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst' }}
         />
      </View>

            <br/> <hr width="100%"/> <br/>


            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>PHP Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
         <WebView
         source = {{ uri:
         'https://www.w3schools.com/php/phptryit.asp?filename=tryphp_intro' }}
         />
      </View>

            <br/> <hr width="100%"/> <br/>

            <Text style={{color: '#B22222', fontSize: 50, fontFamily: 'Courier New', fontWeight: 'bold'}}>Bootstrap Code Editor</Text>
            <br/><br/><br/>
            <View style = {{width: "853", height: "480"}}>
         <WebView
         source = {{ uri:
         'https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_default&stacked=h' }}
         />
      </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:250,
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:2,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )