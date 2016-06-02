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
 * @flow
 */
'use strict';

var F8Colors = require('F8Colors');
var Image = require('Image');
var ItemsWithSeparator = require('../../common/ItemsWithSeparator');
var Linking = require('Linking');
var React = require('React');
var StyleSheet = require('StyleSheet');
var F8Touchable = require('F8Touchable');
var { Text } = require('F8Text');
var View = require('View');
var Dimensions = require('Dimensions');
var PureListView = require('../../common/PureListView');
var MemberProfile = require('MemberProfile');
var groupCommitees = require('./groupCommitee');
var SessionsSectionHeader = require('./SessionsSectionHeader');
type Props ={
  title: string;
  links: Array<{
    id:string;
    picture: string;
    title: string;
    name: string;
    committee: string;
  }>;
};
class LinksList extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      commmitees: groupCommitees(props.links),
    };
    this._innerRef = null;

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderEmptyList = this.renderEmptyList.bind(this);
  }

  renderSectionHeader(sectionData: any, sectionID: string) {
    return <SessionsSectionHeader title={sectionID} />;
  }

  renderRow(speaker) {
    return (
      <MemberProfile
        key={speaker.name}
        speaker={speaker}
      />
    );
  }

  renderEmptyList(): ?ReactElement {
    const {renderEmptyList} = this.props;
    return renderEmptyList && renderEmptyList(this.props.day);
  }


  render() {
    return (
      <PureListView
        data={this.state.commmitees}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
        {...this.props}
        renderEmptyList={this.renderEmptyList}
      />
    );
  }
}



const IMAGE_SIZE = 250;
const scale = Dimensions.get('window').width-10;


var styles = StyleSheet.create({
  separator: {
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  picture: {
    width: scale,
    height: IMAGE_SIZE,

  },
  title: {
    fontSize: 22,
    color: F8Colors.darkText,
    flex: 1,
  },
  button: {
    padding: 10,
  },
  like: {
    letterSpacing: 1,
    color: F8Colors.actionText,
    fontSize: 12,
  },
});

module.exports = LinksList;
