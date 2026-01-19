# TODO: Fix Hero and CTA Section Centering

## Status: In Progress

### Task: Fix hero section and cta section to be centered like other sections

**Changes needed:**
- [x] Update HeroSection.tsx to use `container mx-auto` instead of `container`
- [x] Update CTASection.tsx to use `container mx-auto` instead of `container`
- [x] Test the changes by running development server

### Files to Edit:
- `components/hero-section.tsx`
- `components/cta-section.tsx`

### Implementation Details:
- Add `mx-auto` class to container in both components
- This will match the pattern used by FeaturedCollections and TrustSection
- Content inside sections is already properly centered with `mx-auto max-w-4xl`

### Followup Steps:
- [ ] Run development server
- [ ] Verify layout consistency across all sections
