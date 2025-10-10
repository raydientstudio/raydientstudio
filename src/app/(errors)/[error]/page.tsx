export default function ErrorPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Error</h1>
      <p className="text-lg text-gray-600">
        An unexpected error has occurred. Please try again later.
      </p>
    </div>
  );
}