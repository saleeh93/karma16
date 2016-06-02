/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @providesModule Gallery
 * @flow
 */
'use strict';

var ListContainer = require('ListContainer');

var F8Colors = require('F8Colors');
var F8Button = require('F8Button');
import React, {
  Component,
} from 'react';
var Relay = require('react-relay');
var View = require('View');
var { Text } = require('F8Text');
var PixelRatio = require('PixelRatio');
var Image = require('Image');
var ScrollView = require('ScrollView');
var StyleSheet = require('StyleSheet');
var Linking = require('Linking');
var GalleryView = require('GalleryView');

var PureListView = require('../../common/PureListView');
var images=[1,2,2,2,2,34,45,1,1,1,1,1,1,1]
function Gallery() {
  return (
    <View style={styles.container}>
    <ListContainer
      title="Gallery"
      backgroundColor={'#47BFBF'}
      >
      <ImageGallery title="Karma 13"
      />
    </ListContainer>
    </View>
  );
}
function ImageGallery({viewer: {gallery}, ...props}) {
  return (
    <PureListView
      renderEmptyList={() => (
        <View>
        <GalleryView
          style={styles.contentContainer}
          images={gallery}/>
        </View>
      )}
      {...props}
    />

  );
}
ImageGallery = Relay.createContainer(ImageGallery, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        gallery {
          id
          title
          image
        }
      }
    `,
  },
});
class InfoList extends Component {
  render() {
    var description=this.props.desc;
    return (
      <GalleryView
        title='13'
        images={images}
      />
    );
  }
}

var styles = StyleSheet.create({
  image:{
  flex:1,
  width: 300,
  height: 200
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 26,
    paddingBottom: 60,
  },
  description: {
    fontSize: 17,
    lineHeight: 25,
  },
  topics: {
    fontSize: 12,
    color: F8Colors.lightText,
  },
  section: {
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  sectionTitle: {
    color: F8Colors.lightText,
    marginRight: 14,
    fontSize: 12,
  },
  line: {
    height: 1 / PixelRatio.get(),
    backgroundColor: F8Colors.lightText,
    flex: 1,
  },

});



module.exports = Gallery;
