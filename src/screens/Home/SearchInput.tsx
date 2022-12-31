import { Divider, HStack, Pressable } from "native-base";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";

import { Input } from "@components/Input";

interface SearchInputProps {
	changeFilterOptionsVisibility: () => void;
}

export function SearchInput({
	changeFilterOptionsVisibility
}: SearchInputProps) {
	return (
		<Input
			placeholder="Buscar anúncio"
			mt={3}
			InputRightElement={
				<HStack pr={4}>
					<Pressable onPress={() => console.log("Search")}>
						<MagnifyingGlass size={20} />
					</Pressable>
					<Divider orientation="vertical" h={5} bg="gray.400" mx={3} />
					<Pressable onPress={changeFilterOptionsVisibility}>
						<Sliders size={20} />
					</Pressable>
				</HStack>
			}
		/>
	);
}
