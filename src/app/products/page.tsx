import Link from 'next/link';

export default function ProductsRootPage() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Products Directory</h1>
            <p>Click below to test a dynamic route:</p>
            <Link href="/products/1" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go to Product #1
            </Link>
        </div>
    );
}
