import React from 'react'
import{ Text, View, StyleSheet} from 'react-native'

const Style = ( props) =>
{
    return (
        <View>
            <Text style ={ style.myState}>{props.myState}</Text>
        </View>
    )
}
export default Style


