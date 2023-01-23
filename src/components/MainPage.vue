<template>
<v-app id="inspire">
    <v-spacer></v-spacer>
    <v-navigation-drawer
      v-model="drawer"
      app>
      <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        
        no-action>
      <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" router to="item.route"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="child in item.items"
          :key="child.title" >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app color="dark"
  elevation="6"
  icon="$mdiVuetify">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Inventory System</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>
<script>
export default {
    data: () => ({ drawer:null,
         }),
    computed:{
    items(){
        return this.$store.state.items
    },
  }
}
</script>