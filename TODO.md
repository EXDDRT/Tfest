# Incomplete work

- Phase 0 is an explicitly local-only demonstration. It does not create orders or generate garment patterns. The output is a printable measurement summary.
- IndexedDB demo data is unencrypted, device-local and has no synchronization, backup, restore, export/delete, history or multi-tenant protection. Do not enter real customer data.
- No authentication, encryption at rest, access controls, rate limiting, audit, automatic backup or production deployment exists.
- No service worker or PWA install manifest yet; the Android shell contains the bundled UI, but browser offline availability after a cold start is not implemented.
- Backend is a connectivity skeleton, not a persistence/sync API; PostgreSQL and Alembic are not configured.
- Android APK is debug-signed and for testing only. Release signing and distribution hardening are not implemented. Verify workflow success and actual installation before claiming Android support.
- Measurement schema has only two fields, basic input checks and no anthropometric, relational or temporal validation. More than 1000 or nonpositive values are rejected for safe numeric entry, not as anthropometric bounds.
- No drafting strategy/formulas, geometry, seam solver, allowance, notches, grading, exports, benchmark, reference data, sensitivity analysis or accuracy measurement.
- No order/ledger, messaging, fitting corrections, fabric/cost estimation, Bluetooth implementation, or PWA sync.
- Customer and garment sources and approved method must be confirmed by user and a human patternmaker before drafting implementation.
- Docker Compose could not be executed in the current sandbox (Docker unavailable). Android APK installation, runtime and updates have not been tested on a device. CI-generated debug signing keys may vary between runs; a later APK may require uninstalling the earlier build, which deletes local demo data.
- Initial GitHub Actions run 44026059217 failed at Android SDK setup; run 44026325679 succeeded after switching to the hosted Android SDK. The release download redirect is not accessible from this sandbox, so actual byte download and installation remain unverified here.
