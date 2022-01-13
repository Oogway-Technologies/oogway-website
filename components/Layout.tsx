interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <main className="h-full">{children}</main>
        </>
    )
}

export default Layout
