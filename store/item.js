export const state = () => ({
    item: [
        {item_id:'1019229', item_name:'아포카도 인형', img_url:'https://www.creatrip.com:9999/uploads/1280/20190502/15567744426280.jpg'},
        {item_id:'1014923', item_name:'디즈니 점착메모북', img_url:'https://www.creatrip.com:9999/uploads/1280/20190502/15567744462630.jpg'},
        {item_id:'1013707', item_name:'페코포코 납작파우치', img_url:'https://www.creatrip.com:9999/uploads/1280/20190502/15567744488650.jpg'},
    ]

})

export const mutations = {
    remove(state, { index }) {
        state.item.splice(index, 1)
    },
    upSort(state) {
        state.item.sort(function(a, b) {
            return a.item_name < b.item_name ? -1 : a.item_name > b.item_name ? 1 : 0;
        });
    },
    downSort(state) {
        state.item.sort(function(a, b) {
            return a.item_name > b.item_name ? -1 : a.item_name < b.item_name ? 1 : 0;
        });
    },
    editName(state, obj) {
        state.item[obj.idx].item_name = obj.nm;
    }
}

export const getters = {
    get(state) {
        return state.item
    },
}

