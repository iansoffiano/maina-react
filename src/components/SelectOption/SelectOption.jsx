import { useState } from "react";
import SelectOptionLabel from "./SelectOptionLabel";
import ArrowDown from "../../assets/Icon/ArrowDown";
import { itemList } from "../../contents";

const SelectOption = ({ labelName, placeHolder, options }) => {
	const [isOpen, setIsOpen] = useState(false);

	const getDisplay = () => {
		return placeHolder;
	};

	return (
		<div className="flex items-start flex-col">
			<SelectOptionLabel>{labelName}</SelectOptionLabel>
			<button
				className="h-[56px] px-5 py-3 border border-abu-2 hover:border-abu-2 relative w-full text-left bg-transparent"
				onClick={(e) => setIsOpen(!isOpen)}
			>
				{getDisplay()}
				<span className="absolute inset-y-0 right-0 mr-3 flex items-center">
					<ArrowDown />
				</span>
			</button>
			<div className="relative block w-full">
				<div
					className={`absolute z-[5] top-2 bg-white py-2 mt-1 border border-abu-2 rounded-md w-full text-left ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul>
						{itemList.map((option) => {
							return (
								<li
									className="py-2 px-3 cursor-pointer hover:bg-abu-1"
									key={option.id}
								>
									{option.name}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SelectOption;
