import { getConfig } from '@/config/index'
import IconMaterialSymbolsWbSunnyRounded from '~icons/material-symbols/wb-sunny-rounded'
import IconMaterialSymbolsDarkModeRounded from '~icons/material-symbols/dark-mode-rounded'
import IconMaterialSymbolsComputer from '~icons/material-symbols/computer'

export const useSystemStore = defineStore(
    'system',
    () => {
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
        }else {
            // 通过name属性找到布局对象并赋值，因为持久化数据中没有组件渲染的render函数
            currentSwitchlayout.value = switchLayoutList.value.find(
              item => item.name === currentSwitchlayout.value.name
            )
          }
      }
    }

    // 模式列表
    const modeList = ref([
        {
        name: 'auto',
        icon: markRaw(IconMaterialSymbolsComputer),
        title: '自动模式'
        },
        {
        name: 'light',
        icon: markRaw(IconMaterialSymbolsWbSunnyRounded),
        title: '亮色模式'
        },
        {
        name: 'dark',
        icon: markRaw(IconMaterialSymbolsDarkModeRounded),
        title: '暗色模式'
        }
    ])

    // 当前模式
    const currentMode = ref(null)

    const mode = useColorMode({
        attribute: 'arco-theme',
        emitAuto: true,
        selector: 'body',
        initialValue: currentMode.value?.name,
        storageKey: null
      })
      watchEffect(() => (mode.value = currentMode.value?.name))

    // 初始化模式
    const initMode = () => {
        if (!currentMode.value) {
        currentMode.value = modeList.value[0]
        } else {
        currentMode.value = modeList.value.find(
            item => item.name === currentMode.value.name
        )
        }
    }

    return {
      currentMode,
      modeList,
      initMode,

      currentSwitchlayout,
      switchLayoutList,
      initSwitchLayout
    }
  },
  // 新增第三个参数
  /*
    key 属性用来配置持久化时缓存数据的 key，默认是模块名。
    enabled 属性代表是否开启持久化。
    storage 属性可以配置如何进行持久化存储，可以写成 sessionStorage，默认是使用 localStorage ，所以这里我们其实不写也可以。
    paths 属性即配置模块中需要做持久化的状态列表，不写就是默认缓存该模块中的全部状态。
    serializer 此对象可以自定义序列化方法，默认使用 JSON.stringify/JSON.parse 做序列化
  */
  {
    persist: {
      key: `${getConfig('appCode')}-pinia-system`,
      enabled: true,
      storage: window.localStorage,
      paths: ['currentSwitchlayout.name', 'currentMode.name']
    }
  }
)