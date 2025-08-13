interface ErrorDisplayProps {
    error: Error;
    title?: string;
    message?: string;
    showDetails?: boolean;
    onReset?: () => void;
    showHomeButton?: boolean;
    variant?: 'light' | 'dark';
}
export default function ErrorDisplay({ error, title, message, showDetails, onReset, showHomeButton }: ErrorDisplayProps): import("react/jsx-runtime").JSX.Element;
export {};
