export const auditPages = [
  { label: 'home', path: '/' },
  { label: 'timeline', path: '/timeline/' },
  { label: 'policies', path: '/policies/' },
  { label: 'international-engagements', path: '/international-engagements/' },
  { label: 'philanthropy', path: '/philanthropy/' },
];

export function toAbsoluteUrl(baseUrl, routePath) {
  const normalizedPath = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return new URL(normalizedPath, baseUrl).toString();
}
