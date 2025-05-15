<script setup>
import Changelog from '/src/components/Changelog.vue'
</script>

::: info 说明
此处仅展示 Git 仓库的最近 100 条提交记录，更多信息请前往 [GitHub 仓库](https://github.com/travellings-link/travellings) 查看。
:::

<Changelog>
<template #date>
时间
</template>
<template #message>
更新内容
</template>
<template #author>
提交者
</template>
<template #loading>
正在从 GitHub 获取数据...
</template>
<template #more>
前往 GitHub 查看更多
</template>
</Changelog>