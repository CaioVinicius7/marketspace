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

					<Input mt={4} placeholder="E-mail" keyboardType="email-address" />

					<Input mt={4} placeholder="Senha" passwordInput />

					<Button title="Entrar" mt={8} />
				</Center>
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
	);
}
