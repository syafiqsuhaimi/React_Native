import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
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
    placeholder: "Phone Number",
    value: "012-3456789"
  },
  {
    placeholder: "Student ID",
    value: "A11207689"
  },
  {
    placeholder: "Student Intake",
    value: "October 2017/2018"
  },
  {
    placeholder: "Email Address",
    value: "yuneswong@email.com"
  }
];

const clubs = [
    {
        imageDir: require("../../../assets/drawer-cover.png"),
        title: "Landscape Club"
      },
      {
        imageDir: require("../../../assets/drawer-cover.png"),
        title: "SRC"
      },
      {
        imageDir: require("../../../assets/drawer-cover.png"),
        title: "Art & Craft"
      },
      {
        imageDir: require("../../../assets/drawer-cover.png"),
        title: "Travel Club"
      },
      {
        imageDir: require("../../../assets/drawer-cover.png"),
        title: "Hockey Club"
      }
  ];

class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <CardItem style={styles.statusBar}/>
        <Header  noShadow={true}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          {/* <Body>
            <Title>Eunice Wong</Title>
          </Body> */}
          <Right>
              <Icon style={{color: "#fff"}} name="settings" />
          </Right>
        </Header>

        <Content>      
        <Container style={styles.ovalContainer} >
            <Container style={styles.ovalContainer1} >
                <Container style={styles.ovalContainer2}> 
                    <CardItem
                    title={null}
                    containerStyle={{ padding: 0, width: 60 }}
                    style={{alignItems: "center", backgroundColor: "#3F51B5"}}
                    >
                    <Body>
                        <Thumbnail large source={drawerCover} style={{alignSelf: "center", marginTop: 20}} />
                        <Text style={{ color: "#fff", alignSelf: "center", marginTop: 12}}>
                        Eunice Wong
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 14, alignSelf: "center", marginTop: 3}}>
                        BBA (Hons.) Finance with Multimedia
                        </Text>
                    </Body>
                 </CardItem>
                </Container>
             </Container>
        </Container>
        
        <List
            dataArray={datas}
            style={{marginTop: 10}}
            renderRow={data =>
              <ListItem noBorder style={{marginTop:-15, marginBottom:-10}}>
                <Item rounded style={styles.item}>
                 <Body>
                  <Text style={styles.text}>{data.placeholder}</Text>
                  <Text style={styles.text}>{data.value}</Text>
                 </Body>
                </Item>
              </ListItem>}
          />

         <Text style={{ fontSize: 12, color: "#000",marginLeft: 10, marginTop: 0, marginBottom: 0}}>Club and Societies</Text>

         <FlatList
            horizontal
            data={clubs}
            style={{marginLeft:10}}
            renderItem={({ item: rowData }) => {     
                return (
                 <CardItem
                    title={null}
                    containerStyle={{ padding: 0, width: 60 }}
                    style={{alignItems: "center", marginLeft:-15, marginTop:-10}}
                    >
                    <Body>
                        <Thumbnail source={rowData.imageDir} style={{alignSelf: "center"}} />
                        <Text style={{ fontSize: 12, textAlign: "center", marginTop: 6 , width: 60, height: 50}}>
                        {rowData.title}
                        </Text>
                    </Body>
                 </CardItem>
                );
             }}
             keyExtractor={(item, index) => index}
           />
        </Content>
      </Container>
    );
  }
}

export default Profile;