import { Transaction } from '../models/transaction.model';
export declare const useTransactions: () => {
    data: import('@tanstack/react-query').InfiniteData<{
        inProgressCount: number;
        total: number;
        transactions: Transaction[];
    }, unknown> | undefined;
    transactions: Transaction[];
    isLoading: boolean;
    isFetchingNextPage: boolean;
    isFetching: boolean;
    isError: boolean;
    fetchNextPage: (options?: import('@tanstack/react-query').FetchNextPageOptions) => Promise<import('@tanstack/react-query').InfiniteQueryObserverResult<import('@tanstack/react-query').InfiniteData<{
        inProgressCount: number;
        total: number;
        transactions: Transaction[];
    }, unknown>, Error>>;
    total: number;
    inProgressCount: number;
};
