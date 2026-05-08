import { withBase } from 'rspress/runtime';

type SearchHit = { link?: string };

type SearchResultGroup = { result?: SearchHit[] };

/**
 * Rspress 默认主题的本地搜索里，建议项 link 未经过 withBase，
 * 在 GitHub Pages 子路径部署（BASE_URL=/mdocs-site/）时会跳到站点根路径。
 */
export async function afterSearch(_query: string, searchResult: SearchResultGroup[]) {
  for (const group of searchResult) {
    if (!Array.isArray(group.result)) continue;
    for (const item of group.result) {
      const { link } = item;
      if (typeof link !== 'string' || link.length === 0) continue;
      if (/^https?:\/\//i.test(link) || link.startsWith('//')) continue;
      item.link = withBase(link);
    }
  }
}
