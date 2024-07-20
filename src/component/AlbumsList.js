import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

 class AlbumsList extends Component {

    state = {albums: []}

    UNSAFE_componentWillMount(){
        console.log('component will mount')
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then( res => this.setState({albums: res.data}))

     
    }

    renderAlbums()  {
        // {console.log(this.state.albums)}
       return this.state.albums.map(album => 
       <AlbumDetail key={album.title} album={album} /> 
         )
     }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }

}


export default AlbumsList;