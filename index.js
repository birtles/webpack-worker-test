const worker = new Worker(new URL('./worker', import.meta.url), { name: 'worker' });
