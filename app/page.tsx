import getBanners from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({isFeatured: true});
    const banner = await getBanners("f6d0ec55-6768-48fa-b8f8-907e8d19af04");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner}  />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Produk Unggulan" items={products} />
            </div>
        </Container>
    )
}

export default HomePage