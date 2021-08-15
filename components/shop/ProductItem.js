import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

const ProductItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={} />
            <Text>TITLE</Text>
            <Text>$PRICE</Text>
            <View>
                <Button title={'View Details'}/>
                <Button title={'To Cart'}/>
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({})
