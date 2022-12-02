<template>
  <div>
    <SideBar />
    <div class="container">
      <br>
      <div class="form-inline" action="#">
      <input type="text" id="form-name" v-model="item.name" placeholder="First Name" class="form-control">
      <input type="text" v-model="item.lastname" placeholder="Last Name" class="form-control">
      <button @click="addItem" class="btn btn-dark"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="item in items" :key="item.name">
          <td>
            <input v-if="item.edit" type="text" v-model="item.name">
            <span v-else>{{item.name}} </span>
          </td>
          <td>
            <input v-if="item.edit" type="text" v-model="item.lastname">
            <span v-else>{{item.lastname}} </span>
          </td>
          <td><button @click="ItemEdit(item)" class="btn btn-info"><i class="far fa-edit">edit</i></button>
            <button @click="removeItem(item.id)" class="btn btn-danger"><i class="far fa-trash-alt">delete</i></button></td>
        </tr>
      </table>
  </div>
  </div>
    
  </template>
  
  <script scope>
  let url = "http://localhost:3001/user";
    export default {
      data() {
      return {
        item: {name: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        await this.$axios.$post(url + '/create', {name: this.item.name, lastname: this.item.lastname})
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
        this.item = [];
      },
      async removeItem(id){
        await this.$axios.$post(url + '/delete', {id: id})
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async GetAllData(){
        this.items = await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
        console.log(this.items);
      })
      .catch((err) => console.log(err));
      this.items = this.tempData;
      },
      async ItemEdit(item) //For Updating
      {
        if(!item.edit)
        {
          item.edit = !item.edit
        }
        else
        {
          item.edit = !item.edit
          await this.$axios.$post(url + '/update', {id: item.id, name: item.name, lastname: item.lastname})
          .then((res) => {
            console.log(res);
            this.GetAllData();
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
