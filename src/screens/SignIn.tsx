import { VStack, Text, Center, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoWithSloganSvg from "@assets/logoWithSlogan.svg";

export function SignIn() {
	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	function handleNewAccount() {
		navigation.navigate("signUp");
	}

	return (
		<VStack flex={1} safeArea>
			<ScrollView bgColor="gray.100">
				<VStack
					px={12}
					py={12}
					bgColor="gray.200"
					borderBottomLeftRadius="3xl"
					borderBottomRightRadius="3xl"
				>
					<Center mb={20}>
						<LogoWithSloganSvg />
					</Center>

					<VStack space={4}>
						<Text color="gray.600" textAlign="center">
							Acesse sua conta
						</Text>

						<Input placeholder="E-mail" keyboardType="email-address" />

						<Input placeholder="Senha" passwordInput />

						<Button title="Entrar" mt={4} />
					</VStack>
				</VStack>

				<Center mt={12} pb={6} px={12}>
					<Text>Ainda não tem acesso?</Text>

					<Button
						title="Criar uma conta"
						variant="secondary"
						mt={4}
						onPress={handleNewAccount}
					/>
				</Center>
			</ScrollView>
		</VStack>
	);
}
