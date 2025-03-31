import { contextBridge, ipcRenderer } from 'electron';

const IPCExports = {
  greeting: (name: string) => {
    ipcRenderer.send('LLTemplate-Vite.Greeting', name);
  }
};

contextBridge.exposeInMainWorld('LLTemplate_Vite', IPCExports);

export type { IPCExports };
