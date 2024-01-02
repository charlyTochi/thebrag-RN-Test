import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, Image, View, StyleSheet} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const GifList = () => {
  const gifs = useSelector((state: any) => state.gifs);
  const isLoading = useSelector((state: any) => state.isLoading);

  const renderItem = ({item}: {item: any}) => (
    <Image
      source={{uri: item.images.fixed_height.url}}
      style={styles.gifImage}
    />
  );

  const keyExtractor = (item: any) => item.id.toString();

  return (
    <View style={styles.container}>
      {gifs.length === 0 ? (
        <FlatList
          data={[{id: 'placeholder'}]}
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
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          windowSize={10}
          updateCellsBatchingPeriod={30}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gifImage: {
    width: 300,
    height: 300,
    margin: 5,
    borderRadius: 8, // Add a border radius for a more appealing look
  },
  container: {
    alignItems: 'center',
  },
});

export default GifList;
