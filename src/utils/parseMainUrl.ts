/**
 * Parse the domain name from a URL
 */
export function parseMainUrl(url: string | null): string | null {
  if (!url) {
    return null
  }
  const parsedUrl = new URL(url);
  return parsedUrl.hostname || null;
}