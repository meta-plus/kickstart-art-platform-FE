export const domainNameGenerator = ():string =>{
    const nodeEnv = process.env.NODE_ENV
    const port = process.env.PORT ? Number(process.env.PORT ) : 3000
    let url = ""
    switch(nodeEnv){
        case "development":
            url = process.env.REACT_APP_FRONTEND_TEST_SERVER_URL ?? ""
            break
        case "production":
            url = process.env.REACT_APP_FRONTEND_PRODUCTION_SERVER_URL ?? ""
            break
        default:
            url = `http://localhost:${port}`
            break
    }
    console.log("domainNameGenerator nodeEnv", nodeEnv)
    console.log("domainNameGenerator url", url)
    return url
}
