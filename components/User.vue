<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-no-header style="margin-left: 2vw; margin-bottom: 2vw; margin-top: 1vw;">|||</b-button>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Dashboard</h4>
            
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">Products</b-nav-item>
                <b-nav-item href="#link-1" @click="hide">Order</b-nav-item>
                <b-nav-item @click="hide"><NuxtLink to="/User">User</NuxtLink></b-nav-item>
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
          </div>
        </template>
      </b-sidebar>
    </div>
    <div class="container" style="padding: 4rem; margin-left:250px">
      <div>
      <h3>Dashboard</h3>
      <hr>
      <h4>Add Students</h4>
      </div>
      <br>
      <div class="form-inline" action="#">
      <input id="form-name" v-model="item.name"  type="text"  placeholder="First Name" class="form-control">
      <input v-model="item.lastname" type="text" placeholder="Last Name" class="form-control">
      <button class="btn btn-dark" @click="addItem"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" v-bind:key="item.name">
          <td>
            <input v-if="item.edit" v-model="item.name" type="text">
            <span v-else>{{item.name}} </span>
          </td>
          <td>
            <input v-if="item.edit" v-model="item.lastname" type="text">
            <span v-else>{{item.lastname}} </span>
          </td>


            <td><button @click="ItemEdit(item)" class="btn btn-info"><i class="far fa-edit">edit</i></button>
            <button @click="removeItem(item)" class="btn btn-danger"><i class="far fa-trash-alt">delete</i></button></td>
        </tr>
      </table>
  </div>
  </div>

  </template>

  <script scope>
  const url = "http://localhost:3002/users";
    export default {
      data() {
      return {
        item: {id: 0, name: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        console.log(this.item.id);
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.item = {id: 0, name: "", lastname: "", edit: false};
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      console.log(this.item);
      },
      async GetAllData(){
        console.log("Get All Data");
        await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
      })
      .catch((err) => console.log(err));
      this.items = this.tempData;
      this.GetCurrentID();
      },
      async ItemEdit(item)
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          console.log(item);
          await this.$axios.$post(url + '/update', item)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        }
      }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>

<style scoped>
.form-inline input {
  margin-right:8px;
}


</style>
