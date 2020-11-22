export default function Layout({ children, home }) {
    return (
        <div>
            <h1>Shorty</h1>
            <main>
                {children}
            </main>
        </div>
    )
}