# Blocker · Magnetic polish

Windows x64 · 04 October 2026 · source 2459a71.

- Magnetic rims and physical collision shells are now 15 mm thick at a 15 cm square edge. Top-face connection pivots support upright and gently tilted tiles. Flat floor tiles extend along all four edges.
- Damped, finite magnetic holding torque supports a square wall and a triangle after a small disturbance. Heavy unsupported arms still fold/fall; joints can break. Holding state survives Continue. This approximates magnets rather than simulating individual poles.
- Acrylic PBR preserves glossy highlights on transparent faces. A subtle scratch normal was created with Imagegen. Sunlight rim glow and coloured floor transmission are restrained.
- The wheel is now a complete pie with fixed dividers and actual cached 3D part previews. No rotated scaled IMGUI matrices. Existing LT/right-stick/release and V/middle-mouse controls remain; the full action inventory is included in CONTROL-ACTIONS.md.

Validation: 103 EditMode and 72 PlayMode cases passed. See VALIDATION.json for standalone and native wheel evidence. Initial checks caught an invalid texture import shape and a fine-fold floor intersection; both were fixed before qualification.

Known issue: the previously reported interactive Windows closing crash remains unresolved. A clean automated player exit does not establish that it is fixed.

File: **Blocker-Windows-x64-2026-10-04-2459a71.zip** · **195,956,828 bytes**.

SHA-256: `2fde09469c762617c637339e3a728418e0fc4a4620dc7694227912c741592d14`

The existing Mac preview and metadata remain unchanged; no Mac rebuild.
