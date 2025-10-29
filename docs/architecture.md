# System Architecture

## Overview
DevOps Simulator follows a microservices architecture designed for high availability and scalability.

This document covers both **Production** and **Development** architectures.

## Components

### 1. Application Server
**Production**
- **Technology**: Node.js + Express  
- **Port**: 8080  
- **Scaling**: Horizontal auto-scaling enabled  

**Development**
- **Technology**: Node.js + Express (with hot reload)  
- **Port**: 3000 (development)  
- **Scaling**: Manual (single instance for development)  
- **Debug**: Chrome DevTools debugger on port 9229  

### 2. Database Layer
**Production**
- **Database**: PostgreSQL 14  
- **Configuration**: Master-slave replication  
- **Backup**: Daily automated backups  

**Development**
- **Database**: PostgreSQL 14 (local instance)  
- **Configuration**: Single instance (no replication)  
- **Backup**: Manual backups only  
- **Seeding**: Auto-seed with test data on startup  

### 3. Monitoring System
**Production**
- **Tool**: Prometheus + Grafana  
- **Metrics**: CPU, Memory, Disk, Network  
- **Alerts**: Email notifications for critical issues  

**Development**
- **Tool**: Basic console logging + optional Prometheus  
- **Metrics**: CPU, Memory, Disk, Network, Build time  
- **Alerts**: Console warnings  
- **Dashboard**: In-development web dashboard  

### 4. Container Orchestration (Development Only)
- **Tool**: Docker Compose (local)
- **Services**: App, Database, Redis cache
- **Volume Mounts**: Code directory for hot reload

### 5. Authentication System (Beta - Development)
- **Method**: OAuth2 + JWT
- **Providers**: Google, GitHub
- **Sessions**: Redis-based session storage

## Deployment Strategy
**Production**
- **Method**: Rolling updates  
- **Zero-downtime**: Yes  
- **Rollback**: Automated on failure  

**Development**
- **Method**: Docker Compose hot reload  
- **Zero-downtime**: Not applicable  
- **Rollback**: Git checkout previous commit  

## Development Workflow
1. Make code changes  
2. Auto-reload triggers rebuild  
3. Run unit tests  
4. Check console logs  
5. Commit when ready  

## Security
**Production**
- SSL/TLS encryption  
- Database connection encryption  
- Regular security audits  

**Development**
- SSL/TLS disabled for local use  
- Database credentials in plain text (dev only)  
- CORS enabled for all origins  
- Debug endpoints exposed  

## Experimental Features (Development)
⚠️ **Warning:** The following features are experimental:
- Multi-cloud deployment  
- AI-powered log analysis  
- Automatic rollback on anomaly detection  
