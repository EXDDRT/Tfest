# ADR-001: Local-only vertical demonstration

Status: accepted for phase 0 only.

The first deliverable is a React/TypeScript interface packaged as web assets and an Android Capacitor debug shell. It saves a fictional customer and two entered measurements in IndexedDB and displays/prints a summary. The FastAPI and SQLAlchemy service only checks SQLite connectivity and serves the same static interface. This creates a demonstrable customer-to-output path without inventing an unsourced pattern formula. Client persistence is a deliberate temporary deviation from server-backed persistence, not offline synchronization. It is unencrypted and must not contain real data. Security, multi-tenancy, backend persistence and the event-based synchronization policy in PLAN.md are prerequisites for production. The phase 0 output is not a garment pattern or an accuracy claim.

The Android CI builds an explicitly debug-signed APK and publishes it as a preview release only after checks succeed on the designated working branch. This is a test build, not production signing or a release process for sensitive data.
