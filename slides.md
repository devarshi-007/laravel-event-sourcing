---
# You can also start simply with 'default'
theme: seriph
# some information about your slides (markdown enabled)
title: Laravel Event Sourcing
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Laravel Event Sourcing

Building Scalable & Audit-Friendly Applications

<div class="abs-br mx-3 text-xl">
  <a href="https://www.improwised.com/" target="_blank" class="slidev-icon-btn">
    <img src="https://www.improwised.com/_nuxt/image/d4c006.png" alt="logo" class="h-10 w-25">
  </a>
</div>

---
transition: fade-out
---

# 👨‍💻 About Me

- I am a **Software Developer** passionate about building and optimizing applications.
- Experienced in **Laravel, Vue, Nuxt, Frappe, Go, and Python**.
- Currently working at **Improwised Technologies**, where I started my career.
- Have around **2 years of experience** in full-stack development.
- I love **tinkering with new technologies** and solving challenging problems.

## 🔗 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/devarshi1/)

---

# ⚡ 1. Introduction to Event-Driven Design

<h2 v-click>What is Event-Driven Design?</h2>

<p v-click>
  Event-driven design is a way to build software where different parts of a system communicate 
  by sending and receiving messages called <strong>events</strong>. Instead of calling each other directly, 
  they react when something happens.
</p>

<h2 v-click>How It Works (With an Example!)</h2>

<div v-click>
<p>
  Imagine an <strong>online store</strong>:
</p>

<ul>
  <li>A customer <strong>places an order</strong> (this is an event 🎉).</li>
  <li>The <strong>payment service</strong> listens for the event and processes the payment.</li>
  <li>The <strong>inventory system</strong> updates stock levels.</li>
  <li>The <strong>notification service</strong> sends an order confirmation email.</li>
</ul>

<p>Each part works independently and reacts to events!</p>
</div>
---

## Traditional Approach

<div class="grid grid-cols-2 gap-4 items-start">
  
  <img src="/public/traditional.png" alt="traditional" class="mt-2 w-100" />

  <div class="flex flex-col">
    <p class="font-bold">Dependencies</p>
    <img src="/public/traditional-deps.png" alt="traditional dependencies" class="mt-2 h-30 w-30" />
    <p class="mt-2">
      Even with this simplified example, we are dealing with a 4-level dependency chain, 
      and we haven't even mentioned the inner code of <code>GeneratePdf</code>.
    </p>
    <p class="mt-2">
      If we are not careful, there is a possibility of ending up with a deep dependency chain.
    </p>
  </div>
</div>
---

### Event Based Approach

## <img src="/public/event-example.png" alt="event-driven-example" class="mx-auto w-170 mt-4"/>
---

### Look from a code side

<div class="grid grid-cols-2 gap-4 items-start">
  
  <img src="/public/new-event-approach.png" alt="new-approach" class="mt-2 w-100" />

  <div class="flex flex-col">
    <img src="/public/new-deps.png" alt="new dependencies" class="mt-2 h-40 w-30" />
    <p class="mt-2">
      We don't need to worry about the specific side effects in any given part of our code.
    </p>
  </div>
</div>
---

### Event Sourcing

<v-click>

- Event Sourcing is a pattern where:

  - State changes are stored as events
  - Events are the source of truth
  - Current state is derived from events
  - History is preserved

- In simpler terms, Events in our system aren't just broadcasted and forgotten about. Instead, every event is stored in some kind of database.
- We get the log of all events happened in the system.

</v-click>
---

<v-clicks>

## Traditional CRUD

- Stores current state
- Previous states lost
- Direct state mutations
- Simple but limited

## Event Sourcing

- Stores state changes
- Complete history
- Event-driven mutations
- Powerful but complex

</v-clicks>
---

# 2. 🛠️ spatie/laravel-event-sourcing

### What is it?

A package for implementing **Event Sourcing** in Laravel with an easy-to-use.

<br/>

### Key Features

- 🚀 Stores domain events efficiently
- 🏗️ Rebuilds state from past events
- 🔄 Supports projectors & reactors

<br/>

### Why Use It?

- ✅ Maintain a clear history of changes
- 📜 Enables event-driven architectures

## 👉 Learn more: [Spatie Docs](https://spatie.be/docs/laravel-event-sourcing)
---

# 3. How it works ?

## <img src="/public/event-sourcing.png" alt="event-sourcing" class="mt-2" />
---

# 4. Events

- Event is nothing more than a statement of "Something happened in the system"
- It will broadcasted for anyone who is interested to hear it
- Events without any context information doesn't seem that useful
- For ex, CartCheckedOut event without knowing which cart is checked out is useless.
- Most of the events carry some kind of context with them
- If you are recording every event in your database. It's called Event sourcing

---

## Thinking in terms of Event - Event Storming

What type of events can be in cart operation ?

- CartItemAdded
- CartItemRemoved
- CartCheckedOut
- PaymentCreated
- PaymentPaid
- PaymentFailed
- OrderCreated
- OrderCompleted
- OrderCancelled

