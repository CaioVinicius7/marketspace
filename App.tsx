import { StatusBar } from "react-native";
import { NativeBaseProvider, Center } from "native-base";
import {
	useFonts,
	Karla_400Regular,
	Karla_700Bold
} from "@expo-google-fonts/karla";

import { Loading } from "@components/Loading";

import { THEME } from "./src/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		Karla_400Regular,
		Karla_700Bold
	});

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>

			{fontsLoaded ? <Center flex={1}>Marketspace</Center> : <Loading />}
		</NativeBaseProvider>
	);
}
