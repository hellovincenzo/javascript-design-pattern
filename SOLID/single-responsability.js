const fs = require('fs');

// A class should have a single responsability
// and separation of concerns is key here.

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        const c = ++Journal.count;
        const entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }
}
Journal.count = 0;

class PersistenceManager {
    saveToFile(journal, filename) {
        fs.writeFileSync(`./${filename}.json`, JSON.stringify(journal));
    }
}

const j = new Journal();
const p = new PersistenceManager();
