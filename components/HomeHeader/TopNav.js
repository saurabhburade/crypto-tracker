import { Icon, TopNavigation } from '@ui-kitten/components'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function TopNav() {
    return (
        <TopNavigation
        style={{
            fontFamily: "Cochin"
        }}
            accessoryLeft={  <Image
                style={styles.tinyLogo}

                source={require('../../assets/cmc.png')}
              />}
            accessoryRight={
                <Icon
                style={styles.icon}
                fill='#8F9BB3'
                name='menu-2-outline'
            />
            }
           
        />
    )
}
const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
    tinyLogo: {
        width: 150,
        height: 50,
        resizeMode:"contain"
      },

});
export default TopNav
