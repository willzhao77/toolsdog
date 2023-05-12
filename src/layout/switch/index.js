// 遍历 modules 将每个组件都 push 到了 switchLayoutList 布局数组列表中并导出，留待后用
const modules = import.meta.glob('./*.vue', { eager: true })

let switchLayoutList = []
for (const path in modules) {
  switchLayoutList.push(modules[path].default)
}

export default switchLayoutList