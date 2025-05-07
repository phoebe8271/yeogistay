import hyRequest from "@/services/index";

// 전체 숙소 목록 데이터 가져오기 (페이지네이션 포함)
export function getEntireRoomListData(page = 1, pageSize = 12) {
    return hyRequest.get({
      url: "/roominfos",
      params: {
        populate: "*",
        "pagination[page]": page,
        "pagination[pageSize]": pageSize
      }
    }).then(res => {
      console.log("getEntireRoomListData 回傳結果：", res)
      return res
    })
  }