# 1Bigha Homepage V4

Updates:
- Share button on every property card
- Share button on property detail pages
- Mobile Login button in header
- 10 NCR/UP demo properties
- City + property-type search/filter
- Expressway hero sections for Tronica City, Ghaziabad and Baghpat

Upload the CONTENTS of this folder to the GitHub repository root.


## Contact/Login flow
Properties are viewable without login. Seller contact actions (owner details, WhatsApp, shortlist) open a mobile-login gate. Real SMS OTP still requires an SMS provider and production auth/session setup.


## Next.js 15 fix
Dynamic property route uses Promise-based `params` with React `use(params)` so `/property/[id]` type-checks on Next.js 15.


## TypeScript narrowing fix
The property detail page stores the narrowed property object in `currentProperty` so async share handlers do not trigger `possibly undefined` errors during Vercel type-checking.


## Modal fix
The seller-contact login modal now uses inline overlay styles so it reliably renders above the property page even if stylesheet caching or CSS replacement occurs.


## Contact popup v2
The whole seller contact panel and each contact button open a centered mobile-login modal. Phone, WhatsApp, and shortlist icons are bold and clearly visible.


## Sell form update
The sell form now includes mobile number, state dropdown, and a dependent district/city dropdown. The district list updates when the state changes. Client-side required validation is included.


## V5 marketplace update
- Responsive mobile navigation/menu
- Search filters: city, property type, budget, verified
- 10 featured/sample properties on homepage
- Share button with native share/copy fallback
- Existing contact-owner mobile login gate preserved
- Existing sell form with mobile/state/district preserved
- Next.js 15 compatible dynamic property route


## UI Complete V6
Account, Admin, Tronica City Map reference, responsive navigation, search, sell, login and property contact/share UI are included. Backend/database/real OTP are intentionally not connected yet.
