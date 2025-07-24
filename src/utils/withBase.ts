// src/utils/withBase.ts

export function withBase(path: string): string {
    const base = import.meta.env.BASE_URL || '/';
    return (base + path).replace(/\/+/g, '/');
  }
  