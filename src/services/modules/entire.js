import hyRequest from "@/services/index";

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