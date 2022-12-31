import { useMemo, useRef } from "react";
import {
	Checkbox,
	Heading,
	HStack,
	IconButton,
	Switch,
	Tag,
	Text,
	useTheme,
	VStack,
	Pressable
} from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import { X } from "phosphor-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { Button } from "@components/Button";

interface FilterBottomSheetProps {
	isOpen: boolean;
	changeFilterOptionsVisibility: () => void;
}

export function FilterBottomSheet({
	isOpen,
	changeFilterOptionsVisibility
}: FilterBottomSheetProps) {
	const { colors } = useTheme();

	const bottomSheetRef = useRef<BottomSheet>(null);

	const snapPoints = useMemo(() => [0.1, "65%"], []);

	return (
		<BottomSheet
			index={isOpen ? 1 : 0}
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			enableHandlePanningGesture={false}
		>
			<VStack px={8} pt={6} flex={1}>
				<HStack alignItems="center" justifyContent="space-between">
					<Heading fontSize="xl">Filtrar anúncios</Heading>

					<Pressable onPress={changeFilterOptionsVisibility}>
						<X size={24} color={colors.gray[400]} />
					</Pressable>
				</HStack>

				<ScrollView showsVerticalScrollIndicator={false}>
					<Text color="gray.600" fontFamily="heading" fontSize="sm" mt={6}>
						Condição
					</Text>

					<HStack>
						<Tag
							bgColor="blue.400"
							borderRadius="full"
							h={7}
							px={4}
							py={1}
							mt={3}
							mr={1}
						>
							<Text
								fontSize="xs"
								fontFamily="heading"
								textTransform="uppercase"
								color="white"
							>
								Novo
							</Text>

							<IconButton
								bgColor="gray.200"
								size="sm"
								borderRadius="full"
								p={0.4}
								ml={1.5}
								mr={-1.5}
								_icon={{
									as: MaterialCommunityIcons,
									name: "window-close",
									size: 3,
									color: "blue.400"
								}}
							/>
						</Tag>

						<Tag
							bgColor="gray.300"
							borderRadius="full"
							h={7}
							px={4}
							py={1}
							mt={3}
							mr={1}
						>
							<Text
								fontSize="xs"
								fontFamily="heading"
								textTransform="uppercase"
								color="gray.500"
							>
								Usado
							</Text>
						</Tag>
					</HStack>

					<VStack alignItems="flex-start" mt={6}>
						<Text color="gray.600" fontFamily="heading" fontSize="sm">
							Aceita troca?
						</Text>

						<Switch size="lg" p={0} onChange={() => {}} />
					</VStack>

					<Text color="gray.600" fontFamily="heading" fontSize="sm" mt={6}>
						Meios de pagamento aceitos
					</Text>

					<VStack mt={3} space={2}>
						<Checkbox
							_checked={{
								bgColor: "blue.400",
								borderColor: "blue.400"
							}}
							value="boleto"
							onChange={() => {}}
						>
							<Text fontSize="md">Boleto</Text>
						</Checkbox>

						<Checkbox
							_checked={{
								bgColor: "blue.400",
								borderColor: "blue.400"
							}}
							value="pix"
							onChange={() => {}}
						>
							<Text fontSize="md">Pix</Text>
						</Checkbox>

						<Checkbox
							_checked={{
								bgColor: "blue.400",
								borderColor: "blue.400"
							}}
							value="Dinheiro"
							onChange={() => {}}
						>
							<Text fontSize="md">Dinheiro</Text>
						</Checkbox>

						<Checkbox
							_checked={{
								bgColor: "blue.400",
								borderColor: "blue.400"
							}}
							value="Cartão de Crédito"
							onChange={() => {}}
						>
							<Text fontSize="md">Cartão de Crédito</Text>
						</Checkbox>

						<Checkbox
							_checked={{
								bgColor: "blue.400",
								borderColor: "blue.400"
							}}
							value="Depósito Bancário"
							onChange={() => {}}
						>
							<Text fontSize="md">Depósito Bancário</Text>
						</Checkbox>
					</VStack>
				</ScrollView>

				<HStack justifyContent="space-between" mt={8} mb={8}>
					<Button title="Resetar filtros" variant="secondary" w="47.5%" />
					<Button title="Aplicar filtros" variant="tertiary" w="47.5%" />
				</HStack>
			</VStack>
		</BottomSheet>
	);
}
