# Mind Garden design audit and approval gate

Date: 17 November 2026 (Singapore). Baseline: v5.0.21, c31de965996b30f4cfa677c7c886b0b77b6872a9.

Status: PRD 1.1 APPROVED BASELINE. User approved implementation after two preview corrections. The book is an approved visual specification, not screenshots of implemented fixes. The user subsequently authorized audit, correction, commit and deployment as v6.0.0; see APPROVAL-RECORD.md and ../release-v6.0.0/.

Read `PRODUCT-DESIGN-REQUIREMENTS.md` and `AUDIT.md` before any future implementation in this project, including new conversations. PRD 1.1 and APPROVAL-RECORD.md are authoritative. Historical contradictory UI instructions are archived. Never describe a proposed design or a passing DOM test as a rendered production fix.

The app-wide catalogue contains 56 entries. The scope register includes all of them. This is an app-wide requirements/source audit with selected live observations, not a completed visual certification of every game state and device. Confirmed clipping or overlap is a release blocker. Record untested device/state combinations explicitly; do not claim complete visual certification.

Reference selection: preserve v5.0.20's shared solo utilities, visible completion actions, explanatory hints and large artwork; retain v5.0.21's group readiness, named arrivals and server countdown. Do not roll back the entire app or database.

Deliverables: `Mind-Garden-Design-Audit-and-Previews.pdf`, `AUDIT.md`, `PRODUCT-DESIGN-REQUIREMENTS.md`. The PDF contains proposed screens and the coverage register. Implementation approval is recorded in APPROVAL-RECORD.md; deployment approval is separate.
