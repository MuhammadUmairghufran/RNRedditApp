import React from 'react';

import {RedditAppContainer} from './src/Navigations/RedditAppContainer'
import {AppLoading, Font} from "expo";
import {Root} from "native-base";
export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = { loading: true };
  }



  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }



  render() {

    if (this.state.loading) {
      return (
          <Root>
            <AppLoading />
          </Root>
      );
    }
    return (
        <Root>
     <RedditAppContainer/>
        </Root>
    );
  }
}


