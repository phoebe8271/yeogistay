import hyRequest from "@/services/index";


export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/good-prices/full"
  }).then(res => {
    console.log("getHomeGoodPriceData 回傳結果：", res)
    return res
  })
}

export function getHotPlaceData() {
  return hyRequest.get({
    url: "/hotplaces"
  }).then(res => {
    console.log("getHotPlaceData 回傳結果：", res)
    return res
  })
}

export function getFindMoreRoomsData() {
  return hyRequest.get({
    url: "/find-more-rooms?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getFindMoreRoomsData 回傳結果：", res)
    return res
  })
}

export function getHighScoreData() {
  return hyRequest.get({
    url: "/highscores?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getHighScoreData 回傳結果：", res)
    return res
  })
}

export function getDiscoverCityData() {
  return hyRequest.get({
    url: "/discover-cities?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getDiscoverCityData 回傳結果：", res)
    return res
  })
}
