
export const FlatButton = ({children, title, onClick,className,disabled, icon})=>{
    return(
        <button onClick={onClick} className={className} disabled={disabled}>
            {title} {children} {icon}
        </button>
    )
}