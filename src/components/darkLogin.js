import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Image, } from 'react-native';
import CheckBox from 'expo-checkbox';
const DarkLogin = () => {
  const [isSelected, setSelection] = useState(false);
 

 
  return (

    <SafeAreaView style={styles.containerImage} >
      <View style={styles.imageContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.row}>
            <Image source={require('../../assets/BlackLogo.png')} style={styles.logo} />
            <View style={styles.pos}>
              <Text style={styles.tolet}>The Tolet</Text>
              <Text style={styles.house}>Find Your House</Text>
            </View>
          </View>

        </View>
        <Image source={require('../../assets/black.png')} style={styles.Image} />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.head}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder='abc@gmail.com' 
          placeholderTextColor={'#94A3B8'}
          />
        <View style={{flexDirection:'row', borderBottomWidth:2, borderBlockColor:'white', width:'92%',}}>
        
        <TextInput
          style={styles.input1}
          secureTextEntry={true}
          placeholderTextColor={'#94A3B8'}
          placeholder='Password' />
        
          <Text style={styles.head1} >Forgot?</Text>
          </View>
        <View style={styles.containerCB}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          /><Text style={styles.text}>I have Read and Agreed</Text>
        </View>
        <TouchableOpacity >
          <Text style={styles.Button}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>
          Or Continue with
        </Text>
        <Text style={styles.txt1}>
          Don't Have Account? 
          <Text style={styles.txt2}>Create Now</Text>
        </Text>
      </View>
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000113',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCB: {
    flexDirection: 'row',
    padding: 10,
    color:'#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    flex: 1,


  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    position: "absolute",
    elevation: 10,
  },
  logo: {
    height: 42,
    width: 42,
    marginRight:10
  },
  Image: {
    width: 395,
    height: 360,
    backgroundColor:'#000113'
  },

  heading: {
    fontSize: 30,
    fontWeight: '800',
    fontSize: 32,
    height: 48,
    width: 86,
    color: '#FFFFFF',
    marginBottom: 10,

  },
  house: {
    fontSize: 14,
    color:'white'
  },
  row: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,

  },
  tolet: {
    fontSize: 24,
    // fontFamily: 'Rubik',
    fontWeight: '700',
    color: 'white',

  },
  txt: {
    fontSize: 12,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginTop: 28,
    color: '#94A3B8',
    marginLeft: 129,

  },
  txt1: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginTop: 50,
    color: '#94A3B8',
  },
  txt2: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: 200,
    color: 'white',
    marginLeft: 129,
  },
  input1:{
    backgroundColor: '#000113',
    color: '#CCCCCC',
    width:'85%'
  },
  head: {
    fontSize: 14,
    alignSelf: 'flex-start',
    fontFamily: 'Roboto',
    fontWeight: '400',
    marginLeft:17,
    color:'white'
  },
  head1: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    alignSelf: 'flex-end',
    marginRight:31,
    color:'white',
    marginBottom:5
  },
  input: {
    backgroundColor: '#000113',
    borderBottomWidth: 2,
    marginVertical: 5,
    color: '#CCCCCC',
    borderColor: '#FFFFFF',
    width: '92%',
    marginBottom:32
    
  },
  checkbox: {
    margintop: 10,
    marginRight: 20,
  },
  text: {
    fontSize: 14,
    color:'white',
    paddingVertical:10
  },

  Button: {
    backgroundColor: '#334155',
    padding: 10,
    paddingLeft: 120,
    borderRadius: 5,
    alignItems: 'center',
    width: 298,
    Radius: 4,
    height: 40,
    color: 'white',
  }

});

export default DarkLogin;