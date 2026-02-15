# Instructor Guide: LinkedIn Clone - Authentication Implementation

## Project Overview
**Project:** api-11-linkedin-auth
**Learning Objectives:**
- Implement user authentication with JWT tokens
- Integrate React frontend with REST API backend
- Use React Router for protected routes
- Manage authentication state with localStorage

---

## Prerequisites
Students should already know:
- React basics (components, hooks, state)
- JavaScript ES6+ syntax
- Basic understanding of HTTP requests

---

## Backend API Information

**Base URL:** `http://localhost:3000`
**Documentation:** `http://localhost:3000/api-docs`

### Key Endpoints:
1. **POST /api/auth/login**
   - Request: `{ email, password }`
   - Response: `{ user, accessToken, refreshToken }`
   - Returns JWT tokens (accessToken expires in 15 min, refreshToken in 7 days)

2. **POST /api/auth/refresh-token**
   - Request: `{ refreshToken }`
   - Response: `{ accessToken, refreshToken }`

3. **GET /api/auth/me**
   - Requires: `Authorization: Bearer <token>` header
   - Response: User profile data

---

## Implementation Order & Teaching Points

### Step 1: Install React Router
**Command:** `npm install react-router-dom`

**Teaching Point:**
- React Router enables client-side routing without page refreshes
- Essential for SPAs (Single Page Applications)
- Allows protected routes that require authentication

---

### Step 2: Create Authentication Service
**File:** `src/services/authService.js`

**Key Concepts to Explain:**