<br/>
One thing to note:- Events name always be in past tense
---

Let us define event in our application.
<br/><br/>
OrderCreated.php

```
namespace App\Order\Events;


use Spatie\EventSourcing\StoredEvents\ShouldBeStored;
use App\Order\OrderItems;

class OrderCreated extends ShouldBeStored
{
  public function __construct(
    public string $orderId,
    public string $userId,
    public OrderItems $items
  ) {

  }
}
```

<br/>
That's It! <br/>
Noticed that ShouldBeStored class we're extending from, it is provided by the event sourcing package. It adds functionality for serializing and deserializing stored events
---

# 5. Projections
- As I said, in event sourcing - source of truth are events
- So, what if we write the data to database directly as we were doing in traditional CRUD ?
- It will break event sourcing
- A projection is db table that represents one way of looking at the event stream
- We call the data - Projection
- Projections will be a normal laravel model but with one difference, projections are based on event stream, we are not allowed to make changes from outside
- To prevent us from forgotting the rule, event sourcing package has class "Projection", our model will extend that class and it will prevent us from storing data directly
---

# 6. Projectors
- The Projector class is responsible for handling projections.
- It listens to events and performs operations based on the event's data.
- Since we cannot directly update the database, we use writeable() to modify the schema.
- For example, when an OrderCreated event occurs, the Projector writes order details to the database.
<br/><br/>
```
class OrderProjector extends Projector
{
    public function onOrderCreated(OrderCreated $event)
    {
      (new Order)->writeable()->create([
        'id' => $event->$orderId,
        'user_id' => $event->$userId,
        'items' => $event->$items,
      ]);
    }
}
```
---

# Some Exciting Stuff 🚀

<br/>

## The Problem 🤔

<br/>
- What if a client asks to add a new column to the Order table to check if an order falls into the premium category?
- Criteria: If an order has more than 5 items, it is considered premium.
<br/><br/>

## Traditional CRUD Approach 🏗️
<br/>
- We would need to modify the schema, update logic, and ensure new data follows the rule.
- Old records wouldn't be updated unless a migration script is run.

---

## Event Sourcing to the Rescue! 🎯
<br/>

- No worries! We can **extend our projector** and **replay events** to regenerate correct data.

```
class OrderProjector extends Projector
{
    public function onOrderCreated(OrderCreated $event)
    {
        (new Order)->writeable()->create([
            'id' => $event->orderId,
            'user_id' => $event->userId,
            'items' => $event->items,
            'premium' => count($event->items) > 5,
        ]);
    }
}
```
---

## Replaying Events 🔄

The Power of Event Replaying ⚡
<br/>
- We could discard all data except the events themselves and rebuild everything from scratch.
- Sounds great, but in practice, it can be time-consuming.  
  👉 Instead, we only replay events for the projector we need.
  ```
  php artisan event-sourcing:replay \"App\\Order\\Projectors\\OrderProjector"
  ```
- Before replaying, we must clear the table to avoid duplicate data.

<br/>
Clearing Data Before Replaying 🗑️
<br/><br/>
```
public function onStartingEventReplay(): void
{
    Order::truncate();
}
```
<br/>
Remember, Making changes to projector is easy, but making changes in event is very difficult
---

# 7. Reactors

## What Are Reactors? 🤔

- Reactors are **event listeners**, but they operate **asynchronously**.
- Ideal for **background tasks** that should not block the main workflow.
- Spatie provide Reactor class for this

## Example: Sending an Invoice 🧾

- When an `OrderCompleted` event occurs, a **reactor** can send the invoice **in the background**.

## Important Considerations ⚠️

- **Reactors run only once!**  
  ❌ Do not use them for **critical data manipulation**.
- If you need to **delete thousands of records** based on an event, a reactor is a good choice because it’s **async**.
- But **replaying events won’t trigger reactors**, so changes made by reactors will **not persist** on replays.

## Handling Deletion Correctly ✅

- Instead of deleting records inside a reactor, **make deletion an event-driven process**:
  1. **Create a deletion event & projection.**
  2. **Fire a job from the reactor.**
  3. **That job triggers multiple events, and projectors handle the deletions.**
---

```
class OrderReactor extends Reactor
{
    public function onOrderCreated(OrderCreated $event)
    {
      Mail::send(
        new OrderConfirmation($event->$userId)
      );
    }
}
```
---

# 8. Aggregates

## What is an Aggregate? 🤔

- An **Aggregate** is responsible for **handling business rules**.
- It **constitutes state** from events and **dispatches new events**.
- Also ensures **data validation** before processing changes.

## Example: Checkout Validation ✅

- Suppose we **don’t want users to checkout** if they have **less than 3 items** in their cart.
- This validation can be enforced **inside the Aggregate**.

## Extending `AggregateRoot` 🛠️

- Aggregates extend the `AggregateRoot` class, which provides:
  - **State reconstruction** from past events.
  - **Event recording** using the `recordThat()` method.

---

## What is State in an Aggregate? 🤔

