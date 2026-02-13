Github URL: [Folio Github Repository URL](https://github.com/HassanIrfan527/inventory-management)
Role: Admin, Solo
# Folio

Modern invoicing and client management for freelancers and small teams.

Folio is an all-in-one business operating system that helps you manage clients, track projects, generate professional invoices, and gain insights into your business—all from a clean, intuitive interface.

## Features

### Invoicing
- Generate professional PDF invoices with your company branding
- Track payment status (Unpaid, Partially Paid, Paid, Refunded, Overdue)
- Support for both customer and supplier invoices
- Auto-generated invoice numbers (INV-XXXXX format)
- Customizable terms and conditions
- Due date tracking with overdue alerts

### Client Management (CRM)
- Comprehensive contact database for customers, suppliers, and leads
- Activity tracking and timeline for each contact
- Engagement scoring to identify your best clients
- Custom fields for flexible data capture
- Tagging system for easy organization
- Track preferred contact methods and last interaction dates

### Order Management
- Create and track orders with detailed line items
- Payment method and status tracking
- Shipping and delivery tracking with timestamps
- Price snapshots preserve historical pricing data
- Link orders directly to contacts and auto-generate invoices
- Support for discounts, taxes, and delivery charges

### Dashboard & Analytics
- Real-time business metrics at a glance
- Revenue tracking and trends
- Order and inventory statistics
- Pending payments overview
- AI-powered insights (coming soon)

### Product/Service Catalog
- Track products, services, or project packages
- Organize with categories and tags
- Multi-image support for products
- Optional stock management (leave empty for services)
- Multiple view modes: Grid, List, Kanban, Compact
- SKU and custom product ID support

### Security
- Two-factor authentication (2FA)
- Email verification
- Secure password management
- Session management

### API
- RESTful JSON API (v1)
- Full CRUD operations for products, contacts, orders, and invoices
- Token-based authentication
- Pagination and filtering support

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Laravel 12, PHP 8.2+ |
| **Frontend** | Livewire 4, Flux UI, Tailwind CSS 4 |
| **Database** | MySQL 8.0+ |
| **PDF Generation** | Laravel DomPDF |
| **Authentication** | Laravel Fortify |
| **Build Tool** | Vite 7 |
| **Testing** | Pest 4 |


Built with Laravel and Livewire
