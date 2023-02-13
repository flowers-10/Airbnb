import Request from "..";

export function getHomeGoodPriceData() {
    return Request.get({
        url:"/home/goodprice"
    })
}