import { Heading, HStack, IconButton, useTheme } from "native-base";
import { Plus } from "phosphor-react-native";

import { EmptyBox } from "@components/EmptyBox";

export function Header() {
	const { colors } = useTheme();

	return (
		<HStack justifyContent="space-between" alignItems="center">
			<EmptyBox w={6} h={6} />

			<Heading fontSize="xl"> Meus anúncios </Heading>

			<IconButton
				onPress={() => console.log("Add product")}
				icon={<Plus size={24} weight="bold" color={colors.gray[700]} />}
				p={0}
				variant="unstyled"
				_pressed={{
					bgColor: "gray.300"
				}}
			/>
		</HStack>
	);
}
