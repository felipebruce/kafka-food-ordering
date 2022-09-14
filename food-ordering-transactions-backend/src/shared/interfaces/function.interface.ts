export interface FunctionInterface<In, Out> {
    execute(data: In): Promise<Out>
}
