import { Pool } from 'pg';

const connectionString = 'postgres://vmqxeevl:b9gLSiafDYMtzNZZqyHgPpZxEexlexKP@motty.db.elephantsql.com/vmqxeevl';

const db = new Pool({connectionString});

export default db;