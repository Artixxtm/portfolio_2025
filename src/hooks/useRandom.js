function rand(localItem, lengthLays) {
    const num = Math.floor(Math.random() * lengthLays)
    if(num === localItem) rand();

    return num;
}


export default function useRandom(layouts) {
    const local = localStorage.getItem('layout')
    const lengthLays = layouts.length
    const result = rand(local, lengthLays)
    localStorage.setItem('layout', result)

    return {local, result}
}