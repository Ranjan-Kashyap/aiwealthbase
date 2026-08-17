/**
 * Analytics stub — logs events to the console until a real tracker
 * (GTM, Plausible, etc.) is connected.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  console.log("[analytics]", eventName, params ?? {});
}
