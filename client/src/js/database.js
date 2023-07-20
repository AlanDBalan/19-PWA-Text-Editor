import { openDB } from 'idb';

const initdb = async () => {
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

const putDb = async (content,) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.put({content});
};
  
  // When the editor is ready, set the value to whatever is stored in indexeddb.
  // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
  const getDb = async () => {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    await store.getAll(); // Add the 'return' statement here to return the data
  };

  initdb();

export { putDb, getDb, initdb };