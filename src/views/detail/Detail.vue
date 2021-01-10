<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcomponents/DetailNavBar";
import DetailSwiper from "views/detail/childcomponents/DetailSwiper";
import DetailBaseInfo from "views/detail/childcomponents/DetailBaseInfo";
import { getDetailInfo } from "network/detail";
import { Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: [],
    };
  },
  created() {
    this._getDetailDatas();
  },
  methods: {
    _getDetailDatas() {
      this.iid = this.$route.query.iid;

      // 请求获取详情信息
      getDetailInfo(this.iid).then((res) => {
        // console.log(res.result);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 2.3.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 2.4.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 2.5.获取商品信息
        this.detailInfo = data.detailInfo;
      });
    },
  },
};
</script>

<style scoped></style>
