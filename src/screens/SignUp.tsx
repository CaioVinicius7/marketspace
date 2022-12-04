import { Center, Text, ScrollView, VStack, Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from "@assets/logo.svg";

export function SignUp() {
	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	function handleGoBack() {
		navigation.goBack();
	}

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

				<Center mt={6}>
					<Input placeholder="Nome" />
					<Input placeholder="E-mail" keyboardType="email-address" mt={6} />
					<Input placeholder="Telefone" keyboardType="phone-pad" mt={6} />
					<Input placeholder="Senha" passwordInput mt={6} />
					<Input placeholder="Confirmar senha" passwordInput mt={6} />

					<Button title="Criar" variant="tertiary" mt={6} />
				</Center>

				<Center mt={12}>
					<Text>Já tem uma conta?</Text>

					<Button
						title="Ir para o login"
						variant="secondary"
						mt={4}
						onPress={handleGoBack}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
}
