import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/StudentHomePage";
import StudentDetailPage from "../screens/StudentDetails";
import ViewAttPage from "../screens/ViewAttPage";
import ViewNotificationPage from "../screens/ViewNotification";

const AppNavigation = createStackNavigator({
  Home: HomePage,
  Attendance: ViewAttPage,
  StudentDetails: StudentDetailPage,
  Notifications: ViewNotificationPage,
});

export default createAppContainer(AppNavigation);
