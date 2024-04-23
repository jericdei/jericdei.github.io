export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getSpecificLines(
    code: string,
    startLine: number,
    endLine: number,
) {
    return code
        .split('\n')
        .slice(startLine - 1, endLine)
        .join('\n')
}
