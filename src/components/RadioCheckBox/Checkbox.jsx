import { useState } from "react";

const Checkbox = ({ label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false
	const [isChecked, setIsChecked] = useState(defaultChecked);
	return (
		<>			
				<input
					type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked((prev) => !prev)}
					{...props}
                    className="w-4 h-4 accent-blue-400 focus:accent-blue-600 focus:ring-blue-100 focus:ring-1 checked:bg-blue-400 checked:border-0"
				/>
                <label htmlFor={label} className="ml-2 text-sm font-medium text-gray-900">
                    <span>{label}</span>
                </label>
		</>
	);
};
export default Checkbox;
