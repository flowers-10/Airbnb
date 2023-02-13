import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpns/home-banner";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])
  const { goodPriceInfo } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo
    }
  }, shallowEqual)
  return (
    <HomeWrapper>
      
      <HomeBanner ></HomeBanner>
      
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle}></SectionHeader>
          <ul className="room-list">
            {
              goodPriceInfo?.list?.slice(0,8).map(item => {
                return (
                  <RoomItem itemData={item} key={item.id} itemWidth={"25px"}></RoomItem>
                )
              })
            }
          </ul>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
