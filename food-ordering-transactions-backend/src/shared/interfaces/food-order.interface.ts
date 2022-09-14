export interface FoodOrderInterface {
  items: Array<{
    itemName: string,
    price: number,
    quantity: number
  }>,
  transactionUuid: string,
}