#### 2.1 Login Function
\`\`\`javascript
export const login = async (email, password) => {
  const response = await fetch(\`\${API_URL}/api/auth/login\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error || 'Login failed')
  return data
}
\`\`\`

**Teaching Points:**
- Using fetch API for HTTP requests
- Async/await pattern for handling promises
- Error handling with response status codes
- API returns both user data and tokens

#### 2.2 Token Management
\`\`\`javascript
export const getAccessToken = () => localStorage.getItem('accessToken')
export const isAuthenticated = () => !!getAccessToken()
\`\`\`

**Teaching Points:**
- **localStorage** persists data across browser sessions
- **sessionStorage** would clear on browser close
- Double bang (!!) converts to boolean
- Tokens are stored client-side (discuss security implications)

#### 2.3 Logout Function
\`\`\`javascript
export const logout = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('user')
  sessionStorage.removeItem('sessionActive')
}
\`\`\`

**Teaching Points:**
- Clean up all stored data on logout
- Prevents data leakage between user sessions

---

### Step 3: Create Login Page Component
**File:** `src/pages/Login.jsx`

#### 3.1 Component Structure
**Teaching Points:**
- Form state management with useState
- Controlled inputs (value + onChange)
- Form submission handling (preventDefault)
- Loading states for better UX
- Error handling and display

#### 3.2 Login Flow
\`\`\`javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  setIsLoading(true)

  try {
    const response = await login(email, password)

    // Store tokens and user data
    localStorage.setItem('accessToken', response.accessToken)
    localStorage.setItem('refreshToken', response.refreshToken)
    localStorage.setItem('user', JSON.stringify(response.user))

    // Redirect to feed
    navigate('/feed')
  } catch (err) {
    setError(err.message || 'Invalid email or password')
  } finally {
    setIsLoading(false)
  }
}
\`\`\`

**Teaching Points:**
- **e.preventDefault()** stops form's default submit behavior
- **Try/catch** for error handling in async functions
- **Finally** block ensures loading state is reset
- **navigate()** from react-router-dom for programmatic navigation
- Store user data as stringified JSON (localStorage only stores strings)

#### 3.3 UI Features Implemented
1. **Show/Hide Password Toggle**
   - Better UX for password entry
   - Toggle between input type="password" and type="text"

2. **Keep Me Logged In Checkbox**
   - Currently visual only (could extend to use sessionStorage)
   - Good discussion point for session management

3. **LinkedIn-Style Design**
   - Professional appearance
   - Responsive layout
   - Proper use of Tailwind CSS classes

---

### Step 4: Create Protected Route Component
**File:** `src/components/ProtectedRoute.jsx`

\`\`\`javascript
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../services/authService'

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return children
}
\`\`\`

**Teaching Points:**
- **Higher-Order Component** pattern (wraps other components)
- **Conditional rendering** based on auth status
- **Navigate component** for redirects
- **replace prop** prevents back button from returning to protected route
- This prevents unauthorized access to protected pages

---

### Step 5: Create Feed Page
**File:** `src/pages/Feed.jsx`

**Teaching Points:**
- Simple wrapper around existing components
- Demonstrates component composition
- Original feed interface remains unchanged
- Separation of concerns (feed logic vs auth logic)

---

### Step 6: Set Up React Router in App.jsx
**File:** `src/App.jsx`

\`\`\`javascript
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated() ? <Navigate to="/feed" replace /> : <Login />}
        />
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/feed" replace /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  )
}
\`\`\`

**Teaching Points:**

#### 6.1 Router Setup
- **BrowserRouter** enables routing (uses HTML5 History API)
- **Routes** container for all route definitions
- **Route** defines path-to-component mapping

#### 6.2 Route Protection Strategy
1. **Login route:** Redirects to /feed if already authenticated
2. **Feed route:** Protected by ProtectedRoute wrapper
3. **Root route:** Smart redirect based on auth status

#### 6.3 Key Concepts
- **Conditional rendering** in route elements
- **Nested components** with ProtectedRoute
- **User flow:** Unauthenticated users can't access feed, authenticated users skip login

---

## Project File Structure

\`\`\`
src/
├── components/
│   ├── ProtectedRoute.jsx      [NEW] - Route protection wrapper
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LeftSidebar.jsx
│   ├── RightSidebar.jsx
│   ├── CenterContent.jsx
│   ├── Post.jsx
│   └── PostCreation.jsx
├── pages/
│   ├── Login.jsx               [NEW] - Login form page
│   └── Feed.jsx                [NEW] - Feed wrapper page
├── services/
│   └── authService.js          [NEW] - Authentication API calls
├── data/
│   └── posts.js
├── utils/
│   └── dateUtils.js
├── App.jsx                     [MODIFIED] - Added routing
├── main.jsx
└── index.css
\`\`\`

---

## Testing the Implementation

### Test User Credentials
- **Email:** test@example.com
- **Password:** password123

### Test Scenarios to Demonstrate:

1. **Unauthenticated Access**
   - Navigate to http://localhost:5173/
   - Should redirect to /login
   - Try accessing /feed directly → redirects to /login

2. **Login Flow**
   - Enter test credentials
   - Click "Sign in" or press Enter
   - Should redirect to /feed
   - Feed displays with all components

3. **Authenticated State**
   - Refresh the page while on /feed
   - Should remain logged in (token persists)
   - Try navigating to /login → redirects to /feed

4. **Token Storage (DevTools)**
   - Open Application tab in Chrome DevTools
   - Show localStorage entries:
     - accessToken
     - refreshToken
     - user (JSON object)

5. **Logout (Manual)**
   - Open Console in DevTools
   - Run: `localStorage.clear()`
   - Refresh page → redirects to /login

---

## Common Teaching Discussion Points

### 1. Security Considerations
**Q:** Is storing JWT in localStorage safe?
**A:**
- Vulnerable to XSS attacks
- Alternative: httpOnly cookies (backend must support)
- Trade-off: Convenience vs. security
- For learning purposes, localStorage is fine

### 2. Token Expiration
**Q:** What happens when accessToken expires?
**A:**
- Currently: User gets 401 errors
- Production solution: Use refreshToken to get new accessToken
- Could implement axios interceptor for automatic refresh
- Good extension exercise for students

### 3. Session Management
**Q:** What's the difference between "Keep me logged in" and not?
**A:**
- Currently: Both use localStorage (persist)
- Could implement: Use sessionStorage for non-persistent sessions
- Real apps: Adjust token expiration times
- Backend controls the actual expiration

### 4. Form Validation
**Q:** Should we validate before sending to backend?
**A:**
- Yes, for better UX (instant feedback)
- HTML5 validation (required, type="email") is basic
- Could add: Email format check, password strength
- Backend validation is still necessary (never trust client)

### 5. Error Messages
**Q:** Why show generic "Invalid email or password"?
**A:**
- Security: Don't reveal if email exists
- Prevents account enumeration attacks
- Production best practice

---

## Extension Ideas for Advanced Students

1. **Add Registration Page**
   - Use POST /api/auth/register endpoint
   - Form validation for password confirmation
   - Redirect to login after successful registration

2. **Implement Token Refresh**
   - Create axios interceptor
   - Automatically refresh expired tokens
   - Handle refresh token expiration

3. **Add "Remember Me" Logic**
   - Use sessionStorage for non-persistent sessions
   - Clear tokens on browser close if unchecked

4. **Loading Skeletons**
   - Replace spinner with skeleton screens
   - Better perceived performance

5. **Form Validation**
   - Email format validation
   - Password strength indicator
   - Real-time validation feedback

---

## Key Packages Used

### react-router-dom (v7.13.0)
- **Purpose:** Client-side routing
- **Key exports used:**
  - BrowserRouter: Router component wrapper
  - Routes: Container for route definitions
  - Route: Individual route definition
  - Navigate: Programmatic navigation component
  - useNavigate: Hook for navigation

**Why this package:**
- Industry standard for React routing
- Excellent documentation
- Declarative routing API
- Supports nested routes, lazy loading, etc.

---

## Styling Approach

### Tailwind CSS
- **Utility-first** CSS framework
- **Custom theme** defined in index.css
- **LinkedIn colors** from CSS variables
- **Responsive** design with breakpoints

### Key Custom Classes
- `card`: White background with border
- `btn-primary`: Primary button styling
- `nav-item`: Navigation item styling
- Custom color palette matching LinkedIn brand

---

## Common Pitfalls to Warn Students About

1. **Forgetting await**
   - Login function won't work without await
   - Data will be undefined

2. **Not handling errors**
   - Try/catch is essential for async operations
   - Always provide user feedback

3. **String vs Object in localStorage**
   - Must JSON.stringify() objects
   - Must JSON.parse() when retrieving

4. **Infinite loops with useNavigate**
   - Don't navigate inside render
   - Only navigate in event handlers or effects

5. **Protected routes without wrapper**
   - All protected routes need ProtectedRoute
   - Easy to forget when adding new routes

---

## Summary

This project teaches:
- ✅ REST API integration with authentication
- ✅ JWT token-based authentication flow
- ✅ React Router setup and protected routes
- ✅ Client-side state management with localStorage
- ✅ Form handling and validation
- ✅ Error handling and user feedback
- ✅ Component composition and separation of concerns

**Next Steps:** The api-11-linkedin-posts project builds on this by adding:
- Fetching data from backend
- Creating posts via API
- Using axios instead of fetch
- Managing data state with React hooks
