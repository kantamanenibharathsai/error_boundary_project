import { Component, ReactNode } from "react";
import errorBoundaryStyles from "./ErrorBoundary.Styles"


interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    ErrorPage: ReactNode;
    children: ReactNode;
}

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error: ErrorBoundaryState) {
        console.log(error);
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error);
        console.log("Catched error", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.ErrorPage;
        }

        return this.props.children;
    }
}