import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  Title,
  List,
  ListItem,
  Icon,
  CardItem,
  Body,
  Container,
  Left,
  Right,
  Thumbnail,
  Badge
} from "native-base";
import styles from "./styles";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Campus Feed",
    route: "Home",
    icon: "paper",
    bg: "#C5F442"
  },
  {
    name: "Transportation",
    route: "Anatomy",
    icon: "bus",
    bg: "#C5F442"
  },
  {
    name: "Events",
    route: "Header",
    icon: "star",
    bg: "#477EEA"
  },
  {
    name: "Club and Societies",
    route: "Footer",
    icon: "people",
    bg: "#DA4437"
  },
  {
    name: "Campus Facilities",
    route: "NHBadge",
    icon: "home",
    bg: "#4DCAE0"
  },
  {
    name: "Directories",
    route: "NHButton",
    icon: "call",
    bg: "#1EBC7C"
  },
  {
    name: "QR Scanner",
    route: "NHCard",
    icon: "qr-scanner",
    bg: "#B89EF5"
  },
  {
    name: "Log out",
    route: "NHCard",
    icon: "log-out",
    bg: "#B89EF5"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <CardItem style={{marginTop: 30}}
          button
          onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Left>
            <Thumbnail source={drawerCover}/>
                <Body>
                  <Text>Hi, Eunice!</Text>
                </Body>
            </Left>
          </CardItem>
              
          <CardItem style={{backgroundColor: "#364793", marginBottom: 16}}>
              <Body style={{position: "absolute", marginLeft : 100}}>
                <Title>
                  STUDENT
                  </Title>
              </Body>
          </CardItem>

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;