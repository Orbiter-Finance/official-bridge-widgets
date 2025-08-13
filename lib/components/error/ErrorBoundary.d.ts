import { default as React } from 'react';
interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}
interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ComponentType<{
        error: Error;
        resetError: () => void;
    }>;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    resetError: () => void;
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export default ErrorBoundary;
