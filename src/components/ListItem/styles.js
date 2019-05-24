import colors from "../../colors";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default {
  parent: {
    borderBottomStyle: "solid",
    borderBottomColor: "#888",
    borderBottomWidth: 1,
    flexDirection: "row",
    backgroundColor: colors.white
  },
  imageWrapper: {
    height: width * 0.27,
    width: width * 0.27,
    justifyContent: "center",
    alignItems: "center"
  },
  instrumentImg: {
    width: "90%",
    height: "90%",
    borderRadius: (width * 0.27) / 2
  },
  progressCircle: {
    position: "absolute"
  },
  coatedImg: {
    position: "absolute",
    bottom: "2%",
    left: "15%",
    height: "30%"
  },
  detailsWrapper: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10
  },
  detailsRowOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  detailsRowTwo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  editBtnWrapper: {
    height: "70%",
    borderRadius: 6
  },
  editButton: {
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#888",
    borderStyle: "solid"
  },
  restringBtnWrapper: {
    borderRadius: 5
  },
  restringButton: {
    padding: 5,
    borderRadius: 6
  },
  nameText: {
    fontSize: 22,
    color: "#000",
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5
  },
  btnText: {
    fontSize: 17,
    color: "#fff"
  },
  ageTextWrapper: {
    justifyContent: "center",
    flex: 1
  },
  ageText: {
    fontSize: 15,
    color: "#000",
    textAlign: "center"
  }
};