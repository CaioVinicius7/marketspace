import { useState } from "react";
import {
	Center,
	Text,
	ScrollView,
	VStack,
	Heading,
	useToast
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import LogoSvg from "@assets/logo.svg";
import defaultUserPhotoImage from "@assets/userPhotoDefault.png";

const PHOTO_SIZE = 100;

export function SignUp() {
	const [userPhoto, setUserPhoto] = useState("");
	const toast = useToast();

	const navigation = useNavigation<AuthNavigatorRoutesProps>();

	function handleGoBack() {
		navigation.goBack();
	}

	async function handleUserPhotoSelect() {
		try {
			const photoSelected = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 1,
				aspect: [4, 4],
				allowsEditing: true,
				selectionLimit: 1
			});

			if (photoSelected.canceled) {
				return;
			}

			if (photoSelected.assets[0].uri) {
				const photoInfo = await FileSystem.getInfoAsync(
					photoSelected.assets[0].uri
				);

				if (photoInfo.size && photoInfo.size / 1024 / 1024 > 3) {
					return toast.show({
						title: "Essa imagem é muito grande. Escolha uma de até 3MB.",
						placement: "bottom",
						bgColor: "red.500"
					});
				}

				setUserPhoto(photoSelected.assets[0].uri);

				toast.show({
					title: "Foto atualizada!",
					placement: "top",
					bgColor: "green.500"
				});
			}
		} catch (error) {
			toast.show({
				title:
					"Ocorreu um erro ao atualizar a imagem. Tente novamente mais tarde.",
				placement: "top",
				bgColor: "red.500"
			});
		}
	}

	return (
		<VStack flex={1} safeArea>
			<ScrollView>
				<VStack py={9} px={12}>
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

					<VStack mt={6} space={6}>
						<Avatar
							source={userPhoto ? { uri: userPhoto } : defaultUserPhotoImage}
							size={PHOTO_SIZE}
							onPress={handleUserPhotoSelect}
							editAvatar
						/>

						<Input placeholder="Nome" />
						<Input placeholder="E-mail" keyboardType="email-address" />
						<Input placeholder="Telefone" keyboardType="phone-pad" />
						<Input placeholder="Senha" passwordInput />
						<Input placeholder="Confirmar senha" passwordInput />

						<Button title="Criar" variant="tertiary" />
					</VStack>

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
		</VStack>
	);
}
