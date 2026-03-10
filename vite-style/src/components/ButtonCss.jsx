import './ButtonCss.css'

export default function ButtonCss({bgColor, label}){
    return(
        <button 
        style={{
            backgroundColor: bgColor, 
            color: label
        }}>
            {label}</button>
    )
}