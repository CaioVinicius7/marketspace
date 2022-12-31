import { Dispatch, SetStateAction } from "react";
import { Select as NativeBaseSelect, useTheme } from "native-base";
import { CaretDown } from "phosphor-react-native";

interface SelectProps {
	selectedItem: string;
	setSelectedItem: Dispatch<SetStateAction<string>>;
}

export function Select({ selectedItem, setSelectedItem }: SelectProps) {
	const { colors } = useTheme();

	return (
		<NativeBaseSelect
			placeholder="Todos"
			accessibilityLabel="Filtre seus anúncios"
			minWidth={140}
			color="gray.700"
			fontSize="sm"
			dropdownIcon={
				<CaretDown
					size={20}
					color={colors.gray[500]}
					style={{
						marginRight: 8
					}}
				/>
			}
			_selectedItem={{
				bg: "gray.200"
			}}
			selectedValue={selectedItem}
			onValueChange={setSelectedItem}
		>
			<NativeBaseSelect.Item label="Todos" value="all" />
			<NativeBaseSelect.Item label="Ativos" value="active" />
			<NativeBaseSelect.Item label="Desativados" value="disabled" />
		</NativeBaseSelect>
	);
}
