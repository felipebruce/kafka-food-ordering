export interface FoodOrderFromEventInterface {
    orders: Array<{
      itemName: string,
      price: number,
      quantity: number
    }>
}
