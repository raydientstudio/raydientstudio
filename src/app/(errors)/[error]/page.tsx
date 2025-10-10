/*
import { ComponentType } from "react"
import Unauthorized from "../unauthorized"
import Forbidden from "../forbidden"
import ServiceUnavailable from "../service-unavailable"
import RequestTimeout from "../request-timeout"
import { notFound } from "next/navigation"

type ErrorPageProps = {
    params: { error: string }
}

const errorComponents: Record<string, ComponentType> = {
    unauthorized: Unauthorized,
    forbidden: Forbidden,
    requestTimeout: RequestTimeout,
    serviceUnavailable: ServiceUnavailable,
}

export default function ErrorPage({ params }: ErrorPageProps) {
    const { error } = params;
    const ErrorComponent = errorComponents[error];
    if (!ErrorComponent) {
        return notFound();
    }
    return <ErrorComponent />;
}

export async function generateStaticParams() {
    return [
        { error: "unauthorized" },
        { error: "forbidden" },
        { error: "requestTimeout" },
        { error: "serviceUnavailable" },
    ];
} */

export default function ErrorPage() {
    return <div>Error Page</div>;
}