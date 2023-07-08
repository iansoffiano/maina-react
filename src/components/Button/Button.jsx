function Button(props) {
    return(
        <>
            <button className={`px-5 py-3 text-white inline-block rounded-md ${props.appereance == 'primary' ? 'bg-blue-500' : 'bg-slate-800'}`}>
                {props.value}
            </button>
        </>
    )
}

export default Button