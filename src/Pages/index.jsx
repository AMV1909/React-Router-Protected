export const Landing = () => <h2>Landing Page (Public)</h2>;

export const Home = () => <h2>Home Page (Private)</h2>;

export const Dashboard = () => <h2>Dashboard Page (Private)</h2>;

export const Analytics = () => (
    // eslint-disable-next-line react/no-unescaped-entities
    <h2>Analytics Page (Private, permission: "Analize")</h2>
);

export const Admin = () => (
    // eslint-disable-next-line react/no-unescaped-entities
    <h2>Admin Page (Private, permission: "Admin")</h2>
);
