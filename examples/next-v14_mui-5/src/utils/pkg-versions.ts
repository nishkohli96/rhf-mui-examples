import pkgJson from '@/../package.json';

export function getPkgVersion(pkgName: string): string {
  const dependencies = pkgJson.dependencies as Record<string, string>;
  const version = dependencies[pkgName];
  if (!version) {
    return 'Package not installed in dependencies';
  }
  return version.replace(/^[~^]/, '');
}
