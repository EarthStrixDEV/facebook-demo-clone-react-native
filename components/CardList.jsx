import { View, Text ,FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cardbox from './Cardbox'
import Data from '../data.json'
import { TextInput } from 'react-native-paper'
import {AntDesign} from 'react-native-vector-icons'
const CardList = () => {
  const [search ,setSearch] = useState('');
  const [data ,setData] = useState(Data);

  const handleSearch = () => {
    const filteredData = Data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    if (filteredData.length > 0 || filteredData === 'undefined' || filteredData === null) {
      setData(filteredData)
    } else {
      Alert.alert('No data found :(')
    }
  }

  return (
    <View>
      <View style={{padding: 10 ,flexDirection: 'row'}}>
        <TextInput
          style={{
            paddingHorizontal: 10 ,fontSize: 15 ,backgroundColor:'#f8f9fa',width: '85%'
          }}
          placeholder='search by title'
          placeholderTextColor='#e2ece9'
          onChangeText={(value) => setSearch(value)}
        />
        <TouchableOpacity style={{alignSelf: 'center' ,backgroundColor:"#f8f9fa",padding: 15}} onPress={handleSearch}>
          <AntDesign
            name="search1"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Cardbox Title={item.title} Content={item.content} Cover={item.cover} AvatarProfile={item.profile} Name={item.name} Time={item.time} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CardList