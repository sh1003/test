<template>
  <div class='container'>
    <b-container class="bv-example-row">
        <b-row>
            <b-col cols='6'>
                <h2>User</h2>
                <ul>
                    <li v-for='(user, index) in users'>
                        <span>user_name : {{user.user_name}}</span>
                    </li>
                </ul>
            </b-col>
            <b-col cols='6'>
                <h2>Item</h2>
                <b-button variant="outline-primary" size="sm" v-on:click="clickedItemUpSort()">upSort</b-button>
                <b-button variant="outline-primary" size="sm" v-on:click="clickedItemDownSort()">downSort</b-button>
                <ul>
                    <li v-for='(item, index) in items'>
                        <span>{{item.item_name}} 
                            <b-button variant="outline-primary" size="sm" v-on:click="clickedItemEditName(index)">edit</b-button>
                            <b-button variant="outline-primary" size="sm" v-on:click="clickedItemDelete(index)">delete</b-button>
                        </span>
                        <img :src='item.img_url'>
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
  </div>

</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
    computed: mapGetters({
        items: 'item/get',
        users: 'user/get',
    }),
    methods: {
        clickedItemDelete(index) {
            this.$store.commit('item/remove', index);
        },
        clickedItemUpSort() {
            this.$store.commit('item/upSort');
        },
        clickedItemDownSort() {
            this.$store.commit('item/downSort');
        },
        clickedItemEditName(index) {
            let name = prompt("Please Enter item name");
            let obj = {
                idx : index,
                nm : name
            }
            if(name != null) {
                this.$store.commit('item/editName', obj);
            }
        }
        
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}
li {
    list-style: none;
}
.title {
  display: block;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 42px;
}
</style>
