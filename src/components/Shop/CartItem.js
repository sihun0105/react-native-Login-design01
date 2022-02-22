import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Platform} from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { getCurrency } from '../util/NumberFormat'
const CartItem = props => {
    return (
        <View style={ styles.cartItem }>
            <Text style={ styles.itemName }>
                <Text style={ styles.mainText }>{ props.title }</Text>
            </Text>
            <View style={ styles.itemData }>
                <View style={ styles.itemRow }>
                <Text style={ styles.quantity }>수량: { props.quantity }</Text>
                <Text style={ styles.quantity }>상품금액: { getCurrency(props.amount) } 원</Text>
                { props.deletable && (
                    <TouchableOpacity onPress={ props.onRemove } style={ styles.deleteButton }>
                        <Ionicons name={ Platform.OS === 'android' ? 'md-trash' : 'ios-trash' }
                                size={ 23 }
                                color="red"
                        />
                    </TouchableOpacity>
                )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartItem: {
        padding: 30,
        backgroundColor: "white",
        // flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 0,
        marginTop: 20
    },
    itemName: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: "left"
    },
    itemRow: {
        flexDirection: 'row',
    },
    itemData: {
        marginTop: 10,
        alignItems: "flex-end",
    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 14,
        marginHorizontal: 10,
        marginVertical: 5
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 14
    },
    deleteButton: {
        marginLeft: 20
    }
})

export default CartItem