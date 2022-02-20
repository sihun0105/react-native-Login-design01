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
// 목록에서 상품 하나에 대한 템플릿(스타일),
// ProductsOverviewScreen.js 에서 이걸 받아 목록으로 렌더링함

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
        // 화면 전환시 ripple 효과를 줌
    }
    return (
        // TouchableOpacity: 이미지나 글자를 선택해도 상세페이지로 넘어감(버튼제외)
        // <TouchableOpacity onPress={ props.onViewDetail }>
        // useForeground: 앞의 요소에만 적용하고, 배경에는 적용하지 않기
        <Card style={ styles.product }>
            <View style={ styles.touchable }>
            {/* <TouchableCmp onPress={ props.onViewDetail } useForeground> */}
            <TouchableCmp onPress={ props.onSelect } useForeground>
            <View>
            <View style={ styles.imageContainer }>
                <Image style={ styles.image } source={{ uri: props.image[0] }}/>
            </View>
            <View style={ styles.details }>
                <Text style={ styles.title }>{ props.title }</Text>
                {/*<Text style={ styles.price }>${ props.price.toFixed(2) }</Text>*/}
                {/* <Text style={ styles.price }>₩ { props.price }</Text> */}
                <Text style={ styles.price }>{ getCurrency(props.price) }원</Text>
                {/* <Text style={ styles.price }>{ numberFormat(props.price) }원</Text> */}
            </View>
            <View style={ styles.actions }>
                { props.children }
                {/* ProductsOverviewScreen 과 UserProductsScreen 에서 
                    버튼을 각자 만들어서 쓸 수 있게 함 */}
                {/* <Button
                    color={ Colors.primary }
                    title="상품 보기"
                    onPress={ props.onViewDetail }
                />
                <Button
                    color={ Colors.primary }
                    title="카트에 담기"
                    onPress={ props.onAddToCart }
                /> */}
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