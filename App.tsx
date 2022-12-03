import { NativeBaseProvider, Center } from "native-base";

export default function App() {
	return (
		<NativeBaseProvider>
			<Center flex={1}>Hello world</Center>
		</NativeBaseProvider>
	);
}
