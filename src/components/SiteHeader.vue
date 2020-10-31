<template>
    <header>
        <div class="top-header-wrapper">
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

                    <div
                        class="top-header-right d-flex flex-wrap justify-content-end"
                    >
                        <div class="top-header-widgets">
                            <a href="">
                                <div class="header-widgets-icon">
                                    <i class="icofont-heart-alt"></i>
                                </div>
                                <span>Watchlist</span>
                            </a>
                        </div>
                        <div class="top-header-widgets">
                            <a href="">
                                <div class="header-widgets-icon d-flex">
                                    <i class="icofont-shopping-cart"></i>
                                </div>
                                <span>Watchlist</span>
                            </a>
                        </div>
                        <div class="top-header-widgets position-relative">
                            <a
                                class=""
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                data-display="static"
                            >
                                <div class="header-widgets-icon">
                                    <i class="icofont-ui-user"></i>
                                </div>
                                <span>Watchlist</span>
                            </a>
                            <div
                                class="dropdown-menu dropdown-menu-right animate"
                                aria-labelledby="dropdownMenu2"
                            >
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#"
                                    >Something else here</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "SiteHeader",
    methods: {},
};
</script>

<style lang="scss">
</style>

