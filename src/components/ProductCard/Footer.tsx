import { Heading, HStack, Text } from "native-base";

interface FooterProps {
	title: string;
	value: string;
	isDisabled: boolean;
}

export function Footer({ title, value, isDisabled }: FooterProps) {
	return (
		<>
			<Text color={isDisabled ? "gray.400" : "gray.700"} lineHeight="2xl">
				{title}
			</Text>

			<HStack alignItems="baseline">
				<Heading color={isDisabled ? "gray.400" : "gray.700"} fontSize="xs">
					R$
				</Heading>

				<Heading
					color={isDisabled ? "gray.400" : "gray.700"}
					fontSize="md"
					lineHeight="xs"
					pl={0.5}
				>
					{value}
				</Heading>
			</HStack>
		</>
	);
}
