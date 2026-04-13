# System Design Mastery Plan

---

## Phase 1: The Building Blocks (Weeks 1-4)

### Week 1: How the Internet Actually Works (Backend Perspective)

**Study (~1.5h):**

- What happens when a request hits your server (TCP handshake → load balancer → app server → DB → response)
- DNS resolution in detail
- HTTP/1.1 vs HTTP/2 vs HTTP/3 -- you know these from frontend perf, now understand the server side
- TLS handshake

**Mini-build (~1.5h):**

- Build a basic HTTP server in Node without Express. Handle routing manually. Parse headers yourself. This removes the magic.

**DDIA alignment:** Chapters 1-2 (Reliability, Scalability, Maintainability + Data Models)

### Week 2: Databases -- The Non-Negotiable Foundation

**Study (~2h):**

- SQL vs NoSQL -- when to actually pick which (not vibes, real tradeoffs)
- Indexes: what they are, how B-trees work, why queries are slow without them
- ACID transactions -- what each letter means in practice
- Replication: leader-follower, leader-leader, when reads go stale
- Sharding/partitioning: hash-based vs range-based, why it's painful

**Mini-build (~1.5h):**

- Take any app you've built. Add a Postgres DB. Write raw SQL (no ORM). Create an index. Run EXPLAIN ANALYZE on a query before and after. See the difference.

**DDIA alignment:** Chapters 3, 5, 6 (Storage, Replication, Partitioning)

### Week 3: Caching + CDNs + Load Balancing

**Study (~1.5h):**

- Cache-aside, write-through, write-behind patterns
- Cache invalidation (the actual hard problem -- understand why "just cache it" is never simple)
- Redis: what it is, when to use it, data structures it offers beyond key-value
- Load balancing: round-robin, least connections, consistent hashing
- CDN: you know this from frontend -- now understand origin shields, cache hierarchies, purging

**Mini-build (~1.5h):**

- Add Redis caching to an API endpoint. Measure response time before/after. Implement a TTL. Then break it on purpose -- update the DB and see the cache serve stale data. Now fix it.

**DDIA alignment:** Chapter 5 continued (Replication and consistency tie into caching)

### Week 4: Message Queues + Async Processing

**Study (~1.5h):**

