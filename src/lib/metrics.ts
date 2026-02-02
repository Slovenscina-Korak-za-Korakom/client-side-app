import {
  collectDefaultMetrics,
  Counter,
  Histogram,
  Registry,
} from "prom-client";

// Store registry in globalThis so it's shared across all module contexts
const globalForMetrics = globalThis as unknown as {
  metricsRegistry: Registry | undefined;
  metricsInitialized: boolean | undefined;
};

export const register = globalForMetrics.metricsRegistry ?? new Registry();
if (!globalForMetrics.metricsRegistry) {
  globalForMetrics.metricsRegistry = register;
  collectDefaultMetrics({ register });
}

// Helper to get existing metric or create new one
function getOrCreateCounter<T extends string>(
  name: string,
  help: string,
  labelNames: T[]
): Counter<T> {
  const existing = register.getSingleMetric(name);
  if (existing) return existing as Counter<T>;
  return new Counter<T>({ name, help, labelNames, registers: [register] });
}

function getOrCreateHistogram<T extends string>(
  name: string,
  help: string,
  labelNames: T[],
  buckets: number[]
): Histogram<T> {
  const existing = register.getSingleMetric(name);
  if (existing) return existing as Histogram<T>;
  return new Histogram<T>({
    name,
    help,
    labelNames,
    buckets,
    registers: [register],
  });
}

// function getOrCreateGauge<T extends string>(
//   name: string,
//   help: string,
//   labelNames: T[]
// ): Gauge<T> {
//   const existing = register.getSingleMetric(name);
//   if (existing) return existing as Gauge<T>;
//   return new Gauge<T>({ name, help, labelNames, registers: [register] });
// }

// =============================================================================
// BUSINESS METRICS
// =============================================================================

// Booking metrics
export const bookingsTotal = getOrCreateCounter(
  "bookings_total",
  "Total bookings",
  ["status", "type"]
);

export const bookingsRevenue = getOrCreateCounter(
  "bookings_revenue_euros",
  "Total booking revenue in euros",
  ["type"]
);

// User metrics
export const userSignups = getOrCreateCounter(
  "user_signups_total",
  "Total user signups",
  ["locale"]
);

// =============================================================================
// EXTERNAL SERVICE METRICS
// =============================================================================

// Email metrics
export const emailsSent = getOrCreateCounter(
  "email_sent_total",
  "Emails sent by template",
  ["template"]
);

export const emailDuration = getOrCreateHistogram(
  "email_send_duration_seconds",
  "Email API latency",
  ["template"],
  [0.1, 0.25, 0.5, 1, 2.5, 5]
);

export const emailErrors = getOrCreateCounter(
  "email_errors_total",
  "Failed email sends",
  ["template"]
);


// =============================================================================
// PRE-INITIALIZATION
// =============================================================================

// Pre-initialize counters so they appear in Prometheus immediately (with value 0)
// Only runs once when registry is first created
if (!globalForMetrics.metricsInitialized) {
  globalForMetrics.metricsInitialized = true;

  // Booking metrics
  bookingsTotal.labels({status: "booked", type: "language_club"}).inc(0);
  bookingsTotal.labels({status: "booked", type: "individual"}).inc(0);
  bookingsTotal.labels({status: "booked", type: "group"}).inc(0);
  bookingsTotal.labels({status: "booked", type: "regular"}).inc(0);

  bookingsTotal.labels({status: "cancelled", type: "language_club"}).inc(0);
  bookingsTotal.labels({status: "cancelled", type: "individual"}).inc(0);
  bookingsTotal.labels({status: "cancelled", type: "group"}).inc(0);
  bookingsTotal.labels({status: "cancelled", type: "regular"}).inc(0);

  // Revenue metrics
  bookingsRevenue.labels({type: "language_club"}).inc(0);
  bookingsRevenue.labels({type: "individual"}).inc(0);
  bookingsRevenue.labels({type: "group"}).inc(0);
  bookingsRevenue.labels({type: "regular"}).inc(0);

  // User signup metrics (all supported locales)
  userSignups.labels({locale: "en"}).inc(0);
  userSignups.labels({locale: "sl"}).inc(0);
  userSignups.labels({locale: "ru"}).inc(0);
  userSignups.labels({locale: "it"}).inc(0);

  // Email metrics
  emailsSent.labels({template: "welcome"}).inc(0);
  emailsSent.labels({template: "lang_club_booking_confirmation"}).inc(0);
  emailsSent.labels({template: "booking_confirmation"}).inc(0);
  emailsSent.labels({template: "cancellation_confirmation"}).inc(0);
  emailsSent.labels({template: "reschedule_confirmation"}).inc(0);

  emailErrors.labels({template: "tutor_booking_confirmation"}).inc(0);
  emailErrors.labels({template: "tutor_cancellation_confirmation"}).inc(0);

}
