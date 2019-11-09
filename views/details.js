import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default class Details extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      carouselItems: [
        {
          title: 'Item 1',
          image: require('../assets/01.jpg'),
        },
        {
          title: 'Item 2',
          image: require('../assets/02.jpg'),
        },
        {
          title: 'Item 3',
          image: require('../assets/03.jpg'),
        },
        {
          title: 'Item 4',
          image: require('../assets/04.jpg'),
        },
      ],
      nome: navigation.getParam('nome'),
    };
  }

  static navigationOptions = ({navigation, navigationOptions}) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      title: navigation.getParam('nome', 'Detalhes'),
    };
  };
  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={item.image} />
        <Text style={{color: '#fff'}}>{item.title}</Text>
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Carousel
          data={this.state.carouselItems}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          slideStyle={{width: viewportWidth}}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131420',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
