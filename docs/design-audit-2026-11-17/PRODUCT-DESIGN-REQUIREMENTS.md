# Mind Garden product design requirements

Revision: 1.4 APPROVED BASELINE, 18 November 2026 (1.1 of 17 November plus product-owner decisions D-01 to D-10; see APPROVAL-RECORD.md). Owner: product owner. Applies to every future conversation and release. User approved the PRD, requested the two preview spacing corrections, and authorized the next implementation steps. Deployment remains gated on actual rendered review. See APPROVAL-RECORD.md.

## Authority and change control

PRD-01 Read this document, the approval record and applicable AGENTS.md before changing the app. Never rely on conversation memory alone. Explicit user decisions remain authoritative, but a new request that conflicts with this approved baseline must first be flagged with the affected requirement ID. Discuss whether it is an isolated exception or a global change before implementing the conflicting portion. Continue unrelated compliant work. Do not silently reinterpret a request as a global redesign.

PRD-02 This approved document supersedes conflicting historical UI instructions. Replace those instructions with a short pointer to this document. Preserve historical rules only in an archive labelled superseded. Record approval date, requirement IDs and visual-reference revision. A draft is never an approved baseline.

PRD-03 Every change identifies affected requirement IDs and screens. A design departure requires a proposed preview and user approval. Do not add default styles or control arrangements that replace the approved baseline. A release records exact tested commit, viewports, state, language, theme, text scale and result. No generic 'all tested' assertion.

PRD-04 Deviations requested by anyone, including the product owner in future conversations, require a brief decision record: request, conflicting requirement, scope (named screen/game versus all matching contexts), agreed behaviour, approval, affected previews and tests. An isolated exception never silently changes shared components; a global change updates the PRD and every dependent screen. No conflicting implementation until that distinction is resolved.

## Shared visual system

VIS-01 Preserve the established pastel light theme and deep teal dark theme. Gameplay has a quiet plain background. Home scenery is decorative and must not delay or obscure navigation/cards. Preserve the selected scenery when changing theme.

VIS-02 Centre titles and short task/feedback text. Left-align multi-line instructions, help lists and About paragraphs. Do not use text-align-last justification. D-05 (approved 18 Nov 2026): a paragraph stays one flowing block; it is centred while it fits on one line and left-aligned as soon as it wraps, on every screen and device. Card titles and card content, form labels and hints are left-aligned. Only in-game answer feedback keeps one sentence per line. Big single values (group code, countdown) stay centred. Lines stay under about 65 characters. Maintain a consistent 8px spacing rhythm; standard gaps 8/16/24/32px. Space grows with available height but never strands a question far from its answers.

VIS-03 Use one family of vector icons. Sizes: normal glyph 24-26px; circled information glyph 20-22px; yellow bulb 28-32px. Independent touch targets are at least 44x44 CSS px, preferably 48x48. Small glyph does not mean small hit area. Never enlarge an icon to fill an entire button.

VIS-04 Button meanings and locations are shared across solo/group/modal contexts. Back top-left; title centred; Close top-right. Language, background audio and game audio form one centred row in that order. A music note means background audio; a speaker means game audio. Off uses a deliberate muted glyph, not generic selected checkmarks. Each toggle has an accessible state and name. Do not apply answer selection decorations to controls.

VIS-05 Footer controls use icon above a short label where already approved. The bulb has no adjacent Rules text; approved consistent exception: bulb alone with accessible Hint/Rules name, tooltip and tap-open help. It occupies the same touch target as other controls. This exception is part of the approved baseline.

VIS-06 Welcome-card information is at a uniform top-right inset. Catalogue-card information is centred in its top tools row; favourite add/remove stays top-right. Remove favourite uses minus-in-circle, not the close or delete icon. Search icon is on the right, 24px. All Games and My Games share card structure and settings remain independent.

## Responsive composition and text

LAY-01 Use a shared header/content/footer structure for every gameplay engine, including group games and embedded movement. Essential controls cannot be pushed below the viewport. Reserve measured header/footer height and safe-area insets; do not rely on one fixed height or accumulating per-game margins.

LAY-02 Questions are at least as large as answer text. Default task/answer 20-24px on mobile, 24-30px on roomy screens; long answers wrap. Sequence/artwork can be larger because it is the task object. Hints use readable body text (18-20px), not tiny captions. Progress and control labels remain secondary but readable. Honour user text enlargement instead of resetting it at breakpoints.

LAY-03 Keep question, task object and choices as one group. Avoid large blank gaps above or below. Short screens use a compact header and footer, fewer decorative margins and a wider board arrangement in landscape. Larger screens receive more spacing and larger artwork, not huge controls. Desktop play column remains bounded; boards may need a wider exception.

LAY-04 Ordinary gameplay at normal text size targets no scrolling. At large text or physically small screens, never hide answers, clip controls or shrink targets to pretend everything fits. Reflow first; if still impossible, use an explicitly documented scrollable content region while navigation remains visible. This accessibility exception must be recorded per game/viewport; it is not an excuse for a normal-size mobile overflow.

