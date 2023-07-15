import { useState } from "react";
import SuccessIco from "../../assets/Icon/SuccessIco.svg"
import ErrorIco from "../../assets/Icon/ErrorIco"
import InputTextLabel from "./InputTextLabel";

function joinClass(...classes) {
	return classes.join(" ");
}

const InputText = ({ labelName, type, placeholder, cek }) => {

    const [isState, setIsState] = useState('')
	

	return (
		<>
			<InputTextLabel>{labelName}</InputTextLabel>
			<div className="relative my-3">
				<input
					className={joinClass(
						"w-full h-[56px] px-[24px] text-[20px]",
						"font-roboto placeholder:text-abu-2 border rounded-lg",
						"focus:shadow-outline",
					)}
					type={type}
					placeholder={placeholder}
					
				/>
				{
					cek === 'true' ? (
						<span className="absolute inset-y-0 right-0 flex items-center mr-3">
                        <img src={SuccessIco} alt="icon centang" />
                    </span>
					) : ''
				}
				{
					cek === 'false' ?(
						<span className="absolute inset-y-0 right-0 flex items-center mr-3">
						<ErrorIco />
					</span>
					):""
				}
			</div>
		</>
	);
};

export default InputText;
