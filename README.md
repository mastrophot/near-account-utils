# near-account-utils

Utilities for NEAR account management - validation, formatting, and common operations.

## Features

- **Validation:** Strict account ID validation according to NEAR protocol rules.
- **Classification:** Detect standard vs implicit accounts.
- **Formatting:** Tooling for display-ready account IDs (truncation, etc.).
- **Access Keys:** Helpers for managing access key permissions.
- **Batching:** Tools to construct batch transaction structures.
- **Zero Dependencies:** Ultra-lightweight and secure.

## Installation

```bash
npm install near-account-utils
```

## Usage

### Validation

```typescript
import { isValidAccountId, isImplicitAccountId } from "near-account-utils";

isValidAccountId("bob.near"); // true
isValidAccountId("invalid_ID!"); // false
isImplicitAccountId("8f7c..."); // true if 64-char hex
```

### Access Keys

```typescript
import { createFunctionCallPermission } from "near-account-utils";

const perm = createFunctionCallPermission("app.near", ["method1"], "100000000");
```

## License

MIT
