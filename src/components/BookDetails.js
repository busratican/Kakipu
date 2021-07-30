import {React} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';



const BookDetail = ({results}) => {
    return(
      <View>
        <Text>Book Details </Text>
        {results}
        </View>
    )
}

const styles = StyleSheet.create({

})


export default BookDetail;