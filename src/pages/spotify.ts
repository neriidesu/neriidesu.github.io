import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://open.spotify.com/artist/2nXNopOG7bZVy0mObAxs0x', 301);
}