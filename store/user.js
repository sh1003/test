export const state = () => ({
    user: [
        {user_id:'a1', user_name: 'jason'},
        {user_id:'a2', user_name: 'jay'},
        {user_id:'a3', user_name: 'david'},
    ],

})

export const getters = {
    get(state) {
        return state.user
    }
}