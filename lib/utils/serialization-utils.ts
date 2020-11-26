export default function serializeFunction(functionDefinition: (...args: any) => void, functionName: string): string {
    // eslint-disable-next-line no-useless-escape
    const regexFunctionName = new RegExp(`${functionName}\\([^\\)]*\\) *{`, 'g')
    const normalizedFunctionBody = functionDefinition
        .toString()
        // remove comments from function body
        .replace(/\/\/.*/g, '')
        // remove multiple spaces from function body
        .replace(/  +/g, '')
        // remove new lines from function body
        .replace(/\n/g, ' ')
        // extract function body from function definition (remove function name, parameters and curly brakets)
        .replace(regexFunctionName, '')
        .replace(/}$/g, '')
    return normalizedFunctionBody
}
