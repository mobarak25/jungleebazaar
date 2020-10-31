<template>
    <header v-if="deskHeader">
        <div class="top-header-wrapper">
            <div class="container">
                <div class="top-header d-flex flex-wrap">
                    <div
                        class="top-header-left d-flex flex-wrap align-items-center justify-content-between"
                    >
                        <router-link :to="{ name: 'Home' }"
                            ><img :src="`${$root.publicPath}images/logo.png`"
                        /></router-link>
                        <div class="select-box-wrapper">
                            <div class="select-box">
                                <i class="icofont-rounded-down"></i>
                                <select>
                                    <option>Location</option>
                                    <option>Hiroshima</option>
                                    <option>Fukui</option>
                                    <option>Nagasaki</option>
                                    <option>Kagawa</option>
                                    <option>Kyoto</option>
                                    <option>Nagano</option>
                                    <option>Shiga</option>
                                    <option>Wasada</option>
                                </select>
                            </div>
                        </div>
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
                                    <div class="count">15</div>
                                </div>
                                <span>Watchlist</span>
                            </a>
                        </div>

                        <div class="top-header-widgets">
                            <a href="">
                                <div class="header-widgets-icon">
                                    <i class="icofont-shopping-cart"></i>
                                    <div class="count">5</div>
                                </div>
                                <span>Watchlist</span>
                            </a>
                        </div>

                        <div class="top-header-widgets position-relative pr-0">
                            <a
                                href="#"
                                class=""
                                id="dropdownMenu2"
                                data-toggle="dropdown"
                                data-display="static"
                            >
                                <div class="header-widgets-icon">
                                    <i class="icofont-ui-user"></i>
                                    <i
                                        class="icofont-simple-down down-arrow"
                                    ></i>
                                </div>
                                <span>Hey Sign In</span>
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

        <div class="btm-header-wrapper">
            <div class="container">
                <div
                    class="btm-header d-flex flex-wrap justify-content-between"
                >
                    <nav
                        class="main-menu d-flex flex-wrap justify-content-center align-items-center"
                    >
                        <ul>
                            <li
                                v-for="nav in navs"
                                :key="nav.id"
                                :class="{
                                    'has-child js-has-child': nav.hasChild,
                                }"
                            >
                                <a href="#">
                                    {{ nav.name }}
                                    <i
                                        v-if="nav.hasChild"
                                        class="icofont-rounded-down"
                                    ></i>
                                </a>
                                <ul v-if="nav.hasChild">
                                    <li
                                        v-for="child in nav.childs"
                                        :key="child.id"
                                    >
                                        <a href>{{ child.name }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a class="more-menu" href="#">More..</a>
                    </nav>

                    <a class="post-add" href="#"
                        ><i class="icofont-plus"></i> Post Your Ad</a
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "SiteHeader",

    data() {
        return {
            deskHeader: true,

            navs: [
                { id: 1, name: "Drop shipping", hasChild: false },
                { id: 2, name: "Bulk selling", hasChild: false },
                { id: 3, name: "Warehouse Products", hasChild: false },
                {
                    id: 4,
                    name: "Warehouse Closeouts",
                    hasChild: true,
                    childs: [
                        { id: 1, name: "X Monica" },
                        { id: 2, name: "X Monalisa" },
                        { id: 3, name: "X Alexander" },
                        { id: 4, name: "X Monica" },
                        { id: 5, name: "X Monalisa" },
                        { id: 6, name: "X Alexander" },
                    ],
                },
                { id: 5, name: "Overstock Surplus", hasChild: false },
                { id: 6, name: "Wholesale Stock", hasChild: false },
                { id: 7, name: "Manufacturer Stock", hasChild: false },
            ],
        };
    },
    methods: {
        getWidth() {
            var $ = window.$;
            $(window).resize(function () {
                var width = $(document).width();
                if (width < 992) {
                    console.log("dfdf");
                    console.log(this.deskHeader);
                }
            });
        },
    },

    computed: {},

    mounted() {
        this.getWidth();
    },
};
</script>

<style lang="scss">
</style>

