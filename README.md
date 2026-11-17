# TailorCore

**نسخه آزمایشی:** فقط از اطلاعات فرضی استفاده کنید. اطلاعات روی دستگاه بدون رمزگذاری ذخیره می‌شود؛ هنوز برای مشتری واقعی امن نیست. خروجی فعلی خلاصه اندازه‌هاست، نه الگوی برش.

## دانلود اندروید

[دانلود APK آزمایشی](https://github.com/EXDDRT/Tfest/releases/download/tailorcore-preview/tailorcore-debug.apk) · [وضعیت ساخت و فایل‌های هر اجرا](https://github.com/EXDDRT/Tfest/actions/workflows/ci.yml)

این پیوند پس از نخستین ساخت موفق و انتشار نسخه آزمایشی فعال می‌شود. فایل با امضای آزمایشی ساخته می‌شود و برای استفاده واقعی یا انتشار نهایی مناسب نیست. اگر انتشار انجام نشد، صفحه وضعیت ساخت را بررسی کنید؛ دریافت فایل هر اجرا ممکن است به ورود به گیت‌هاب نیاز داشته باشد.

## Run locally

Requires Docker and Docker Compose. From the repository root:

```sh
docker compose up --build
```

Open http://localhost:8000. Customer examples are in `sample_data/fictional_customers.json`. Data is stored in the current browser, not on the backend; deleting browser data removes it. The project has no production security and should not be exposed publicly.

For development without Docker:

```sh
python3 -m venv .venv && . .venv/bin/activate
pip install -e 'backend[dev]'
uvicorn tailorcore.main:app --app-dir backend --reload
# In a second terminal:
cd frontend && npm ci && npm run dev
```

The frontend development server serves the demo independently. Python 3.12 is the CI and container target. To run checks:

```sh
pytest backend/tests
ruff check backend
mypy --strict backend/tailorcore backend/tests
cd frontend && npm ci && npm run lint && npm test && npm run build
```

Android CI runs `npm run android:sync` then `./gradlew assembleDebug`, uploads the result as a workflow artifact, and attempts to publish a prerelease on pushes to the designated working branch. Building locally requires Android SDK, Java 17, and Gradle network access. The README is visible on the default repository page only after this branch is merged into the default branch.

See `PLAN.md`, `TODO.md`, `FORMULAS.md`, `MATH.md`, `ACCURACY_REPORT.md` and `docs/decisions/` for scope, decisions, limitations and evidence. No drafting method has yet been approved or verified.
