import { useState } from "react";
import { Input as NativeBaseInput, IInputProps, Icon } from "native-base";
import { Pressable } from "react-native";
import { Eye, EyeSlash } from "phosphor-react-native";

interface InputProps extends IInputProps {
	passwordInput?: boolean;
}

export function Input({ passwordInput = false, ...props }: InputProps) {
	const [hidePassword, setHidePassword] = useState(true);

	function handleChangePasswordVisibility() {
		setHidePassword((state) => !state);
	}

	if (passwordInput) {
		return (
			<NativeBaseInput
				px={4}
				h={12}
				fontSize="md"
				bgColor="gray.100"
				borderWidth="0"
				rounded="md"
				color="gray.600"
				secureTextEntry={hidePassword}
				InputRightElement={
					<Pressable onPress={handleChangePasswordVisibility}>
						<Icon
							as={hidePassword ? <Eye /> : <EyeSlash />}
							size={4}
							mr={4}
							color="gray.600"
						/>
					</Pressable>
				}
				{...props}
			/>
		);
	}

	return (
		<NativeBaseInput
			px={4}
			h={12}
			fontSize="md"
			bgColor="gray.100"
			borderWidth="0"
			rounded="md"
			color="gray.600"
			{...props}
		/>
	);
}
