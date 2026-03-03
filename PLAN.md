# One-Page Tutorial Plan: “How Non-Technical People Can Use LLMs”

## 1) Goal
Create a single, long-scroll tutorial web page for non-technical users that teaches practical LLM usage.

Key constraint:
- Tutorial page content will be in Russian.
- Planning document remains in English.

Primary outcome for readers:
- They can reliably use LLMs for everyday tasks.
- They know when to use search/tools vs plain chat.
- They know how to verify outputs and avoid common errors.

## 2) Source Basis (`karpathy-lectures`)

This tutorial will be grounded in these files:
- `karpathy-lectures/how-i-use-llms.txt`: practical workflows, tool usage, model selection, search, deep research, file upload, memory/customization, common failure modes.
- `karpathy-lectures/deep-dive-llms.txt`: mental models for context window, hallucinations, tool orchestration, prompt-injection/safety concerns.
- `karpathy-lectures/into-to-llms.txt`: introductory intuition (what an LLM is, limits, why outputs can be wrong).

Content weighting:
- ~80% practical usage patterns.
- ~20% auxiliary mental model/safety context.

## 3) Audience and Teaching Style

Audience:
- Beginners and non-technical professionals.
- People who want immediate, useful outcomes.

Style:
- “Do this now” tutorial, not a theory lecture.
- Short sections, concrete examples, copy-ready prompt blocks.
- Every concept tied to a practical decision.

## 4) One-Page Information Architecture

## Section A: Hero + promise
- Russian headline focused on outcomes (work faster, think clearer, reduce routine).
- One CTA: “Start in 3 minutes”.
- Sticky jump navigation for all sections.

## Section B: Quick win (first 3 minutes)
- One task any beginner can do immediately.
- “Bad prompt -> Better prompt” example.
- Copy button for reusable template.

## Section C: Minimal mental model (only what helps usage)
- Explain context window as “working memory”.
- Explain that models can be wrong/hallucinate.
- Explain “knowledge cutoff” and why recent facts need web search.
- Keep this compact and visual.

## Section D: Core workflow (main tutorial)
- 6-step practical loop (in Russian on final page):
1. Define goal.
2. Provide context.
3. Add constraints.
4. Specify output format.
5. Iterate with follow-up prompts.
6. Verify critical claims.
- Each step includes one micro-example.

## Section E: Tool decision guide
- “When to use what” matrix:
1. Plain chat.
2. Search-enabled mode (fresh/changing info).
3. Reasoning mode (hard multi-step tasks).
4. File upload mode (analyze your docs/PDF/text).
- Include one warning line per mode (typical failure).

## Section F: Real-world scenarios
- 4 to 6 tutorial scenarios:
1. Writing and rewriting.
2. Research summary from multiple sources.
3. Learning from documents/books.
4. Planning/comparison decisions.
5. Basic data analysis interpretation (without coding).
- Each scenario has:
1. Goal.
2. Prompt starter.
3. Verification checklist.

## Section G: Safety and quality control
- Practical checklist:
1. Ask for sources/citations.
2. Cross-check key facts.
3. Mark assumptions vs facts.
4. Never paste sensitive data.
5. Treat output as draft, not truth.
- Add a short block on prompt injection awareness in tool/search contexts.

## Section H: Common mistakes and fixes
- Table format:
1. Mistake.
2. Why it happens.
3. Better prompt pattern.
- Include mistakes drawn from lectures:
1. No context.
2. Wrong tool for task.
3. Over-trusting confident answers.
4. Not checking calculations/assumptions.
5. Overloading one chat instead of resetting when needed.

## Section I: Practice + cheat sheet
- 3 mini exercises with target outcomes.
- Final one-screen cheat sheet:
1. Universal prompt formula.
2. Tool choice rules.
3. Verification rules.

## 5) Visual and UX Direction (for final page build)

Design concept:
- Editorial “field guide” look: trustworthy, practical, modern.
- Distinct from generic SaaS templates.

Styling direction:
- Typography:
1. Display font: `Unbounded` (headings).
2. Body font: `IBM Plex Sans` (readability, Cyrillic support).
- Color system (CSS variables):
1. Warm paper background.
2. Deep ink text.
3. Strong cobalt + tangerine accents for actions/highlights.
- Use high contrast and large line-height for accessibility.

Layout:
- Single page, long scroll.
- Sticky top progress/jump nav.
- Section cards with clear visual hierarchy.
- Desktop: generous margins and breathing room.
- Mobile: collapsed nav, larger tap targets, simplified spacing.

Interaction:
- Copy prompt buttons.
- Expand/collapse for FAQ and advanced notes.
- Light motion only:
1. Staggered reveal on first viewport load.
2. Subtle section highlight on anchor jump.

## 6) Source-to-Section Mapping

- Practical tool use and workflows: mostly `how-i-use-llms.txt`.
- Hallucinations, context limits, and safety caveats: `deep-dive-llms.txt` + `into-to-llms.txt`.
- Prompt design patterns (few-shot/examples, specificity): all three, with emphasis on practical examples in `how-i-use-llms.txt`.

## 7) Content Rules for Final Russian Tutorial

- Keep jargon minimal; define any unavoidable term in plain Russian.
- Avoid product/version dependence in core guidance.
- Use provider-agnostic wording; mention examples only as optional.
- Every block must answer: “What should I do next?”

## 8) Build Sequence (next step after plan approval)

1. Draft Russian copy skeleton section-by-section.
2. Create page wireframe in HTML structure.
3. Implement full visual system and responsive behavior.
4. Add interactivity (copy buttons, anchor nav, FAQ accordions).
5. QA pass for readability, mobile UX, and tutorial flow.
