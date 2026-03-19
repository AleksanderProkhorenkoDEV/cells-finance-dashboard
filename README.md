# Finance Dashboard – Open Cells App

SPA application developed with **Open Cells**, oriented toward a modular architecture based on Web Components.

The application allows:

-  Create income and expenses  
-  List financial transactions  
-  Validate forms  
-  Delete all transactions  
-  Persist data in `localStorage`  
-  Decoupled communication through channels (pub/sub)

---

# Tech Stack

- **Open Cells**
- **Lit**
- **TypeScript**
- **Web Components**
- **LocalStorage**
- **Modular CSS**

---

# Architecture

The application follows an architecture based on:

## Cells (decoupled components)
Each section is an independent cell:

- `movements-page`
- `action-form`
- `item-card`
- `wc-card`
- `wc-button`
- etc.

Each component:

- Has its own encapsulated styles
- Does not directly depend on other components
- Communicates through events or channels

---

# Component Communication

The application uses the **Open Cells channel system** through `ElementController`.

Example:

```ts
this.elementController.publish('new-transaction', transaction);
```

And other components subscribe:

```ts
this.elementController.subscribe('transactions-list-updated', callback);
```

## Advantages of this approach

- Complete decoupling
- No direct dependencies between components
- Scalable architecture
- Easy maintenance

---

# State Management

No global store is used.

The flow is:

1. `action-form` creates a transaction
2. It publishes an event on the channel
3. The service updates `localStorage`
4. The `transactions-list-updated` event is published
5. `movements-page` updates automatically

Event-driven architecture.

---

# Concepts Applied

-  Event-driven architecture (Pub/Sub)
-  Encapsulation with Shadow DOM
-  Lit reactivity (`@state`, `@property`)
-  Strict TypeScript typing
-  Clear separation between UI and logic
-  Decoupled services
-  Modular SPA

---

# How to Run

```bash
pnpm install
pnpm start
```

Or according to your Open Cells project configuration.

---

# Project Goal

The goal of this project is:

- Practice architecture based on Open Cells
- Understand the use of channels and decoupled communication
- Implement a realistic modular SPA
- Work with TypeScript in a Web Components environment
- Simulate a real financial application

---

# Current Status

 Partial CRUD (create + list + delete all)  
 Persistence with localStorage  
 Validations  
 Responsive design  
 Decoupled communication  

---

# Possible Future Improvements

- Edit transactions
- Category filters
- Metrics dashboard
- Charts
- Backend persistence
- Unit tests

---

# License

Educational / technical demonstration project.
