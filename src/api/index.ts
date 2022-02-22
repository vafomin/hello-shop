export const getData: Function = async () => {
    const res = await fetch("https://61687b86ba841a001727c7d5.mockapi.io/api/items");
    if (res.ok){
        return await res.json();
    }
}

