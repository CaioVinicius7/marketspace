import { Button as NativeBaseInput, IButtonProps, Text } from "native-base";

type ButtonVariants = "primary" | "secondary" | "tertiary";
type NativeBaseColor = `${string}.${string}`;

interface ButtonProps extends IButtonProps {
	title: string;
	variant?: ButtonVariants;
}

const bgColorVariants: Record<ButtonVariants, NativeBaseColor> = {
	primary: "blue.400",
	secondary: "gray.300",
	tertiary: "gray.700"
};

const pressedBgColorVariants: Record<ButtonVariants, NativeBaseColor> = {
	primary: "blue.700",
	secondary: "gray.400",
	tertiary: "gray.600"
};

const textColorVariants: Record<ButtonVariants, NativeBaseColor> = {
	primary: "gray.100",
	secondary: "gray.600",
	tertiary: "gray.100"
};

export function Button({ title, variant = "primary", ...props }: ButtonProps) {
	return (
		<NativeBaseInput
			w="full"
			bgColor={bgColorVariants[variant]}
			h={12}
			_pressed={{
				bgColor: pressedBgColorVariants[variant]
			}}
			{...props}
		>
			<Text fontFamily="heading" color={textColorVariants[variant]}>
				{title}
			</Text>
		</NativeBaseInput>
	);
}
