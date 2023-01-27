const table:{[key:string]:string} = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;',
    '\r': '&#10;',
    '\n': '<br>'
};

const strongRegex = /(\*\*.+\*\*)/g
const emRegex = /(\*.+\*)/g

export const mdConvert = (text:string) => {
	
	return text.replace(/[<>"'\r\n&]/g, (chr:string) => {
        return table[chr]
    }).replace(strongRegex, (chr:string) => {
        return `<strong>${chr.substring(2, chr.length - 2)}</strong>`
    }).replace(emRegex, (chr:string) => {
        return `<em>${chr.substring(1, chr.length - 1)}</em>`
    });
};

