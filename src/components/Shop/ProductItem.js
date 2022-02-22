import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native'
import Card from '../UI/Card'
import { getCurrency } from '../util/NumberFormat'

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
        // 화면 전환시 ripple 효과를 줌
    }
    return (
        <Card style={ styles.product }>
            <View style={ styles.touchable }>
            <TouchableCmp onPress={ props.onSelect } useForeground>
            <View>
            <View style={ styles.imageContainer }>
                <Image
                    style={ styles.image }
                    source={{uri:'https://t1.daumcdn.net/cfile/tistory/9942214E5B5E76930B'}}
                    resizeMode="contain"
                    />
            </View>
            <View style={ styles.details }>
                <Text style={ styles.title }>상품이름</Text>
                <Text style={ styles.price }>1원</Text>
            </View>
            <View style={ styles.actions }>
                
                </View>
            </View>
            </TouchableCmp>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        aspectRatio: 1.0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        overflow: 'hidden',
        maxWidth: '80%',
        // marginVertical: 4,
    },
    price: {
        fontFamily: 'open-sans',
        fontSize: 10,
        paddingTop: 5,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '20%',
        padding: 22,
        // margin: 7
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    }
})

export default ProductItem