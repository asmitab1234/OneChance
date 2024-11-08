import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'

const SubscriptionCard = ({ item }) => {
    const colors = useTheme()
    return (
        <View>
            <View
            style={styles.card_box}>
<Text>
    {/* {item.} */}
</Text>
            </View>
        </View>
    )
}

export default SubscriptionCard

const styles = StyleSheet.create({
    card_box:{
        width:'100%',
        backgroundColor:'#FFDBE6',
    }
})