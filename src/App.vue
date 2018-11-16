<template>
  <div id="app">
    <aside>
      <tree-view :data="data" :selected="selectedDept"/>
    </aside>
    <aside>
      <section>
        <label>搜索成员：</label>
        <input type="text" v-model="q" @input="onSearch" />
      </section>
      <ul v-if="selectedUser.length">
        <li class="item" v-for="( user, i ) in selectedUser"
          :key="i">
          <span>姓名：{{ user.name }}</span>
          <span>性别：{{ user.sex === 'male' ? '男' : '女' }}</span>
        </li>
      </ul>
      <div v-else>该部门下暂无小伙伴呦</div>
    </aside>
  </div>
</template>

<script>
import TreeView from './components/tree-view'
import { rootGroup } from './mock'
import { simpleDebounce } from './utils/debounce'

export default {
  name: 'app',
  components: {
    TreeView
  },
  data() {
    return {
      data: rootGroup,
      users: rootGroup.user || [],
      selectedUser: rootGroup.user || [],
      selectedDept: rootGroup.name,
      q: ''
    }
  },
  methods: {
    onSearch: simpleDebounce(function () {
      this.selectedUser = this.users.filter(user => user.name.includes(this.q))
    }, 200)
  },
  created() {
    this.$bus.$on('onTreeChange', data => {
      this.q = ''
      this.users = data.user || []
      this.selectedUser = data.user || []
      this.selectedDept = data.name
    })
  },
  beforeDestroy() {
    this.$bus.$off('onTreeChange')
    simpleDebounce.cancel()
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  min-height: 100vh;
  background: #e4e4e4;
  padding: 10px;

  > aside:first-child {
    flex-basis: 30%;
    border-right: 1px solid #bfbaba;
    padding-right: 20px;
  }
  > aside:last-child {
    flex-basis: 70%;
    padding-left: 30px;

    .item {
      > span:first-child {
        display: inline-block;
        width: 150px;
      }
    }
  }
}
</style>
