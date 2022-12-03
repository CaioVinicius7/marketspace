import { NativeBaseProvider, Center, Spinner } from "native-base";
import {
	useFonts,
	Karla_400Regular,
	Karla_700Bold
} from "@expo-google-fonts/karla";

import { THEME } from "./src/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		Karla_400Regular,
		Karla_700Bold
	});

	return (
		<NativeBaseProvider theme={THEME}>
			{fontsLoaded ? <Center flex={1}>Marketspace</Center> : <Spinner />}
		</NativeBaseProvider>
	);
}
