import { View, Text,ScrollView, } from 'react-native'
import React from 'react'
import ProductItem from '../../components/shop/ProductItem'
import { useState,} from 'react'
import userSlice from '../../../slices/user'
const toolStore = () => {
  const [test,settest] = useState('');
    return (
    <ScrollView>
      <Text>toolStore</Text>
      <ProductItem/>
      <ProductItem
      url='https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/05/202006051888034625_5.jpg'
      />
      <ProductItem/>
      <ProductItem/>
    </ScrollView>
  )
}

export default toolStore