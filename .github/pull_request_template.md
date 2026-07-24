## Scope

- [ ] I described the user-visible change and the routes affected.
- [ ] I checked that new copy does not introduce unsupported guarantees or metrics.
- [ ] I tested the production build.

## Protected 3D render

- [ ] `npm run check:3d` passes.
- [ ] This change does not modify `Top.jsx`, `Model.jsx`, `CyberEarth.jsx`, or `cyber_djinn.glb`.
- [ ] If a protected file must change, the 3D owner has explicitly approved the diff.

## Launch gates

- [ ] Draft prices were validated before being represented as binding offers.
- [ ] Legal copy was reviewed if this changes data, payment, recovery, refund, or AI behavior.
- [ ] Payment and form endpoints were tested if enabled.