- **State** represents the **current data** held by an Aggregate.
- It is **not stored in a database** but **reconstructed** from past events.
- This allows Aggregates to **maintain consistency** and **apply business rules** effectively.

## How is State Reconstituted? 🏗️

1. **Events are replayed** in the order they occurred.
2. The `apply()` method inside the Aggregate **updates the state** based on each event.
3. When an action is performed, the Aggregate checks its **current state** before making decisions.
---

## Example: Order State Reconstruction 🛒

```
class OrderAggregate extends AggregateRoot
{
    protected int $items = 0;

    // This is responsible for dispatching the event
    public function creaetOrder(string $orderId, string $userId, OrderItems $items)
    {
        $this->recordThat(new OrderCreated($orderId, $userId, $items));
    }

    // This is responsible for state change
    public function applyOrderCreated(OrderCreated $event)
    {
        $this->items = count($event->items);
    }
}
```
---

# Retrieving an Aggregate in a Controller 🎯

## How to Retrieve an Aggregate? 🤔

- Aggregates are **not stored directly** in a database.
- Instead, they are **reconstituted** from past events when retrieved.
- We use **`Repository`** to fetch the Aggregate and **apply past events**.

---

## Retrieving an Aggregate in a Controller 🏗️

```
class OrderController
{
    public function show(string $orderId)
    {
        // Retrieve the aggregate from the repository
        $order = OrderAggregate::retrieve($orderId);

        return response()->json([
            'order_id' => $orderId,
            'items' => $order->getItemCount(),
        ]);
    }

    public function store(string $orderId, string $userId, OrderItems $items)
    {
        $order = OrderAggregate::retrieve($orderId)
                  ->create(
                    $orderId, $userId, $items
                  )
                  ->persist();
    }
}
```
<br/>
Aggregate will fire all events and do the changes after the persist method
---

# Snapshotting in Event Sourcing 📸

## What is Snapshotting? 🤔

- Snapshotting is **saving the current state** of an Aggregate at a specific point.
- It **reduces the need** to replay all past events during retrieval.
- Useful for **long-lived aggregates** with **many events**.

## Why Use Snapshots? ⚡

✅ **Faster Retrieval** – No need to replay thousands of events.  
✅ **Optimized Performance** – Reduces memory and processing overhead.  
✅ **Scalability** – Helps manage large event stores efficiently.  
---

## How Snapshotting Works 🔄

1️⃣ **Every N events**, take a snapshot of the Aggregate’s state.  
2️⃣ Store the **snapshot** separately in a snapshot store.  
3️⃣ When retrieving an Aggregate:
   - Load the **latest snapshot** (if available).
   - Replay **only the events after the snapshot**.  

---

## Implementing all three

```
class OrderAggregate extends AggregateRoot
{
    protected int $items = 0;

    // This is responsible for dispatching the event
    public function creaetOrder(string $orderId, string $userId, OrderItems $items)
    {
        $this->recordThat(new OrderCreated($orderId, $userId, $items));
    }

    // This is responsible for state change
    public function applyOrderCreated(OrderCreated $event)
    {
        $this->items = count($event->items);
    }
}
```
---

```
class OrderProjector extends Projector
{
    public function onOrderCreated(OrderCreated $event)
    {
      (new Order)->writeable()->create([
        'id' => $event->$orderId,
        'user_id' => $event->$userId,
        'items' => $event->$items,
      ]);
    }
}

class OrderReactor extends Reactor
{
    public function onOrderCreated(OrderCreated $event)
    {
      Mail::send(
        new OrderConfirmation($event->$userId)
      );
    }
}
```
---

# 9. Challanges

### Challenge: Increased Complexity 😵‍💫

- Event Sourcing **adds complexity** compared to traditional CRUD.
- Developers must handle **event replaying, projections, and consistency**.

<br/>

### ✅ Solution: Use Frameworks & Best Practices  
- Leverage libraries like **Spatie Laravel Event Sourcing**.  
- Follow **DDD (Domain-Driven Design)** for clear structure.  
- Use **event versioning** to manage evolving event structures.

---

### Challenge: Large Event Store 📦

- Over time, events **pile up**, making retrieval **slow**.  
- Replaying **thousands of events** per aggregate can impact performance.  

<br/>

### ✅ Solution: Implement Snapshotting 📸  
- Store periodic **snapshots** of the aggregate state.  
- Replay **only the events after the last snapshot** instead of all events.
---

### Challenge: Schema Evolution 🏗️

- **Events are immutable**, making updates challenging.  
- What happens if we need a **new field in an event**?  

<br/>

### ✅ Solution: Event Versioning & Upcasters  
- Store a **version number** in events.  
- Create **upcasters** to transform old events into the new format.  
---

# 🙌 Thank You! 🚀  

### Let's Connect!  

🔗 [Improwised Technologies](https://www.linkedin.com/company/improwised-technologies/)  
🔗 [Devarshi Trivedi](https://www.linkedin.com/in/devarshi1/)  

💡 **Keep exploring Event Sourcing & building scalable systems!**  