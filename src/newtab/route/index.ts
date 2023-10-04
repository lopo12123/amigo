import {createMemoryHistory, createRouter, RouteRecordRaw} from "vue-router";
import Bookmark from "../page/bookmark.vue";
import Collection from "../page/collection.vue";
import Entrance from "../page/entrance.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'entrance',
        component: Entrance,
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection,
    },
    {
        path: '/bookmark',
        name: 'bookmark',
        component: Bookmark
    }
]

const router = createRouter({history: createMemoryHistory(), routes})

export {router}