import React from "react";
import {
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native'
import { getFullDate } from "../utils";

const CustomCard = ( { name, uri, onCardClick, thumbnail, createdDate } ) => {
    return(
        <SafeAreaView 
            style = { styles.container }
        >
            <TouchableOpacity
                onPress = {onCardClick}
            >
                <View style = {styles.titleContainer} >
                    <Image 
                        source = { { uri: thumbnail } }
                        style = { styles.titleImage }
                    />
                    <View>
                        <Text style = {styles.title}>
                            {name}
                        </Text>
                        <Text>
                            { getFullDate( createdDate ) }
                        </Text>
                    </View>
                    
                </View>
                
                <Image
                    style = { styles.image } 
                    source = {{uri: uri}}
                /> 
                
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    titleImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50
    },  

    title: {
        fontSize: 16,
        fontWeight: "bold"
    },

    image: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})

export default CustomCard