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
 * @providesModule AboutUsView
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

var PureListView = require('../../common/PureListView');

function AboutUsView() {
  return (
    <View style={styles.container}>
    <ListContainer
      title="About Us"
      backgroundColor={'#47BFBF'}
      backgroundImage={require('./img/kmct.jpg')}
      >
      <PureListView
        title='KARMA'
        renderEmptyList={() => <InfoList image="./img/kmct.jpg" desc="Karma is the annual national level techno-managerial-socio-cultural extravaganza of KMCT College of Engineering and KMCT School of Business. Born in 2013 with the motto of promoting technology, scientific thinking and innovation, Karma has created an unmatched aura of a science and technology spectacle at the campus of KMCT. Karma invites innovative minds to compete with each other, share ideas and educate people about new technological advancements and be a part of the tech platform" />}
      />
      <PureListView
        title='KMCT CE'
        renderEmptyList={() => <InfoList desc="The college was founded by the KMCT (Kunhitharuvai Memorial Charitable Trust), based in Kozhikode in 2001. The KMCT is managed by the Managing Trustee-Founder Dr. K. Moidu. The trust also runs 14 educational institutions including KMCT Medical College, KMCT dental college, KMCT College and School of Nursing, KMCT Woman's Engineering College, KMCT School of Business, KMCT Ayurveda Medical College, and KMCT Polytechnic.[2][3]"/>}
      />
    </ListContainer>
    </View>
  );
}

class InfoList extends Component {
  render() {
    var description=this.props.desc;
    return (
      <View style={[styles.container]}>
          <ScrollView
          contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={100}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}>
        <Text style={styles.description}>
          {description}
        </Text>

      </ScrollView>

      </View>
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



module.exports = AboutUsView;
