import React from 'react'
import {View, Text, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'


const AlbumDetail = ({album}) => {
    const {
        title, 
        artist, 
        thumbnail_image, 
        image,
        url
         } = album;
 
        const {
        headerContentStyle, 
        thumbnailStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                    style={thumbnailStyle}
                    source={{uri: thumbnail_image}}
                     />
                </View>
                <View style={headerContentStyle}>
                    <Text styles={headerTextStyle} >{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}> 
                    Buy now
                </Button>
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerTextStyle:{
        fontSize: 25
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

}

export default AlbumDetail