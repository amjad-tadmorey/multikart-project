import ProductMainDetails from "@/ui/ProductMainDetails";
import RelatedProducts from "@/ui/RelatedProducts";
import TabbedContent from "@/ui/TabbedContent";

export const dynamic = "force-dynamic"


const product = {
    title: "Gym Coords Set",
    mainImage: "/data-product-1-1.jpg",
    imgs: [
        "/data-product-1-2.jpg",
        "/data-product-1-3.jpg",
        "/data-product-1-4.jpg",
    ],
    reviews: 20,
    price: 15.00,
}

// 2. Define the types for your route parameters
interface PageProps {
    params: Promise<{ id: string }>;
}

// Next.js App Router dynamic page components receive a params Promise
export default async function ProductDetailPage({ params }: PageProps) {

    const resolvedParams = await params;
    const id = resolvedParams.id;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-lighter py-8">
                <h1 className="text-3xl text-center font-md">Gym Coords Set</h1>
                <p className="text-center text-gray font-semibold mt-2">Home / Product / Gym Coords Set</p>
            </div>
            <div className="px-2 md:px-20 space-y-6 mt-12">
                <ProductMainDetails product={product} />
                <TabbedContent />
                <RelatedProducts />
            </div>

        </div>
    );
}
