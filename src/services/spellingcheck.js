
const capFirstLetter = (val) =>{
    const first = val.slice(0, 1) //repl_02
    const last = val.slice(1, val.length)
    const setUpper = first.toUpperCase()
    const mergeWord = setUpper+last
    return mergeWord
    // const second = v
}



export const firstReplace = (val)=>{

    const containVal = val
    const repl_01 = containVal.replaceAll("-", " ").replaceAll("_", " ")
    const repl_02 = repl_01.split(" ")
    const firstWord = repl_02[0]
    const lastWord = repl_02[repl_02.length-1]
    const firstResult = capFirstLetter(firstWord)
    const lastResult = capFirstLetter(lastWord)
    
    // containVal.replace(firstWord, firstResult)
    // containVal.replace(lastWord, lastResult)
    const resulte = repl_01.replace(firstWord, firstResult).replace(lastWord, lastResult) // firstResult +" "+ lastResult
    // console.log("firstReplace")

    return resulte

}