import { images } from './content/images';
import { collaborations, nav, pendingPages } from './content/site';

const designedRoutes = ['/about', '/partnerships', '/our-people', '/insights'];

test('every navigation link points at a route the app serves', () => {
  const served = new Set([...designedRoutes, ...pendingPages.map((page) => page.path)]);
  const links = nav.flatMap((item) => item.children || [item]);
  links.forEach((link) => expect(served.has(link.to)).toBe(true));
});

test('every collaboration has an image slot in the manifest', () => {
  collaborations.forEach((item) => expect(images[item.slot]).toBeDefined());
});
