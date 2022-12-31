import { HStack } from "native-base";

import { Avatar } from "@components/Avatar";
import { EmptyBox } from "@components/EmptyBox";

import { Tag } from "./Tag";

interface HeaderProps {
	isDisabled: boolean;
	showVendor: boolean;
	vendorImg: string;
	productIsNew: boolean;
}

export function Header({
	isDisabled,
	showVendor,
	productIsNew,
	vendorImg
}: HeaderProps) {
	return (
		<HStack position="absolute" w="full" justifyContent="space-between">
			{showVendor ? (
				<Avatar
					size={6}
					source={{
						uri: vendorImg
					}}
					borderColor="gray.100"
					borderWidth="1"
					top={-4}
					left={-4}
				/>
			) : (
				<EmptyBox />
			)}

			<Tag isDisabled={isDisabled} productIsNew={productIsNew} />
		</HStack>
	);
}
