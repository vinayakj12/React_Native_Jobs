import { StyleSheet, Text, View, SafeAreaView,ScrollView } from "react-native";
import { useState } from "react";
import { Stack,useRouter } from "expo-router";

// importing the starter files 
import { COLORS, icons, images, SIZES } from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

export default function Home() {

  const router = useRouter();
  
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
       
       {/* Stack screen 1 HEADER COMPONENT: Navigation bar  */}
       <Stack.Screen options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl ={ icons.menu} dimension="60%" />
        ),

        headerRight: () => (
          <ScreenHeaderBtn iconUrl ={ images.profile} dimension="100%" />
        ),
      
        headerTitle: ""
       }}/>
       {/* HEADER END */}

       {/* the other view scrollview with components */}
       <ScrollView>
       <View style={{flex: 1, padding: SIZES.medium}}>

       <Welcome/>
       <Popularjobs/>
       <Nearbyjobs />
       </View>
       </ScrollView>
       {/* END OF THE SCROLLVIEW COMPONENTS WHICH WILL CONTAIN REST OF THE COMPONENTS AFTER THE HEADER  */}

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
