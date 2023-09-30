import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import {FontAwesome} from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen  from "../../Homescreen/homescreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const App = () =>
{
    
    return(
        <NavigationContainer >
          <Footer>
            <ScrollView>{Home1()}</ScrollView>
          </Footer>
        </NavigationContainer>
    );
}

const foodCategories = [
  {
    name: 'Houses',
    image: require('./image/scott-webb-167099-unsplash.png'), // Add your unique image source here
  },
  {
    name: 'Apartments',
    image: require('./image/jarek-ceborski-250955-unsplash.png'), // Add your unique image source here
  },
  {
    name: 'Condos',
    image: require('./image/man-pan-400429-unsplash.png'), // Add your unique image source here
  },
];

const houses = [
  {
    image1:require('./image/pt1.png'),
    image2:require('./image/pt2.png'),
    name1:'One Mission Bay',
    name2:'1410 Steiner St',
    address1:'San francisco, CA',
    address2:'San francisco, CA',
  },
  {
    image1:require('./image/pt3.png'),
    image2:require('./image/pt4.png'),
    name1:'246 Sussex St',
    name2:'1206 Market St',
    address1:'San francisco, CA',
    address2:'San francisco, CA',
  },
  {
    image1:require('./image/pt6.png'),
    image2:require('./image/pt5.png'),
    name1:'246 Sussex St',
    name2:'1206 Market St',
    address1:'San francisco, CA',
    address2:'San francisco, CA',
  },
];

const Home1 = () =>
{
  const renderCategories = () => {
    return foodCategories.map((category, index) => (
      <View style={styles.category} key={`category_${index}`}>
        <Image source={category.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{category.name}</Text>
      </View>
    ));
};
  const Houses = () =>
  {
    return houses.map((item, index) =>(
      <View style={StyleSheet.create({width:'100%',flexDirection:'row',})} key={`item_${index}`}>
        <View style={StyleSheet.create({width:'50%', height: 200, padding: '5%',})}>
          <Image style={StyleSheet.create({width:'100%', height: 120,})} source={item.image1} />
          <Text style={StyleSheet.create({ fontSize:15,})}>{item.name1}</Text>
          <Text style={StyleSheet.create({ fontSize:10,})}>{item.address1}</Text>
        </View>
        <View style={StyleSheet.create({width:'50%', height: 200,padding: '5%',})}>
          <Image style={StyleSheet.create({width:'100%', height: 120,})} source={item.image2} />
          <Text style={StyleSheet.create({ fontSize:15,})}>{item.name2}</Text>
          <Text style={StyleSheet.create({ fontSize:10,})}>{item.address2}</Text>
        </View>
      </View>
    ));
  }
  return(
    <ScrollView>
      <View style={StyleSheet.create({flexDirection: 'row',marginTop: 15,justifyContent: 'space-between',borderBottomColor:'#def',borderBottomWidth:1,})}>
        <View style={StyleSheet.create({justifyContent: 'center',padding: 10,})}>
          <Image style={StyleSheet.create({width: 50,height:50,marginTop: 15,borderRadius:100})} source={require('./image/Forbidden-Rice-Salad-575x262.png')}/>
        </View>
        <View style={StyleSheet.create({justifyContent: 'center',padding: 10,})}>
          <Text style={StyleSheet.create({fontSize: 25,marginTop: 15,textAlign: 'center',})}>Home</Text>
        </View>
        <View style={StyleSheet.create({justifyContent: 'center',padding: 10,flexDirection: 'row',})}>
          <Image style={StyleSheet.create({width: 30,height:30,marginTop: 25,})} source={require('./image/daucong.png')}/>
          <Image onPress={()=> viewmap()} style={StyleSheet.create({width: 30,height:30,marginTop: 25,})} source={require('./image/Mapbutton.png')}/>
        </View>
      </View>
      <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoryImages}>{renderCategories()}</View>
      </View>
      <View style={StyleSheet.create({width: '100%',})}>
        <Text style={styles.categoriesTitle}>Houses</Text>
        <View style={{}}>{Houses()}</View>
      </View>
      <View style={StyleSheet.create({width: '100%',height: 100,justifyContent:'center',textAlign: 'center',alignItems:'center',})}>
        <Text  onPress={()=> alert("sorry")}
          style={{width: '80%', height: 30,justifyContent:'center',textAlign: 'center',alignItems:'center',borderWidth: 1,borderRadius: 8,color: 'green',borderColor:'green',}}>Show all(7)</Text>
      </View>
    </ScrollView>
  );
}
const Footer = () =>
{
    return(
      <Tab.Navigator initialRouteName="Feed"
      activeColor="green"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}> 
          <Tab.Screen options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} name="Home" component={Home1}/>
          <Tab.Screen options={{
              tabBarLabel: 'Collections',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="sort" color={color} size={26} />
              ),
            }} name="Collections" component={Categories}/>
          <Tab.Screen options={{
              tabBarLabel: 'Saved',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
              ),
            }} name="Saved" component={Saveditem}/>
          <Tab.Screen options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} name="Search" component={Search}/>
      </Tab.Navigator>
    )

}
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
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#def',
  },
  categoryImage: {
    width: 98,
    height: '50%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  categoryText: {
    marginTop: 8,
    marginLeft: 10,
    width: 100,
    height: '50%',
    textAlign: 'left',
  },
})

