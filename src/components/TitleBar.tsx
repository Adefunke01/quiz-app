type TitleBarProps={
    pageNumber: string
    
}

export const TitleBar :React.FC<TitleBarProps> = (props)=>{

    return <div className="titleBar">
                <p className="pageNumber">{props.pageNumber}</p>
                <h1 className="heading">Fantasy Quiz #156</h1>
                <p className="closeIcon">x</p>
    </div>

}