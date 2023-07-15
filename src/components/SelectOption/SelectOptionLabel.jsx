import { Children } from "react";

const SelectOptionLabel = ( {children} ) => {
  return (
    <>
        <label htmlFor={children} className={[
					"block mb-2",
					"font-roboto font-medium text-xs text-abu-3",
					"tracking-[.15em] uppercase text-left",
				].join(" ")}>
            {children}
        </label>
    </>
  )
}
export default SelectOptionLabel;
