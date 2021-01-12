<template>
  <div class="detail-wrapper">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll-content">
      <div>
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo"></detail-goods-info>

        <detail-param-info
          ref="param"
          :param-info="paramInfo"
        ></detail-param-info>

        <detail-comment-info
          ref="comment"
          :comment-info="commentInfo"
        ></detail-comment-info>

        <detail-recommend-info
          ref="recommend"
          :recommend-list="recommendList"
        ></detail-recommend-info>
      </div>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "views/detail/childcomponents/DetailNavBar";
import DetailSwiper from "views/detail/childcomponents/DetailSwiper";
import DetailBaseInfo from "views/detail/childcomponents/DetailBaseInfo";
import DetailShopInfo from "views/detail/childcomponents/DetailShopInfo";
import DetailGoodsInfo from "views/detail/childcomponents/DetailGoodsInfo";
import DetailParamInfo from "views/detail/childcomponents/DetailParamInfo";
import DetailCommentInfo from "views/detail/childcomponents/DetailCommentInfo";
import DetailRecommendInfo from "views/detail/childcomponents/DetailRecommendInfo";
import Scroll from "components/common/scroll/Scroll";
import { getDetailInfo, getRecommend } from "network/detail";
import { Goods, Shop, GoodsParam } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll,
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
    this._getRecommend();
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
        // 2.6.保存参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 2.7.保存评论信息
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res, error) => {
        if (error) return;
        this.recommendList = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
.detail-wrapper {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow-y: hidden;
}
</style>
