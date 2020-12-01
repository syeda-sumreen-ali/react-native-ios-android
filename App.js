import React from 'react';
import { Text, View, Button } from 'react-native';
import Modal, { ModalContent } from 'react-native-modals';

class App extends React.Component {
  state = {
    visible1: false,
    visible2: false,
  };
  render() {
    return (
      <View style={{ backgroundColor: 'pink', paddingTop: '20%' }}>
        <Button
          title="Open first modal"
          onPress={() => this.setState({ visible1: true })}
        />
        <Modal
          visible={this.state.visible1}
          swipeDirection={['up', 'down']}
          swipeThreshold={200}
          onSwipeOut={(e) => this.setState({ visible1: false })}>
          <ModalContent>
            <Text> this is the parent modals </Text>
            <Button
              title="Open second modal"
              onPress={() => {
                this.setState({ visible2: true });
              }}
            />
          </ModalContent>
        </Modal>
        <Modal
          visible={this.state.visible2}
          swipeDirection={['up', 'down']}
          swipeThreshold={200}
          onSwipeOut={(e) => this.setState({ visible2: false })}>
          <ModalContent>
            <Text> this is the second modal </Text>
          </ModalContent>
        </Modal>
      </View>
    );
  }
}

export default App;