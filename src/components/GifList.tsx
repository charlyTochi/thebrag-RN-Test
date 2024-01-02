import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  FlatList,
  Image,
  View,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const GifList = () => {
  const gifs = useSelector((state: any) => state.gifs);
  const isLoading = useSelector((state: any) => state.isLoading);

  const [selectedGif, setSelectedGif] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const renderItem = ({item}: {item: any}) => (
    <TouchableWithoutFeedback onPress={() => handleGifPress(item)}>
      <Image
        source={{uri: item.images.fixed_height.url}}
        style={styles.gifImage}
      />
    </TouchableWithoutFeedback>
  );

  const keyExtractor = (item: any) => item.id.toString();

  const handleGifPress = (gif: React.SetStateAction<null>) => {
    setSelectedGif(gif);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGif(null);
  };

  return (
    <View style={styles.container}>
      {gifs.length === 0 || isLoading ? (
        <FlatList
          data={[{id: 'placeholder'}]}
          numColumns={3}
          keyExtractor={keyExtractor}
          renderItem={() => (
            <ShimmerPlaceholder
              style={styles.gifImage}
              shimmerColors={['#ededed', '#dcdcdc', '#ededed']}
              visible={isLoading}
            />
          )}
        />
      ) : (
        <FlatList
          data={gifs}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          numColumns={3}
        />
      )}

      {selectedGif && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={closeModal}>
              <Image
                source={{uri: selectedGif.images.original.url}}
                style={styles.modalImage}
              />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      )}
    </View>
  );
};

const {width} = Dimensions.get('window');
const itemWidth = (width - 20) / 3;

const styles = StyleSheet.create({
  gifImage: {
    width: itemWidth,
    height: itemWidth,
    margin: 5,
    borderRadius: 8,
  },
  container: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: width,
    height: width,
    resizeMode: 'contain',
  },
});

export default GifList;
