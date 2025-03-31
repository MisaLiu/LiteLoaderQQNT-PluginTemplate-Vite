/// <reference types="vite/client" />

import type { IPCExports } from '../preload';

type $LiteLoaderAPI = {
  openPath: (path: string) => Promise<void>,
  openExternal: (url: string) => Promise<void>,
  config: $LiteLoaderAPIConfig,
  plugin: $LiteLoaderAPIPlugin,
}

type $LiteLoaderAPIConfig = {
  set: <Config = unknown>(slug: string, new_config: Config) => Promise<boolean>,
  get: <Config = unknown>(slug: string, default_config?: Config) => Promise<Config>,
}

type $LiteLoaderAPIPlugin = {
  install: (path: string, undone?: boolean) => Promise<boolean>,
  delete: (slug: string, delete_data?: boolean, undone?: boolean) => Promise<void>,
  disable: (slug: string, undone?: boolean) => Promise<void>,
}

declare interface $LiteLoader extends LiteLoader {
  api: $LiteLoaderAPI;
}

declare global {
  const LiteLoader: $LiteLoader;
  const LLTemplate_Vite: typeof IPCExports;
}
