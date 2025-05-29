import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Product } from '../types/Product'

type Props = {
  product: Product;
}

export const ProductItem = (props: Props) => {
  const handleAddToCart = () => {
    alert ("Are you sure you want to buy?: "+props.product.name);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.product.image }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{props.product.name}</Text>
        <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
        <Button
          title='Buy'
          onPress={handleAddToCart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    marginLeft: 20
  },
  name: {
    fontWeight: 'bold',
    fontSize:  12,
    marginBottom: 7
  },
  price: {
    fontSize: 13,
    marginBottom: 7
  },
});