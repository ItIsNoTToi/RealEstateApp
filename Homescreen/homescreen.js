import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

const foodCategories = [
    {
      name: 'Category 1',
      image: require('./image/egg.png'), // Add your unique image source here
    },
    {
      name: 'Category 2',
      image: require('./image/IMG_62231.png'), // Add your unique image source here
    },
    {
      name: 'Category 3',
      image: require('./image/triple-sandwich-032.png'), // Add your unique image source here
    },
    {
      name: 'Category 4',
      image: require('./image/1382539115451.png'), // Add your unique image source here
    },
];

const bestDealsSlides = [
    {
      key: 'slide1',
      image: require('./image/IMG_62231.png'),
      foodName: 'Ramen',
    },
    {
      key: 'slide2',
      image: require('./image/triple-sandwich-032.png'),
      foodName: 'Sandwich',
    },
    {
      key: 'slide3',
      image: require('./image/Forbidden-Rice-Salad-575x262.png'),
      foodName: 'Salad',
    },
    {
      key: 'slide4',
      image: require('./image/egg.png'),
      foodName: 'Eggs',
    },
  ];

const popularFoods = [
    {
        name: 'Salad',
        image: require('./image/Forbidden-Rice-Salad-575x262.png'), // Add your unique image source here
        price: '0.50$',
    },
    {
        name: 'Red Flag',
        image: require('./image/tmg-article_default_mobile.png'), // Add your unique image source here
        price: '14.00$',
    },
    {
        name: 'Petty cash Sandwich',
        price: '16.50$',
        image: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'), // Add your unique image source here
    },
    {
        name: 'The Fancy Sandwich',
        price: '18.00$',
        image: require('./image/ef467172-a025-478e-8946-1c2673db5ce7.png'), // Add your unique image source here
    },
  ];

const HomeScreen = () => {
    const renderCategories = () => {
        return foodCategories.map((category, index) => (
          <View style={styles.category} key={`category_${index}`}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ));
    };

    const renderBestDealsSlides = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.sliderImage} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>{item.foodName}</Text>
            </View>
          </View>
        );
    };

    const renderPopular = () => {
        return popularFoods.map((popular, index) => (
        <View style={styles.popularItem} key={`popular_${index}`}>
            <View style={StyleSheet.create({
                width: '100%',
                height: 200,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            })}>
                <Image source={popular.image} style={styles.popularItemImage} />
            </View>
            <View style={StyleSheet.create({
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
            })}>
                <Text style={styles.popularItemText}>{popular.name}</Text>
                <Text style={styles.popularItemText}>{popular.price}</Text> 
            </View>
        </View>
        ));
    };
    
    return (
        <ScrollView>
            <View style={styles.header}>
                <FontAwesome name="bars" size={30} style={{ marginLeft: 20 }} />
                <FontAwesome name="shopping-cart" size={30} style={{ marginRight: 20 }} />
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesTitle}>Popular Categories</Text>
                <View style={styles.categoryImages}>{renderCategories()}</View>
            </View>
            <Text style={styles.Title}>Best Deals</Text>
            <AppIntroSlider
                data={bestDealsSlides}
                renderItem={renderBestDealsSlides}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                showNextButton={false}
                showDoneButton={false}
                showSkipButton={false}/>
            <Text style={styles.Title}>Most Popular</Text>
            <View style={styles.popularContainer}>{renderPopular()}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    margin: 10, 
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  categoryImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryText: {
    marginTop: 8,
    
  },
  Title: {
    fontSize: 20,
    fontWeight: '500',
    margin: 16,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%',
    height: 150,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  dotStyle: {
    backgroundColor: '#ccc',
  },
  activeDotStyle: {
    backgroundColor: '#0099cc',
  },
  popularItem: {
    alignItems: 'center',
    marginBottom: 16,
  },
  popularItemImage: {
    width: '100%',
    height: 200,
  },
  popularItemTextContainer: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 10, // Adjust the padding as needed
  },
  popularItemText: {
    fontSize: 18,
  },
  popularItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },  
});

export default HomeScreen;
