# Blocker · Acrylic visual reference

Windows x64 · 04 October 2026 · source bd39159.

The user-supplied render guides the acrylic material appearance. All tile forms, dimensions, colliders, snapping and physical parameters are preserved.

- Clearer central faces and finer internal reinforcement, with saturated blue, red, amber, green and turquoise colours.
- Angle-dependent absorption gives moulded frames deeper coloured sides. This is an optical-depth approximation, not ray-traced refraction.
- Higher dielectric polish and softened frame normals catch narrow glancing highlights. Normal shading does not change geometry. The existing Imagegen scratch normal is reused at lower strength; sunlight rim emission remains restrained.
- Existing muted coloured floor transmission and the complete 3D part wheel remain.

Qualification: 6 targeted material/wheel PlayMode regressions passed, Windows build passed, standalone workshop shader/physics run passed with exit 0, near material capture inspected. Previous full 103 EditMode / 72 PlayMode qualification remains recorded; it was not repeated for this material-only pass. The arranged material capture is not proof of tower stability.

Known issue: the previously reported interactive Windows closing crash remains unresolved. Automated exit 0 does not establish a fix.

File: **Blocker-Windows-x64-2026-10-04-bd39159.zip** · **195,957,842 bytes**.

SHA-256: `82185570b0ff424e6344c9485c7a40a0c3b96a7202ac7aa26cec0a1e051b1cb2`

The existing Mac preview and metadata remain unchanged; no Mac rebuild.
