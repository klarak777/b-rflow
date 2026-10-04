export type MenuItem = {
  label: string;
  href: string;
  icon: string;
  children?: { label: string; href: string }[];
};

export const MENU: MenuItem[] = [
  { label: 'Cégek', href: '/cegek', icon: 'apartment' },
  { label: 'Dolgozók', href: '/dolgozok', icon: 'groups' },
  { label: 'NAV-import', href: '/nav-import', icon: 'cloud_download' },
  { label: 'Napi tervező', href: '/napi-tervezo', icon: 'event_available' },
  { label: 'EFO napló', href: '/efo-naplo', icon: 'menu_book' },
  { label: 'Szabadságmegváltás', href: '/szabadsagmegvaltas', icon: 'beach_access' },
  { label: 'Folyamat státusz', href: '/folyamat-statusz', icon: 'account_tree' },
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'space_dashboard',
    children: [
      { label: 'Lekérdező', href: '/lekerdezo' },
      { label: 'Átadó', href: '/atado' },
      { label: 'Havi zárás', href: '/havi-zaras' },
    ],
  },
  {
    label: 'Licenc',
    href: '/licenc',
    icon: 'admin_panel_settings',
    children: [
      { label: 'Paraméterek', href: '/parameterek' },
      { label: 'Tesztjegyzőkönyv', href: '/tesztjegyzokonyv' },
    ],
  },
];

export const SLUG_TITLES: Record<string, string> = Object.fromEntries(
  MENU.flatMap((m) => [
    [m.href.slice(1), m.label],
    ...(m.children ?? []).map((c) => [c.href.slice(1), c.label]),
  ])
);
