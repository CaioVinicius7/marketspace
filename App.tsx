import { NativeBaseProvider, Center } from "native-base";

import { THEME } from "./src/theme";

export default function App() {
	return (
		<NativeBaseProvider theme={THEME}>
			<Center flex={1}>Hello world</Center>
		</NativeBaseProvider>
	);
}
