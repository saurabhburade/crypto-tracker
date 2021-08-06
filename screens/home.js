import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  IconRegistry,
  ButtonGroup,
} from "@ui-kitten/components";
import {
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import TopNav from "../components/HomeHeader/TopNav";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useState } from "react";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const BackAction = () => <TopNavigationAction icon={BackIcon} />;

export const TopNavigationSimpleUsageShowcase = () => (
  <TopNavigation
    accessoryLeft={<Icon style={styles.icon} fill="#8F9BB3" name="star" />}
    title="Eva Application"
  />
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

const TopNavigationStyling = () => (
  <TopNavigation
    title={(evaProps) => <Text {...evaProps}>Title</Text>}
    subtitle={(evaProps) => <Text {...evaProps}>Subtitle</Text>}
  />
);
export default ({ navigation }) => {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
  });
  const pressHandler = () => {
    navigation.navigate("About");
  };
  const [tokensData, settokensData] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((data) => data.json())
      .then((res) => {


        settokensData(res);

      });
  }, []);
  return (
    <SafeAreaView
   
    >
      {/* <TopNavigationSimpleUsageShowcase /> */}
      <TopNav />
      {/* <Text style={{ fontFamily: "Poppins" }} category="h1">
        HOME
      </Text>
      <Button onPress={pressHandler}>About</Button> */}
      <ScrollView>
        {tokensData?.map((el, idx) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6% 5%",
                borderBottomColor: "whitesmoke",
                borderBottomWidth: "1.5px",
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: el?.image }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    marginRight: "5%",
                  }}
                />
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  {el?.name}
                </Text>
              </View>
<View style={{
   display: "flex",
   flexDirection: "row",
   alignItems: "center",
}}>
<Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                ${parseFloat(el?.current_price)?.toFixed(2)}
              </Text>
              {el?.price_change_percentage_24h > 0 ? (
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color:"green"
                  }}
                >
                 +{parseFloat(el?.price_change_percentage_24h)?.toFixed(2)}%
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    color:"red"
                  }}
                >
                  {parseFloat(el?.price_change_percentage_24h)?.toFixed(2)}%
                </Text>
              )}

</View>

            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
