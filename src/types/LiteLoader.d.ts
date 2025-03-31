
type LiteLoaderPath = {
  root: string,
  profile: string,
  data: string,
  plugins: string,
}

type LiteLoaderVersion = {
  qqnt: string,
  liteloader: string,
  node: string,
  chrome: string,
  electron: string,
}

type LiteLoaderOS = {
  platform: 'win32' | 'linux' | 'darwin',
}

type LiteLoaderPackage = {
  liteloader: unknown,
  qqnt: unknown,
}

type LiteLoaderPlugin = {
  manifest: unknown,
  incompatible: boolean,
  disabled: boolean,
  path: LiteLoaderPluginPath
}

type LiteLoaderPluginPath = {
  plugin: string,
  data: string,
  injects: LiteLoaderPluginPathInject
}

type LiteLoaderPluginPathInject = {
  main: string,
  renderer: string,
  preload: string,
}

type LiteLoaderAPI = {
  openPath: (path: string) => void,
  openExternal: (url: string) => void,
  config: LiteLoaderAPIConfig,
  plugin: LiteLoaderAPIPlugin,
}

type LiteLoaderAPIConfig = {
  set: <Config = unknown>(slug: string, new_config: Config) => boolean,
  get: <Config = unknown>(slug: string, default_config?: Config) => Config,
}

type LiteLoaderAPIPlugin = {
  install: (path: string, undone?: boolean) => boolean,
  delete: (slug: string, delete_data?: boolean, undone?: boolean) => void,
  disable: (slug: string, undone?: boolean) => void,
}

interface LiteLoader {
  path: LiteLoaderPath;
  versions: LiteLoaderVersion;
  os: LiteLoaderOS;
  package: LiteLoaderPackage;
  plugins: Record<string, LiteLoaderPlugin>;
  api: LiteLoaderAPI;
}
