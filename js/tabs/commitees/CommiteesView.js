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
 * @providesModule CommitteesView
 * @flow
 */
'use strict';
'use strict';

var LinksList = require('./LinksList');
var ListContainer = require('ListContainer');
var PureListView = require('../../common/PureListView');
var React = require('React');
var Relay = require('react-relay');
var View = require('View');
var StyleSheet = require('StyleSheet');



function CommitteesView() {
  return (
    <ListContainer
      title="Committees"

      backgroundColor={'#47BFBF'}>
      <InfoList />
    </ListContainer>
  );
}

function InfoList({viewer: {committees}, ...props}) {
  return (
    <PureListView
      style={styles.contentContainer}
      renderEmptyList={() => (
        <View>
          <LinksList links={committees} />
        </View>
      )}
      {...props}
    />
  );
}

InfoList = Relay.createContainer(InfoList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        committees {
          id
          title
          name
          picture
          committee
        }
      }
    `,
  },
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 26,
    paddingBottom: 60,
  },});

module.exports = CommitteesView;
