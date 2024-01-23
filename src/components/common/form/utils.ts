export function prepareUrlKey(value: string): string {
  return value.replaceAll(' ', '_');
}
