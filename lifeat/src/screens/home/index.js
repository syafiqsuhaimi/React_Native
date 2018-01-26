import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Content,
  Button,
  Icon,
  Item,
  Left,
  Right,
  Body,
  Subtitle,
  Text,
  Thumbnail,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const drawerCover = require("../../../assets/drawer-cover.png");
const datas = [
  {
    username: "@unimy",
    profilepic: "",
    time: "12 Sep",
    text: "There's a power outage in campus. We will notify as soon as possible.",
    likes: "10",
    comments: "5"
  },
  {
    username: "@amir",
    profilepic: "",
    time: "12 Sep",
    text: "There's a power outage in campus. We will notify as soon as possible.",
    likes: "10",
    comments: "5"
  }
];

class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CardItem style={styles.statusBar}/>
        <Header noShadow={true}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Campus Feed</Title>
          </Body>
          <Right />
        </Header>

        <Content>   
        <Body>        
        <Text style={styles.text}>
          Welcome to Life At. Your companion application throughout the study.
        </Text>
        </Body>    
        </Content>
      </Container>
    );
  }
}

export default Profile;




// import React, { Component } from "react";
// import { ImageBackground, View, StatusBar } from "react-native";
// import { Container, Button, H3, Text } from "native-base";

// import styles from "./styles";

// const launchscreenBg = require("../../../assets/launchscreen-bg.png");
// const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

// class Home extends Component {
//   render() {
//     return (
//       <Container>
//         <StatusBar barStyle="light-content" />
//         <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
//           <View style={styles.logoContainer}>
//             <ImageBackground source={launchscreenLogo} style={styles.logo} />
//           </View>
//           <View
//             style={{
//               alignItems: "center",
//               marginBottom: 50,
//               backgroundColor: "transparent"
//             }}
//           >
//             <H3 style={styles.text}>App to showcase</H3>
//             <View style={{ marginTop: 8 }} />
//             <H3 style={styles.text}>NativeBase components</H3>
//             <View style={{ marginTop: 8 }} />
//           </View>
//           <View style={{ marginBottom: 80 }}>
//             <Button
//               style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}
//             >
//               <Text>Lets Go!</Text>
//             </Button>
//           </View>
//         </ImageBackground>
//       </Container>
//     );
//   }
// }

// export default Home;