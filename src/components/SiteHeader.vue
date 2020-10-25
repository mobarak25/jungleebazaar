<template>
    <header>
        <div class="container">
            <div class="top-header d-flex flex-wrap">
                <div class="top-header-left">
                    <router-link :to="{ name: 'Home' }"
                        ><img :src="`${$root.publicPath}images/logo.png`"
                    /></router-link>
                </div>

                <div class="top-header-mid">
                    <form>
                        <div class="site-search position-relative">
                            <input
                                class="site-search-field"
                                type="text"
                                placeholder="What are you looking for"
                            />
                            <button class="site-search-btn" type="sebmit">
                                <i class="icofont-search"></i> Search
                            </button>
                        </div>
                    </form>
                </div>

                <div class="top-header-right">jksdf</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "SiteHeader",
};
</script>

<style lang="scss">
</style>

