import { Button } from '@ui-kitten/components'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

function about({navigation}) {
    return (
        <SafeAreaView>
     <View>
         <Text>Hello</Text>
         <Button onPress={()=>navigation.pop()}>Back</Button>
     </View>
     </SafeAreaView>
    )
}

export default about