LAY-05 Dialogs grow with available height up to safe viewport bounds. Header and actions remain reachable; only content scrolls where needed. Avoid nested page/dialog scrolling. D-06 (approved 18 Nov 2026): list, form and catalogue panels keep a stable size per device class and never resize with their content: phone portrait full width minus 20 px and full height minus 12 px; phone landscape (under 500 px tall) full width minus 20 px and full height minus 12 px; tablet and desktop 720 px wide (game list 880 px) and up to 760 px tall, never taller than the screen minus 64 px. Empty results show inside the same space. Short confirmations stay small dialogs. Opening Help/Options scrolls the expanded content into view without moving focus unexpectedly or hiding the trigger. The software keyboard must not cover forms or Submit.

LAY-06 Wrapped text determines its own height. Place the following board, card or control after the entire text block, never from a fixed first-line baseline. Preserve at least 16 CSS px between the full question block and task board, and 16-24px between a section heading and its first card. Long names/status labels wrap within cards with 12-16px inner gaps. These separations must survive translation, larger text and shorter viewports; reduce other whitespace or reflow before shrinking type or targets.

LAY-07 Corrected references: Connect the Dots must show the entire two-line instruction with clear space before the grid; Play Together must separate Open groups from the first group card and keep group name/status/Join on distinct rows. Preserve the approved colours, alignment, icon family and content. Compare actual text bounds, not only element visibility.

## Gameplay and review

GAME-01 Back returns to the originating games list; Close returns home. Both confirm only when unfinished progress would be discarded; ordinary menu Back goes one step without confirmation. Keep playing/cancel preserves all game state. Completed results close without an unfinished-game warning. Multiplayer exit has its own host/guest semantics below.

GAME-02 Immediate touch feedback and one action per tap. Do not delay ordinary taps to wait for tooltip recognition. Disable only actions genuinely unavailable. During matching animations, distinguish a temporary lock from an accepted selection. Keep touch scrolling outside drawing/petting regions; capture and release interaction pointers correctly.

GAME-03 Show game-specific rules before starting, including pictures-to-words or related-picture matching. Start once where possible. For memory tasks, any necessary Begin/Watch step must have a distinct purpose; preserve fair study time. Removal of the duplicate solo Begin requires a behaviour check that preserves the full study period.

GAME-04 Feedback uses shape/text as well as colour. Hint explains the rule without merely pointing to the answer. A finite hint budget is stated briefly when used and when exhausted (for example '1 hint left', 'No hints left'). Group help explains rules without giving one player an answer advantage.

GAME-05 Review has one unambiguous position such as 'Review 2 of 4'. Previous/next update both the item and its counter, with endpoints disabled. Do not display stale gameplay dots beside review progress. Hide active Pause in completed review. Preserve settings access where useful. Final action is See results; earlier review uses Next round/question. Do not auto-advance reading/feedback screens.

GAME-06 Completion: centred stars independent of the info control on the right, concise saved status, Done primary; Replay and conditional Next level below as icons above labels; Settings and Home visible at the bottom. No More options drawer and no Pause. Omit Next level for final-level/practice/relaxation/movement completion. No 'Ready to try...' or unrelated encouragement paragraphs. Do not imply an unscored movement activity earned a score.

GAME-07 Word Builder packs letter tiles into a readable grid; all letters, undo if supported, feedback and actions remain accessible. Connect the Dots keeps Undo visible. Number Patterns shows an actual rule/explanation near the task. Time later groups question, starting time and choices. Garden Pets and movement use most of the available central area for the existing artwork without cropping movement cues; reduced motion retains static heart feedback.

## Group play

GROUP-01 One host-named group directory listing only the groups the player belongs to (invite-only, D-01). Others join only with the group code or invite link; no broadcast invitations, no list of online players. No Rooms/Lobby/My rooms tabs, duplicate Room buttons or player dropdown. Create group -> choose game -> wait/ready -> shared countdown -> play -> results. Joined names remain visible; notify 'Boris joined' rather than an unnamed arrival. Invite disclosure holds code/sharing. D-03 (approved preview, 18 Nov 2026): the Play Together home explains the feature in one line and offers two paths, Start a group and Join a group, plus a three-step How it works; a first visit needs no separate lobby entry; returning players see Your groups first, each card naming its host with Open group on its own row. Join uses one large 6-character code field. A host alone sees the invite open (large code, Send on WhatsApp first, Copy link, Share), folding into Invite more once someone joins. Players show Ready / Not ready yet / Away chips. Guests see the group, the game and How to play before tapping I’m ready. The shared countdown states the first step and that everyone starts together.

GROUP-02 Searchable categorised supported-game catalogue, with genuine variants in Game options. Current inventory: 13 types/17 variants. Do not present solo 1-15 difficulty choices until the server and game generation support them. Expanding supported games is a separate functional feature, not a cosmetic dropdown change.

GROUP-03 Guests mark Ready; host starts once every present guest is Ready and at least one is present. A guest away for 45 seconds does not block Start and sits out that round (D-02); the host may remove a guest before the game starts. Changing setup invalidates readiness. Shared server timestamp prevents unfair independent study windows. No solo Pause that suspends only one competitor's clock. Language/audio/help layout stays consistent with solo play without inventing unsupported pause/settings actions.

