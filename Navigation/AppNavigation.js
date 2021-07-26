import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomePage from "../screens/StudentHomePage";
import StudentDetailPage from "../screens/StudentDetails";
import ViewAttPage from "../screens/ViewAttPage";
import ViewNotificationPage from "../screens/ViewNotification";
import MarkAtt from "../screens/MarkAtt";

const AppNavigation = createStackNavigator(
  {
    Homep: {
      screen: HomePage,
      navigationOptions: {
        headerTitle: "Home",
      },
    },
    Attendance: ViewAttPage,
    StudentDetails: StudentDetailPage,
    Notifications: ViewNotificationPage,
    MarkAttp: {
      screen: MarkAtt,
      navigationOptions: {
        headerTitle: "Mark Attendance",
      },
    },
  },
  {
    mode: "card",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#DA8E09",
      },
    },
  }
);

export default createAppContainer(AppNavigation);
