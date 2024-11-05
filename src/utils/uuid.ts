export function uuid(): string {
    let dataTime = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        (i: string) => {
            let random = (dataTime + Math.random() * 16) % 16 | 0
            dataTime = Math.floor(dataTime / 16)
            return (i == 'x' ? random : (random & 0x3) | 0x8).toString(16)
        },
    )
    return uuid
}