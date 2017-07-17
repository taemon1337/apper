<template>
  <div class="container">
    <div class="modal" ref="newAppletModal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create Applet</p>
          <button @click="toggleModal" class="delete"></button>
        </header>
        <section class="modal-card-body">
          <edit-applet-form></edit-applet-form>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Save changes</a>
          <a @click.prevent="toggleModal" class="button">Cancel</a>
        </footer>
      </div>
    </div>
    <nav class="navbar is-transparent">
      <p class='field'>
        <a class='button' @click='toggleModal'>
          <span class='icon'>
            <i class='fa fa-plus'></i>
          </span>
          New Applet
        </a>
      </p>
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <table class="table is-striped">
      <thead>
        <tr>
          <th><abbr title="Position">#</abbr></th>
          <th>Name</th>
          <th>Title</th>
          <th>Version</th>
          <th>Route</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, index) in records' key='index'>
          <td :text='index'></td>
          <td :text='item.name'></td>
          <td :text='item.title'></td>
          <td :text='item.version'></td>
          <td :text='item.route'></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import EditAppletForm from '@/components/EditAppletForm'

  export default {
    name: 'ManagePage',
    data () {
      return {
        records: []
      }
    },
    methods: {
      toggleModal () {
        this.$refs.newAppletModal.className = this.$refs.newAppletModal.className === 'modal' ? 'modal is-active' : 'modal'
      }
    },
    components: {
      EditAppletForm
    }
  }
</script>
