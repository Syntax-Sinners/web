PhysioEZ Desktop Application

PhysioEZ is a modern, comprehensive clinic management system designed to streamline healthcare facility operations. This repository hosts the Desktop Application version of the platform, providing a secure, high-performance native experience for clinic staff.

Built on a robust stack of Tauri, React, and Node.js, PhysioEZ Desktop combines the flexibility of web technologies with the power of native system integration.
🚀 Technology Stack
Core Frameworks

    Desktop Shell: Tauri v2 (Rust) - Ultra-lightweight, secure desktop bundler.
    Frontend: React 19 + Vite - High-performance UI rendering.
    Backend: Node.js + Express - Scalable REST API.
    Database: MySQL - Relational data persistence.

Frontend Libraries

    Styling: TailwindCSS v4 - Utility-first CSS framework.
    State Management: Zustand - Minimalist global state.
    Routing: React Router v7 - Client-side routing.
    Icons: Lucide React - Beautiful, consistent icons.
    Animations: Framer Motion - Smooth UI interactions.
    HTTP Client: Axios - API communication.

Backend Libraries

    Database Driver: mysql2 - High-performance MySQL client.
    Security: cors, helmet (implied best practice), express-rate-limit.
    Logging: morgan - HTTP request logger.
    Auth: JWT-based stateless authentication.

📂 Project Structure

The project is organized into three main distinct parts:

/srv/http/admin/desktop/
frontend/             # The User Interface (React + Vite)
│   ├── src/
│   │   ├── admin/       # Admin module
│   │   ├── doctor/      # Doctor module
│   │   ├── reception/   # Reception module
│   │   ├── jr_doctor/   # Junior Doctor module
│   │   ├── test_assistants/ # Test Assistants module
│   │   └── index.html   # Landing page
│   ├── public/          # Static assets
│   ├── tauri.conf.json  # Tauri configuration
│   └── vite.config.js   # Vite configuration
├── login                # Authentication entry point
│
├── common/              # System-wide logic
│   ├── auth             # Authentication, session, role validation, IP checks
│   ├── config           # Encrypted system keys and config constants
│   ├── db               # PDO connection handler
│   ├── helpers          # Utility functions (placeholder for shared logic)
│   ├── logger           # Database-based event logging system
│   └── utils            # Date/time formatting and shared utilities
│
├── admin/               # Admin module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── doctor/              # Doctor module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── reception/           # Reception module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── jr_doctor/
├── test_assistants/
│   ... (same module structure)
│
├── api/                 # Global shared API endpoints (optional, used for multi-role operations)
│   ├── patient/
│   ├── appointments/
│   └── billing/
│
└── uploads/             # Persistent media storage
|   ├── patient_photos/
|   ├── chat_uploads/
|   ├── expenses/
|   ├── employee_photo/
|   └── logos/
│
├── src-tauri/            # Native Desktop Configuration (Rust)
│   ├── src/              # Rust source code for system hooks
│   ├── tauri.conf.json   # Tauri configuration (Permissions, Window settings)
│   └── capabilities/     # Security scopes and plugin configs

🌟 Key Modules
1. Reception Module

Focused on day-to-day clinic operations:

    Patient Management: Registration, search, and profile management.
    Appointment Scheduling: Booking, rescheduling, and calendar views.
    Billing: Invoicing, payment tracking, and digital receipts.

2. Admin Module

Focused on clinic oversight and configuration:

    Dashboard: Real-time statistics on revenue, footfall, and treatments.
    Staff Management: Role-based access control and employee directories.
    Report Generation: Detailed financial and operational reports.

3. Native Integration

By using Tauri, the application can:

    Access the Camera: Directly capture profile photos and medical documents.
    File System: Save reports and logs securely to the local disk.
    Notifications: Send native OS notifications for urgent alerts.

🛠️ Development Setup

For a step-by-step guide on setting up the developer environment, please refer to instructions.md.
Quick Summary

    Database: Start your local MySQL server and ensure the prospine database exists.
    Server:

    cd server
    npm install
    npm run dev

    Frontend/Desktop:

    # From the root directory
    npm install
    npm run tauri dev

🔒 Security & Architecture

    Data Privacy: Patient data is handled with strict confidentiality. Sensitive fields are encrypted at rest where applicable.
    API Security: All API endpoints (except login) require a strict Bearer Token authenticated via server/src/middleware/auth.js.
    Rate Limiting: The server implements global and strict rate limiting to prevent abuse.
    Isolation: The Admin and Reception modules are logically separated to prevent privilege escalation.












This is from the legacy codebase, which used PHP instead of Node.js, use this for more info regarding the project as both of them are same only the backend language is different.


