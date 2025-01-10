import { queryOptions } from "@tanstack/react-query";
import { getUserInfo } from "./user";

type ErrorResponse = { code: number; error: string };
const isErrorResponse = <T>(data: T | ErrorResponse): data is ErrorResponse => {
    return (data as ErrorResponse).code !== undefined && (data as ErrorResponse).error !== undefined;
}

const QueryKeyAll = 'all';

export const QueryKey = {
    all: QueryKeyAll,
    user: () => [QueryKeyAll, 'user']
}

export const query = {
    user: () => queryOptions({
        queryKey: QueryKey.user(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        queryFn: () => getUserInfo(),
        select: (data) => {
            // transform data here
            return isErrorResponse(data) ? null : data
        },
    })
}