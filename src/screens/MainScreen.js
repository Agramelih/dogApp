import React, { useState, useEffect, useCallback } from 'react'
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    FlatList
} from 'react-native'
import CustomCard from '../components/CustomCard';
import { getUsersRequest } from '../requests';


const MainScreen = ( {navigation, setPersonData} ) => {
    const [arrayOfPeople, setArrayOfPeople] = useState([]);
    const getUsers = async() => {
        setArrayOfPeople( await getUsersRequest() );
    }

    const renderItem = useCallback( 
        ({ item }) => {
            return(
                <CustomCard
                    name = {`${item.name.title} ${item.name.first} ${item.name.last}`}
                    uri = {item.picture.large}
                    onCardClick = { () => { onCardClick(item) } }
                    thumbnail = {item.picture.thumbnail}
                    createdDate = {item.registered.date}
                />
            )
        }, []
    )

    const keyExtractor = useCallback(
        (item) => item.login.uuid, []
    )

    const getItemLayout = useCallback(
        (data, index) => ({
            length: 400,
            offset: 400 * index,
            index
        }), []
    )

    const onCardClick = ( item ) => {
        setPersonData( item );
        navigation.navigate('personalInfo')
    }

    useEffect( () => {
        getUsers();
    }, [])
    return(
        <SafeAreaView style = {styles.container}>
            <TouchableOpacity
                onPress = { () => { navigation.navigate("personalInfo") } }
            >
                {
                    arrayOfPeople.length > 0 && 
                    <FlatList
                        style = {styles.list}
                        data = {arrayOfPeople}
                        renderItem = {renderItem}
                        keyExtractor = {keyExtractor}
                        getItemLayout = {getItemLayout}
                        initialNumToRender={5}
                        maxToRenderPerBatch = {6}
                        windowSize = {5}
                        showsVerticalScrollIndicator = {false}
                    />
                }
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center"
    },

    list: {
        width: 300,
        height: 400
    }
  });

export default MainScreen