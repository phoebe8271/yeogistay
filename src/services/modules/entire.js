import hyRequest from "@/services/index";

// export function getEntireRoomListData(offset = 0, size = 48) {
//     return hyRequest.get({
//         url: "/roominfos?populate=*",
//         params:{
//             offset,
//             size
//         }
//     }).then(res => {
//         console.log("getEntireRoomListData 回傳結果：", res)
//         return res
//     })
// }

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