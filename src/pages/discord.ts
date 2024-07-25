import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://discord.gg/363yhgqjf7', 307);
}