const category =[
  {
    image:require('./image/pt1.png'),
    name:'Houses',
  },
  {
    image:require('./image/pt2.png'),
    name:'Apartment',
  },
  {
    image:require('./image/pt3.png'),
    name:'Condos',
  },
  {
    image:require('./image/pt4.png'),
    name:'Land',
  },
  {
    image:require('./image/pt5.png'),
    name:'Buildings',
  },
  {
    image:require('./image/pt6.png'),
    name:'Town Houses',
  },

];

const Categories = () =>
{
  const Collections = () =>
  {
    return category.map((item, index) =>(
      <View style={StyleSheet.create({width:'100%',flexDirection:'row',})} key={`item_${index}`}>
        <View style={StyleSheet.create({width:'100%', height: 110, padding: '1.5%',justifyContent:'center',textAlign:'center',alignContent:'center',})}>
          <Image style={StyleSheet.create({width:'100%', height: '100%',opacity:0.5,})} source={item.image} />
          <Text style={StyleSheet.create({width:'100%',position:'absolute',textAlign:'center',fontSize:19,color:'white',})}>{item.name}</Text>
        </View>
      </View>
    ));
  }

  return (
      <ScrollView>
      <View style={StyleSheet.create({flexDirection: 'row',marginTop: 15,justifyContent: 'center',borderBottomColor:'#def',borderBottomWidth:1,})}>
        <View style={StyleSheet.create({justifyContent: 'center',padding: 10,})}>
          <Text style={StyleSheet.create({fontSize: 25,marginTop: 15,textAlign: 'center',})}>Categories</Text>
        </View>
      </View>
      <View style={StyleSheet.create({width: '100%',})}>
        <View style={{}}>{Collections()}</View>
      </View>
    </ScrollView>
  );
};

const Saveditem = () =>
{
  
  const Saved = () =>
  {
    return houses.map((item, index) =>(
      <View style={StyleSheet.create({width:'100%',flexDirection:'row',})} key={`item_${index}`}>
        <View style={StyleSheet.create({width:'50%', height: 200, padding: '1.5%',})}>
          <Image style={StyleSheet.create({width:'100%', height: 120,})} source={item.image1} />
          <Image style={{top:10,right:10,position: 'absolute'}} source={require('./image/heart.png')}/>
          <Text style={StyleSheet.create({ fontSize:15,})}>{item.name1}</Text>
          <Text style={StyleSheet.create({ fontSize:10,})}>{item.address1}</Text>
          <View style={{flexDirection:'row',}}>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/staroutline.png')}/>
          </View>
        </View>
        <View style={StyleSheet.create({width:'50%', height: 200,padding: '1.5%',})}>
          <Image style={StyleSheet.create({width:'100%', height: 120,})} source={item.image2} />
          <Image style={{top:10,right:10,position: 'absolute'}} source={require('./image/heart.png')}/>
          <Text style={StyleSheet.create({ fontSize:15,})}>{item.name2}</Text>
          <Text style={StyleSheet.create({ fontSize:10,})}>{item.address2}</Text>
          <View style={{flexDirection:'row',}}>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
            <Image source={require('./image/star.png')}/>
          </View>
        </View>
      </View>
    ));
  }

  return (
      <ScrollView>
      <View style={StyleSheet.create({flexDirection: 'row',marginTop: 15,justifyContent: 'center',borderBottomColor:'#def',borderBottomWidth:1,})}>
        <View style={StyleSheet.create({justifyContent: 'center',padding: 10,})}>
          <Text style={StyleSheet.create({fontSize: 25,marginTop: 15,textAlign: 'center',})}>Saved</Text>
        </View>
      </View>
      <View style={StyleSheet.create({width: '100%',})}>
        <View style={{}}>{Saved()}</View>
      </View>
    </ScrollView>
  );
}

