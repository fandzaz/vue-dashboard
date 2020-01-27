<template>
<div>
    <Content :title="'About'" :overlap="true" :background="'#536DFE'">

        <template v-slot:content>
            <div class="w-100">
                <div class="bg-white shadow p-3">
                    xxxxx
                </div>
            </div>

        </template>
    </Content>
</div>
</template>

<script>
import Content from '@/components/widget/Content';
export default {
    components: {
        Content
    }
}
</script>
