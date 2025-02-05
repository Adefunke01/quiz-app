type ButtonProps ={
    className?: string
    onClick: ()=>void
    children: React.ReactNode
    disabled?: boolean

}


export const Button = (props:ButtonProps)=>{

    return <button disabled={props.disabled} className={`button ${props.className}`} onClick={props.onClick}>{props.children}</button>
}