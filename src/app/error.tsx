"use client"
import { ErrorContainer } from "./components/errorContainer";

export default function ErrorBoundary({ error }: { error: { message: string } }) {
    const tryAgain = () => { window.location.reload() };
    return <ErrorContainer error={error.message} onClick={tryAgain}/>
}