GROUP-04 Keep hosting dismisses only confirmation and preserves the current room and screen. Close group ends only that group; guest Leave does not close it. Lost host/presence states must resolve visibly, with a way to leave; no indefinite unexplained waiting. Timeout behaviour (D-02): an unacknowledged arrival never closes a group; guests may join while the host is briefly away; guests see when the host is away and how long until closure; any open group closes after its host is away for 10 minutes, keeping saved scores. Further timeout changes require explicit approval and tests.

GROUP-05 Results name the round and the round winner, list rank, round score and running total, and offer Choose another game, Play again and End group (host, D-03); guests see their result and a concise waiting/leave action. Continue retains members and saved scores and rechecks readiness. Group standings belong in results, not as a large table during active play.

## Accounts, home and supporting screens

APP-01 Preserve home navigation priority left-to-right: account, language, appearance, card toggle, menu; brand stays visible. Today’s Games/My Games shortcuts appear only with enough space. Cards visible by default. Text size control remains available through settings/menu.

APP-02 Account overview and Account settings are different destinations in one consistent shell. Use 'Signed in as' with a prominent name; show actual save/sync state separately. Selected player is a separate identity. Account photo remains optional/device-local unless real sync exists. Never claim unsaved data is saved.

APP-03 Whole player-card selection works by tap and keyboard; edit/delete are separate actions with explicit names. Preserve histories/profile IDs and independent account/device data. Never auto-delete records as a design cleanup.

APP-04 Rankings/progress use legible tables, meaningful empty/loading/error states, and up to ten visible entries when height allows. Information is user-invoked, never auto-open over Back. Help and About content reflect shipped behaviour in both languages.

APP-05 Cold load shows a neutral compatible colour until the selected image is ready. Do not flash an old scenery. Remove an old asset only after checking all references/cache manifests and genuine saved scenery options. Preserve a safe fallback and offline/update behaviour.

## Accessibility and validation

A11Y-01 Keyboard focus visible, correct accessible names/pressed states, focus restored after closing dialogs, Escape closes appropriate overlays. Icons alone do not replace accessible labels. Info opens by tap/click/keyboard; tooltip appears on hover/focus/long press, not automatically on opening a dialog. Tooltip must not cover critical navigation.

A11Y-02 Target WCAG 2.2 AA including contrast, focus, consistent identification, reflow and 200% text resize. The product's 44-48px touch target rule is deliberately larger than the WCAG 2.2 AA 24px minimum (which has exceptions). These are design targets, not a certification. Specific icon positions are product decisions, not universal international mandates.

QA-01 Before release: every catalogue game at low/high difficulty and relevant setup, active, hint, review and completion states; special actions (Undo, pet stroke, movement pause, study timer); host and guest group lifecycle. Capture actual rendered outputs for changed layouts and shared-template dependents.

QA-02 Matrix: 320x568, 390x664, 430x800 portrait; 844x390 and 1024x600 landscape; 768x1024 tablet; 1366x768 and 1920x1080 desktop. Verify 100%, 140%, 200% text, English/Chinese, light/dark. Dimensions are CSS content viewport, not physical screenshot pixels. Real iPhone Safari audio, touch, keyboard and address-bar resizing require device checks.

QA-03 Release gate: zero unresolved critical clipping/missing controls, no unapproved design differences, no functional regression, no duplicate awards, preserved player/room state, About/version consistent. Separate DOM/API checks, rendered checks and physical-device checks in evidence. If a check is blocked, list it rather than silently passing.

References: https://www.w3.org/TR/WCAG22/ ; https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html


## Addendum, revision 1.4 (v6.3.0)

- **Shells (D-07).** Three shells only: Home and library pages with the top bar kept in view while the page scrolls; dialogs with a fixed header and footer and one scrolling body; full-screen games. The Home top bar is fixed at the top on Home and sticky on the library page.
- **Picture game tiles (D-08).** The group Choose game list uses picture tiles in a grid (2 columns on phones, 5 on desktop) with search, a category filter, an info button per tile and an empty state with Clear search. All 13 group games reuse their solo game picture.
- **Public groups (D-04).** The host chooses who can join when starting a group: only people they invite (default) or anyone using Mind Garden. A public group is listed under Open groups in Play Together until the game starts; only the host name, game and player count are shown. Listing ends when the group starts, is full (8), is over 24 hours old, or the host has not been seen for 45 seconds. The host can switch privacy in Invite while the group waits. Joining from the list asks for confirmation first. Amends GROUP-01 (D-01 invite-only becomes the default, not the only option).
- **Round control (D-09).** The host starts every round and everyone starts together. Before starting, the host is told who is away and asked to confirm. A chime (if sounds are on) and "Round N is starting" bring everyone back; a returning player sees "X is back." A player who missed a start sits out that round and is told when it started. Host-set number of rounds is not included.
- **One word list (D-10).** Player-facing text says group, never room or lobby, in English and Chinese, including server messages.
