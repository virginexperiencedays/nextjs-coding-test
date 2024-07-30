import { NextApiRequest, NextApiResponse } from "next";

/** ************************************************************
 * THIS FILE IS FOR FUNCTIONALITY DEMONSTRATION PURPOSES ONLY
 * NO NEED TO ASSESS THIS FILE OR ITS CONTENTS
 * ********************************************************** */

/**
 * Short helper function to easily adapt Express middleware into an awaitable
 * function.
 *
 * {@see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors}
 */
export const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: Function) =>
  new Promise((resolve, reject) =>
    fn(req, res, (result: any) => (result instanceof Error ? reject(result) : resolve(result)))
  );
