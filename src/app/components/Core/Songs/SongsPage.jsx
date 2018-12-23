import React from 'react';
import PageContent from '../Layout/PageContent';
import PageTitle from '../../common/PageTitle';
import SongList from './SongList/SongList';
import * as MusicPlayerApi from '../../../services/MusicPlayerApi';

export default class SongsPage extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRef = React.createRef();
  }

  static async load(params) {
    const music = MusicKit.getInstance();

    return music.api.library.songs(null, params);
  }

  static playSong({ songs, index }) {
    MusicPlayerApi.playSong(songs, index);
  }

  render() {
    return (
      <PageContent innerRef={this.scrollRef}>
        <PageTitle title={'Songs'} context={'My Library'} />

        <SongList
          load={SongsPage.load}
          scrollElement={this.scrollRef}
          showAlbum
          showArtist
          playSong={SongsPage.playSong}
        />
      </PageContent>
    );
  }
}
