export function calculatePromotionPrice(itemPrice, itemPercentage){
    let newPrice = itemPrice - (itemPrice * itemPercentage / 100 )
    console.log(newPrice)
    return newPrice
}