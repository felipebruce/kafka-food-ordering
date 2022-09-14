export interface UseCaseInterface<In, Out> {
    execute(data: In): Promise<Out>
}
