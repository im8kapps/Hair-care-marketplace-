# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a hair care marketplace e-commerce platform designed to be deployed on Netlify. The project aims to create a comprehensive online storefront for hair care products with advanced filtering, product discovery, and conversion optimization.

## Key Requirements

### Target Platform
- Must be optimized for Netlify hosting
- Consider using static site generation or JAMstack architecture for optimal Netlify performance

### Core User Flows

1. **Homepage (Storefront)**: Main entry with hero section, featured categories, product showcases, and trust signals
2. **Product Discovery**: Advanced filtering by hair type, concerns, ingredients, price, brand, and ratings
3. **Product Detail Pages**: Comprehensive product information with high-quality images, reviews, and related products
4. **Cart & Checkout**: Streamlined conversion flow with guest checkout, multiple payment methods, and shipping options
5. **Account Management**: Order history, wishlist, profile management, and optional subscription management

### Critical Features

**Search & Filtering**
- Filter by hair type (Curly, Wavy, Straight, Coily)
- Filter by concern (Dryness, Frizz, Color Protection)
- Filter by ingredient preferences (Sulfate-Free, Vegan)
- Price range, brand, and rating filters
- Smart search with "did you mean" suggestions

**Product Pages**
- High-quality, zoomable product images (multiple angles, texture shots, lifestyle photos)
- Size/volume selectors with quantity controls
- Customer reviews with filtering by attributes (e.g., "Dry Hair," "Sensitive Scalp")
- Related/complementary product recommendations
- "Subscribe & Save" option support

**Checkout Experience**
- Guest checkout option
- Address auto-fill/validation
- Multiple payment methods (Credit Card, Apple Pay, Google Pay, PayPal)
- Promo code and gift card support
- Shipping cost estimator

**Trust & Conversion**
- Free shipping thresholds
- 30-day guarantee messaging
- Ethically sourced ingredients callouts
- Security badges for payment providers
- Customer testimonials and social proof

## Architecture Considerations

When implementing this project, consider:

1. **Data Structure**: Products need attributes for hair type, concerns, ingredients, pricing, variants (sizes), and ratings
2. **Image Optimization**: Critical for performance on Netlify - use next-gen formats and responsive images
3. **Static Generation**: Product pages should be statically generated where possible for performance
4. **API Integration**: Account for product data source (headless CMS, e-commerce API like Shopify/Stripe, or custom backend)
5. **State Management**: Shopping cart, wishlist, and user session need persistent state
6. **SEO**: Product pages need proper meta tags, structured data, and breadcrumb navigation

## Development Priorities

When building features, prioritize in this order:
1. Core product browsing and filtering (PLP)
2. Product detail pages with purchase controls (PDP)
3. Shopping cart and checkout flow
4. Homepage and navigation
5. Account management and post-purchase features
6. Subscriptions and advanced features

## UI/UX Requirements

- Mobile-first responsive design
- Sticky purchase controls on mobile PDP
- Quick "Add to Cart" from product cards
- Breadcrumb navigation throughout
- Persistent header with search, cart icon with count, and account access
- Clear trust signals and CTAs on all conversion pages
