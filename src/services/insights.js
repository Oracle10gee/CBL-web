import { seedInsights } from '../content/insights.seed';
import { supabase } from '../lib/supabase';

const COLUMNS = 'slug, title, category, excerpt, body, cover_url, published_at';

const fromRow = (row) => ({
  slug: row.slug,
  title: row.title,
  category: row.category,
  excerpt: row.excerpt,
  // Stored as plain text; blank lines separate paragraphs.
  body: (row.body || '').split(/\n\s*\n/).filter(Boolean),
  cover: row.cover_url || null,
  publishedAt: row.published_at,
});

export async function listInsights() {
  if (!supabase) return seedInsights;
  const { data, error } = await supabase
    .from('insights')
    .select(COLUMNS)
    .eq('published', true)
    .order('published_at', { ascending: false });
  if (error) throw error;
  return data.map(fromRow);
}

export async function getInsight(slug) {
  if (!supabase) return seedInsights.find((item) => item.slug === slug) || null;
  const { data, error } = await supabase
    .from('insights')
    .select(COLUMNS)
    .eq('published', true)
    .eq('slug', slug)
    .maybeSingle();
  if (error) throw error;
  return data ? fromRow(data) : null;
}
