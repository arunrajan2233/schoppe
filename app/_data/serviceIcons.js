import { Sparkles, Droplets, Trees, Building2, Wrench } from 'lucide-react';

// Keeps icon *components* out of the shared data objects so service data can
// safely cross the Server -> Client Component boundary as plain props.
// Each consumer resolves its own icon locally via this map.
export const SERVICE_ICONS = {
  Sparkles,
  Droplets,
  Trees,
  Building2,
  Wrench,
};
