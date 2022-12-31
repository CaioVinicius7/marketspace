import { Tag as NativeBaseTag, Text } from "native-base";

interface TagProps {
	isDisabled: boolean;
	productIsNew: boolean;
}

export function Tag({ isDisabled, productIsNew }: TagProps) {
	return (
		<NativeBaseTag
			opacity={isDisabled ? 0.8 : 1}
			bgColor={productIsNew ? "blue.600" : "gray.600"}
			borderRadius="full"
			h={4}
			px={2}
			py={0.5}
			mt={1}
			mr={1}
		>
			<Text
				fontSize="2xs"
				fontFamily="heading"
				textTransform="uppercase"
				color="white"
			>
				{productIsNew ? "Novo" : "Usado"}
			</Text>
		</NativeBaseTag>
	);
}
