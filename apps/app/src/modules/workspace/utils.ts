export function concatAudioUrlsToASignleAudioUrl(audioUrls: string[]) {
  const baseUrl = '/api/concat';
  const response = fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ audioUrls }),
  });

  return response;
}
