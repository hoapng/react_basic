const initState = {
    users: [
        {id: 1, name:  'Hoa'},
        {id: 2, name: 'Pham'},
        {id: 3, name: 'Nguyen'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}
export default rootReducer