const reducer= (state = {a:0,b:0,c:0},action) => {
    if (action.obj === '1' && action.diya === '+'){
        return {...state, a: state.a++}
    }else if (action.obj === '1' && action.diya === '-'){
        return {...state, a: state.a--}
    }else if (action.obj === '2' && action.diya === '+'){
        return {...state, b: state.b++}
    }else if (action.obj === '2' && action.diya === '-'){
        return {...state, b: state.b--}
    }else if (action.obj === '3' && action.diya === '+'){
        return {...state, c: state.c++}
    }else if (action.obj === '3' && action.diya === '-'){
        return {...state, c: state.c--}
    }
}
export {reducer};