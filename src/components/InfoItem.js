import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const InfoItem = ( { title, text, icon, isLast } ) => {
    return (
        <View style = { [ styles.container, { borderBottomWidth: isLast ? 0 : 0.5 } ] }>
            <Image style = {styles.icon} source = {icon}/>
            <View>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.text}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: "grey"
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    text: {
        fontSize: 12
    },

    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10
    }
})

export default InfoItem