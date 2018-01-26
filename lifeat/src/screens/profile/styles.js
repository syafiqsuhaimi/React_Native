const React = require("react-native");

const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  statusBar: {
    borderRadius: 0,
    backgroundColor: "#3F51B5",
    height: 25,
    width: deviceWidth
  },
  container: {
    backgroundColor: "#fff",
  },
  ovalContainer: {
    alignSelf: 'center',
    width: deviceWidth,
    overflow: 'hidden',
    height: deviceWidth / 1.7
  },
  ovalContainer1: { // this shape is a circle 
    borderRadius: deviceWidth,
    width: deviceWidth * 2,
    height: deviceWidth * 2,
    marginLeft: -(deviceWidth / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
  },
  ovalContainer2: {
    height: deviceWidth / 1.7,
    width: deviceWidth,
    position: 'absolute',
    bottom: 0,
    marginLeft: deviceWidth / 2,
    alignItems: "center",
    backgroundColor: "#3F51B5"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    marginTop: 10
  },
  item:{
    width:deviceWidth-120,
    height: 40,
    marginLeft: 40,
    padding:0
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 12,
    marginLeft: 5
  },
  mb15: {
    marginBottom: 20
  },
  mt15: {
    marginTop: 15
  },
  mb20: {
    marginBottom: 20
  },
  iconButton: {
    color: "#007aff"
  },
  margin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFF"
  },
  mf: {
    flexGrow: 1,
    alignSelf: "center",
    alignItems: "center"
  }
};