# TailorCore implementation plan

## Assumptions requiring confirmation
- Initial market: Persian-speaking small workshops in Iran and Afghanistan; no hosting location is chosen yet.
- Initial garments: basic bodice and skirt; a dress follows. No drafting formula is approved or treated as verified.
- A domestic messaging channel or SMS must precede Telegram; provider and credentials remain undecided.
- Three human reference patterns will be supplied later. Until validated, generated geometry must not be represented as a usable tailoring pattern.
- Phase 0 is an explicitly local-only demonstration using fictional data, not a production deployment or a replacement for privacy controls.

## Offline and synchronization policy
The target design uses IndexedDB with durable client-generated event IDs, a per-device sequence and explicit server acknowledgements. Financial changes are immutable integer-rial events; corrections are compensating events, never overwrites. Simple fields use server-assigned last-write-wins based on accepted server revision, not device wall clocks; retain conflict history and notify users when competing edits overwrite. Measurement histories and orders retain versioned events. Deletions propagate as tombstones. Retries are idempotent, and tenant identity is checked for every event on the server. Generated pattern artifacts are cached with immutable input/configuration/engine versions. Implement and test this before claiming offline synchronization; prototype-local persistence is not a sync implementation.

## Phases and acceptance
0. Walking skeleton: one command runs a narrow fictional customer-to-simple-output flow, with CI and Android APK build. The output is a measurement summary, not a garment pattern. Test the flow and document its limits.
1. Foundation: versioned measurements and typed landmarks, validation reports, authentication, tenant isolation, encryption, backup/restore, customer records. Validate and test before real data use.
2. Pattern engine v1: approved, sourced bodice/skirt strategy; independent geometry core, seam solver, SVG/PDF export, reference benchmarking and golden/round-trip tests. No accuracy claims without measured evidence.
3. Orders, append-only integer-rial ledger, domestic messaging/SMS adapter and reminders.
4. Dress, sleeve, trousers, dart manipulation and grading, each gated on sourced formulas and reference validation.
5. Fabric nesting, lower-bound efficiency reporting and configurable cost breakdown.
6. Deterministic fitting correction statistics with uncertainty and sensitivity analysis.
7. Offline synchronization, cached patterns, PWA refinement, Persian user guide and security hardening.

## Cross-cutting gates
- Every formula has a source, derivation and verified/unverified state; human approval is required before verified status.
- CI runs tests, strict typing and lint; restore tests accompany the backup implementation.
- Pattern accuracy, seam residuals, export round trips and performance are reported only after measurement.
- Privacy: tenant-scoped access, encrypted sensitive data, password hashing, rate limiting, audit, export/deletion, backups; no third-party analytics.
- At the end of each phase, run the applicable tests, update CLAUDE.md, and report accomplishments, omissions and risks. Continue without waiting unless a decision or source is needed.

## Android distribution
Build the same UI as an Android APK via CI. A stable GitHub Actions workflow link belongs on the repository landing page; artifacts may expire and require GitHub login. A public permanent download requires a published release and must not be claimed until verified. Do not claim an APK was produced or a workflow succeeded without observing it.
