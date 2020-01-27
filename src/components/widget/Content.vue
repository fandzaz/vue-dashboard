<template>
<div class="w-100">
    <div class="header-title" :style="{'background-color':background}" v-if="disableTitle" :class="overlap ? 'overlap title':''">
        <div class="container-fluid">
            <div class="sb-page-header-content py-5">
                <h1 class="sb-page-header-title">
                    <div class="sb-page-header-icon"></div>
                    <span  :style="{'color':textColor}">{{title}}</span>
                </h1>
                <div  :style="{'color':textColor}">{{description}}</div>
            </div>
        </div>
    </div>
    <div class="container-fluid  in-content" :class="overlap ? 'overlap':' mt-3'">
         <slot name="content"></slot>
       
    </div>

</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Page Title'
        },
        description: {
            type: String,
            default: 'Example dashboard overview and content summary'
        },
        disableTitle: {
            type: Boolean,
            default: true,
        },
        overlap: {
            type: Boolean,
            default: true,
        },
        background: {
            type: String,
            default: '#0061f2'
        },
        textColor: {
            type: String,
            default: '#FFFFFF'
        }

    }
}
</script>

<style scoped>
.overlap {
    position: relative;
}

.overlap.title {
    padding-bottom: 50px;
}

.header-title {
    z-index: 100;
    width: 100%;

    /* background-color: #0061f2; */
    /* background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%); */
}

.in-content {
    z-index: 102;

    top: -70px;
}
</style>
