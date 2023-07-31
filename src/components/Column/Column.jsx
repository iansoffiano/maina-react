const Column = ({xs=12, sm=12, md, lg, xl, children}) => {
    const classes ={
            [`col-span-${xs}`]: true,
            [`sm:col-span-${sm}`]: sm,
            [`md:col-span-${md}`]: md,
            [`lg:col-span-${lg}`]: lg,
            [`xl:col-span-${xl}`]: xl,
        };
    return (
        <div class={`py-1 px-2 ${`col-span-${xs}`} ${sm ? `sm:col-span-${sm}` : ""} ${md ? `md:col-span-${md}` : ""} ${lg ? `sm:col-span-${lg}` : ""} ${xl ? `sm:col-span-${xl}` : ""}`}>
            {children}
        </div>
    )
}

export default Column;