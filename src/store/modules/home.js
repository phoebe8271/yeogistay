// RTK
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services/index";
import { getHotPlaceData } from "@/services/modules/home";
import { getFindMoreRoomsData } from "@/services/modules/home";
import { getHighScoreData } from "@/services/modules/home";
import { getDiscoverCityData } from "@/services/modules/home";



export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res[0])) //array 一個陣列（Array），陣列裡面每一筆才是你要顯示的資料物件
  })
  getHotPlaceData().then(res => {
    dispatch(changeHotPlaceInfoAction(res.data[0]))
  })
  getFindMoreRoomsData().then(res => {
    dispatch(changegetFindMoreRoomsInfoAction(res.data[0]))
  })
  getHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res.data[0]))
  })
  getDiscoverCityData().then(res => {
    dispatch(changeDiscoverCityInfoAction(res.data[0]))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    hotPlaceInfo: {},
    findMoreRoomsInfo: {},
    discoverCityInfo:{}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHotPlaceInfoAction(state, { payload }) {
      state.hotPlaceInfo = payload;
    },
    changegetFindMoreRoomsInfoAction(state, { payload }) {
      state.findMoreRoomsInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscoverCityInfoAction(state, { payload }) {
      state.discoverCityInfo = payload;
    }

  },
  extraReducers: () => {
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   state.goodPriceInfo = payload[0];
    // });
  }
});

export const {
  changeGoodPriceInfoAction,
  changeHotPlaceInfoAction,
  changegetFindMoreRoomsInfoAction,
  changeHighScoreInfoAction,
  changeDiscoverCityInfoAction
} = homeSlice.actions

export default homeSlice.reducer;
// 백엔드에서 홈 데이터 요청 후 각 블록 state 갱신
