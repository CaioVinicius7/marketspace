import {
	Button as NativeBaseButton,
	Heading,
	HStack,
	Icon,
	Text,
	useTheme,
	VStack
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight, Tag } from "phosphor-react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { HomeHeader } from "@components/HomeHeader";

export function Home() {
	const { colors } = useTheme();

	const navigation = useNavigation<AppNavigatorRoutesProps>();

	function handleGoToLoggedUserAds() {
		navigation.navigate("userAds");
	}

	return (
		<VStack flex={1} pt={4} px={6} space={8} safeArea>
			<HomeHeader />

			<VStack>
				<Text color="gray.500">Seus produtos anunciados para venda</Text>

				<HStack
					bgColor="#dfe1ea"
					px={4}
					py={3}
					mt={3}
					borderRadius="md"
					alignItems="center"
				>
					<Tag size={22} weight="bold" color={colors.blue[700]} />

					<VStack flex={1} ml={4}>
						<Heading color="gray.600" fontSize="xl">
							4
						</Heading>

						<Text color="gray.600" fontSize="xs">
							anúncios ativos
						</Text>
					</VStack>

					<NativeBaseButton
						onPress={handleGoToLoggedUserAds}
						variant="unstyled"
						rightIcon={
							<Icon
								as={
									<ArrowRight
										size={16}
										weight="bold"
										color={colors.blue[700]}
									/>
								}
							/>
						}
					>
						<Text fontSize="xs" color="blue.700" pr={2} fontWeight="bold">
							Meus anúncios
						</Text>
					</NativeBaseButton>
				</HStack>
			</VStack>
		</VStack>
	);
}
