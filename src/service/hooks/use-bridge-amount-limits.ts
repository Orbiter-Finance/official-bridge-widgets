import { useQuery } from '@tanstack/react-query';

import { getBridgeAmountLimits } from '../apis/bridge.api';
import { useFromChainId, useToChainId } from '../stores/bridge.store';
import { useSelectedToken } from '../stores/token.store';

export const useBridgeAmountLimits = () => {
    const fromChainId = useFromChainId();
    const toChainId = useToChainId();
    const token = useSelectedToken();

    const isReady = Boolean(token?.address && fromChainId && toChainId);

    return useQuery({
        queryKey: ['bridge-amount-limits', fromChainId, toChainId, token?.address],
        queryFn: () => {
            if (!isReady) return null;

            return getBridgeAmountLimits({
                fromChainId: fromChainId!.toString(),
                toChainId: toChainId!.toString(),
                tokenAddress: token!.address,
            });
        },
        placeholderData: (previousData) => (isReady ? previousData : null),
        enabled: isReady,
        staleTime: 1000 * 5,
        retry: 0,
    });
};
