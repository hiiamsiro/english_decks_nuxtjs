<template>
  <div>
    <v-modal name="CreateCardModal">
      <div class="modal_body">
        <h2>Create a new deck</h2>
        <form action="">
          <div class="form_group">
            <label for="">Name:</label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter deck name"
            />
          </div>
          <div class="form_group">
            <label for="">Description:</label>
            <textarea
              class="form_control"
              placeholder="Please enter description"
            />
          </div>
          <div class="form_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group flex justify-end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml-3" @click.prevent="createDeck">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
