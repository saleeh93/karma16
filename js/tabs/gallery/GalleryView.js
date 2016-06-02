/*
* @providesModule GalleryView
* @flow
*/
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} = React;
var GridView = require('./GridView');

class GalleryView extends React.Component  {

  constructor(props){
    super(props)
    this.state = {
      images: props.images,
    };

  }
   render() {
    return (
      <GridView
        items={this.state.images}
        itemsPerRow={2}
        renderItem={this.renderItem}
      />
    );
  }
  onPress(item)
  {
    console.log(item);
  }
   renderItem(item) {

    return ( <TouchableHighlight>
              <Image style={styles.image}
                source={{uri: item.image}} />
              </TouchableHighlight>
            );
  }

}
var styles = StyleSheet.create({
  image:{
  flex:1,
  width: 250,
  height: 250
},});
module.exports=GalleryView;
