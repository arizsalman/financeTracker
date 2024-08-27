


function Button({label ,borderColor, bgColor,txtColor }){
    return(
        <button className={`border  ${ borderColor ? borderColor:"border-blue-400" }${bgColor?bgColor:"bg-white"} ${ txtColor?txtColor:"text-green"}  rounded-md p-3 m-4`}>
        {label}
         </button>
    )
}
export default Button;