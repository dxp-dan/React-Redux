let FilterTypes={
  ALL: '全部',
  COMPLETED: '已完成',
  UNCOMPLETED: '未完成'
}

export default (state = FilterTypes.ALL, action) => {
  switch(action.type) {
    case 'FILTER/SET': {
      return action.filter;
    }
    default:
      return state;
  }
}
