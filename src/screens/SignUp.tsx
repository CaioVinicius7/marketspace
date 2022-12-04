import { Center, Text, ScrollView, VStack, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";

export function SignUp() {
	return (
		<ScrollView flex={1}>
			<VStack py={9} px={12} safeArea>
				<Center>
					<LogoSvg />

					<Heading mt={3} fontSize="xl">
						Boas vindas!
					</Heading>

					<Text mt={3} textAlign="center" color="gray.600">
						Crie sua conta e use o espaço para comprar {"\n"} itens variados e
						vender seus produtos
					</Text>
				</Center>
			</VStack>
		</ScrollView>
	);
}
