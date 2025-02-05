type OptionProps={
    title: string
    index: number
    selected:boolean
    onClick: ()=>void
}

export const Option: React.FC<OptionProps> = (props:OptionProps)=>{

    const getOptionAlphabet =(index:number):string => {
        if (index === 0){
            return "A"
        }else if (index===1){
            return "B"
        }else if (index ===2){
            return "C"
        }else return "D"

    }
  
    return (<div data-testid="option" onClick={props.onClick} className={`${props.selected? "selected" : " "} options`}>
        <p className="alphabet">{getOptionAlphabet(props.index)}</p>
        <p className="answer">{props.title}</p>
    </div>)
}