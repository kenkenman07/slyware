import { pool } from "./db-config.js";

export const dbClient = {
  async countUp(pageName) {
    const query =
      "update page_transition_times set times = times + 1 where page_name = $1";
    await pool.query(query, [pageName]);
  },
};
