import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Top Row */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
        }}
      >
        <Image source={require('./image/egg.png')} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Home</Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'green',
              borderRadius: 25,
              padding: 10,
            }}
          >
            <Image source={require('./image/egg.png')} />
          </View>
        </TouchableOpacity>
        <Image source={require('./image/egg.png')} />
      </View>

      {/* Scroll View */}
      <ScrollView>
        {/* Categories Section */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Categories</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}
          >
            {/* Repeat this block for each category */}
            <TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('./image/egg.png')}
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                />
                <Text style={{ fontWeight: 'bold' }}>Houses</Text>
              </View>
            </TouchableOpacity>
            {/* Repeat the above TouchableOpacity block for other categories */}
          </View>
        </View>

        {/* Houses Section */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Houses</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* Repeat this block for each house */}
            <TouchableOpacity>
              <View style={{ margin: 8 }}>
                <Image
                  source={require('./image/egg.png')}
                  style={{ width: 150, height: 150, borderRadius: 10 }}
                />
                <Text style={{ fontWeight: 'bold' }}>1410 Steiner St</Text>
                <Text>San Francisco, LA</Text>
                {/* Heart icon that turns green when clicked */}
                {/* You can implement this interactivity using state */}
                <TouchableOpacity>
                  <Image
                    source={require('./image/egg.png')}
                    style={{ position: 'absolute', top: 10, right: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            {/* Repeat the above TouchableOpacity block for other houses */}
          </View>
        </View>
      </ScrollView>

      {/* Show All Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          margin: 16,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          Show All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;