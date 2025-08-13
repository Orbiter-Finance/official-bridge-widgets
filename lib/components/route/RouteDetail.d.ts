import { RouteProvider } from '../../common/consts/route-provider';
import { RouteQuoteDto } from '../../service/models/route.model';
export declare const RouteDetail: ({ provider, quote, allowDetailClicks, onRoutesClick }: {
    provider: RouteProvider;
    quote: RouteQuoteDto;
    allowDetailClicks?: boolean;
    onRoutesClick?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
