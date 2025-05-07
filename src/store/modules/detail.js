import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEntireRoomListData } from "@/services/modules/entire";

export const fetchDetailInfoAction = createAsyncThunk(
  "fetchDetailInfo",
  async (id, { dispatch }) => {
    const res = await getEntireRoomListData();
    const roomList = res.data;
    const roomItem = roomList.find(item => String(item.id) === String(id));

    if (roomItem) {
      dispatch(changeDetailInfoAction(roomItem));
    } else {
      console.warn("找不到對應的房源資料");
    }
  }
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    }
  }
});


export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
// 단일 숙소 상세 정보 가져오기