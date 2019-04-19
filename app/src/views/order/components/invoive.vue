<template>
    <div class="invoive">
        <div class="way">
            发票信息
        </div>
        <div class="select">
            <ul>
                <li>
                    <input type="radio" name="invoive" checked>
                    <label for="invoive_false">不需要发票</label>
                </li>
                <li>
                    <input type="radio" name ="invoive">
                    <label for="invoive_true">需要发票</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'invoive',
}
</script>
<style scoped>
    .invoive{
        margin-top: 25px;
    }
    .way{
        text-align: left;
        color: #a0a0a0;
        font-size: 12px;
        padding: 15px 0 15px 23px;
        border-top:1px solid #a0a0a0;
        border-bottom:1px solid #a0a0a0;
    }
    .select{
        text-align: left;
        color: #464646;
        font-size: 12px;
        padding: 20px 0 0 23px;
    }
    .select li{
        padding: 10px 0;
    }
</style>

