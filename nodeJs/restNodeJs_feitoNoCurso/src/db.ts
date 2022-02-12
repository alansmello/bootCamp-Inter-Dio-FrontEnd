import { Pool } from 'pg';

const connectionString = 'xxxxxxx';

const db = new Pool({connectionString});

export default db;
