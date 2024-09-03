/**
 * Mimic network delay for demonstration purposes only
 */
export async function mimicNetworkDelay(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}
