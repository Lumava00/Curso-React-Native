import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme-nativation';
import { Text, useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () =>{

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

      drawerContent={ (props) => <CustomDrawerContent {...props}/>}

      screenOptions={{
        drawerType:dimensions.width >= 758 ? 'permanent' : 'slide',

        headerShown:false,
        
        
        drawerActiveBackgroundColor:globalColors.primary,
        drawerActiveTintColor:'white',
        drawerInactiveBackgroundColor:globalColors.primary,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props:DrawerContentComponentProps) =>{
  return(
    <DrawerContentScrollView>
      <View 
        style={{
          height:200,
          backgroundColor:globalColors.primary,
          margin:30,
          borderRadius:50
        }}
      />

      <DrawerItemList {...props}/>
      <Text>Hola mundo</Text>
    </DrawerContentScrollView>
  )
}