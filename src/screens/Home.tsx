import {
	Button as NativeBaseButton,
	Divider,
	Heading,
	HStack,
	Icon,
	Image,
	Pressable,
	Text,
	useTheme,
	VStack
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import {
	ArrowRight,
	MagnifyingGlass,
	Sliders,
	Tag
} from "phosphor-react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { HomeHeader } from "@components/HomeHeader";
import { Input } from "@components/Input";
import { ProductCard } from "@components/ProductCard";

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

			<VStack>
				<Text color="gray.500">Compre produtos variados</Text>

				<Input
					placeholder="Buscar anúncio"
					mt={3}
					InputRightElement={
						<HStack pr={4}>
							<Pressable onPress={() => console.log("Search")}>
								<MagnifyingGlass size={20} />
							</Pressable>
							<Divider orientation="vertical" h={5} bg="gray.400" mx={3} />
							<Pressable onPress={() => console.log("Filter")}>
								<Sliders size={20} />
							</Pressable>
						</HStack>
					}
				/>
			</VStack>

			<HStack flexWrap="wrap">
				<ProductCard
					title="Tênis bege"
					value="59,90"
					status="used"
					productImg="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
					vendorImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>

				<ProductCard
					title="Bicicleta"
					value="120,00"
					status="new"
					productImg="https://images.unsplash.com/photo-1484920274317-87885fcbc504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
					vendorImg="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				/>
			</HStack>
		</VStack>
	);
}
