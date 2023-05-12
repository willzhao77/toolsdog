export const useSystemStore = defineStore('system', () => {
    // 当前可切换布局
    const currentSwitchlayout = shallowRef(null)
    // 可切换布局列表
    const switchLayoutList = shallowRef([])
  
    // 初始化可切换布局方法
    const initSwitchLayout = list => {
      if (list && list.length > 0) {
        switchLayoutList.value = [...list]
  
        if (!currentSwitchlayout.value) {
          currentSwitchlayout.value = switchLayoutList.value[0]
        }
      }
    }
  
    return {
      currentSwitchlayout,
      switchLayoutList,
      initSwitchLayout
    }
  })