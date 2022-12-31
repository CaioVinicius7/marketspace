import { Heading, HStack, Icon, Text, useTheme, VStack } from "native-base";
import { Plus } from "phosphor-react-native";

import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";

import defaultUserPhotoImage from "@assets/userPhotoDefault.png";

export function Header() {
	const userPhoto = "https://github.com/caiovinicius7.png";

	const { colors } = useTheme();

	return (
		<HStack alignItems="center">
			<Avatar
				size={12}
				source={userPhoto ? { uri: userPhoto } : defaultUserPhotoImage}
			/>

			<VStack flex={1}>
				<Text color="gray.700" fontSize="md">
					Boas vindas,
				</Text>

				<Heading color="gray.700" fontSize="md" fontFamily="heading">
					Caio
				</Heading>
			</VStack>

			<Button
				title="Criar anúncio"
				variant="tertiary"
				leftIcon={
					<Icon
						as={<Plus size={16} weight="bold" color={colors.gray[100]} />}
					/>
				}
				flex={1}
			/>
		</HStack>
	);
}
