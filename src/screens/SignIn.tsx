import { VStack, Text, Center, Input, Button, ScrollView } from "native-base";

import LogoWithSloganSvg from "@assets/logoWithSlogan.svg";

export function SignIn() {
	return (
		<ScrollView flex={1} bgColor="gray.100">
			<VStack
				px={12}
				py={12}
				bgColor="gray.200"
				borderBottomLeftRadius="3xl"
				borderBottomRightRadius="3xl"
				safeArea
			>
				<Center mb={20}>
					<LogoWithSloganSvg />
				</Center>

				<Center>
					<Text color="gray.600"> Acesse sua conta </Text>

					<Input
						px={4}
						h={12}
						fontSize="md"
						bgColor="gray.100"
						borderWidth="0"
						rounded="md"
						color="gray.600"
						placeholder="E-mail"
						mt={4}
						keyboardType="email-address"
					/>

					<Input
						px={4}
						h={12}
						fontSize="md"
						bgColor="gray.100"
						borderWidth="0"
						rounded="md"
						color="gray.600"
						placeholder="Senha"
						mt={4}
						secureTextEntry
					/>

					<Button
						w="full"
						bgColor="blue.400"
						h={12}
						mt={8}
						_pressed={{
							bgColor: "blue.700"
						}}
					>
						<Text fontFamily="heading" color="gray.100">
							Entrar
						</Text>
					</Button>
				</Center>
			</VStack>

			<Center mt={12} pb={6} px={12}>
				<Text>Ainda não tem acesso?</Text>

				<Button
					w="full"
					bgColor="gray.300"
					h={12}
					mt={4}
					_pressed={{
						bgColor: "gray.400"
					}}
				>
					<Text fontFamily="heading" color="gray.600">
						Criar uma conta
					</Text>
				</Button>
			</Center>
		</ScrollView>
	);
}
