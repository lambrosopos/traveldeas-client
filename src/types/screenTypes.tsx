import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'

import {routeTypes} from './index'

// Configuration Screen Type
type ConfigurationScreenRouteProp = RouteProp<routeTypes.DrawerNavigatorParamList, 'Configuration'>
type ConfigurationScreenNavigationProp = StackNavigationProp<routeTypes.DrawerNavigatorParamList, 'Configuration'>

export type ConfigurationProps = {
  route: ConfigurationScreenRouteProp;
  navigation: ConfigurationScreenNavigationProp
}

// Profile Screen Type
type ProfileScreenRouteProp = RouteProp<routeTypes.DrawerNavigatorParamList, 'Profile'>
type ProfileScreenNavigationProp = StackNavigationProp<routeTypes.DrawerNavigatorParamList, 'Profile'>

export type ProfileProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp
}

// Home Screen Type
type HomeScreenRouteProp = RouteProp<routeTypes.HomeNavigatorParamList, 'Home'>
type HomeScreenNavigationProp = StackNavigationProp<routeTypes.HomeNavigatorParamList, 'Home'>

export type HomeProps = {
  route?: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp
}

// Idea Screen Type
type IdeaScreenRouteProp = RouteProp<routeTypes.IdeaNavigatorParamList, 'IdeaInfo'>
type IdeaScreenNavigationProp = BottomTabBarProps<routeTypes.IdeaNavigatorParamList>

export type IdeaProps = {
  route: IdeaScreenRouteProp;
  navigation: IdeaScreenNavigationProp
}

// Calendar Screen Type
type CalendarScreenRouteProp = RouteProp<routeTypes.IdeaNavigatorParamList, 'Calendar'>
type CalendarScreenNavigationProp = BottomTabBarProps<routeTypes.IdeaNavigatorParamList>

export type CalendarProps = {
  route: CalendarScreenRouteProp
  navigation: CalendarScreenNavigationProp
}

// Album Screen Type
type AlbumScreenRouteProp = RouteProp<routeTypes.IdeaNavigatorParamList, 'Album'>
type AlbumScreenNavigationProp = BottomTabBarProps<routeTypes.IdeaNavigatorParamList>

export type AlbumProps = {
  route: AlbumScreenRouteProp
  navigation: AlbumScreenNavigationProp
}