PhysioEZ

PhysioEZ is a comprehensive clinic management system designed to streamline operations within healthcare facilities. It provides a centralized platform for managing patient records, appointments, employee workflows, and medical data. The system ensures secure and efficient handling of patient information, from appointment scheduling to treatment tracking, billing, and reporting.

With role-based access, PhysioEZ separates the functionalities for various personnel (admin, doctors, reception, and assistants), ensuring each user has access only to the information relevant to their role. The system is built to scale, offering secure data handling, encrypted communication, and audit-grade logging for compliance and transparency.
admin - Core System Repository

is the core operational layer of the PhysioEZ platform. It provides the authentication system, shared utilities, database handlers, module isolation, logging, and all role-based interfaces required by the application.

This repository contains the complete runtime environment for every employee role in the system.
1. System Purpose

PhysioEZ centralizes:

    Role-based access and routing
    Module separation (admin, doctor, reception, etc.)
    Database interactions via PDO
    Client-side encrypted data handling
    System-wide logging
    Shared configuration and utilities
    Upload management

This codebase is the OS layer. Every interface and workflow of the application is built on top of this structure.
2. Architecture Overview

PhysioEZ uses a modular PHP structure:

    Each role has an isolated module directory
    Each module contains its own views, JS, CSS, and role-specific APIs
    Shared logic lives inside the common/ directory
    A global /api/ directory is available for shared business operations
    Sensitive patient data is encrypted/decrypted client-side
    All events are logged in the database in JSON format

The system runs in XAMPP under htdocs/.
3. Directory Structure

admin/
│
├── index.html           # Landing page
├── login.php            # Authentication entry point
│
├── common/              # System-wide logic (must be loaded first in every PHP module file)
│   ├── auth.php         # Authentication, session, role validation, IP checks
│   ├── config.php       # Encrypted system keys and config constants
│   ├── db.php           # PDO connection handler
│   ├── helpers.php      # Utility functions (placeholder for shared logic)
│   ├── logger.php       # Database-based event logging system
│   └── utils.php        # Date/time formatting and shared utilities
│
├── admin/               # Admin module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── doctor/              # Doctor module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── reception/           # Reception module
│   ├── api/
│   ├── css/
│   ├── js/
│   └── views/
│
├── jr_doctor/
├── test_assistants/
│   ... (same module structure)
│
├── api/                 # Global shared API endpoints (optional, used for multi-role operations)
│   ├── patient/
│   ├── appointments/
│   └── billing/
│
└── uploads/             # Persistent media storage
    ├── patient_photos/
    ├── chat_uploads/
    ├── expenses/
    ├── employee_photo/
    └── logos/

4. Request Flow

    User visits:

    /admin/index.html

    Redirects to:

    /admin/login.php

    Credentials are validated by common/auth.php:
        Session is created
        Role is verified
        IP/network validated
        Encryption keys loaded

    User is redirected to their role module:

    /admin/<role>/

    Every module entry file must include common/auth.php first. Unauthorized requests are redirected to the login page.

5. Module Rules

Each module:

    Must operate independently
    Must keep its own UI, JS, CSS, and role-specific APIs
    Must not access another module’s internal code
    May use shared logic only through common/ or the global /api/ folder
    Must include common/auth.php at the top of every PHP file handling restricted content

This prevents cross-module contamination and keeps role boundaries clear.
6. Global API Usage

A global /api/ directory is available for operations used by multiple roles. Example candidates:

    Patient create/update
    Shared appointment operations
    Shared billing operations
    File uploads
    Common data fetch endpoints

Use the global API only when:

    Multiple modules depend on the same functionality
    Duplication needs to be avoided
    Data consistency across roles is required

Module-specific actions should remain inside their own /api/ folder.
7. Database Layer

    PDO-based connection
    Prepared statements only
    Exceptions enabled for DB errors
    Connection parameters stored in common/config.php
    Sensitive patient data is encrypted/decrypted client-side
    Migration scripts or SQL dumps are included in the repository

Database schema name must be updated to match the OS naming convention.
8. Logging System

All system logs are stored in the database. Each log stores:

    employee_id
    affected module
    action type
    target table
    full JSON payload describing the event
    timestamp
    IP and device information

Logging occurs through common/logger.php. Every significant user action must be logged.
9. Uploads

The /uploads/ directory holds compressed images and documents:

    Patient images
    Chat attachments
    Expense files
    Employee photos
    System logos

Files should not be deleted due to medical data retention requirements.

Recommended future improvement: Segment uploads by year/month for scalability:

uploads/patient_photos/2025/11/

