<template>
  <div class="tree-view">
    <div @click="onTreeChange" :class="{ selected: selected === data.name }">
      {{ data.name }}
      <span v-if="hasChild">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open">
      <tree-view
        v-for="(d, i) in data.group"
        :key="i"
        :data="d"
        :selected="selected"
      ></tree-view>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tree-view",
    props: {
      data: Object,
      selected: String
    },
    data() {
      return {
        open: false
      }
    },
    computed: {
      hasChild: function () {
        return Array.isArray(this.data.group) && !!this.data.group.length
      },
    },
    methods: {
      onTreeChange: function () {
        if (this.hasChild) {
          this.open = !this.open
        }
        this.$bus.$emit('onTreeChange', this.data)
      }
    }
  }
</script>

<style scoped>
  .tree-view > div {
    padding: 2px 8px;
  }
  .selected {
    border-radius: 5px;
    background: #03a9f45c;
  }
</style>
