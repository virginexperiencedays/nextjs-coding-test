import { CATEGORIES, PRODUCTS } from "./products";

/** ************************************************************
 * THIS FILE IS FOR FUNCTIONALITY DEMONSTRATION PURPOSES ONLY
 * NO NEED TO ASSESS THIS FILE OR ITS CONTENTS
 * ********************************************************** */

async function mimicNetworkDelay(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

class DbConnection {
  async request(sql: string, ...parameters: Array<string | number>) {
    await mimicNetworkDelay();

    // NOTE: PURPOSE-BUILT FOR INTENDED ANSWERS
    const id = parameters?.length ? parameters[0] : sql.split(' ').pop();
    const category = CATEGORIES.find((c) => c.productIds.includes(Number(id)));

    if (!category) return null;
    return category;
  }

  close(): void {}
}

type ConnectOpts = {
  host: string;
  user: string;
  password: string;
  port?: number;
};

export async function connect(opts: ConnectOpts) {
  return new DbConnection();
}
