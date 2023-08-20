import { View, Text ,Alert ,TouchableOpacity ,TextInput ,Image } from 'react-native'
import { Card } from 'react-native-paper'
import React, { useState } from 'react'
import {AntDesign} from 'react-native-vector-icons'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Avatar } from 'react-native-paper'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
/* MaterialIcons */

const Cardbox = ({Title ,Content ,Cover ,AvatarProfile ,Name ,Time}) => {
  const [liked ,setLiked] = useState(false);
  const [countLiked ,setCountLiked] = useState(0);
  const [countComments ,setCountComments] = useState(0);
  const [countShared ,setCountShared] = useState(0);
  const [text ,setText] = useState("");
  const [comment ,setComment] = useState([]);
  const [commentToggle ,setCommentToggle] = useState(false);

  function handleLiked() {
    setLiked(!liked)
    if (!liked) {
      setCountLiked(countLiked + 1)
    } else {
      setCountLiked(countLiked - 1)
    }
  }

  function handleSetComment() {
    if (text.length > 0) {
      setComment((prevArr) => [...prevArr ,text])
      setCountComments(countComments + 1)
    }
  }

  function handleSetCountShared() {
    Alert.alert("You've shared this post.")
    setCountShared(countShared + 1)
  }
  
  return (
    <View style={{margin: 15}}>
      <Card style={{overflow: 'hidden'}}>
        <View style={{flexDirection: 'row' ,justifyContent: 'space-between' ,alignItems: 'center'}}>
          <View style={{flexDirection: 'row' ,alignItems: 'center'}}>
            <Avatar.Image
              size={50}
              source={{uri :AvatarProfile}}
              style={{marginLeft: 15 ,marginTop: 15 }}
            />
            <View style={{marginLeft: 10 ,marginTop: 10}}>
              <Text style={{letterSpacing: 1 ,fontWeight: 600}}>{Name}</Text>
              <Text style={{fontWeight: 300,fontSize: 12}}>{Time}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons 
              name="android-messages"
              size={25}
              style={{marginRight: 15}}
            />
          </TouchableOpacity>
        </View>
        <Card.Title title={Title} />
        <Card.Content style={{paddingBottom: 8}}>
          <Text>{Content}</Text>
        </Card.Content>
        {
          Cover.length > 0 ? 
          <Card.Cover source={{uri: Cover}} />
          :
          <View></View>
        }
        {
          countLiked > 0 || countComments > 0 || countShared > 0 ? 
          <View style={{flexDirection: 'row' ,alignContent:'center' ,justifyContent:'space-between' ,paddingHorizontal: 15 ,paddingVertical: 9}}>
            {
              countLiked > 0 ? 
              <View>
                <Text>{countLiked} Liked</Text>
              </View>
              :
              <View></View>
            }
            <View style={{flexDirection: 'row'}}>
              {
                countComments > 0 ? 
                <Text>{countComments} Comments</Text>
                :
                <View></View>
              }
              {
                countShared > 0 ? 
                <Text style={{marginHorizontal: 5}}>{countShared} Shared</Text>
                :
                <View></View>
              }
            </View>
          </View> : 
          <View></View>
        }
        <Card.Actions style={{flex: 1,alignSelf: 'center',borderTopWidth: 0.2 ,borderColor: "#333",paddingTop: 10 ,width: '80%'}}>
            <TouchableOpacity style={{marginHorizontal:10 ,flexDirection: 'row'}} onPress={handleLiked}>
                <AntDesign
                    style={{marginHorizontal:7}}
                    name={liked ? 'like1' : 'like2'}
                    size={20}
                />
                <Text>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:10 ,flexDirection: 'row'}} onPress={() => setCommentToggle(!commentToggle)}>
                <EvilIcons 
                    style={{marginHorizontal :7}}
                    name="comment"
                    size={25}
                />
                <Text>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:10 ,flexDirection: 'row'}} onPress={handleSetCountShared}>
                <AntDesign 
                    style={{marginHorizontal :7}}
                    name="sharealt"
                    size={20}
                />
                <Text>Share</Text>
            </TouchableOpacity>
        </Card.Actions>
        {
          commentToggle ? 
          <View style={{flex: 1 ,padding: 15 ,flexDirection: 'row' ,justifyContent:'center'}}>
            <Avatar.Image
              size={30}
              source={{uri: AvatarProfile}}
              style={{marginRight: 12}}
            />
            <TextInput
              style={{paddingVertical: 1 ,paddingHorizontal: 10 ,fontSize: 15 ,borderWidth: 1 ,borderColor:'#f8f9fa' ,backgroundColor:'#f8f9fa' ,borderRadius: 20 ,width: '80%'}}
              placeholder='Enter your comment here...'
              placeholderTextColor="#e2ece9"
              onChangeText={(value) => setText(value)}
            />
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={handleSetComment}>
              <AntDesign
                name="caretright"
                size={24}
              />
            </TouchableOpacity>
          </View>
          : 
          <View></View>
        }
        <View style={{paddingHorizontal: 15}}>
          {
            comment.map((item ,id) => (
              <Card style={{marginBottom: 20}} key={id}>
                <View style={{flexDirection: 'row',marginTop: 10 ,marginLeft: 10}}>
                  <Avatar.Image
                    size={30}
                    source={{uri: AvatarProfile}}
                    style={{marginRight: 12}}
                  />
                  <Text style={{fontWeight: 600 ,fontSize: 18 ,alignSelf: 'center'}}>{Name}</Text>
                </View>
                <Card.Content>
                  <Text style={{paddingLeft: 35}}>{item}</Text>
                </Card.Content>
              </Card>
            ))
          }
        </View>
      </Card>
    </View>
  )
}

export default Cardbox