import React, { useState, useEffect } from "react";
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    ScrollView,
    View,
    Image
} from 'react-native'
import InfoItem from "../components/InfoItem";
import { getPersonInfo } from "../utils";

const PersonInfoScreen = ( { personData } ) => {
    const [person, setPerson] = useState([])

    useEffect( () => {
        setPerson( getPersonInfo( personData ) );
    }, [personData])
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView
                showsVerticalScrollIndicator = { false }
                contentContainerStyle = { styles.wrapper }
            >
                <View style = {styles.avatarContainer}>
                    <Image 
                        source = {{ uri : personData.picture.medium}}
                        style = { styles.avatar }
                    />
                    <Text style = {styles.avatarText}>
                        {`${personData.name.title} ${personData.name.first} ${personData.name.last}`}
                    </Text>
                </View>
                <View style = {styles.infoContainer}>
                    {
                        person.length > 0 &&
                        person.map( (personInfo, index )=> {
                            return(
                                <InfoItem 
                                    key = {index}
                                    icon = {personInfo.icon} 
                                    title = {personInfo.fieldName} 
                                    text = {personInfo.value}
                                    isLast = { index === person.length - 1 ? true : false }
                                />
                            )
                        } )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    wrapper: {
        padding: 10,
        alignItems: "center"
    },

    avatarContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20
   
    },

    avatar: {
        width: 140,
        height: 140,
        borderRadius: 10,
        marginBottom: 10
    },

    avatarText: {
        fontSize: 18,
        fontWeight: "bold"
    },

    infoContainer: {
        borderRadius: 20,
        backgroundColor: "white",
        width: "80%"
    },

    text: {
        alignSelf: 'flex-start',
        padding: 10
    }
  });

export default PersonInfoScreen