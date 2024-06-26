export function calculatePromotionPrice(itemPrice, itemPercentage){
    let newPrice = itemPrice - (itemPrice * itemPercentage / 100 )
    return newPrice
}