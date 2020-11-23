const useState = (initialState) => {
    const state = { value: initialState };
    const handler = {
        get: (object, property) => object[property],
        set: (object, property, value) => object[property] = value
    };
    const stateProxy = new Proxy(state, handler);
    const setState = (anotherInitialState) => stateProxy.value = anotherInitialState;
    return [stateProxy, setState];
}

const [state, setState] = useState('nima ladmakhi')
console.log(state);
setState('ben award');
console.log(state);