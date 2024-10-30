const globalVariable = {
    // featuer can toggled ( requied = trule / not required = false )
    loading : true,
    dark : false,
    footer : false  
}

export const isEnable = () => {
    // console.log("isEnabled" , globalVariable.loading)
    
    return {
       loading : globalVariable.loading,
       dark : globalVariable.dark,
       footer : globalVariable.footer,
    }
}