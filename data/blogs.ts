// All posts below are original write-ups tied to real projects in data/projects.ts.
// Each `body` entry is a paragraph; a string starting with "## " renders as an H2
// on the post page, giving each post a proper heading structure for SEO.
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO format
  category: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sandboxing-ai-generated-code-with-docker",
    title: "Sandboxing AI-Generated Code: How I Run Autonomous Agent Output Safely",
    date: "2026-09-01",
    category: "AI Engineering",
    excerpt:
      "How an autonomous coding agent can safely write, run, and test its own code — isolated Docker sandboxes, resource limits, and cleanup, from building a Devin AI clone.",
    body: [
      "The moment an AI agent can write and execute its own code, you've inherited a new kind of trust problem: you have no idea in advance what that code will do. Building an autonomous coding agent (a Devin-style AI software engineer) meant treating every generated snippet as untrusted by default, no matter how reasonable the plan behind it looked.",
      "## Why sandboxing has to come first",
      "It's tempting to prototype an AI agent by just running its output directly in your dev environment — call an LLM, get back a shell command or a file diff, execute it. That works right up until the agent decides to run `rm -rf` on the wrong path, install a package that phones home, or spin up a process that never exits. None of that requires malice; a confidently wrong plan is enough.",
      "So the architecture starts with isolation, not features. Every session gets its own Docker container, created fresh, torn down after the task completes or times out. Nothing about the host filesystem, network, or environment variables is visible inside unless it's explicitly mounted in.",
      "## What each sandbox actually gets",
      "Each container is given a working directory, a constrained set of installed tools, and hard resource limits — CPU shares, memory ceilings, and a wall-clock timeout so a runaway loop can't hold a sandbox open indefinitely. Network access is scoped to just what a build step needs (package registries), not the open internet, which also cuts down on an agent 'helpfully' pulling in a dependency you never asked for.",
      "Running 50+ of these concurrently changes the calculus again — you're not just isolating one risky process, you're managing a fleet of them. Container startup time becomes a real cost, so the system keeps a small pool of pre-warmed containers ready to be handed a task rather than building one from a cold image every time.",
      "## Feeding results back to the agent",
      "The other half of the problem is getting useful signal back out. Stdout and stderr get captured and streamed to a live dashboard so a human (or the agent's own reasoning loop) can see what actually happened, not just whether the exit code was zero. Test failures, lint errors, and stack traces all get parsed and handed back to the LLM as structured context for the next step, rather than a wall of raw terminal text.",
      "## What I'd do differently next time",
      "If I were starting over, I'd invest earlier in a proper container pool with pre-installed dependency caches — image pulls and cold starts were the single biggest source of latency in early versions. I'd also add a dry-run mode that diffs proposed filesystem changes before anything executes, since most of the scary failure modes (deleting the wrong file, overwriting configuration) are things a diff would catch before a sandbox even needs to run.",
      "None of this is unique to AI agents — it's the same instinct you'd apply to running any untrusted user-submitted code. The difference is that an LLM will generate that code faster and with more confidence than any human submitting a support ticket, so the isolation has to be the default, not an afterthought.",
    ],
  },
  {
    slug: "building-a-multi-provider-llm-gateway",
    title: "Building a Multi-Provider LLM Gateway: What I Learned Cloning OpenRouter",
    date: "2026-08-10",
    category: "AI Engineering",
    excerpt:
      "Notes on designing a provider-abstraction layer that lets an app switch LLM providers with zero client-side changes, plus what actually made routing latency predictable.",
    body: [
      "Every app that calls an LLM eventually hits the same wall: you've hard-coded calls to one provider's SDK, and now you want to add a second one, or fall back to it when the first is rate-limited. Building a gateway that sits in front of multiple LLM providers behind a single API was mostly an exercise in hiding that complexity from everything downstream.",
      "## The provider abstraction layer",
      "The core idea is a thin interface every provider adapter implements: given a normalized request (model, messages, streaming flag), return a normalized response or stream. Each adapter translates that into whatever shape the underlying provider actually expects, and translates the response back. Nothing above that layer — the API routes, the client SDK, the billing/usage tracking — needs to know which provider is actually handling a given request.",
      "That abstraction is what makes zero-downtime provider switching possible. If a provider starts erroring or a model gets deprecated, you swap the adapter registration, not the API contract. Clients never see a breaking change.",
      "## Getting streaming right",
      "Response streaming was the part that took the most iteration. Different providers chunk tokens differently, and some wrap chunks in provider-specific metadata you don't want leaking through your API. The gateway normalizes every provider's stream into the same server-sent-events shape before it reaches the client, so a frontend only ever has to handle one streaming format regardless of which model answered.",
      "Latency budget matters here too — every extra hop of buffering or transformation adds delay you can measure. Keeping the routing and normalization logic lean (no unnecessary JSON parsing round-trips, no blocking I/O in the hot path) is what kept sub-200ms routing latency achievable even under concurrent load.",
      "## Designing the SDK developers actually want",
      "A gateway is only as good as the SDK wrapped around it. The goal for the TypeScript SDK was that switching from calling a provider directly to calling the gateway should be close to a one-line change — same method names, same response shape, with the provider selection as just another parameter. Cutting that integration boilerplate down is what actually reduces onboarding time; a technically elegant abstraction that still requires rewriting call sites isn't a win.",
      "## Where this breaks down",
      "The honest limitation: full normalization is easy for chat completions and gets harder fast for provider-specific features — function calling schemas, vision inputs, and reasoning-token formats don't map cleanly onto each other. The gateway exposes an escape hatch (a raw passthrough mode) for those cases rather than pretending every provider is interchangeable, because pretending that would just push the incompatibility further downstream where it's harder to debug.",
    ],
  },
  {
    slug: "preventing-race-conditions-in-booking-systems",
    title: "Preventing Race Conditions in Booking Systems with MongoDB Transactions",
    date: "2026-07-22",
    category: "Backend",
    excerpt:
      "How atomic MongoDB operations and transaction-safe logic stop double-bookings under real concurrent load, from building a travel booking platform.",
    body: [
      "Booking systems have a deceptively simple failure mode: two people click 'confirm' on the same slot within milliseconds of each other, and without the right guardrails, both bookings succeed. Building a travel booking platform meant treating every reservation as a potential race condition by default, not an edge case to patch later.",
      "## Why 'check then write' isn't safe",
      "The naive approach — read the current availability, check there's room, then write the new booking — has a gap between the read and the write. Under low traffic that gap is invisible. Under real concurrent load, two requests can both read 'available' before either has written anything, and both proceed to book the same inventory.",
      "## Atomic operations close the gap",
      "The fix is to make the check and the write a single atomic operation instead of two separate steps. MongoDB's `findOneAndUpdate` with a query condition on the current state (for example, `seatsAvailable: { $gte: 1 }`) combined with a `$inc` to decrement it does both in one round-trip at the database level. If two requests race, only one of them will match the condition and succeed; the other gets a clean 'no longer available' response instead of a corrupted double-booking.",
      "## Transactions for multi-document consistency",
      "Single-document atomic updates handle the seat-count problem, but a real booking touches multiple documents — the inventory record, the booking record, a payment hold. For that, multi-document transactions keep all of those writes atomic as a group: either the whole booking succeeds, or none of it does, even if a step fails halfway through (a payment authorization timing out, for instance).",
      "## Handling cancellations and rebooking without leaving orphaned state",
      "The failure-tolerant part of this isn't just the happy path — it's making cancellation and rebooking workflows resilient to partial failures too. A cancelled booking needs to release its inventory back atomically, and a rebooking flow needs to treat 'release old slot, claim new slot' as one logical unit rather than two independent operations that could leave the system in an inconsistent state if the second half fails. That failure-tolerance is what actually moved the needle on transaction throughput, since retries could be handled safely instead of requiring manual reconciliation.",
      "## The trade-off worth knowing about",
      "Transactions aren't free — they add latency and, under very high write contention on the same document, can increase retry rates. The practical fix was keeping transaction scope as narrow as possible (only the documents that actually need atomicity) and relying on the simpler atomic single-document updates everywhere else, reserving full transactions for the genuinely multi-document cases.",
    ],
  },
  {
    slug: "real-time-collaboration-websockets-delta-updates",
    title: "Real-Time Collaboration at Scale: WebSockets, Delta Updates, and Zero Data Loss",
    date: "2026-06-15",
    category: "Real-time",
    excerpt:
      "Notes on building multi-user real-time sync with Socket.IO — delta-based state updates, conflict handling, and cutting payload size for low-bandwidth users.",
    body: [
      "Real-time collaboration tools live or die on one guarantee: when five people edit the same document at once, nobody's changes silently disappear. Building a collaborative workspace meant designing the sync layer around that guarantee from the start, rather than bolting conflict handling on after the fact.",
      "## Why sending the whole document doesn't scale",
      "The naive approach to sync is: on every change, broadcast the entire document state to every connected client. It works for a demo. It falls apart with real documents and real user counts — every keystroke would mean re-sending kilobytes of data to everyone in the session, and bandwidth-constrained users would fall further behind with every update.",
      "## Delta-based updates",
      "The fix is sending deltas — just the change itself (an insert, a delete, a field update) rather than the full state. Each client applies incoming deltas to its local copy instead of replacing it wholesale. This is what actually made the WebSocket payload size drop significantly, and it compounds well with binary encoding on top of the deltas themselves rather than shipping them as verbose JSON.",
      "## Granular event handling to avoid sync errors",
      "Delta updates introduce a new problem: ordering and conflicts. If two clients send deltas that touch the same field within the same short window, applying them in the wrong order corrupts state. Granular event handling — scoping each delta to the smallest affected unit (a single field or block, not 'the document changed') — keeps conflicts rare and cheap to resolve when they do happen, since you're only reconciling a small piece of state rather than diffing entire documents.",
      "## Authentication and access at the socket layer, not just the API",
      "It's easy to secure the REST endpoints and forget that a WebSocket connection is a separate attack surface. Session-based authentication has to be validated at socket connection time and re-checked on room-join events, with role-based access control applied per-room rather than assumed globally — otherwise a valid session for one workspace can end up with visibility into another simply because the socket layer didn't re-check permissions.",
      "## What 'zero data loss' actually requires",
      "Zero data loss isn't just about the network layer — it's also about what happens when a client disconnects mid-edit. The practical answer was a local outbox: every delta is queued locally before being sent and only cleared once the server acknowledges it, so a dropped connection replays unacknowledged deltas on reconnect instead of silently dropping them.",
    ],
  },
  {
    slug: "typescript-patterns-for-every-node-api",
    title: "5 TypeScript Patterns I Reach for in Every Node.js API",
    date: "2026-05-10",
    category: "Backend",
    excerpt:
      "Five practical TypeScript patterns for Node.js and Express APIs — request validation, discriminated unions for responses, and typing async error handling properly.",
    body: [
      "TypeScript's value in a Node.js API isn't really about catching typos — it's about making illegal states unrepresentable and pushing errors to compile time instead of a 2am production incident. Here are five patterns that show up in almost every API I build, regardless of the domain.",
      "## 1. Validate at the boundary, trust the type after that",
      "Request bodies come in as `unknown`, no matter what your route handler's type signature claims. Using a schema validator (Zod is the one I reach for) at the very edge of the request — parsing the body once, immediately — means everything past that point can be fully typed and trusted. Skipping this and just casting `req.body as MyType` is the single most common way a 'type-safe' API still crashes on bad input.",
      "## 2. Discriminated unions for API responses",
      "Modeling a response as `{ success: true, data: T } | { success: false, error: string }` instead of a single object with optional fields forces every caller to narrow the type before accessing `data`, which means the compiler catches the 'forgot to check for the error case' bug that would otherwise only show up at runtime.",
      "## 3. Branded types for IDs that look alike",
      "A `userId: string` and an `orgId: string` are trivially easy to swap by accident, and plain TypeScript won't catch it because they're structurally identical. Branding them — `type UserId = string & { readonly __brand: unique symbol }` — makes them incompatible at compile time even though they're both strings at runtime, which catches an entire category of 'passed the wrong ID' bugs for free.",
      "## 4. Typing async errors instead of throwing anything",
      "`try/catch` in TypeScript types the caught error as `unknown` by default, which is correct but easy to ignore by immediately casting it to `Error`. A small `Result<T, E>` wrapper around functions that can fail — returning `{ ok: true, value } | { ok: false, error }` instead of throwing — keeps error types explicit through the call chain and avoids losing information across `catch` boundaries.",
      "## 5. Exhaustiveness checks on switch statements",
      "Adding a `default` case that assigns to a variable typed as `never` means that if someone adds a new variant to a union later and forgets to handle it in a switch statement, the build fails instead of silently falling through. It's a small amount of ceremony that pays for itself the first time a new status or event type gets added to a growing codebase.",
      "None of these are exotic — they're mostly about being deliberate at the boundaries (input validation, error handling, response shapes) where untyped chaos tends to sneak in, and letting the compiler do the rest.",
    ],
  },
  {
    slug: "react-performance-checklist-before-you-ship",
    title: "A React Performance Checklist Before You Ship",
    date: "2026-04-18",
    category: "Frontend",
    excerpt:
      "A practical pre-launch checklist for React and Next.js apps — render performance, bundle size, and the Core Web Vitals fixes that actually move the needle.",
    body: [
      "Most React performance problems aren't exotic — they're the same handful of issues showing up in a new component tree. Before shipping a build, this is the checklist I actually run through, roughly in the order it tends to pay off.",
      "## Audit re-renders before optimizing anything else",
      "Before reaching for `useMemo` or `useCallback` anywhere, profile first — React DevTools' Profiler tab shows exactly which components re-render and why. A shockingly common finding is a single high-level state update re-rendering an entire tree because state that only three components need lives at the app root. Moving state down (or splitting a context into smaller, more targeted ones) usually fixes more than any amount of manual memoization.",
      "## Code-split anything not needed on first paint",
      "Route-based code splitting is table stakes with Next.js, but it's worth going further: modals, settings panels, and anything behind a click or a scroll shouldn't be in the initial bundle. `next/dynamic` with a loading fallback keeps the first paint lean without changing how the component is used elsewhere in the code.",
      "## Get serious about images",
      "Unoptimized images are still the most common cause of a bad Largest Contentful Paint score. `next/image` handles resizing and format negotiation automatically, but it only helps if `width`/`height` (or `fill` with a sized parent) are set correctly — a missing dimension is what causes layout shift even when the image itself loads fast.",
      "## Check what you're actually shipping",
      "Running a bundle analyzer against the production build regularly turns up surprises: a date library imported for one formatting call that pulls in the entire locale set, or a component library imported wholesale when only three components from it are used. Tree-shaking helps, but only if imports are written in a way that allows it (named imports from packages that support ESM, not blanket namespace imports).",
      "## Don't skip the un-glamorous stuff",
      "Debouncing search inputs, virtualizing long lists instead of rendering every row, and setting explicit `key` props on list items (not array index, if the list can reorder) rarely make it into a highlight reel, but they're responsible for most of the perceived-speed difference between an app that feels instant and one that feels sluggish under real data volumes.",
      "## Measure against real devices, not just your laptop",
      "Core Web Vitals numbers from a fast dev machine on fast wifi are close to meaningless for a user on a mid-range phone on patchy mobile data. Throttling CPU and network in DevTools before calling something 'fast enough' catches a surprising number of issues that a fast local build hides completely.",
    ],
  },
];
