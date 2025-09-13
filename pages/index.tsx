import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface Wallpaper {
  id: number;
  title: string;
  image_url: string;
}

export default function Home() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWallpapers() {
      const { data, error } = await supabase
        .from('wallpapers')
        .select('*');
      if (!error && data) {
        setWallpapers(data);
      }
      setLoading(false);
    }
    fetchWallpapers();
  }, []);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Wallpaper Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {wallpapers.map(wallpaper => (
            <div key={wallpaper.id} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem' }}>
              <img src={wallpaper.image_url} alt={wallpaper.title} style={{ width: '100%', borderRadius: '8px' }} />
              <h2 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{wallpaper.title}</h2>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}