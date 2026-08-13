"use client";

import InternalServerError from "./(errors)/error";

type ErrorProps = {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
    return InternalServerError({ error, reset });
}

export { Error as default, type ErrorProps };