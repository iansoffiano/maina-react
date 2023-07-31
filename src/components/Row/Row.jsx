const Row = ({children}) => {
    return (
        <div class="grid grid-cols-12 gap-4">
            {children}
        </div>
    )
}

export default Row;