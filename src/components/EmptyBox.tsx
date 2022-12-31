import { Box, IBoxProps } from "native-base";

interface EmptyBoxProps extends IBoxProps {}

export function EmptyBox({ ...props }: EmptyBoxProps) {
	return <Box width={4} height={4} {...props} />;
}
