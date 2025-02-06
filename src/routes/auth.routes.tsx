import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Signin } from "../screen/sign-in";
import { Signup } from "../screen/sign-up";

type AuthRoutes = {
  Signin: undefined;
  Signup: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} options={{}} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
}
