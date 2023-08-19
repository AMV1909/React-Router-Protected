import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import { Admin, Analytics, Dashboard, Home, Landing } from "./Pages/index";
import { ProtectedRoute } from "./Auth/ProtectedRoute";

import "./App.css";

export function App() {
    const [user, setUser] = useState(null);

    const login = () => setUser({ id: 1, name: "Axel", permission: "Analize" });

    const logout = () => setUser(null);

    return (
        <Router>
            <Navigation />

            {user ? (
                <div style={{ display: "flex", gap: "10px" }}>
                    <button onClick={logout}>Logout</button>
                    <button>Change To "Analize"</button>
                    <button>Change To "Admin"</button>
                </div>
            ) : (
                <button onClick={login}>Login</button>
            )}

            <Routes>
                <Route path="/" element={<Landing />} />

                <Route element={<ProtectedRoute isAllowed={!!user} />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>

                <Route
                    path="/analytics"
                    element={
                        <ProtectedRoute
                            isAllowed={!!user && user.permission === "Analize"}
                            redirecTo="/home"
                        >
                            <Analytics />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute
                            isAllowed={!!user && user.permission === "Admin"}
                            redirecTo="/home"
                        >
                            <Admin />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
        </Router>
    );
}

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Landing</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/analytics">Analytics</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    </nav>
);
