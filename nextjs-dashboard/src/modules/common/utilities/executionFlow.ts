export function pauseExecution(durationInMs: number): Promise<void> {
  return new Promise<void>((resolve) =>
    setTimeout(() => resolve(), durationInMs),
  );
}
