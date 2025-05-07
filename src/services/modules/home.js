import hyRequest from "@/services/index";

// 특가 데이터 
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/good-prices/full"
  }).then(res => {
    console.log("getHomeGoodPriceData:", res)
    return res
  })
}

// 인기 장소 데이터
export function getHotPlaceData() {
  return hyRequest.get({
    url: "/hotplaces"
  }).then(res => {
    console.log("getHotPlaceData:", res)
    return res
  })
}

// 더 많은 객실 데이터 
export function getFindMoreRoomsData() {
  return hyRequest.get({
    url: "/find-more-rooms?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getFindMoreRoomsData:", res)
    return res
  })
}

// 평점 높은 숙소 데이터
export function getHighScoreData() {
  return hyRequest.get({
    url: "/highscores?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getHighScoreData:", res)
    return res
  })
}

// 도시 탐색 데이터
export function getDiscoverCityData() {
  return hyRequest.get({
    url: "/discover-cities?populate[list_item][populate]=*"
  }).then(res => {
    console.log("getDiscoverCityData:", res)
    return res
  })
}