const listsearch =[
  {
    image:require('./image/pt1.png'),
    name:'Houses',
    day: '14 days ago',
    address: 'San Francisco, CA',
    price: '$2,950,000',
  },
  {
    image:require('./image/pt2.png'),
    name:'1410 Steiner St',
    day: '9 days ago',
    address: 'San Francisco, CA',
    price: '$3,297,000',
  },
  {
    image:require('./image/pt3.png'),
    name:'246 Sussex St',
    day: '7 days ago',
    address: 'San Francisco, CA',
    price: '$1,259,000',
  },
  {
    image:require('./image/pt4.png'),
    name:'1206 Market St',
    day: '2 days ago',
    address: 'San Francisco, CA',
    price: '$379,000',
  },
  {
    image:require('./image/pt5.png'),
    name:'463 Eureka St',
    day: '8 days ago',
    address: 'San Francisco, CA',
    price: '$3.759,000',
  },
  {
    image:require('./image/pt6.png'),
    name:'206 Ocean Ave',
    day: '2 days ago',
    address: 'San Francisco, CA',
    price: '$899,000',
  },
];

const Search = () =>
{
  const search = () =>
  {
    return listsearch.map((item, index) =>(
      <View style={StyleSheet.create({width:'100%',flexDirection:'row',})} key={`item_${index}`}>
        <View style={StyleSheet.create({width:'30%', height: 110, padding: '2.5%',justifyContent:'center',textAlign:'center',alignContent:'center',})}>
          <Image style={StyleSheet.create({width:'100%', height: '100%',})} source={item.image} />
        </View>
        <View style={StyleSheet.create({width:'70%', paddingTop: '1.5%',paddingBottom: '1.5%',justifyContent:'center',textAlign:'center',alignContent:'center',})}>
          <Text style={StyleSheet.create({width:'100%', fontSize:20,textAlign:'left',})}>{item.name}</Text>
          <Text style={StyleSheet.create({width:'100%', fontSize:11,textAlign:'left',})}>{item.day}</Text>
          <View style={{flexDirection:'row',}}>
            <Text style={StyleSheet.create({width:'50%', fontSize:14,textAlign:'left',})}>{item.address} </Text>
            <Text style={StyleSheet.create({width:'50%', fontSize:11,textAlign:'left',})}>{item.price} </Text>
          </View>
          
        </View>
        
      </View>
    ));
  }

  const [text, onChangeNumber] = React.useState('');

  return (
      <ScrollView>
      <View style={StyleSheet.create({flexDirection: 'row',marginTop: 30,borderBottomColor:'#def',borderBottomWidth:1,})}>
        <View style={StyleSheet.create({padding: 10,width:'100%'})}>
          <TextInput style={{borderWidth: 1,paddingLeft: 30,width:'100%',height:40,backgroundColor:'#def',borderColor: '#def', borderRadius: 8,}}
            onChangeText={onChangeNumber}
            value={text}
            placeholder="Search"
            keyboardType="text"/>
          <Image style={{position:'absolute',width: 35,height: 35, top: 11,left: 9,}} source={require('./image/search.png')}/>
        </View>
      </View>
      <View style={StyleSheet.create({width: '100%',})}>
        <View style={{}}>{search()}</View>
      </View>
    </ScrollView>
  );
}
const viewmap = () =>
{
  return (
    <ScrollView>

    </ScrollView>
  );
}


export default App;
//<Tab.Screen name="Settings" component={HomeScreen} /> 