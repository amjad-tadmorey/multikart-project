import { useProductLoading } from '@/context/ProductLoadingContext'
import SpecificationsSkeleton from '@/components/skeleton/SpecificationsSkeleton'

const Specifications = () => {
    const { isLoading } = useProductLoading()

    if (isLoading) {
        return (
            <SpecificationsSkeleton />
        )
    }

    return (
        <div>
            <p className="mb-4 text-neutral-600">
                The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text written on it in a black cursive language which looks great on a white color.
            </p>
            <h1 className="text-black font-medium text-lg mb-2">Fabric:</h1>
            <p className="mb-4 text-neutral-600">
                Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.
            </p>
            <h1 className="text-black font-medium text-lg mb-2">Size & Fit:</h1>
            <p className="mb-4 text-neutral-600">The model (height 5'8") is wearing a size S</p>
            <h1 className="text-black font-medium text-lg mb-2">Material & Care:</h1>
            <p className="text-neutral-600 leading-relaxed">
                Top fabric: pure cotton <br />
                Bottom fabric: pure cotton <br />
                Hand-wash <br />
            </p>
        </div>
    )
}

export default Specifications
