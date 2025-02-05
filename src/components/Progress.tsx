
type ProgressProps ={
    value: number
    max:number
}
export const Progress: React.FC<ProgressProps>=(props)=>{
    return (
        <div>
            <progress className="progress" value={props.value} max={props.max}></progress>
            <label className="progressLabel" > {`${props.value}/${props.max}`}</label>
    </div>)
}