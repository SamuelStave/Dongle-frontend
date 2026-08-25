/**
 * Application-wide constants
 * Centralizes magic numbers scattered throughout the codebase for
 * easy discovery, documentation, and maintenance.
 */

/** Timeouts (in milliseconds) */

/** Transaction submission timeout for Soroban operations (30 seconds) */
export const TRANSACTION_TIMEOUT_MS = 30_000;

/** Polling interval when waiting for transaction confirmation (2 seconds) */
export const TX_POLL_INTERVAL_MS = 2_000;

/** Maximum time to wait for a transaction to confirm (60 seconds) */
export const TX_POLL_TIMEOUT_MS = 60_000;

/** Wallet state polling interval to detect account/network changes (2 seconds) */
export const WALLET_POLL_INTERVAL_MS = 2_000;

/** Connectivity check timeout for online status detection (5 seconds) */
export const CONNECTIVITY_CHECK_TIMEOUT_MS = 5_000;

/** Redirect delay after successful form submission (1.5 seconds) */
export const POST_SUBMIT_REDIRECT_DELAY_MS = 1_500;

/** Recovery message display duration after coming back online (3 seconds) */
export const OFFLINE_RECOVERY_DISPLAY_MS = 3_000;

/** UI Limits */

/** Maximum number of projects visible in the pagination component */
export const PAGINATION_MAX_VISIBLE_PAGES = 5;

/** Maximum number of comparison projects that can be selected */
export const MAX_COMPARISON_SELECTIONS = 4;

/** Retry Policy */

/** Default number of retry attempts for failed operations */
export const DEFAULT_RETRY_ATTEMPTS = 3;

/** Delay between retry attempts (in milliseconds) */
export const RETRY_DELAY_MS = 1_000;