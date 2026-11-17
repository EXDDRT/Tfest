# TailorCore project memory

## Summary
TailorCore is a deterministic, explainable tailoring system for Persian-speaking workshops. The production roadmap includes measurement validation, sourced pattern drafting, orders, accounting and offline operation. Never present a prototype as a verified tailoring pattern.

## Non-negotiable principles
- Do not claim unmeasured accuracy; link every accuracy claim to a test or benchmark.
- Do not invent drafting formulas. Register formulas, sources, derivations and verification status in FORMULAS.md; request a source and human approval when missing.
- Never weaken or delete failing tests merely to pass.
- Explicitly identify incomplete functionality and record it in TODO.md.
- Prefer simple, maintainable solutions; document architectural decisions in docs/decisions/ADR-xxx.md.
- Developer material and code are English; customer-facing UI and guidance are simple Persian.
- All money is integer rials, and the eventual financial ledger must be append-only.

## Commands
Commands will be updated alongside implementation. Planned: `docker compose up --build` for local execution; `pytest`, `ruff check .`, `mypy --strict` and frontend checks in CI.

## Structure
- `PLAN.md`: phased plan and offline conflict policy.
- `FORMULAS.md`, `MATH.md`, `ACCURACY_REPORT.md`: formula provenance, derivations and measured results.
- `docs/decisions/`: architectural decision records.
- `TODO.md`: explicitly incomplete work.

## Phase status
Planning / phase 0 starting. No pattern drafting method or human reference has been approved. Security and offline support are not yet implemented. Do not use with real customer data until safeguards are in place.

## Phase 0 implementation checkpoint
- Local demonstration implemented: React/Vite UI, Persian digit input and date display, IndexedDB customer save/list, print-friendly measurement summary; fictional data only. No garment patterns or customer security.
- FastAPI/SQLAlchemy SQLite connectivity skeleton and Docker Compose static serving; no backend persistence or synchronization. Android Capacitor project and CI debug APK workflow added.
- Checks: `python -m pytest backend/tests`; `ruff check backend`; `mypy --strict backend/tailorcore backend/tests`; `cd frontend && npm run lint && npm test && npm run build`. Python 3.12 is the CI/container target; local environment tested with 3.11.
- `frontend/`: UI, tests, Android wrapper. `backend/`: FastAPI service and tests. `sample_data/`: fictional measurements. `.github/workflows/`: checks and Android build.
- Remaining phase 0 validation: Docker startup and Android CI build/publication must be observed; this environment initially has no Docker, Java or Android SDK. See TODO.md for all incomplete capabilities and risks. Phase 1 has not started.
