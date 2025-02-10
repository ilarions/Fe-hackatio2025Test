"use client"
import { ErrorContainer } from "../components/errorContainer";

export default function ErrorBoundary() {
    const tryAgain = () => { window.location.reload() };
    return <ErrorContainer error="This page is not found" onClick={tryAgain} />
}