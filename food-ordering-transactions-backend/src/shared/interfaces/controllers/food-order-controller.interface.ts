export interface FoodOrderControllerInterface {
    createFoodOrderHandler(message?: string): Promise<void>;
}
