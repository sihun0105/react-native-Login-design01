import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

import CartItem from './CartItem'
import Card from '../UI/Card'
import { getCurrency } from '../util/NumberFormat'

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Card style={ styles.orderItem }>
            <View style={ styles.summary }>
                <Text style={ styles.totalAmount }>{ getCurrency(props.amount) } 원</Text>
                <Text style={ styles.date }>{ props.date }</Text>
            </View>
            {/* 주문화면에서 '더보기' 눌렀을 때 */}
            <Button 
                color={ Colors.primary } 
                title={ showDetails ? "접기" : "더 보기" }
                onPress={() => {
                    setShowDetails(prevState => !prevState)
                }}
            />
            {/* 주문내역 자세히 보여주기 */}
            { showDetails && (
                <View style={ styles.detailItems }>
                    {/* CartScreen.js 의 cartItems 값들 */}
                    { props.items.map(cartItem => (
                        <CartItem 
                            key={ cartItem.productId }
                            quantity={ cartItem.quantity } 
                            amount={ cartItem.sum } 
                            title={ cartItem.productTitle} 
                        />
                        )
                    )}
                </View> 
            )}
        </Card>
    )
}

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    date: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: '#888'
    },
    detailItems: {
        width: '100%',
        alignItems: 'flex-end',
    }
})
export default OrderItem