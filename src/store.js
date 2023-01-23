import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)
export const store = new Vuex.Store({
   
     state:{
        items: [ {
            action: 'mdi-items',
            active: true,
            items: [
              { title: 'All category' , route:'/all' },
              { title: 'Add New Category' },
                
            ],
            title: 'Item Category',
          },
          {
            action: 'mdi-items',
            active: true,
            items: [
              { title: 'All Items' },
              { title: 'Add New Items' },
    
            ],
            title: 'Items',
       
          }]
     },
     getters:{
        // saleProducts:state =>{
        //         var saleProducts = state.products.map(product =>{
        //             return{
        //                 name:'**'+product.name +'**',
        //                 price:product.price/2
        //             }
        //         });
        //         return saleProducts;
        //     }
        },
        mutations:{
        //     reducePrice :(state,payload)  => {
        //     state.products.forEach(product=>{
        //         product.price -= payload;
        //     })
                items:()=>{

                }
            
        // }
     },
     actions:{
        // reducePrice:(context,payload)=>{
        //     setTimeout(function(){
        //         context.commit('reducePrice',payload)
        //     },2000)
       
        // }
     }
        
})