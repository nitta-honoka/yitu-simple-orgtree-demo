
export const rootGroup = {
  name: "总部门",
  user: [{
    name: "Prometheus",
    sex: "male"
  }, {
    name: "Athena",
    sex: "female"
  }],
  group: [{
    name: "子部门A",
    user: [{
      name: "Dijkstra",
      sex: "male"
    }, {
      name: "Linus",
      sex: "male"
    }],
    group: [{
      name: '孙子部门A',
      user: [{
        name: "one",
        sex: "female"
      }, {
        name: "for",
        sex: "male"
      }, {
        name: "all",
        sex: "male"
      }]
    }]
  }, {
    name: "子部门B",
    user: [{
      name: '老王',
      sex: 'male'
    }, {
      name: '小明',
      sex: 'male'
    }, {
      name: '冬梅',
      sex: 'female'
    }],
    group: []
  }]
}
