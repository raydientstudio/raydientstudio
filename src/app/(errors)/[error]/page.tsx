import type { ComponentType } from 'react';
import Unauthorized from '../unauthorized';
import Forbidden from '../forbidden';
import Timeout from '../request-timeout';
import Maintenance from '../service-unavailable';
import NotFound from '../not-found';

export const metadata = {
  title: 'Error',
  description: 'Error page',
};

type ErrorPageProps = {
  params: { error: string };
};

const errorTypes: Record<string, ComponentType> = {
  '401': Unauthorized,
  '403': Forbidden,
  '404': NotFound,
  '408': Timeout,
  '500': Error,
  '503': Maintenance,
};

export default function ErrorPage({ params }: ErrorPageProps) {
  const { error } = params;
    const ErrorComponent = errorTypes[error];

    if (!ErrorComponent) {
      return NotFound();
    }

    return <ErrorComponent />;
}

export async function generateStaticParams() {
    return [
        { error: '401' },
        { error: '403' },
        { error: '404' },
        { error: '408' },
        { error: '500' },
        { error: '503' },
    ];
}