'use client'

import { Product } from "@/types"
import Image from "next/image"
import IconButton from "./icon-button"

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images dan action */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                alt="product image"
                src={data.images?.[0]?.url}
                fill
                className="aspect-square rounded-md object-cover"
                />
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                        icon={<Expand />} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard