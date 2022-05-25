import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import backgroundImage from "../assets/images/Rectangle.png";
import React, { Component } from "react";

import { Avatar, Card, Button, Title, Paragraph } from "react-native-paper";

//import HorizontalPicker from "@vseslav/react-native-horizontal-picker";

//import HorizontalScrollMenu, { RouteProps } from '@nyashanziramasanga/react-native-horizontal-scroll-menu/src';

import ValuePicker from "react-native-picker-horizontal";

//const [selectedIndex, setSelectedIndex] = useState(1);

const Items = Array.from(Array(100).keys());

const rednerItem = (item: number) => (
    <Text style={{
      width: 50,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: "center"
    }}>
      { item }
    </Text>
  );

/*
const rednerItem = (item, index) => (
  <View style={[styles.item, { width: 80 }]}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
  
);
*/

/*
	const onPress = (route: RouteProps) => {
    setSelectedIndex(route.id);
    console.log('Tab pressed', route);
    }; */
	
class Blog extends Component {
	constructor(){ 
      super(); 
      this.state = {
           age:''
      }
    }
    onAgeSelection = (selectedAge) =>{
		this.setState({ 
			age: selectedAge
        })
         //alert('You clicked the age :' + selectedAge);		 
    }	
	

  
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
         <Text style={[styles.header2, styles.linearLine]}>
      About you
        </Text>
        <View style={[styles.container,  { flex: 0.9, marginTop: "50px" }]}>
          <View style={[styles.center,{ flexDirection: "row" }]}>
            <View
              style={[
                styles.gap,
                {
                  width: "45%",
                  height: "auto",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Avatar.Image
                size={84}
                source={require("../assets/images/male.png")}
              />
              <Button>Male</Button>
            </View>
            <View
              style={[
                styles.gap,
                {
                  width: "45%",
                  height: "auto",
                  margin: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Avatar.Image
                size={84}
                source={require("../assets/images/female.png")}
                style={[ { textAlign:'left'}]}
              />

              <Button style={[ {width: '100', textAlign:'left'}]}>Female</Button>
            </View>
          </View>

          <SafeAreaView>
            <Text style={styles.subtitle1}>How old are you:</Text>
          </SafeAreaView>
   
		   <ValuePicker
			  style={styles.container}
			  data={Items}
			  renderItem={rednerItem}
			  itemWidth={50}
			  initialIndex={18}
			   onChange={(selectedAge: Event) => { 
						this.onAgeSelection(selectedAge);
					}}
			/>;		  
        </View>

        <View style={[styles.center]}>
		  <Text style={styles.subtitle1}>Selected Age: {this.state.age}</Text>
		</View>
		  
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => this.props.navigation.navigate("Agreement")}
            //onPress={ ()=> Linking.openURL('https://www.google.com/') }
            underlayColor="#fff"
          >
            <ImageBackground
              source={backgroundImage}
              resizeMode="cover"
              style={styles.backgroundImage}
            >
              <Text style={styles.loginText}>Comfirm</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  /*     container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#F2F2F2",
        padding: 30,
        textAlign: 'center'
    },
   */
  
    center: {
      alignItems: "center",
      textAlign: "center",
      margin: "auto",
      minWidth:'200px'
    },
  container: {
    display: "flex",
    flexDirection: "vertical",
    // justifyContent: "space-around",
    height: "100%",
    backgroundColor: "#F2F2F2",
    padding: 30,
    textAlign: "center",
  },
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  */
  header2: {
    color: "#E2E3EA",
    /* Headline 4 */
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: 600,
   // fontSize: "20px",
   fontSize: "1.5rem",
    lineHeight: "1.6rem",
    color: "#000030",
    textAlign: "left",
    marginBottom: 5,
    padding: 15,
    paddingBottom: 20,
  },

  linearLine: {
    borderBottomColor: "#03DAC5",
    borderBottomWidth: 3,
    width: "100%",
    marginBottom: 15,
  },


  block: {
    marginTop: 30,
  },

  age: {
    color: "#000",
    height: 40,
    margin: 12,
    padding: 10,
    margin: 0,
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.87)",
    opacity: 0.6,
  },

  subtitle1: {
    fontFamily: "Barlow",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    marginTop: "50px",
  },

  text2: {
    opacity: 0.7,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: "#fff",
    padding: "6px 6px 6px 8px",
    borderRadius: 4,
  },

  backgroundImage: {
    backgroundColor: "#172C62",
    color: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    width: "100%",
  },

  loginScreenButton: {
    flex: 1,
    justifyContent: "center",
    margin: 0,
    padding: 0,
    minWidth: "360px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    bottom: 0,
    width: "100%",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "right",
    letterSpacing: "1.25px",
    textTransform: "uppercase",
  },

  screen: {
    margin: 20,
  },
  text: {
    marginLeft: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
    color: "#000",
  },
  amount: {
    color: "black",
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    width: 80,
  },
  itemText: {
    fontSize: 40,
    color: "#FF9400",
    textAlign: 'center',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  
});
export default Blog;
