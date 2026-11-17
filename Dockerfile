FROM node:22-alpine AS frontend
WORKDIR /src
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim
WORKDIR /app
COPY backend/ ./backend/
RUN pip install --no-cache-dir ./backend
COPY --from=frontend /src/dist ./backend/tailorcore/static
WORKDIR /app/backend
EXPOSE 8000
CMD ["uvicorn", "tailorcore.main:app", "--host", "0.0.0.0", "--port", "8000"]
