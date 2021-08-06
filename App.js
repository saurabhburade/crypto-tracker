import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button, IconRegistry } from '@ui-kitten/components';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import TopNav from './components/HomeHeader/TopNav';
import { useFonts } from 'expo-font';
import Navigator from "./routes/homeStack"

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon} />
);

export const TopNavigationSimpleUsageShowcase = () => (
  <TopNavigation
    accessoryLeft={<Icon
      style={styles.icon}

      fill='#8F9BB3'
      name='star'
    />}
    title='Eva Application'
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
    title={evaProps => <Text {...evaProps}>Title</Text>}
    subtitle={evaProps => <Text {...evaProps}>Subtitle</Text>}
  />
);
const HomeScreen = () => {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
  });
  return (


    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}>
      {/* <TopNavigationSimpleUsageShowcase /> */}
      <TopNav />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: "Poppins" }} category='h1'>HOME</Text>
      </Layout>
    </SafeAreaView>
  )
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />

    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <HomeScreen /> */}
      <Navigator/>
    </ApplicationProvider>
  </>
);
