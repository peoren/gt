<template>
    <div class="invoive">
        <div class="way">
            发票信息
        </div>
        <div class="select">
            <ul>
                <li>
                    <input type="radio" id="invoive_false">
                    <label for="invoive_false">不需要发票</label>
                </li>
                <li>
                    <input type="radio" id="invoive_ture">
                    <label for="invoive_true">需要发票</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:payway,
}
</script>
<style scoped>
    .way{
        color: #a0a0a0;
        font-size: 12px;
        padding: 15px 0 15px 23px;
        border-top:1px solid #a0a0a0;
        border-bottom:1px solid #a0a0a0;
    }
    .select{
        color: #464646;
        font-size: 12px;
        padding: 20px 0 0 23px;
    }
</style>