- Synchronous vs asynchronous communication
- Message queues vs event streams (RabbitMQ vs Kafka -- conceptual, don't deep dive yet)
- Pub/sub pattern
- Why async matters: decoupling, resilience, handling spikes
- Dead letter queues, retry strategies, idempotency

**Mini-build (~1.5h):**

- Use BullMQ (Redis-based, Node.js native) to build a simple job queue. Submit a "send email" job, process it in a worker. Add retry logic. See what happens when the worker crashes mid-job.

**DDIA alignment:** Chapters 4, 11 (Encoding + Stream Processing)

---

## Phase 2: Core Design Exercises -- Easy to Medium (Weeks 5-8)

Now you combine the blocks. Each week: study the design, then do it yourself from scratch.

**Format for each design:**

1. Define the requirements (functional + non-functional) -- 5 min
2. Estimate scale (back-of-envelope math) -- 5 min
3. Design the high level architecture -- 15 min
4. Deep dive into 1-2 components -- 15 min
5. Discuss tradeoffs and bottlenecks -- 10 min

### Week 5: URL Shortener + Paste Bin


| Session | What                                                                                                                       | Why This Design                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1       | Study: URL shortener design (read 2-3 sources, compare approaches)                                                         | Teaches: hashing, DB choice, read-heavy optimization, caching, analytics |
| 2       | Design it yourself from scratch on paper/Excalidraw. Then design Paste Bin (it's the same pattern with file storage added) | Variation teaches you to adapt patterns                                  |


**Key concepts tested:** Base62 encoding, database choice, cache layer, redirect logic, analytics pipeline

### Week 6: Rate Limiter + Notification System


| Session | What                                                                                                             | Why This Design                                                 |
| ------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 1       | Study: rate limiter algorithms (token bucket, sliding window, fixed window). Design a rate limiter as middleware | Teaches: distributed state, Redis usage, algorithm tradeoffs    |
| 2       | Design a notification system (push, email, SMS). Focus on the queue/worker architecture                          | Teaches: fan-out, queue management, provider abstraction, retry |


**Key concepts tested:** Redis atomic ops, distributed counting, message queues, multi-channel delivery

### Week 7: Design Twitter / News Feed


| Session | What                                                                                                                           | Why This Design                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 1       | Study: fan-out on write vs fan-out on read. Understand why this is THE classic system design question                          | This one question covers: feeds, caching, pub/sub, social graph, read/write ratio |
| 2       | Design it yourself. Start with naive approach, then optimize. Draw the data flow for: post tweet → appears in followers' feeds | Practice articulating tradeoffs                                                   |


**Key concepts tested:** Fan-out strategies, social graph storage, timeline caching, eventual consistency

### Week 8: Design a Chat System (WhatsApp/Slack)


| Session | What                                                                                                                                                                         | Why This Design                                    |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1       | Study: WebSockets vs long polling vs SSE (you know these from frontend -- now think about the server managing millions of connections). Message storage, delivery guarantees | Real-time systems, connection management           |
| 2       | Design it. Focus on: connection management, message ordering, online/offline delivery, group chats                                                                           | As a frontend dev, you have an edge here -- use it |


**Key concepts tested:** WebSocket servers, presence detection, message queues, read receipts, ordering guarantees

---

## Phase 3: Advanced Designs + Distributed Systems Concepts (Weeks 9-12)

### Week 9: Design YouTube / Netflix (Video Platform)


| Session | What                                                                                                                                      | Why This Design                                            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 1       | Study: video upload pipeline (transcoding, different resolutions, storage). CDN distribution. Adaptive bitrate streaming                  | Blob storage, async processing pipelines, CDN architecture |
| 2       | Design it. Focus on: upload → transcode → store → serve flow. Don't get lost in recommendation algorithms -- that's ML, not system design | Teaches you to scope correctly                             |


**Key concepts tested:** Object storage (S3), async processing pipeline, CDN, chunked uploads

### Week 10: Design Google Docs (Collaborative Editing)


| Session | What                                                                                                                                             | Why This Design                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 1       | Study: Operational Transform (OT) vs CRDTs. You don't need to implement these, but understand the problem they solve and which one is used where | Conflict resolution, real-time sync                             |
| 2       | Design the system. Focus on: document storage, real-time sync, conflict resolution, version history                                              | This is a frontend-heavy system design -- play to your strength |


**Key concepts tested:** WebSockets, CRDTs/OT (conceptual), version history, presence

### Week 11: Design a Search Engine (Simplified) + Distributed Cache


| Session | What                                                                                                                                        | Why This Design                                       |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1       | Study + design: how search indexing works (inverted index, crawling, ranking basics). You're not designing Google -- just the core pipeline | Inverted indexes, crawling, ranking                   |
| 2       | Study + design: distributed cache (like designing Redis itself). Consistent hashing, eviction policies, replication                         | Teaches you what's behind the tools you've been using |


**Key concepts tested:** Inverted index, consistent hashing, eviction policies, data partitioning

### Week 12: CAP Theorem + Consistency Patterns + Review


| Session | What                                                                                                                                                                                                      | Why This Design          |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 1       | Study the theory you've been using intuitively: CAP theorem (and why it's often misunderstood), consistency models (strong, eventual, causal), consensus algorithms (Raft -- conceptual only)             | Ties everything together |
| 2       | Re-do 2 designs from Phase 2 but now with explicit consistency/availability tradeoff analysis. How does your URL shortener handle a network partition? What consistency model does your chat system need? | Apply theory to practice |


**DDIA alignment:** Chapters 7-9 (Transactions, Distributed Systems, Consistency and Consensus) -- the hardest and most valuable part of the book

---

## Phase 4: Mock Interviews + Weak Spot Drilling (Weeks 13-14)

### Week 13: Timed Practice

- Pick 2 unseen designs (from lists below) and do them in 35 minutes each
- Record yourself or explain to a wall
- Grade yourself: did you cover requirements, scale estimation, high-level design, deep dive, and tradeoffs?

### Week 14: Weak Spots + Final Mocks

- Redo the 2 designs you felt weakest on
- Do 1-2 mock interviews (Pramp, Interviewing.io, or with a friend)
- Focus on communication: interviewers care more about your thought process than the perfect design

---

## Backup Designs (For Week 13 or Extra Practice)

- Design Uber/Lyft (location tracking, matching, geospatial indexing)
- Design Dropbox (file sync, chunking, deduplication)
- Design Instagram (image upload, feed, stories)
- Design Ticketmaster (high-concurrency booking, seat locking)
- Design a Key-Value Store (from scratch -- ties back to DDIA ch3)
- Design an API Rate Limiter at Scale (distributed, multi-region)

---

