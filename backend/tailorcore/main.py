"""Serve the local demonstration UI and a database connectivity check."""
from pathlib import Path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from sqlalchemy import create_engine, text
from sqlalchemy.pool import StaticPool

app = FastAPI(title="TailorCore local demonstration")
# This isolated connectivity check stores no customer data.
engine = create_engine("sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool)


@app.get("/api/health")
def health() -> dict[str, str]:
    """Report whether the demonstration database can execute a query."""
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return {"status": "ok"}


static_dir = Path(__file__).resolve().parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")
