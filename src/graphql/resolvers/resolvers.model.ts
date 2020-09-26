export interface Resolver<Q = any, M = any> {
    queries?: Q;
    mutations?: M;
}
