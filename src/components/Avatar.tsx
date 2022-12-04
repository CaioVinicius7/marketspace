import { Image, IImageProps, Box, Center, useTheme } from "native-base";
import { PencilSimpleLine } from "phosphor-react-native";

interface AvatarProps extends IImageProps {
	size: number;
	editAvatar?: boolean;
}

export function Avatar({ size, editAvatar, ...props }: AvatarProps) {
	const editButtonSize = size / 2.2;

	const { colors } = useTheme();

	const iconColor = colors.gray[200];
	const iconSize = size / 5;

	return (
		<Box position="relative">
			<Image
				w={size}
				h={size}
				rounded="full"
				borderWidth={3}
				borderColor="blue.400"
				alt="Imagem do usuário"
				{...props}
			/>

			{editAvatar && (
				<Center
					bgColor="blue.400"
					rounded="full"
					width={editButtonSize}
					height={editButtonSize}
					position="absolute"
					bottom={-0}
					right={-6}
				>
					<PencilSimpleLine color={iconColor} size={iconSize} />
				</Center>
			)}
		</Box>
	);
}
